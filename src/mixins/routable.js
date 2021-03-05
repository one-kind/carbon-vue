import Vue from 'vue'

export default Vue.extend({
  name: 'routable',

  props: {
    disabled: Boolean,
    href: [String, Object],
    to: [String, Object],
    nuxt: {
      type: Boolean,
      default: false
    },
    target: String
  },

  methods: {
    click (e) { this.$emit('click', e) },
    generateRouteLink () {
      const data = {
        attrs: { disabled: this.disabled },
        class: this.classes,
        props: {},
        [this.to ? 'nativeOn' : 'on']: {
          ...this.$listeners,
          click: this.click
        }
      }

      let tag
      if (this.to) {
        tag = this.nuxt ? 'nuxt-link' : 'router-link'
        Object.assign(data.props, {
          to: this.to
        })
      } else {
        tag = (this.href && 'a') || 'button'

        if (tag === 'a' && this.href && data.attrs !== null) {
          data.attrs.href = this.href
        }
      }

      if (this.target && data.attrs !== null) {
        data.attrs.target = this.target
      }

      return { tag, data }
    }
  }
})
