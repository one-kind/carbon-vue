<template>
  <div :class="classes">
    <input
      ref="input"
      v-bind="$attrs"
      v-on="inputListeners"
      :class="`${carbonPrefix}--checkbox`"
      type="checkbox"
      :checked="isChecked === true"
      :aria-checked="`${isChecked}`"
      @focus="onFocus"
      @blur="onBlur"
      :value="value"
      :id="uid"
      v-if="!skeleton"
    />
    <label
      :class="labelClasses"
      :data-contained-checkbox-state="isChecked"
      :data-contained-checkbox-disabled="$attrs.disabled"
      :for="uid"
    >
      <span :class="spanClasses">
        {{ label }}
      </span>
    </label>
  </div>
</template>

<script>
import { CarbonPrefix, Uid, Check, Methods } from '../../mixins'

const name = 'Checkbox'

export default {
  name,
  mixins: [
    Check,
    Uid,
    CarbonPrefix,
    Methods({ input: ['blur', 'focus'] })
  ],
  inheritAttrs: false,
  props: {
    value: String,
    hideLabel: Boolean,
    label: String,
    mixed: Boolean,
    formItem: { type: Boolean, default: true },
    skeleton: { type: Boolean, default: false },
  },
  watch: {
    mixed() {
      this.dataMixed = this.mixed;
      if (this.dataMixed && this.checked !== true) {
        this.isChecked = false; // reset check state so mixed takes
      }
    },
  },
  data() {
    return {
      hasFocus: false,
      dataMixed: this.mixed,
    };
  },
  computed: {
    classes () {
      return [
        `${this.carbonPrefix}--checkbox-wrapper`,
        {
          [`${this.carbonPrefix}--form-item`]: this.formItem || this.skeleton
        }
      ]
    },
    labelClasses () {
      return {
        [`${this.carbonPrefix}--checkbox-label`]: true,
        [`${this.carbonPrefix}--label--disabled`]: this.disabled !== undefined && this.disabled,
        [`${this.carbonPrefix}--checkbox-label__focus`]: this.hasFocus,
        [`${this.carbonPrefix}--skeleton`]: this.skeleton,
      }
    },
    spanClasses () {
      return {
        [`${this.carbonPrefix}--checkbox-label-text`]: true,
        [`${this.carbonPrefix}--visually-hidden`]: this.hideLabel,
        [`${this.carbonPrefix}--skeleton`]: this.skeleton,
      }
    }
  },
  methods: {
    onFocus() {
      this.hasFocus = true;
    },
    onBlur() {
      this.hasFocus = false;
    },
  },
};
</script>
