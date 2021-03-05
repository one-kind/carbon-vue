<template>
  <div
    :class="[
      `${carbonPrefix}--header-panel`,
      { [`${carbonPrefix}--header-panel--expanded`]: panelExpanded },
    ]"
    :aria-hidden="!panelExpanded ? 'true' : 'false'"
    :id="id"
    @focusout="onFocusout"
    @mousedown="onMouseDown"
  >
    <slot></slot>
  </div>
</template>

<script>
import { CarbonPrefix } from '../../mixins'

const name = 'HeaderPanel'

export default {
  name,
  mixins: [CarbonPrefix],
  props: {
    expanded: Boolean,
    id: { type: String, required: true },
  },
  mounted() {
    this.$parent.$emit('panel-mounted', this);
  },
  beforeDestroy() {
    this.$parent.$emit('panel-beforeDestroy', this);
  },
  data() {
    return {
      dataExpanded: this.expanded,
    };
  },
  model: {
    event: 'modelEvent',
    prop: 'expanded',
  },
  watch: {
    expanded() {
      this.panelExpanded = this.expanded;
    },
  },
  computed: {
    panelExpanded: {
      get() {
        return this.dataExpanded;
      },
      set(val) {
        if (this.dataExpanded !== val) {
          this.dataExpanded = val;
          this.$emit('modelEvent', val);
          this.$emit('panel-resize', this);
        }
      },
    },
  },
  methods: {
    onFocusout(ev) {
      this.$parent.$emit('panel-focusout', this, ev);
    },
    onMouseDown(ev) {
      if (this.$el === ev.target) {
        // ignore mousedown on panel can cause focus event
        ev.preventDefault();
      }
    },
  },
};
</script>
