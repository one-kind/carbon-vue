<template>
  <legend :class="classes">
    <slot />
  </legend>
</template>

<script>
import { CarbonPrefix } from '../../mixins'

const name = 'Legend'

export default {
  name,
  mixins: [
    CarbonPrefix
  ],
  computed: {
    classes () {
      return {
        [`${this.carbonPrefix}--label`]: true
      }
    }
  }
}
</script>
