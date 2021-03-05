<template>
  <span :class="classes">
    <slot />
  </span>
</template>

<script>
import { CarbonPrefix } from '../../mixins'

const name = 'SideNavLinkText'

export default {
  name,
  mixins: [
    CarbonPrefix
  ],
  computed: {
    classes () {
      return {
        [`${this.carbonPrefix}--side-nav__link-text`]: true
      }
    }
  },
}
</script>
