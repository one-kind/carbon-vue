<template>
  <div :class="classes" :id="uid" disabled="skeleton">
    <div
      :class="[
        `${carbonPrefix}--dropdown__wrapper`,
        { [`${carbonPrefix}--dropdown__wrapper--inline`]: inline },
      ]"
      :style="wrapperStyleOverride"
      v-if="!skeleton"
    >
      <span
        v-if="label"
        :id="`${uid}-label`"
        :class="[`${carbonPrefix}--label`, { [`${carbonPrefix}--label--disabled`]: disabled }]"
        >{{ label }}</span
      >

      <div
        data-dropdown
        :data-value="internalValue"
        :data-invalid="isInvalid"
        :class="[
          `${carbonPrefix}--dropdown ${carbonPrefix}--list-box`,
          {
            // [`${carbonPrefix}--dropdown--light`]: theme === 'light',
            [`${carbonPrefix}--dropdown--up`]: up,
            [`${carbonPrefix}--dropdown--open`]: open,
            [`${carbonPrefix}--dropdown--invalid`]: isInvalid,
            [`${carbonPrefix}--dropdown--disabled`]: disabled,
            [`${carbonPrefix}--dropdown--inline`]: inline,
            [`${carbonPrefix}--dropdown--show-selected`]: !hideSelected,
          },
        ]"
        v-bind="$attrs"
        @keydown.down.prevent="onDown"
        @keydown.up.prevent="onUp"
        @keydown.enter.prevent="onClick"
        @keydown.esc.prevent="onEsc"
        @keydown.tab="onTab"
        @click="onClick"
        v-Clickout="onClickout"
        ref="listbox"
      >
        <button
          :class="`${carbonPrefix}--list-box__field`"
          :aria-disabled="disabled"
          aria-haspopup="true"
          :aria-expanded="open ? 'true' : 'false'"
          :aria-controls="`${uid}-menu`"
          :aria-labelledby="ariaLabeledBy"
          :disabled="disabled"
          type="button"
          ref="button"
        >
          <Icon icon="WarningFilled" v-if="isInvalid" :class="`${carbonPrefix}--list-box__invalid-icon`" />
          <span
            :class="`${carbonPrefix}--list-box__label`"
            :id="`${uid}-value`"
            data-test="internalCaption"
            v-html="internalCaption"
          />
          <div
            :class="[`${carbonPrefix}--list-box__menu-icon`, { [`${carbonPrefix}--list-box__menu-icon--open`]: open }]"
            role="button"
          >
            <Icon icon="ChevronDown" :aria-label="open ? 'Close menu' : 'Open menu'" />
          </div>
        </button>
        <ul
          :class="`${carbonPrefix}--list-box__menu`"
          :id="`${uid}-menu`"
          role="menu"
          :aria-hidden="!open ? 'true' : 'false'"
          :aria-labelledby="`${uid}-label`"
          ref="droplist"
          tabindex="-1"
        >
          <slot>
            <DropdownItem v-for="item in items" v-bind:key="item" :value="item">{{ item }}</DropdownItem>
          </slot>
        </ul>
      </div>
      <div v-if="isInvalid && inline" :class="`${carbonPrefix}--form-requirement`">
        <slot name="invalid-message">{{ invalidMessage }}</slot>
      </div>
    </div>
    <div v-if="isInvalid && !inline && !skeleton" :class="`${carbonPrefix}--form-requirement`">
      <slot name="invalid-message">{{ invalidMessage }}</slot>
    </div>
    <div
      v-if="!inline && !isInvalid && isHelper && !skeleton"
      :class="[`${carbonPrefix}--form__helper-text`, { [`${carbonPrefix}--form__helper-text--disabled`]: disabled }]"
      :aria-disabled="disabled"
    >
      <slot name="helper-text">{{ helperText }}</slot>
    </div>
  </div>
</template>

<script>
import { CarbonPrefix, Uid, Methods, Theme } from '../../mixins'

const name = "Dropdown"
import { Clickout } from '../../directives';
export default {
  name,
  inheritAttrs: false,
  directives: { Clickout },
  mixins: [Uid, CarbonPrefix, Methods({ button: ['blur', 'focus'] }), Theme],
  props: {
    disabled: Boolean,
    formItem: { type: Boolean, default: true },
    inline: Boolean,
    invalidMessage: { type: String, default: undefined },
    helperText: { type: String, default: undefined },
    label: String,
    items: {
      type: Array,
      validator(arr) {
        if (!Array.isArray(arr)) {
          console.warn('Dropdown - items must be in array');
        }
        return arr;
      },
    },
    placeholder: {
      type: String,
      default: 'Choose an option',
    },
    up: Boolean,
    value: String, // initial value of the dropdown,
    hideSelected: Boolean,
    skeleton: Boolean
  },
  data() {
    return {
      open: false,
      dataValue: this.value,
      isHelper: false,
      isInvalid: false,
      selectedChild: null,
    };
  },
  created() {
    // add these on created otherwise mounted is too late.
    this.$on('mounted', srcComponent => this.onMount(srcComponent));
    this.$on('beforeDestroy', srcComponent => this.onBeforeDestroy(srcComponent));
  },
  mounted() {
    this.updateChildren(this.internalValue);
    this.checkSlots();
  },
  beforeUpdate() {
    document.body.removeEventListener('click', this.checkSlots);
    this.checkSlots();
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  watch: {
    value(val) {
      this.internalValue = val;
    },
  },
  computed: {
    classes () {
      const {carbonPrefix, formItem, skeleton, theme} = this
      return {
        [`${carbonPrefix}--form-item`]: formItem && !skeleton,
        [`${carbonPrefix}--list-box`]: skeleton,
        [`${carbonPrefix}--dropdown`]: skeleton,
        [`${carbonPrefix}--skeleton`]: skeleton,
        [`carbon-theme--${theme}`]: theme
      }
    },
    ariaLabeledBy() {
      if (this.label) {
        return `${this.uid}-label ${this.uid}-value`;
      } else {
        return `${this.uid}-value`;
      }
    },
    internalCaption() {
      if (this.selectedChild) {
        return this.selectedChild.internalContent;
      } else {
        return this.placeholder;
      }
    },
    internalValue: {
      get() {
        return this.dataValue;
      },
      set(val) {
        this.updateChildren(val);
        if (this.dataValue !== val) {
          // only raise event on change
          this.dataValue = val;
          this.$emit('change', this.dataValue);
        }
      },
    },
    chevronStyleOveride() {
      // This allows the same chevron to be used in dropdown and tabs
      return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '16px',
        width: '16px',
      };
    },
    wrapperStyleOverride() {
      // ensures correct width when used inside tabs component
      return { width: '100%' };
    },
  },
  methods: {
    onClickout() {
      this.open = false;
    },
    updateChildren(val) {
      const childItems = this.dropdownItems();
      let foundSelection = false;
      for (let index in childItems) {
        let child = childItems[index];
        let selected = child.value === val;
        child.internalSelected = selected;
        if (selected) {
          foundSelection = true;
          this.selectedChild = child;
        }
      }
      if (!foundSelection) {
        this.selectedChild = null;
      }
    },
    checkSlots() {
      // NOTE: this.$slots is not reactive so needs to be managed on beforeUpdate
      this.isInvalid = !!(this.$slots['invalid-message'] || (this.invalidMessage && this.invalidMessage.length));
      this.isHelper = !!(this.$slots['helper-text'] || (this.helperText && this.helperText.length));
    },
    onMount(srcComponent) {
      if (srcComponent.internalSelected) {
        this.internalValue = srcComponent.value;
      } else {
        if (this.internalValue === srcComponent.value) {
          srcComponent.internalSelected = true;
          this.internalValue = srcComponent.value;
        }
      }
    },
    onBeforeDestroy(srcComponent) {
      if (srcComponent.value === this.internalValue) {
        this.dataValue = null;
      }
    },
    dropdownItems() {
      return this.$children.filter(item => item.$_DropdownItem);
    },
    doMove(up) {
      // requery could have changed
      let currentFocusEl = this.$el.querySelector('.DrowpdownItem :focus');
      let currentFocusValue;
      let childItems = this.dropdownItems();
      let last = childItems.length - 1;
      let currentFocusIndex = up ? 0 : last;
      let nextFocusIndex;
      if (currentFocusEl) {
        currentFocusValue = currentFocusEl.parentNode.getAttribute('data-value');
      }
      if (currentFocusValue !== undefined) {
        currentFocusIndex = childItems.findIndex(child => child.value === currentFocusValue);
      }
      if (up) {
        nextFocusIndex = currentFocusIndex > 0 ? currentFocusIndex - 1 : last;
        if (childItems[nextFocusIndex].internalSelected) {
          nextFocusIndex = nextFocusIndex > 0 ? nextFocusIndex - 1 : last;
        }
      } else {
        nextFocusIndex = currentFocusIndex < last ? currentFocusIndex + 1 : 0;
        if (childItems[nextFocusIndex].internalSelected) {
          nextFocusIndex = nextFocusIndex < last ? nextFocusIndex + 1 : 0;
        }
      }
      childItems[nextFocusIndex].setFocus();
    },
    doFocus() {
      this.$nextTick(() => {
        if (this.open) {
          this.$refs.droplist.focus();
        } else {
          this.focus();
        }
      });
    },
    onDown() {
      if (!this.open) {
        this.open = true;
      } else {
        this.doMove(false);
      }
    },
    onUp() {
      if (this.open) {
        this.doMove(true);
      }
    },
    onEsc() {
      this.open = false;
      this.doFocus();
    },
    onTab(ev) {
      if (this.open) {
        if (this.$refs.button.$el === ev.target) {
          // button has focus ensure we are closed
          this.open = false;
        } else if (ev.target === null || this.$refs.listbox.contains(ev.target)) {
          // list has focus, close and return focus to dropdown
          this.open = false;
          this.doFocus();
          ev.preventDefault();
        }
      }
    },
    onClick(ev) {
      if (this.disabled) {
        ev.preventDefault();
      } else {
        this.open = !this.open;
        this.doFocus(); // open or close (Some browsers do not focus on button when clicked)
        let target = ev.target;
        while (
          !target.classList.contains(`${this.carbonPrefix}--dropdown-link`) &&
          this.$refs.droplist.contains(target)
        ) {
          target = target.parentNode; // try next one up
        }
        if (target.classList.contains(`${this.carbonPrefix}--dropdown-link`)) {
          const targetItemEl = target.parentNode;
          const newValue = targetItemEl.getAttribute('data-value');
          this.internalValue = newValue;
        }
      }
    },
  },
};
</script>
