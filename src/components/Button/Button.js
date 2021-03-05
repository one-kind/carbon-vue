import { CarbonPrefix, Routable } from '../../mixins'
import helpers from '../../util/helpers'

const name = 'Button'
const shortName = 'Btn'
const defaultClass = `${helpers.prefix}${helpers.str2kebab(shortName)}`
const classSm = `${defaultClass}--sm`
const classPrimary = `${defaultClass}--primary`
const classDanger = `${defaultClass}--danger`
const classSecondary = `${defaultClass}--secondary`
const classGhost = `${defaultClass}--ghost`
const classDangerPrimary = `${defaultClass}--danger--primary`
const classTertiary = `${defaultClass}--tertiary`
const classSkeleton = `${helpers.prefix}skeleton`

const Button = ({
  name,
  mixins: [
    CarbonPrefix,
    Routable
  ],

  props: {
    small: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ''
    },
    kind: {
      type: String,
      default: 'primary',
      validator: value => {
        const outcome = [
          'primary',
          'secondary',
          'danger',
          'ghost',
          'danger--primary',
          'tertiary'
        ].includes(value)
        if (!outcome) {
          console.warn(`Dropdown - items must be in array (${value} was set)`);
        }
        return outcome
      }
    },
    tabIndex: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      validator: value => {
        const types = ['reset', 'submit', 'button']
        return types.includes(value)
      }
    },
    icon: {
      type: String,
      default: null
    },
    iconDescription: {
      type: String,
      default: 'Provide icon description if icon is used'
    },
    skeleton: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes () {
      const classes = {
        [this.className]: this.className !== '',
        [defaultClass]: true, // this.className === '',
        [classSm]: this.small,
        [classPrimary]: this.kind === 'primary' && !this.skeleton,
        [classDanger]: this.kind === 'danger' && !this.skeleton,
        [classSecondary]: this.kind === 'secondary' && !this.skeleton,
        [classGhost]: this.kind === 'ghost' && !this.skeleton,
        [classDangerPrimary]: this.kind === 'danger--primary' && !this.skeleton,
        [classTertiary]: this.kind === 'tertiary' && !this.skeleton,
        [classSkeleton]: this.skeleton
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
    genContent () {
      return this.$slots.default
    }
  },

  mounted () {
    if (this.buttonGroup) {
      this.buttonGroup.register(this)
    }
  },

  beforeDestroy () {
    if (this.buttonGroup) {
      this.buttonGroup.unregister(this)
    }
  },

  render (h) {
    const { tag, data } = this.generateRouteLink()
    const buttonImage = this.icon ? h(
      'Icon',
      {
        attrs: {
          icon: this.icon,
          description: this.iconDescription,
          class: 'bx--btn__icon'
        }
      }
    ) : null

    let children = [this.genContent(), this.icon ? {...buttonImage} : null]

    tag === 'button' && this.type && (data.attrs.type = this.type)

    data.attrs.value = ['string', 'number'].includes(typeof this.value)
      ? this.value
      : JSON.stringify(this.value)

    return h(tag, data, children, buttonImage)
  }
})

export default Button
