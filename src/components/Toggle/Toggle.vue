<template>
  <div :class="{ [`${carbonPrefix}--form-item`]: formItem }" :id="skeleton && uid">
    <input
      v-bind="$attrs"
      v-on="inputListeners"
      :class="[`${carbonPrefix}--toggle-input`, { 'bx--toggle-input--small': small }]"
      type="checkbox"
      :id="uid"
      :checked="isChecked === true"
      :aria-checked="`${isChecked}`"
      :value="value"
      ref="input"
      v-if="!skeleton"
    />
    <label
      :class="labelClasses"
      :aria-label="skeleton ? (label ? 'Toggle is loading' : label ) : hiddenLabel"
      :for="uid">
      {{ !skeleton ? visibleLabel : '' }}
      <span :class="`${carbonPrefix}--toggle__switch`" v-if="!skeleton">
        <svg :class="`${carbonPrefix}--toggle__check`" width="6px" height="5px" viewBox="0 0 6 5">
          <path d="M2.2 2.7L5 0 6 1 2.2 5 0 2.7 1 1.5z" />
        </svg>
        <span :class="`${carbonPrefix}--toggle__text--off`" aria-hidden="true">
          <slot name="text-left">Off</slot>
        </span>
        <span :class="`${carbonPrefix}--toggle__text--on`" aria-hidden="true">
          <slot name="text-right">On</slot>
        </span>
      </span>
      <span :class="`${carbonPrefix}--toggle__label-text`" v-if="skeleton" />
      <span :class="`${carbonPrefix}--toggle__text--left`" v-if="skeleton" />
      <span :class="`${carbonPrefix}--toggle__appearance`" v-if="skeleton" />
      <span :class="`${carbonPrefix}--toggle__text--right`" v-if="skeleton" />
    </label>
  </div>
</template>

<script>
import { CarbonPrefix, Uid, Methods, Check } from '../../mixins'

const name = 'Toggle'
export default {
  name,
  mixins: [Uid, CarbonPrefix, Check, Methods({ input: ['blur', 'focus'] })],
  inheritAttrs: false,
  props: {
    small: Boolean,
    label: String,
    formItem: { type: Boolean, default: true },
    hideLabel: Boolean,
    skeleton: Boolean
  },
  computed: {
    labelClasses () {
      const {carbonPrefix, skeleton} = this
      return {
        [`${carbonPrefix}--toggle-input__label`]: true,
        [`${carbonPrefix}--skeleton`]: skeleton
      }
    },
    hiddenLabel() {
      return this.hideLabel ? this.label : undefined;
    },
    visibleLabel() {
      return this.hideLabel ? undefined : this.label;
    },
  },
};
</script>
