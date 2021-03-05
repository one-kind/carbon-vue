<template>
  <tr
    :class="{ [`${carbonPrefix}--parent-row`]: expandingRow, [`${carbonPrefix}--expandable-row`]: dataExpanded }"
  >
    <td
      v-if="dataSomeExpandingRows"
      :class="`${carbonPrefix}--table-expand`"
      :data-previous-value="dataExpanded ? 'collapsed' : 'expanded'"
    >
      <button
        v-if="expandingRow"
        :class="`${carbonPrefix}--table-expand__button`"
        @click="toggleExpand"
        type="button"
        :aria-label="dataExpanded ? ariaLabelCollapseRow : ariaLabelExpandRow"
      >
        <Icon icon="ChevronRight" :class="`${carbonPrefix}--table-expand__svg`" />
      </button>
    </td>
    <td v-if="hasBatchActions" :class="`${carbonPrefix}--table-column-checkbox`">
      <Checkbox
        :form-item="false"
        :value="value"
        v-model="dataChecked"
        @change="onChange"
        ref="rowChecked"
        :label="ariaLabelForBatchCheckbox || `Select row ${value} for batch action`"
        hideLabel
      />
    </td>
    <slot />
    <td v-if="hasOverflowMenu" :class="`${carbonPrefix}--table-column-menu`">
      <OverFLowMenu v-bind="overflowMenuOptions">
        <OverFLowMenuItem
          v-for="(item, index) in overflowMenuButtons"
          :key="`${index}`"
          @click="
            onMenuItemClick({
              rowValue: value,
              menuIndex: index,
              menuLabel: item,
            })
          "
          >{{ item }}</OverFLowMenuItem
        >
      </OverFLowMenu>
    </td>
  </tr>
</template>

<script>
import { CarbonPrefix } from '../../mixins'

const name = 'DataTableRowInner'
export default {
  name,
  mixins: [CarbonPrefix],
  props: {
    ariaLabelForBatchCheckbox: String,
    checked: Boolean,
    expanded: Boolean,
    expandingRow: Boolean,
    ariaLabelExpandRow: { type: String, default: 'Expand current row' },
    ariaLabelCollapseRow: { type: String, default: 'Collapse current row' },
    overflowMenu: Array,
    someExpandingRows: Boolean,
    value: String,
  },
  model: {
    event: 'change',
    prop: 'checked',
  },
  data() {
    return {
      dataChecked: this.checked,
      dataExpanded: this.expanded,
      dataSomeExpandingRows: this.someExpandingRows,
      hasOverflowMenu: false,
    };
  },
  mounted() {
    this.checkSlots();
  },
  beforeUpdate() {
    this.checkSlots();
  },
  watch: {
    checked() {
      this.dataChecked = this.checked;
    },
    expanded() {
      this.dataExpanded = this.expanded;
    },
    someExpandingRows() {
      this.dataSomeExpandingRows = this.someExpandingRows;
    },
  },
  computed: {
    isDataTableRow() {
      return true;
    },
    hasBatchActions() {
      return this.$parent.$parent.hasBatchActions;
    },
    isChecked() {
      return this.dataChecked;
    },
    overflowMenuButtons() {
      return this.overflowMenu.filter(item => typeof item === 'string');
    },
    overflowMenuOptions() {
      const incomingOptions = this.overflowMenu.find(item => typeof item === 'object') || {};
      const defaultOptions = { flipMenu: true, label: 'Row overflow menu', tipPosition: 'left' };
      return { ...defaultOptions, ...incomingOptions };
    },
  },
  methods: {
    checkSlots() {
      // NOTE: this.$slots is not reactive so needs to be managed on beforeUpdate
      this.hasOverflowMenu = !!((this.overflowMenu && this.overflowMenu.length) || this.$slots['overflow-menu']);
    },
    onChange() {
      this.$parent.$parent.onRowCheckChange(this.value, this.dataChecked);
    },
    onMenuItemClick(val) {
      this.$parent.$parent.onMenuItemClick(val);
    },
    toggleExpand() {
      this.dataExpanded = !this.dataExpanded;
      this.$emit('expanded-change', this.dataExpanded);
    },
  },
};
</script>
