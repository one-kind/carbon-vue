import Component from './Modal.vue'
import ModalEventBus from './_ModalBus.js';

const ModalApi = (Vue, globalOptions = {}) => {
  return {
    open(options) {

      const defaultOptions = {
        visible: true
      };

      const propsData = Object.assign({}, defaultOptions, globalOptions, options);

      var instance = new (Vue.extend(Component))({
        propsData
      })

      instance.$slots.label = propsData.label
      instance.$slots.title = propsData.title
      instance.$slots['secondary-button'] = propsData.secondaryButton
      instance.$slots['primary-button'] = propsData.primaryButton
      instance.$on('modal-shown', options.actionShown)
      instance.$on('modal-hidden', options.actionHidden)
      instance.$on('modal-hide-request', options.actionHideRequest)

      instance.$mount()
      return instance
    },
    clear() {
      ModalEventBus.$emit('modal.clear')
    },
    danger(modalLabel, options = {}) {
      return this.open(Object.assign({}, {
        modalLabel,
        danger: true,
        visible: true,
      }, options))
    },
    default(modalLabel, options = {}) {
      return this.open(Object.assign({}, {
        modalLabel
      }, options))
    }
  }
};

export default ModalApi;
