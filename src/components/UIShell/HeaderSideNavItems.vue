<template>
  <div
    :class="[
      `${carbonPrefix}--side-nav__header-navigation`,
      { [`${carbonPrefix}--side-nav__header-divider`]: divider },
    ]"
  >
    <slot />
  </div>
</template>

<script>
import { CarbonPrefix } from '../../mixins'

const name = 'HeaderSideNavItems'

export default {
  name,
  mixins: [CarbonPrefix],
  props: {
    divider: Boolean,
  },
};
</script>
