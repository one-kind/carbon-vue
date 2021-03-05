import { CarbonPrefix, Routable } from '../../mixins'
import helpers from '../../util/helpers'

const name = 'Link'
const defaultClass = `${helpers.prefix}${helpers.str2kebab(name)}`

const Link = ({
  name,
  mixins: [
    CarbonPrefix,
    Routable
  ],
  computed: {
    classes () {
      return {
        [defaultClass]: true
      }
    }
  },
  methods: {
    genContent () {
      return this.$slots.default
    }
  },
  render (h) {
    const {tag, data} = this.generateRouteLink()
    const children = [this.genContent()]

    tag === 'a' && (data.attrs.type = this.type)

    data.attrs.value = ['string', 'number'].includes(typeof this.value)
      ? this.value
      : JSON.stringify(this.value)

    return h(tag, data, children)
  }
})

export default Link
