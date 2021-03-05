<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
import { CarbonPrefix } from '../../mixins'
import helpers from '../../util/helpers'

const name = 'Breadcrumb'
const defaultClass = `${helpers.prefix}${helpers.str2kebab(name)}`
const classSkeleton = `${helpers.prefix}skeleton`

export default {
  name,
  mixins: [
    CarbonPrefix
  ],
  props: {
    className: {
      type: String,
      default: ''
    },
    skeleton: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        [defaultClass]: true,
        [this.className]: this.className,
        [classSkeleton]: this.skeleton
      }
    }
  }
}
</script>
