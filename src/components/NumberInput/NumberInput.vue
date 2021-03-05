<template>
  <div :class="`${carbonPrefix}--form-item`">
    <label :class="`${carbonPrefix}--label ${carbonPrefix}--skeleton`" v-if="skeleton" />
    <div :class="`${carbonPrefix}--number ${carbonPrefix}--skeleton`" v-if="skeleton" />
    <div
      data-numberinput
      :class="[
        `${carbonPrefix}--number`,
        {
          [`${carbonPrefix}--number--light`]: theme === 'light',
          [`${carbonPrefix}--number--helpertext`]: isHelper,
          [`${carbonPrefix}--number--mobile`]: mobile,
        },
      ]"
      :data-invalid="isInvalid"
      v-if="!skeleton"
    >
      <label :for="uid" :class="`${carbonPrefix}--label`">{{ label }}</label>
      <div :class="`${carbonPrefix}--form__helper-text`" v-if="isHelper && mobile">
        <slot name="helper-text">{{ helperText }}</slot>
      </div>
      <div :class="`${carbonPrefix}--number__input-wrapper`">
        <button
          v-if="mobile"
          :class="`${carbonPrefix}--number__control-btn down-icon`"
          @click="doDown"
          type="button"
          :aria-label="ariaLabelForDownButton"
          :disabled="disabled"
        >
          <Icon icon="CaretDown" size="Glyph" />
        </button>
        <input
          :id="uid"
          type="number"
          :value="internalValue"
          v-bind="$attrs"
          v-on="inputListeners"
          :disabled="disabled"
          :step="step"
          :min="min"
          :max="max"
          ref="input"
        />
        <Icon icon="WarningFilled" v-if="isInvalid && !mobile" :class="`${carbonPrefix}--number__invalid`" />
        <div :class="`${carbonPrefix}--number__controls`" v-if="!mobile">
          <button
            :class="`${carbonPrefix}--number__control-btn up-icon`"
            @click="doUp"
            type="button"
            :aria-label="ariaLabelForUpButton"
            :disabled="disabled"
          >
            <Icon icon="CaretUp" size="Glyph" />
          </button>
          <button
            :class="`${carbonPrefix}--number__control-btn down-icon`"
            @click="doDown"
            type="button"
            :aria-label="ariaLabelForDownButton"
            :disabled="disabled"
          >
            <Icon icon="CaretDown" size="Glyph" />
          </button>
        </div>
        <button
          v-else
          :class="`${carbonPrefix}--number__control-btn up-icon`"
          @click="doUp"
          type="button"
          :aria-label="ariaLabelForUpButton"
          :disabled="disabled"
        >
          <Icon icon="CaretUp" size="Glyph" />
        </button>
      </div>
      <div :class="`${carbonPrefix}--form-requirement`" v-if="isInvalid">
        <slot name="invalid-message">{{ invalidMessage }}</slot>
      </div>
      <div :class="`${carbonPrefix}--form__helper-text`" v-if="!isInvalid && isHelper && !mobile">
        <slot name="helper-text">{{ helperText }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
import { CarbonPrefix, Uid, Methods, Theme } from '../../mixins'

const name = 'NumberInput'
export default {
  name,
  mixins: [Uid, Theme, CarbonPrefix, Methods({ input: ['blur', 'focus'] })],
  inheritAttrs: false,
  props: {
    disabled: Boolean,
    formItem: { type: Boolean, default: true },
    helperText: { type: String, default: undefined },
    invalidMessage: { type: String, default: undefined },
    label: { type: String, default: '' },
    value: { type: [String, Number], default: '' },
    invalid: /* deprecate */ {
      type: Boolean,
      default: undefined,
      validator(val) {
        if (val !== undefined && process.env.NODE_ENV === 'development') {
          console.warn('NumberInput: invalid prop deprecated in favour of invalidMessage');
        }
        return true;
      },
    },
    ariaLabelForUpButton: { type: String, default: 'Increase number input' },
    ariaLabelForDownButton: { type: String, default: 'Decrease number input' },
    min: { type: [String, Number], default: undefined },
    max: { type: [String, Number], default: undefined },
    step: { type: [String, Number], default: undefined },
    mobile: Boolean,
    skeleton: Boolean
  },
  data() {
    return {
      internalValue: 0,
      isHelper: false,
      isInvalid: false,
    };
  },
  mounted() {
    this.internalValue = this.valueAsString(this.value);
    this.checkSlots();
  },
  updated() {
    this.checkSlots();
  },
  watch: {
    value() {
      // NOTE: DELIBERATE USE OF != TO COMPARE this.interanlValue and this.value
      if (typeof this.value !== 'number' || this.internalValue != this.value) {
        // prevents this.value of 1 updating this.internalValue of 1.0
        // which improves the typing experience
        // does not matter if this.value is string or number
        this.internalValue = this.valueAsString(this.value);
      }
    },
  },
  computed: {
    // Bind listeners at the component level to the embedded input element and
    // add our own input listener to service the v-model. See:
    // https://vuejs.org/v2/guide/components-custom-events.html#Customizing-Component-v-model
    inputListeners() {
      return Object.assign({}, this.$listeners, {
        input: ev => this.onInput(ev.target.value),
      });
    },
  },
  methods: {
    onInput(val) {
      this.internalValue = val;
      this.emitValue();
    },
    checkSlots() {
      // NOTE: this.$slots is not reactive so needs to be managed on updated
      this.isInvalid = !!(this.$slots['invalid-message'] || (this.invalidMessage && this.invalidMessage.length));
      this.isHelper = !!(this.$slots['helper-text'] || (this.helperText && this.helperText.length));
    },
    doUp() {
      this.$refs.input.stepUp();
      this.onInput(this.$refs.input.value);
    },
    doDown() {
      this.$refs.input.stepDown();
      this.onInput(this.$refs.input.value);
    },
    emitValue() {
      if (typeof this.value === 'number') {
        if (this.internalValue != this.value) {
          const ePos = this.internalValue.indexOf('e-');
          const dotPos = this.internalValue.indexOf('.');
          if (ePos > -1 || dotPos > -1) {
            this.$emit('input', parseFloat(this.internalValue));
          } else {
            this.$emit('input', parseInt(this.internalValue));
          }
        }
      } else {
        this.$emit('input', this.internalValue);
      }
    },
    valueAsString(val) {
      let strVal;
      if (typeof val === 'number') {
        strVal = Number.isFinite(val) ? val.toString() : '';
      } else {
        strVal = val;
      }
      return strVal;
    },
  },
};
</script>
