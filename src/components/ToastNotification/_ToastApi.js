import Component from './ToastNotification.vue'
import ToastEventBus from './_ToastBus.js';

const ToastApi = (Vue, globalOptions = {}) => {
  return {
    open(options) {
      let caption;
      if (typeof options === 'string') caption = options;

      const defaultOptions = {
        caption
      };

      const propsData = Object.assign({}, defaultOptions, globalOptions, options);

      const result = new (Vue.extend(Component))({
        el: document.createElement('div'),
        propsData
      })

      return result
    },
    clear() {
      ToastEventBus.$emit('toast.clear')
    },
    success(caption, options = {}) {
      return this.open(Object.assign({}, {
        caption,
        type: 'success'
      }, options))
    },
    error(caption, options = {}) {
      return this.open(Object.assign({}, {
        caption,
        type: 'error'
      }, options))
    },
    info(caption, options = {}) {
      return this.open(Object.assign({}, {
        caption,
        type: 'info'
      }, options))
    },
    warning(caption, options = {}) {
      return this.open(Object.assign({}, {
        caption,
        type: 'warning'
      }, options))
    },
    default(caption, options = {}) {
      return this.open(Object.assign({}, {
        caption,
        type: 'default'
      }, options))
    }
  }
};

export default ToastApi;
