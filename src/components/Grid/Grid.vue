<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
import { CarbonPrefix, Theme } from '../../mixins'
import helpers from '../../util/helpers'

const name = "Grid"

export default {
  name,
  inheritAttrs: true,
  mixins: [
    CarbonPrefix,
    Theme
  ],
  props: {
    row: {
      type: Boolean
    },
    col: {
      type: Boolean
    },
    aspectRatio: {
      type: String,
      default: null,
      validator: (val) => [
        '1:1',
        '2:1',
        '2:3',
        '3:2',
        '4:3',
        '16:9'
      ].includes(val)
    },
    aspectRatioObject: {
      type: Boolean
    },
    sm: {
      type: Number,
      default: null,
      validator: (val) => 1 <= val <= 16
    },
    md: {
      type: Number,
      default: null,
      validator: (val) => 1 <= val <= 16
    },
    lg: {
      type: Number,
      default: null,
      validator: (val) => 1 <= val <= 16
    },
    xlg: {
      type: Number,
      default: null,
      validator: (val) => 1 <= val <= 16
    },
    max: {
      type: Number,
      default: null,
      validator: (val) => 1 <= val <= 16
    },
    offsetSm: {
      type: Number,
      default: null,
      validator: (val) => 1 <= val <= 16
    },
    offsetMd: {
      type: Number,
      default: null,
      validator: (val) => 1 <= val <= 16
    },
    offsetLg: {
      type: Number,
      default: null,
      validator: (val) => 1 <= val <= 16
    },
    offsetXlg: {
      type: Number,
      default: null,
      validator: (val) => 1 <= val <= 16
    },
    offsetMax: {
      type: Number,
      default: null,
      validator: (val) => 1 <= val <= 16
    },
    narrow: {
      type: Boolean
    },
    condensed: {
      type: Boolean
    },
    extraClasses: {
      type: [String, Array],
      default: null
    }
  },
  computed: {
    defaultClass () {
      let block = 'grid'
      const {
        row,
        col,
        aspectRatio,
        aspectRatioObject
      } = this
      if (row) { block = 'row' }
      if (col) { block = 'col' }
      if (aspectRatio) { block = 'aspect-ratio' }
      if (aspectRatioObject) { block = 'aspect-ratio--object' }
      return `${this.carbonPrefix}--${helpers.str2kebab(block)}`
    },
    classes () {
      const {
        defaultClass,
        sm,
        md,
        lg,
        xlg,
        max,
        offsetSm,
        offsetMd,
        offsetLg,
        offsetXlg,
        offsetMax,
        row,
        col,
        aspectRatio,
        narrow,
        condensed,
        theme,
        // extraClasses
      } = this
      const grid = !row && !col
      /* let additionalClasses = extraClasses || null
      if (typeof extraClasses === 'object') {
        additionalClasses = extraClasses.join(' ')
      } */

      const result = {
        [defaultClass]: !sm && !md && !lg && !xlg && !max,
        // [additionalClasses]: additionalClasses,
        [`${defaultClass}--${aspectRatio}`]: aspectRatio,
        [`${defaultClass}--narrow`]: grid && narrow,
        [`${defaultClass}--condensed`]: grid && condensed,
        [`${defaultClass}-max-${max}`]: col && max,
        [`${defaultClass}-xlg-${xlg}`]: col && xlg,
        [`${defaultClass}-lg-${lg}`]: col && lg,
        [`${defaultClass}-md-${md}`]: col && md,
        [`${defaultClass}-sm-${sm}`]: col && sm,
        [`${defaultClass}-ofsset-sm-${offsetSm}`]: col && offsetSm,
        [`${defaultClass}-ofsset-md-${offsetMd}`]: col && offsetMd,
        [`${defaultClass}-ofsset-lg-${offsetLg}`]: col && offsetLg,
        [`${defaultClass}-ofsset-xlg-${offsetXlg}`]: col && offsetXlg,
        [`${defaultClass}-ofsset-max-${offsetMax}`]: col && offsetMax,
        [`carbon-theme--${theme}`]: theme,
      }
      return result
    }
  }
}
</script>
