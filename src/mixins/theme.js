import Vue from 'vue'

export default Vue.extend({
  name: 'theme',
  props: {
    theme: {
      type: String,
      default: null,
      validate: value => {
        const result = ['white', 'g10', 'g90', 'g100'].includes(value)
        if(!result) {
          console.warn(`theme must be one of: white, g10, g90, g100`);
        }
        return result
      }
    }
  }
})
