<template>
  <div
    data-modal
    :id="uid"
    :class="[
      `${carbonPrefix}--modal`,
      {
        'is-visible': dataVisible,
        [`${carbonPrefix}--modal--danger`]: kind === 'danger',
      },
    ]"
    tabindex="-1"
    @keydown.esc.prevent="onEsc"
    @click.self="onExternalClick"
  >
    <div
      :class="[
        `${carbonPrefix}--modal-container`,
        { [`${carbonPrefix}--modal-container--${internalSize}`]: internalSize },
      ]"
      ref="modalDialog"
    >
      <div
        class="modal__before-content"
        ref="beforeContent"
        tabindex="0"
        style="position: absolute; height: 1px; width: 1px; left: -9999px;"
        @focus="focusBeforeContent"
      />
      <div :class="`${carbonPrefix}--modal-header`">
        <p :class="`${carbonPrefix}--modal-header__label`">
          <slot name="label" />
        </p>
        <p :class="`${carbonPrefix}--modal-header__heading`">
          <slot name="title" />
        </p>
        <button
          :class="`${carbonPrefix}--modal-close`"
          type="button"
          @click="onClose"
          ref="close"
          :aria-label="closeAriaLabel"
        >
          <Icon icon="Close" :class="`${carbonPrefix}--modal-close__icon`" />
        </button>
      </div>

      <div
        :class="[`${carbonPrefix}--modal-content`, { [`${carbonPrefix}--modal-content--with-form`]: hasFormContent }]"
        ref="content"
        :tabindex="scrollable ? 0 : undefined"
      >
        <Form v-if="inputElements !== []">
          <component
            v-for="(inputElement, index) in inputElements"
            :key="inputElement.name"
            :is="resolveInputElementType(inputElement.type)"
            :ref="`input-${0}`"
            :autofocus="index === 0"
            :name="inputElement.name"
            :label="inputElement.label"
            v-bind="inputData[inputElement.name]"
          />
        </Form>
        <slot name="content">

        </slot>
      </div>

      <div :class="`${carbonPrefix}--modal-footer`" v-if="hasFooter">
        <Button type="button" :kind="secondaryKind" @click="onSecondaryClick" v-if="hasSecondary" ref="secondary">
          <slot name="secondary-button" />
        </Button>
        <Button
          :disabled="primaryButtonDisabled"
          type="button"
          :kind="primaryKind"
          @click="onPrimaryClick"
          v-if="hasPrimary"
          ref="primary"
        >
          <slot name="primary-button" />
        </Button>
      </div>
      <div
        class="modal__after-content"
        ref="afterContent"
        tabindex="0"
        style="position: absolute; height: 1px; width: 1px; left: -9999px;"
        @focus="focusAfterContent"
      />
    </div>
  </div>
</template>

<script>
import { CarbonPrefix, Uid } from '../../mixins'

const name = 'Modal'
export default {
  name,
  mixins: [Uid, CarbonPrefix],
  props: {
    closeAriaLabel: { type: String, default: 'Close modal' },
    kind: {
      type: String,
      default: '',
      validator: val => ['', 'danger'].includes(val),
    },
    autoHideOff: Boolean,
    visible: Boolean,
    primaryButtonDisabled: Boolean,
    size: String,
    hasFormContent: Boolean,
    inputElements: Array
  },
  data() {
    return {
      dataVisible: false,
      scrollable: false,
      hasFooter: false,
      hasHeaderLabel: false,
      hasPrimary: false,
      hasSecondary: false,
      inputData: {}
    };
  },
  mounted() {
    if (this.visible) {
      this.show();
    }
    this.checkSlots();
  },
  updated() {
    this.checkSlots();
  },
  watch: {
    visible(val) {
      if (val) {
        this.show();
      } else {
        this.hide();
      }
    },
  },
  computed: {
    primaryKind() {
      if (this.kind === 'danger') {
        return 'danger';
      } else {
        return 'primary';
      }
    },
    secondaryKind() {
      return 'secondary';
    },
    internalSize() {
      switch (this.size) {
        case 'xs':
          return 'xs';
        case 'small':
          return 'sm';
        case 'large':
          return 'lg';
        default:
          return '';
      }
    },
  },
  model: {
    event: 'modelEvent',
    prop: 'visible',
  },
  methods: {
    resolveInputElementType (type) {
      const source = {
        text: 'TextInput',
        boolean: 'Checkbox'
      }
      return source[type]
    },
    checkSlots() {
      // NOTE: this.$slots is not reactive so needs to be managed on updated
      this.hasFooter = !!(this.$slots['primary-button'] || this.$slots['secondary-button']);
      this.hasHeaderLabel = !!this.$slots.label;
      this.hasSecondary = !!this.$slots['secondary-button'];
      this.hasPrimary = !!this.$slots['primary-button'];
    },
    focusBeforeContent() {
      if (this.$slots['primary-button']) {
        this.$refs.primary.$el.focus();
      } else if (this.$slots['secondary-button']) {
        this.$refs.secondary.$el.focus();
      } else {
        this.$refs.close.focus();
      }
    },
    focusAfterContent() {
      this.$refs.close.focus();
    },
    onShown() {
      const focusEl = this.$refs.content.querySelector('[data-modal-primary-focus]');
      if (focusEl) {
        focusEl.focus();
      } else if (this.$slots['primary-button']) {
        this.$refs.primary.$el.focus();
      } else if (this.$slots['secondary-button']) {
        this.$refs.secondary.$el.focus();
      } else {
        this.$refs.close.focus();
      }
      this.$emit('modal-shown');
      // check to see if content scrollable
      this.scrollable = this.$refs.content.scrollHeight > this.$refs.content.clientHeight;
      this.$el.removeEventListener('transitionend', this.onShown);
    },
    onExternalClick(ev) {
      if (ev.target === this.$el) {
        this._maybeHide(ev, 'external-click');
      }
    },
    onEsc(ev) {
      this._maybeHide(ev, 'escape-press');
    },
    onClose(ev) {
      this._maybeHide(ev, 'close-click');
    },
    show() {
      // prevent body scrolling
      document.body.classList.add(`${this.carbonPrefix}--body--with-modal-open`);
      document.body.insertAdjacentElement('afterbegin', this.$el);
      this.$el.addEventListener('transitionend', this.onShown);
      this.$el.focus();
      this.dataVisible = true;
    },
    _maybeHide(event, reason) {
      if (!this.autoHideOff) {
        this.hide();
      } else {
        event['reason'] = reason;
        this.$emit('modal-hide-request', event, {data: this.inputData});
      }
    },
    hide() {
      //restore any previous scrollability
      document.body.classList.remove(`${this.carbonPrefix}--body--with-modal-open`);
      this.dataVisible = false;
      this.$emit('modal-hidden', event, {data: this.inputData});
    },
    onPrimaryClick(ev) {
      if (!this.$listeners['primary-click']) {
        this._maybeHide(ev, 'primary-click');
      } else {
        this.$emit('primary-click', {data: this.inputData});
      }
    },
    onSecondaryClick(ev) {
      if (!this.$listeners['secondary-click']) {
        this._maybeHide(ev, 'secondary-click');
      } else {
        this.$emit('secondary-click');
      }
    },
  },
};
</script>
