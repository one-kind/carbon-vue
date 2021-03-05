<template>
  <button
    v-on="$listeners"
    :class="classes"
    type="button"
    aria-haspopup="true"
    :aria-controls="ariaControls"
    :aria-expanded="active ? 'true' : 'false'"
    @click="gaToggle"
    @focusout="gaFocusout"
    :id="uid"
  >
    <Icon icon="Close" :size="20" v-if="dataActive" />
    <Icon icon="Menu" :size="20" v-if="!dataActive" />
  </button>
</template>

<script>
import { CarbonPrefix, Uid } from '../../mixins'

const name = 'HeaderMenuButton'

export default {
  name,
  mixins: [
    Uid,
    CarbonPrefix
  ],
  props: {
    active: Boolean,
    ariaControls: { type: String, required: true },
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
      hasRail: false,
    };
  },
  watch: {
    active() {
      if (this.active !== this.dataActive) {
        this.gaToggle();
      }
    },
  },
  computed: {
    classes () {
      const {carbonPrefix, dataActive, hasRail} = this
      const classes = {
        [`${carbonPrefix}--header__action`]: true,
        [`${carbonPrefix}--header__menu-trigger`]: true,
        [`${carbonPrefix}--header__menu-toggle`]: true,
        [`${carbonPrefix}--header__action--active`]: dataActive,
        [`${carbonPrefix}--header__menu-toggle__hidden`]: !hasRail,
      }
      return classes
    },
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
