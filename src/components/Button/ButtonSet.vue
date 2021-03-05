<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
import { CarbonPrefix } from '../../mixins'
import helpers from '../../util/helpers'

const name = 'ButtonSet'
const shortName = 'BtnSet'

const defaultClass = `${helpers.prefix}${helpers.str2kebab(shortName)}`
export default {
  name,
  mixins: [
    CarbonPrefix
  ],
  computed: {
    classes () {
      const classes = {
        [defaultClass]: true,
      }
      return classes
    },
  }
}
</script>

<style>

</style>
