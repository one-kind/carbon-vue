<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
import { CarbonPrefix } from '../../mixins'

const name = 'SideNavIcon'

export default {
  name,
  mixins: [
    CarbonPrefix
  ],
  props: {
    small: Boolean,
  },
  computed: {
    classes () {
      return {
        [`${this.carbonPrefix}--side-nav__icon`]: true,
        [`${this.carbonPrefix}--side-nav__icon--small`]: this.small
      }
    }
  },
};
</script>
