<template>
  <button
    v-on="$listeners"
    :class="[
      `${carbonPrefix}--header__action`,
      { [`${carbonPrefix}--header__action--active`]: dataActive },
    ]"
    type="button"
    aria-haspopup="true"
    :aria-controls="ariaControls"
    :aria-expanded="active ? 'true' : 'false'"
    @click="gaToggle"
    @focusout="gaFocusout"
    :id="uid"
  >
    <slot />
  </button>
</template>

<script>
import { CarbonPrefix, Uid } from '../../mixins'

const name = 'HeaderGlobalAction'

export default {
  name,
  mixins: [
    Uid,
    CarbonPrefix
  ],
  props: {
    active: Boolean,
    ariaControls: String,
  },
  mounted() {
    this.$parent.$emit('panel-control-mounted', this);
  },
  beforeDestroy() {
    this.$parent.$emit('panel-control-beforeDestroy', this);
  },
  data() {
    return {
      dataActive: this.active,
    };
  },
  watch: {
    expanded() {
      if (this.active !== this.dataActive) {
        this.gaToggle();
      }
    },
  },
  computed: {
    panelExpanded: {
      get() {
        return this.dataActive;
      },
      set(val) {
        // do not emit 'panel-control-toggle'
        this.dataActive = val;
      },
    },
  },
  methods: {
    gaToggle() {
      this.$el.focus();
      this.$parent.$emit('panel-control-toggle', this);
    },
    gaFocusout(ev) {
      this.$parent.$emit('panel-control-focusout', this, ev);
    },
  },
};
</script>
