<template>
  <option :class="`${carbonPrefix}--select-option`">
    <slot></slot>
  </option>
</template>

<script>
import { CarbonPrefix } from '../../mixins'
const name = 'SelectOption'
export default {
  name,
  mixins: [CarbonPrefix],
};
</script>
