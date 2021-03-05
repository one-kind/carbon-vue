import CarbonPrefix from './carbon-prefix'

export default {
  props: {
    skeleton: {
      type: Boolean,
      default: false
    }
  },
  mixins: [
    CarbonPrefix
  ],
  data () {
    return {
      defaultClass: `${this.carbonPrefix}--${this.str2kebab(this.$options.name)}`,
      classPrefix: `${this.carbonPrefix}--`
    }
  },
  methods: {
    prefixClass (className, options) {
      const {isModifier} = options || {}
      const separator = isModifier ? '__' : '--'
      const kebabCaseName = this.str2kebab(this.$options.name)
      const resultingClasses = Array.isArray(className)
        ? className.map((value) => `${kebabCaseName}${separator}${value}`)
        : `${kebabCaseName}${separator}${className}`
      let result = resultingClasses;

      return result
    },
    str2kebab (str) {
      return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    },
    getRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
}
