<template>
  <li
    data-option
    :data-value="value"
    :class="classes"
  >
    <a
      :aria-checked="internalSelected"
      :class="`${carbonPrefix}--dropdown-link`"
      href="javascript:void(0)"
      ref="link"
      role="menuitemradio"
      tabindex="-1"
    >
      <slot></slot>
    </a>
  </li>
</template>

<script>
import { CarbonPrefix } from '../../mixins'

const name = "DropdownItem"

export default {
  name,
  mixins: [CarbonPrefix],
  props: {
    value: {
      type: String,
      required: true,
    },
    selected: Boolean,
  },
  watch: {
    selected() {
      this.dataSelected = this.selected;
      this.$parent.$emit('selected', this);
    },
  },
  data() {
    return {
      dataSelected: undefined,
    };
  },
  mounted() {
    this.$_DropdownItem = true; // for use by parent with $children
    this.$parent.$emit('mounted', this);
  },
  beforeDestroy() {
    this.$parent.$emit('beforeDestroy', this);
  },
  computed: {
    classes () {
      const {carbonPrefix, internalSelected} = this
      return {
        [`${carbonPrefix}--dropdown-item`]: true,
        [`${carbonPrefix}--dropdown--selected`]: internalSelected,
      }
    },
    internalSelected: {
      get() {
        return this.dataSelected === undefined ? this.selected : this.dataSelected === true;
      },
      set(val) {
        this.dataSelected = val;
      },
    },
    internalContent() {
      return this.$refs.link.innerHTML;
    },
  },
  methods: {
    setFocus() {
      this.$refs.link.focus();
    },
  },
};
</script>
