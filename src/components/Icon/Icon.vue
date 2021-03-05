<template>
  <svg v-bind="iconData.attrs" :class="classes" :alt="description" :ariaLabel="description">
    <component v-for="(element, index) in iconData.content" :is="element.elem" v-bind="element.attrs" :key="`${iconData.name}-${index}`" />
  </svg>
</template>

<script>
import { CarbonPrefix } from '../../mixins'
import IconCollection from './_IconCollection.js'
const name = 'Icon'
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
    description: {
      type: String,
      default: 'Provide a description that will be used as the title',
      validator: value => {
        return value !== null
      }
    },
    icon: {
      type: String,
      required: true,
      // default: isPrefixed(this.name) ? this.name : `icon--${this.name}`,
      validator: value => IconCollection.includes(value)
    },
    fill: String,
    size: {
      type: [Number, String],
      default: 16,
      validate: value => [16, 20, 24, 32, 'glyph'].includes(value)
    }
  },
  computed: {
    iconData () {
      const size = this.size === 'glyph' ? 'Glyph' : this.size
      const rawData = require('@carbon/icons/es/')[`${this.icon}${size}`];
      rawData.attrs.fill = this.fill
      return rawData
    },
    classes () {
      return {
        [this.className]: this.className
      }
    }
  },
}
</script>
