<template>
  <optgroup :class="`${carbonPrefix}--select-optgroup`">
    <slot></slot>
  </optgroup>
</template>

<script>
import { CarbonPrefix } from '../../mixins'
const name = 'SelectOptionGroup'
export default {
  name,
  mixins: [CarbonPrefix],
};
</script>
