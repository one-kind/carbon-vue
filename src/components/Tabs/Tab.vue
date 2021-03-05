<template>
  <div
    :id="uid"
    role="tabpanel"
    :aria-labelledby="`${uid}-link`"
    :aria-hidden="!dataSelected ? 'true' : 'false'"
    :hidden="!dataSelected"
    :class="[`${carbonPrefix}--tab-content`]"
  >
    <slot>
      <!-- Content for first tab goes here. -->
    </slot>
  </div>
</template>

<script>
import { CarbonPrefix, Uid } from '../../mixins'
const name = 'Tab'
export default {
  name,
  mixins: [Uid, CarbonPrefix],
  props: {
    selected: Boolean,
    disabled: Boolean,
    label: { type: String, required: true },
  },
  data() {
    return {
      dataSelected: this.selected,
    };
  },
  watch: {
    selected() {
      if (this.selected) {
        this.$parent.$emit('selected', this);
      }
    },
    disabled() {
      if (this.disabled) {
        this.$parent.$emit('disabled', this);
      } else {
        this.$parent.$emit('enabled', this);
      }
    },
  },
  computed: {
    internalSelected: {
      get() {
        return this.dataSelected;
      },
      set(val) {
        this.dataSelected = val;
      },
    },
    internalDisabled() {
      return this.disabled;
    },
  },
  mounted() {
    this.$_Tab = true; // for use by parent with $children
    this.$parent.$emit('mounted', this);
  },
  beforeDestroy() {
    this.$parent.$emit('beforeDestroy', this);
  },
};
</script>
