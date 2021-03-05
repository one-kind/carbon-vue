<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
import { CarbonPrefix } from '../../mixins'

const name = "Tile"

export default {
  name,
  mixins: [
    CarbonPrefix
  ],
  props: {
    className: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: null
    },
    rel: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    iconDescription: {
      type: String,
      default: 'Tile checkmark'
    },
    tabIndex: {
      type: Number,
      default: null
    },
    value: {
      type: [String, Number],
      default: null
    }
  },
  data () {
    return {
      selected: false,

    }
  },
  computed: {
    classes () {
      const classes = {
        [`${this.carbonPrefix}--tile`]: true,
        [this.className]: this.className
      }
      return classes
    },
  }
}
</script>
