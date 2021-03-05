<template>
  <transition
    :enter-active-class="transition.enter"
    :leave-active-class="transition.leave">
    <div
      data-notification
      :class="classes"
      v-on="$listeners"
      :role="isAlert ? 'alert' : undefined"
      :aria-live="!isAlert ? 'polite' : false"
      @mouseover="toggleTimer(true)"
      @mouseleave="toggleTimer(false)"
    >
      <Icon v-if="icon" :icon="icon" :size="20" :class="`${carbonPrefix}--toast-notification__icon`" />
      <div :class="`${carbonPrefix}--toast-notification__details`">
        <h3 :class="`${carbonPrefix}--toast-notification__title`">{{ title }}</h3>
        <p :class="`${carbonPrefix}--toast-notification__subtitle`">{{ subTitle }}</p>
        <p :class="`${carbonPrefix}--toast-notification__caption`">{{ caption }}</p>
      </div>
      <button
        :aria-label="closeAriaLabel"
        type="button"
        data-notification-btn
        :class="`${carbonPrefix}--toast-notification__close-button`"
        @click="close"
      >
        <Icon icon="Close" :size="20" :class="`${carbonPrefix}--toast-notification__close-icon`" />
      </button>
    </div>
  </transition>
</template>

<script>
  import Timer from "./_ToastTimer.js";
  import Positions from './_ToastPosition.js'
  import ToastEventBus from './_ToastBus.js'
  import { settings as carbonSettings } from 'carbon-components';

  const name = 'ToastNotification'

  export default {
    name,
    props: {
      position: {
        type: String,
        default: Positions.BOTTOM_RIGHT,
        validator(value) {
          return Object.values(Positions).includes(value)
        }
      },
      duration: {
        type: Number,
        default: 3000
      },
      dismissible: {
        type: Boolean,
        default: true
      },
      onClose: {
        type: Function,
        default: () => {
        }
      },
      onClick: {
        type: Function,
        default: () => {
        }
      },
      queue: Boolean,
      pauseOnHover: {
        type: Boolean,
        default: true
      },
      caption: String,
      closeAriaLabel: { type: String, default: 'Dismiss notification' },
      kind: {
        type: String,
        default: 'info',
        validator: val => ['error', 'info', 'warning', 'success'].includes(val),
      },
      lowContrast: Boolean,
      title: String,
      subTitle: String,
    },
    data() {
      return {
        isActive: false,
        parentTop: null,
        parentBottom: null,
        isHovered: false,
        carbonPrefix: carbonSettings.prefix
      }
    },
    beforeMount() {
      this.setupContainer()
    },
    mounted() {
      this.showNotification();
      ToastEventBus.$on('toast.clear', this.close)
    },
    methods: {
      setupContainer() {
        this.parentTop = document.querySelector('.toast-notification-wrapper.is-top');
        this.parentBottom = document.querySelector('.toast-notification-wrapper.is-bottom');
        // No need to create them, they already exists
        if (this.parentTop && this.parentBottom) return;
        if (!this.parentTop) {
          this.parentTop = document.createElement('div');
          this.parentTop.className = 'toast-notification-wrapper is-top';
        }
        if (!this.parentBottom) {
          this.parentBottom = document.createElement('div');
          this.parentBottom.className = 'toast-notification-wrapper is-bottom'
        }
        const container = document.body;
        container.appendChild(this.parentTop);
        container.appendChild(this.parentBottom);
      },
      shouldQueue() {
        if (!this.queue) return false;
        return (
          this.parentTop.childElementCount > 0 ||
          this.parentBottom.childElementCount > 0
        )
      },
      close() {
        this.timer.stop();
        clearTimeout(this.queueTimer);
        this.isActive = false;
        // Timeout for the animation complete before destroying
        setTimeout(() => {
          this.onClose.apply(null, arguments);
          this.$destroy();
          if (typeof this.$el.remove !== 'undefined') {
            this.$el.remove()
          } else {
            this.$el.parentNode.removeChild(this.$el)
          }
        }, 150)
      },
      showNotification() {
        if (this.shouldQueue()) {
          // Call recursively if should queue
          this.queueTimer = setTimeout(this.showNotification, 250);
          return
        }
        this.correctParent.insertAdjacentElement('afterbegin', this.$el);
        this.isActive = true;
        this.timer = new Timer(this.close, this.duration);
      },
      whenClicked() {
        if (!this.dismissible) return;
        this.onClick.apply(null, arguments);
        this.close()
      },
      toggleTimer(newVal) {
        if (!this.pauseOnHover) return;
        newVal ? this.timer.pause() : this.timer.resume();
      }
    },
    computed: {
      isAlert() {
        return ['error', 'info', 'warning', 'success'].indexOf(this.kind) < 2;
      },
      classes () {
        const {carbonPrefix, kind, lowContrast, position} = this
        return {
          [`${carbonPrefix}--toast-notification`]: true,
          [`${carbonPrefix}--toast-notification--${kind.toLowerCase()}`]: true,
          [`${carbonPrefix}--toast-notification--low-contrast`]: lowContrast,
          [`is-${position}`]: position
        }
      },
      icon () {
        const availableIcons = {
          error: 'ErrorFilled',
          warning: 'WarningFilled',
          success: 'CheckmarkFilled',
          info: 'InformationFilled',
        }
        return availableIcons[this.kind] || false
      },
      // eslint-disable-next-line vue/return-in-computed-property
      correctParent() {
        switch (this.position) {
          case Positions.TOP:
          case Positions.TOP_RIGHT:
          case Positions.TOP_LEFT:
            return this.parentTop;
          case Positions.BOTTOM:
          case Positions.BOTTOM_RIGHT:
          case Positions.BOTTOM_LEFT:
            return this.parentBottom;
        }
      },
      // eslint-disable-next-line vue/return-in-computed-property
      transition() {
        switch (this.position) {
          case Positions.TOP:
          case Positions.TOP_RIGHT:
          case Positions.TOP_LEFT:
            return {
              enter: 'fadeInDown',
              leave: 'fadeOut'
            };
          case Positions.BOTTOM:
          case Positions.BOTTOM_RIGHT:
          case Positions.BOTTOM_LEFT:
            return {
              enter: 'fadeInUp',
              leave: 'fadeOut'
            }
        }
      },
    },
    beforeDestroy() {
      ToastEventBus.$off('toast.clear', this.close)
    }
  }
</script>
