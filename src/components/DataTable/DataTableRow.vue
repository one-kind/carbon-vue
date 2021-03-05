<template>
  <tbody v-if="someExpandingRows" :id="uid">
    <DataTableRowInner
      ref="row"
      v-bind="$attrs"
      v-on="$listeners"
      :expanding-row="dataExpandable"
      some-expanding-rows
      @expanded-change="onExpandedChange"
      :expanded="dataExpanded"
    >
      <slot />
    </DataTableRowInner>
    <tr
      v-if="dataExpandable"
      :class="`${carbonPrefix}--expandable-row ${carbonPrefix}--expandable-row--hidden`"
      data-child-row
    >
      <td colspan="999">
        <div :class="`${carbonPrefix}--child-row-inner-container`">
          <slot name="expandedContent" />
        </div>
      </td>
    </tr>
  </tbody>
  <DataTableRowInner v-else ref="row" v-bind="$attrs" v-on="$listeners" :id="uid">
    <slot />
  </DataTableRowInner>
</template>

<script>
import { CarbonPrefix, Uid } from '../../mixins'
import DataTableRowInner from './DataTableRowInner'

const name = 'DataTableRow'
export default {
  name,
  mixins: [Uid, CarbonPrefix],
  components: {
    DataTableRowInner
  },
  props: {
    expanded: Boolean,
  },
  data() {
    return {
      dataExpandable: false,
      dataSomeExpandingRows: false,
      dataExpanded: this.expanded,
    };
  },
  watch: {
    expanded() {
      if (this.dataExpanded !== this.expaned) {
        this.dataExpanded = this.expanded;
      }
    },
  },
  mounted() {
    // NOTE: this.$slots is not reactive so needs to be managed on beforeUpdate
    this.dataExpandable = !!this.$slots.expandedContent;
    this.$parent.$emit('mounted', this);
  },
  updated() {
    this.dataExpandable = !!this.$slots.expandedContent;
  },
  beforeDestroy() {
    this.$parent.$emit('beforeDestroy', this);
  },
  computed: {
    expandable() {
      return this.dataExpandable;
    },
    isDataTableRow() {
      return true;
    },
    isChecked: {
      get() {
        return this.$refs.row.dataChecked;
      },
      set(val) {
        this.$refs.row.dataChecked = val;
      },
    },
    isExpanded: {
      get() {
        return this.dataExpanded;
      },
      set(val) {
        this.dataExpanded = val;
      },
    },
    someExpandingRows: {
      get() {
        return this.dataSomeExpandingRows;
      },
      set(val) {
        this.dataSomeExpandingRows = val;
        if (this.$refs.row) {
          this.$refs.row.dataSomeExpandingRows = val;
        }
      },
    },
    value() {
      return this.$refs.row.value;
    },
  },
  methods: {
    onExpandedChange(val) {
      this.dataExpanded = val;
      this.$emit('expanded-change', this);
    },
  },
};
</script>
