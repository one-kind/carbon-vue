<template>
  <component :is="'Link'" :class="classes" :href="href">
    <span
      v-if="prefix"
      :class="prefixClasses"
    >
      {{prefix}}
    </span>
    <slot />
  </component>
</template>

<script>
import { CarbonPrefix } from '../../mixins'
import helpers from '../../util/helpers'

const name = "HeaderName"

const defaultClass = `${helpers.prefix}${helpers.str2Element(name)}`
const prefixClass = `${defaultClass}--prefix`

export default {
  name,
  mixins: [
    CarbonPrefix
  ],
  props: {
    prefix: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: null
    }
  },
  computed: {
    classes () {
      const classes = {
        [defaultClass]: true
      }
      return classes
    },
    prefixClasses () {
      const classes = {
        [prefixClass]: true
      }
      return classes
    }
  }
}
</script>
