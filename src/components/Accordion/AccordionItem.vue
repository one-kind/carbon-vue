<template>
  <li
    :class="classes"
    @click="click"
    @keyup.space="handleHeadingClick"
    role="presentation">
    <button
      type="button"
      class="bx--accordion__heading"
      role="tab"
      @click="handleHeadingClick">
      <Icon
        class="bx--accordion__arrow"
        icon="ChevronRight"
        description="Expand/Collapse"
      />
      <div :class="titleClasses"><slot name="title" /></div>
    </button>
    <div class="bx--accordion__content"><slot /></div>
  </li>
</template>

<script>
import { CarbonPrefix, Theme } from '../../mixins'
import helpers from '../../util/helpers'

const name = 'AccordionItem'
const defaultClass = `${helpers.prefix}accordion__item`
const classAccordionItemActive = `${defaultClass}--active`
const classSkeletonText = `${helpers.prefix}skeleton__text`
const classAccordionTitle = `${helpers.prefix}accordion__title`

export default {
  name,
  mixins: [
    CarbonPrefix,
    Theme
  ],
  data: () => {
    return {
      isOpen: null
    }
  },

  props: {
    title: {
      type: String,
      default: ''
    },
    open: {
      type: Boolean,
      default: false
    },
    skeleton: {
      type: Boolean,
      default: false
    }
  },

  mounted () {
    this.isOpen = this.open
  },

  computed: {
    classes () {
      const classes = {
        [defaultClass]: true,
        [classAccordionItemActive]: this.isOpen,
        [`carbon-theme--${this.theme}`]: this.theme
      }
      return classes
    },
    titleClasses () {
      const classes = {
        [classSkeletonText]: this.skeleton,
        [classAccordionTitle]: true
      }
      return classes
    }
  },

  methods: {
    // Prevent focus to match md spec
    click (e) {
      e.target.blur()
      this.$emit('click', e)
    },
    handleHeadingClick (e) {
      e.target.blur()
      this.isOpen = !this.isOpen
      this.$emit('headingClick', this.isOpen)
    }
  }
}
</script>
