<template>
  <div :class="`${carbonPrefix}--form-item`">
    <div
      :class="[`${carbonPrefix}--radio-button-group`, { [`${carbonPrefix}--radio-button-group--vertical`]: vertical }]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { CarbonPrefix } from '../../mixins'

const name = 'RadioGroup'

export default {
  name,
  mixins: [CarbonPrefix],
  props: {
    vertical: Boolean,
  },
  mounted() {
    // pass on RadioButton change events
    this.$on('hange', val => this.$emit('change', val));
  },
};
</script>
