<template>
  <li :class="`${carbonPrefix}--switcher__item`">
    <slot />
  </li>
</template>

<script>
import { CarbonPrefix } from '../../mixins'

const name = 'SwitcherItem'
export default {
  name,
  mixins: [CarbonPrefix],
};
</script>
