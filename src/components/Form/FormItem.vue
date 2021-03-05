<template>
  <div :class="`${carbonPrefix}--form-item`">
    <slot></slot>
  </div>
</template>

<script>
import { CarbonPrefix } from '../../mixins'
const name = 'FormItem'
export default {
  name,
  mixins: [CarbonPrefix],
};
</script>
