<template>
  <ul :class="`${carbonPrefix}--switcher__item`">
    <slot />
  </ul>
</template>

<script>
import { CarbonPrefix } from '../../mixins'
const name = 'Switcher'
export default {
  name,
  mixins: [CarbonPrefix],
};
</script>
