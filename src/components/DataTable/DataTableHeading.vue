<template>
  <th :aria-sort="internalOrder" :style="skeleton && headingStyle" :id="uid">
    <button
      type="button"
      v-if="sortable"
      :class="[
        `${carbonPrefix}--table-sort`,
        {
          [`${carbonPrefix}--table-sort--active`]: this.internalOrder === 'descending',
          [`${carbonPrefix}--table-sort--active ${carbonPrefix}--table-sort--ascending`]:
            this.internalOrder === 'ascending',
        },
      ]"
      @click="onSortClick"
      :style="headingStyle"
    >
      <Wrapper :tag-type="headingLabelTag" :class="`${carbonPrefix}--table-header-label`">
        <slot>{{ heading }}</slot>
      </Wrapper>
      <Icon icon="ArrowDown" :class="`${carbonPrefix}--table-sort__icon`" />
      <Icon icon="Arrows" :class="`${carbonPrefix}--table-sort__icon-unsorted`" />
    </button>
    <Wrapper v-else :tag-type="headingLabelTag" :class="`${carbonPrefix}--table-header-label`" :style="headingStyle">
      <slot>{{ heading }}</slot>
    </Wrapper>
  </th>
</template>

<script>
import { CarbonPrefix, Uid } from '../../mixins'

const nextOrder = {
  ascending: 'descending',
  descending: 'none',
  none: 'ascending',
};
const name = 'DataTableHeading'
export default {
  name,
  mixins: [Uid, CarbonPrefix],
  props: {
    dataStyle: Object,
    heading: String,
    sortable: Boolean,
    order: { type: String, default: 'none' },
    skeleton: Boolean,
    headingStyle: Object,
  },
  data() {
    return {
      dataOrder: this.order,
    };
  },
  mounted() {
    this.$_DataTableHeading = true; // for use by parent with $children
    this.$parent.$emit('mounted', this);
  },
  beforeDestroy() {
    this.$parent.$emit('beforeDestroy', this);
  },
  watch: {
    order() {
      this.dataOrder = this.order;
    },
  },
  computed: {
    internalOrder: {
      get() {
        if (this.dataOrder !== 'ascending' && this.dataOrder !== 'descending') {
          return 'none';
        } else {
          return this.dataOrder;
        }
      },
      set(val) {
        if (['ascending', 'descending', 'none'].includes(val)) {
          this.dataOrder = val;
        }
      },
    },
    sortText() {
      return this.internalOrder !== 'descending'
        ? 'Sort rows by this header in descending order'
        : 'Sort rows by this header in ascending order';
    },
    headingLabelTag() {
      // no tag if non-blank skeleton
      return this.skeleton && this.heading && this.heading.length > 0 ? '' : 'span';
    },
  },
  model: {
    event: 'sort',
    prop: 'order',
  },
  methods: {
    onSortClick() {
      this.$parent.$emit('sort', this, nextOrder[this.internalOrder]);
    },
  },
};
</script>
