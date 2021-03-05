<template>
  <form :class="`${carbonPrefix}--form`" v-on="$listeners">
    <slot></slot>
  </form>
</template>

<script>
import { CarbonPrefix } from '../../mixins'
const name = 'Form'
export default {
  name,
  mixins: [CarbonPrefix],
};
</script>
