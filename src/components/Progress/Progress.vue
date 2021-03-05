<template>
  <ul
    data-progress
    data-progress-current
    :class="[`${carbonPrefix}--progress`, { [`${carbonPrefix}--progress--vertical`]: vertical }]"
  >
    <slot>
      <ProgressStep
        v-for="(step, index) in steps"
        :key="`step:${index}`"
        :label="step"
        :complete="initialStep > index"
        ref="steps"
      />
    </slot>
  </ul>
</template>

<script>
import { CarbonPrefix } from '../../mixins'
const name = 'Progress'
export default {
  name,
  mixins: [CarbonPrefix],
  props: {
    initialStep: { type: Number, default: 0 },
    steps: Array,
    vertical: Boolean,
  },
  created() {
    // add these on created otherwise mounted is too late.
    this.$on('completed', srcComponent => this.onCompleted(srcComponent));
    this.$on('mounted', srcComponent => this.onMount(srcComponent));
    this.$on('beforeDestroy', srcComponent => this.onBeforeDestroy(srcComponent));
  },
  computed: {
    state() {
      return () => {
        console.warn('Progress: method deprecated');
        return;
      };
    },
  },
  methods: {
    onMount() {
      this.processState();
    },
    onBeforeDestroy() {
      this.processState();
    },
    onCompleted() {
      this.processState();
    },
    processState() {
      const steps = this.$children.filter(child => child.$_ProgressStep);
      let newStep = -1;
      for (let i = 0; i < steps.length; i++) {
        if (!steps[i].complete && newStep < 0) {
          newStep = i;
          steps[i].internalState = 0;
        } else {
          steps[i].internalState = newStep < 0 ? 1 : -1;
        }
      }
    },
    getCurrent() {
      console.warn('Progress: method deprecated');
    },
    getSteps() {
      console.warn('Progress: method deprecated');
    },
    setCurrent() {
      console.warn('Progress: method deprecated');
    },
  },
};
</script>
