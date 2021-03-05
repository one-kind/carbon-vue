<template>
  <Wrapper :tag-type="formItem ? 'div' : ''" :class="`${carbonPrefix}--form-item`">
    <div
      :data-test="value"
      :class="[
        `${carbonPrefix}--select`,
        {
          [`${carbonPrefix}--select--inline`]: inline,
          [`${carbonPrefix}--select--invalid`]: isInvalid,
          [`${carbonPrefix}--select--disabled`]: $attrs.disabled,
        },
      ]"
    >
      <label
        :for="uid"
        :class="[
          `${carbonPrefix}--label`,
          {
            [`${carbonPrefix}--visually-hidden`]: hideLabel,
            [`${carbonPrefix}--label--disabled`]: $attrs.disabled,
          },
        ]"
        >{{ label }}</label
      >

      <Wrapper :tag-type="inline ? 'div' : ''" :class="`${carbonPrefix}--select-input--inline__wrapper`">
        <div :class="`${carbonPrefix}--select-input__wrapper`" :data-invalid="isInvalid">
          <select
            v-bind="$attrs"
            :id="uid"
            :class="`${carbonPrefix}--select-input`"
            v-on="inputListeners"
            ref="select"
            :value="internalValue"
          >
            <slot></slot>
          </select>
          <Icon icon="ChevronDown" size="Glyph" :class="`${carbonPrefix}--select__arrow`" />
          <Icon icon="WarningFilled" v-if="isInvalid" :class="`${carbonPrefix}--select__invalid-icon`" />
        </div>

        <div v-if="isInvalid" :class="`${carbonPrefix}--form-requirement`">
          <slot name="invalid-message">{{ invalidMessage }}</slot>
        </div>
        <div v-if="!isInvalid && !inline && isHelper" :class="`${carbonPrefix}--form__helper-text`">
          <slot name="helper-text">{{ helperText }}</slot>
        </div>

        <!-- Wrapper div ${carbonPrefix}--select-input--inline__wrapper -->
      </Wrapper>
    </div>
    <!-- Wrapper div ${carbonPrefix}--form-item -->
  </Wrapper>
</template>

<script>
import { CarbonPrefix, Uid, Methods } from '../../mixins'

const name = 'Select'
export default {
  name,
  inheritAttrs: false,
  mixins: [Uid, CarbonPrefix, Methods({ select: ['blur', 'focus'] })],
  props: {
    inline: Boolean,
    invalidMessage: { type: String, default: undefined },
    helperText: { type: String, default: undefined },
    formItem: { type: Boolean, default: true },
    hideLabel: Boolean,
    label: { type: String, required: true },
    // *********************
    // declare here to prevent the following from being added to the select
    // *********************
    // multiple does not work with styling from carbon-components 9.20
    multiple: {
      type: String,
      validator: () => {
        console.warn('property multiple not supported in CvSelect');
        return false;
      },
    },
    value: { type: String, default: undefined },
  },
  beforeCreate() {
    // *********************
    // delete here to prevent the following from being added to the select
    // *********************
    // multiple does not work with styling from carbon-components 9.20
    delete this.$attrs.multiple;
  },
  data() {
    return {
      dataValue: undefined,
      isHelper: false,
      isInvalid: false,
    };
  },
  mounted() {
    // this is needed to ensure selected for an option when no value is supplied
    if (this.value === undefined) {
      let options = this.$el.querySelectorAll('option');
      for (let i = 0; i < options.length; i++) {
        if (options[i].attributes.selected) {
          this.dataValue = options[i].value;
        }
      }
    }
    this.checkSlots();
  },
  beforeUpdate() {
    this.checkSlots();
  },
  watch: {
    value() {
      // this is needed to ensure selected for an option when no value is supplied
      if (this.value === undefined) {
        let options = this.$el.querySelectorAll('option');
        for (let i = 0; i < options.length; i++) {
          if (options[i].attributes.selected) {
            this.dataValue = options[i].value;
          }
        }
      }
    },
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  computed: {
    // Bind listeners at the component level to the embedded input element and
    // add our own input listener to service the v-model. See:
    // https://vuejs.org/v2/guide/components-custom-events.html#Customizing-Component-v-model
    inputListeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value),
        change: event => this.$emit('change', event.target.value), // use change event for ie11 compatibility
      };
    },
    internalValue() {
      return this.dataValue ? this.dataValue : this.value;
    },
  },
  methods: {
    checkSlots() {
      // NOTE: this.$slots is not reactive so needs to be managed on beforeUpdate
      this.isInvalid = !!(this.$slots['invalid-message'] || (this.invalidMessage && this.invalidMessage.length));
      this.isHelper = !!(this.$slots['helper-text'] || (this.helperText && this.helperText.length));
    },
  },
};
</script>
