<template>
  <Wrapper :tag-type="overlay ? 'div' : ''" :class="overlayClasses">
    <div
      data-loading
      :class="{
        [`${carbonPrefix}--loading`]: active || stopping,
        [`${carbonPrefix}--loading--stop`]: !active && stopping,
        [`${carbonPrefix}--loading--small`]: small,
      }"
      ref="loading"
    >
      <svg :class="`${carbonPrefix}--loading__svg`" viewBox="-75 -75 150 150">
        <title>Loading</title>
        <circle v-if="small" :class="`${carbonPrefix}--loading__background`" cx="0" cy="0" :r="loadingRadius" />
        <circle :class="`${carbonPrefix}--loading__stroke`" cx="0" cy="0" :r="loadingRadius" />
      </svg>
    </div>
  </Wrapper>
</template>

<script>
import { CarbonPrefix } from '../../mixins'
const name = 'Loading'
export default {
  name,
  mixins: [CarbonPrefix],
  props: {
    active: { type: Boolean, default: true },
    overlay: Boolean,
    small: Boolean,
  },
  computed: {
    overlayClasses() {
      const classes = [];
      if (this.overlay) {
        if (this.active || this.stopping) {
          classes.push(`${this.carbonPrefix}--loading-overlay`);
        } else {
          classes.push(`${this.carbonPrefix}--loading-overlay--stop`);
        }
      }
      return classes;
    },
    loadingRadius() {
      return this.small ? '26.8125' : '37.5';
    },
  },
  data() {
    return {
      stopping: false,
    };
  },
  watch: {
    active(val) {
      this.onActiveUpdate(val);
    },
  },
  methods: {
    onEnd(ev) {
      if (ev.animationName === 'rotate-end-p2') {
        this.$refs.loading.removeEventListener('animationend', this.onEnd);
        this.stopping = false;
        this.$emit('loading-end');
      }
    },
    onActiveUpdate(newValue) {
      this.stopping = !newValue;
      if (!newValue) {
        this.$refs.loading.addEventListener('animationend', this.onEnd);
      }
    },
  },
};
</script>
