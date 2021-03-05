<template>
  <component
    :is="tagType"
    v-on="$listeners"
    v-bind="linkProps"
    :class="classes"
  >
    <slot>Skip to main content</slot>
  </component>
</template>

<script>
import { CarbonPrefix, LinkMixin } from '../../mixins'

const name = "SkipToContent"

export default {
  name,
  mixins: [
    LinkMixin,
    CarbonPrefix
  ],
  computed: {
    classes () {
      const classes = {
        [`${this.carbonPrefix}--skip-to-content`]: true
      }
      return classes
    }
  }
}
</script>
