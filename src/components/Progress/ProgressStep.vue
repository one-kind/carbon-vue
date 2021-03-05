<template>
  <li
    :class="[
      `${carbonPrefix}--progress-step`,
      `${carbonPrefix}--progress-step--${stateString}`,
      {
        [`${carbonPrefix}--progress-step--disabled`]: disabled,
        [`${carbonPrefix}--progress-step--invalid`]: invalid,
      },
    ]"
    :aria-disabled="disabled"
  >
    <svg v-if="isCurrent">
      <path d="M 7, 7 m -7, 0 a 7,7 0 1,0 14,0 a 7,7 0 1,0 -14,0" />
    </svg>
    <Icon icon="Warning" v-else-if="!isComplete && invalid" :class="`${carbonPrefix}--progress__warning`" />
    <svg v-else-if="!isComplete">
      <path
        d="M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 13c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"
      />
    </svg>
    <Icon icon="CheckmarkOutline" v-else-if="isComplete" />

    <p
      :class="[`${carbonPrefix}--progress-label`, { [`${carbonPrefix}--progress-label-overflow`]: showOverflow }]"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
      ref="label"
    >
      {{ label }}
    </p>

    <div role="tooltip" data-floating-menu-direction="bottom" :class="`${carbonPrefix}--tooltip`">
      <span :class="`${carbonPrefix}--tooltip__caret`"></span>
      <p :class="`${carbonPrefix}--tooltip__text`">{{ tip }}</p>
    </div>

    <p :class="`${carbonPrefix}--progress-optional`" v-if="additionalInfo">{{ additionalInfo }}</p>
    <span :class="`${carbonPrefix}--progress-line`"></span>
  </li>
</template>

<script>
import { CarbonPrefix } from '../../mixins'

const states = ['incomplete', 'current', 'complete'];
const name = 'ProgressStep'
export default {
  name,
  mixins: [CarbonPrefix],
  props: {
    additionalInfo: String,
    disabled: Boolean,
    invalid: Boolean,
    label: String,
    tipText: String,
    complete: Boolean,
  },
  data() {
    return {
      state: -1,
      showOverflow: false,
      tip: '',
    };
  },
  mounted() {
    this.$_ProgressStep = true; // for use by parent with $children
    this.$parent.$emit('mounted');
  },
  beforeDestroy() {
    this.$parent.$emit('beforeDestroy');
  },
  watch: {
    complete() {
      this.$parent.$emit('completed');
    },
  },
  computed: {
    internalState: {
      get() {
        return this.state;
      },
      set(val) {
        this.state = Math.sign(val);
      },
    },
    stateString() {
      return states[this.state + 1];
    },
    isComplete() {
      return this.state > 0;
    },
    isCurrent() {
      return this.state === 0;
    },
  },
  methods: {
    onMouseEnter() {
      if (this.tipText) {
        this.tip = this.tipText;
        this.showOverflow = true;
      } else {
        if (this.$refs.label.scrollWidth > this.$refs.label.clientWidth) {
          this.tip = this.label;
          this.showOverflow = true;
        } else {
          this.tip = '';
          this.showOverflow = false;
        }
      }
    },
    onMouseLeave() {
      this.showOverflow = false;
    },
  },
};
</script>
