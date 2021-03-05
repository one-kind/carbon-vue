import helpers from '../../util/helpers'
import buildSkeleton from './AccordionSkeleton'
import { Theme } from '../../mixins'

const name = 'Accordion'
const defaultClass = `${helpers.prefix}${helpers.str2kebab(name)}`
const classSkeleton = `${helpers.prefix}skeleton`

export default {
  name,
  mixins: [
    Theme
  ],
  props: {
    className: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      validator: (value) => ['end', 'start'].includes(value)
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
        [`${defaultClass}--${this.align}`]: this.align && this.align !== null,
        [classSkeleton]: this.skeleton,
        [`carbon-theme--${this.theme}`]: this.theme
      }
    }
  },
  methods: {
    genContent (h) {
      return this.skeleton
        ? buildSkeleton(h, defaultClass, classSkeleton)
        : this.$slots.default
    }
  },
  render (h) {
    let children = this.genContent(h)

    return h(
      'ul',
      {
        'class': this.classes,
        attrs: {
          role: 'tablist',
          ariaMultiselectable: true
        }
      },
      children
    )
  }
}
