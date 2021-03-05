<template>
  <nav
    :class="classes"
    :aria-hidden="!panelExpanded && !fixed ? 'true' : 'false'"
    :id="id"
    @focusout="onFocusout"
    @mousedown="onMouseDown"
  >
    <slot></slot>
    <SideNavFooter
      v-if="!fixed && !rail && !headerEmbedded"
      :expanded="panelExpanded"
      :assistiveText="assistiveToggleText"
      @toggle-expand="toggleExpand"
    />
  </nav>
</template>

<script>
import { CarbonPrefix } from '../../mixins'

const name = "SideNav"

export default {
  name,
  mixins: [
    CarbonPrefix
  ],
  props: {
    expanded: {
      type: Boolean
    },
    fixed: {
      type: Boolean
    },
    id: { type: String, required: true },
    assistiveToggleText: {
      type: String,
      default: null
    },
    rail: {
      type: Boolean
    },
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
      headerEmbedded: false,
    };
  },
  watch: {
    expanded() {
      this.panelExpanded = this.expanded;
    },
  },
  computed: {
    classes () {
      const {
        carbonPrefix,
        panelExpanded,
        rail,
        fixed,
        isChildOfHeader,
      } = this
      return [
        `${carbonPrefix}--side-nav`,
        `${carbonPrefix}--side-nav__navigation`,
        {
          [`${carbonPrefix}--side-nav--expanded`]: panelExpanded,
          [`${carbonPrefix}--side-nav--rail`]: rail,
          [`${carbonPrefix}--side-nav--collapsed`]: !panelExpanded && fixed,
          [`${carbonPrefix}--side-nav--ux`]: isChildOfHeader,
        },
      ]
    },
    isChildOfHeader() {
      return this.$parent.isHeader;
    },
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
    toggleExpand() {
      this.panelExpanded = !this.dataExpanded;
    },
  },
  model: {
    event: 'modelEvent',
    prop: 'expanded',
  },
};
</script>
