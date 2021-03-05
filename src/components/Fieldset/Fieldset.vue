<template>
  <fieldset :class="classes">
    <slot />
  </fieldset>
</template>

<script>
import { CarbonPrefix } from '../../mixins'

const name = 'Fieldset'

export default {
  name,
  mixins: [
    CarbonPrefix
  ],
  computed: {
    classes () {
      return {
        [`${this.carbonPrefix}--fieldset`]: true
      }
    }
  }
}
</script>
