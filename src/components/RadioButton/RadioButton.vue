<template>
  <div
    :class="classes"
  >
    <input
      v-bind="$attrs"
      v-on="inputListeners"
      :id="uid"
      :checked="isChecked"
      :class="`${carbonPrefix}--radio-button`"
      ref="input"
      type="radio"
      :value="value"
    />
    <!-- symbol causes problem in codepen? -->
    <label :for="uid" :class="`${carbonPrefix}--radio-button__label`">
      <span :class="`${carbonPrefix}--radio-button__appearance`"></span>
      {{ label }}
    </label>
  </div>
</template>

<script>
import { CarbonPrefix, Uid, Methods, Radio } from '../../mixins'

const name = 'RadioButton'

export default {
  name,
  inheritAttrs: false,
  mixins: [Uid, Radio, CarbonPrefix, Methods({ input: ['blur', 'focus'] })],
  props: {
    labelLeft: Boolean,
  },
  computed: {
    classes () {
      const {carbonPrefix, labelLeft} = this
      return {
        [`${carbonPrefix}--radio-button-wrapper`]: true,
        [`${carbonPrefix}--radio-button-wrapper--label-left`]: labelLeft,
      }
    }
  }
};
</script>
