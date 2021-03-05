<template>
  <ul :class="classes" @mousedown="onMousedown">
    <slot />
  </ul>
</template>

<script>
import { CarbonPrefix } from '../../mixins'

const name = 'SideNavItems'

export default {
  name,
  mixins: [
    CarbonPrefix
  ],
  computed: {
    classes () {
      return {
        [`${this.carbonPrefix}--side-nav__items`]: true
      }
    }
  },
  methods: {
    onMousedown(ev) {
      if (ev.target === this.$el) {
        // non-css fix for #448
        ev.preventDefault();
      }
    },
  },
};
</script>
