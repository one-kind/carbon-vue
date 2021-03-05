// TODO good way to declare props
export default {
  title: 'Components/DataTable',
  argTypes: {
    theme: { control: {type: 'inline-radio', options: ['white', 'g10', 'g90', 'g100'] } },
    rowSize: { name: 'Row Size', control: { type: 'select', options: ['', 'compact', 'short', 'tall'] } },
    autoWidth: { name: 'Auto width', description: 'Set auto width', control: { description: 'desc', type: 'boolean' } },
    sortable: { control: { type: 'boolean' } },
    title: { control: { type: 'text' } },
    actionBarAriaLabel: { control: { type: 'text' } },
    batchCancelLabel: { control: { type: 'text' } },
    zebra: { control: { type: 'boolean' } },
    columns: { control: { type: 'object' } },
    columns2: { control: { type: 'object' } },
    columns3: { control: { type: 'object' } },
    data: { control: { type: 'object' } },
    search: { action: '@search' },
    //search2 value: '@search='onFilter' searchLabel='Filter' searchPlaceholder='Filter' searchClearLabel='Clear filter'',
    searchLabel: { control: { type: 'text' } },
    searchPlaceholder: { control: { type: 'text' } },
    searchClearLabel: { control: { type: 'text' } },

    basicPagination: { control: { type: 'boolean' } },
    pagination: { control: { type: 'object' } },
    paginationAction: { action: 'pagination change' },

    //     value: ':pagination='{ numberOfItems: 23, pageSizes: [5, 10, 15, 20, 25]  }' @pagination='actionOnPagination'',

    // paginationInfinity: { control: { type: '' } },
    //     value: ':pagination='{ numberOfItems: Infinity, pageSizes: [5, 10, 15, 20, 25] }' @pagination='actionOnPagination'',

    rowSelects: { control: { type: 'object' } },
    // value: 'v-model='rowSelects' @row-select-change='actionRowSelectChange'',

    actions: { control: { type: 'text' } },
    action1: { action: { type: 'action1' } },
    action2: { action: { type: 'action2' } },
    action3: { action: { type: 'action3' } },
    actionNew: { action: { type: 'actionNew' } },
    onBatchAction1: { action: { type: 'onBachAction1' } },
    onBatchAction2: { action: { type: 'onBachAction2' } },
    onBatchAction3: { action: { type: 'onBachAction3' } },
    actionRowSelectChange: { action: { type: 'actionRowSelectChange' } },
    onOverflowMenuClick: { action: { type: 'onOverflowMenuClick' } },
    batchActions: { control: { type: 'text' } },
    hasExpandingRows: { control: { type: 'boolean' } },

    slottedHeadings: { control: { type: 'text' } },
    slottedData: { control: { type: 'text' } },
    expandingSlottedData: { control: { type: 'data' } },

    rowExpanded: { control: { type: 'number' } },

    htmlData: { control: { type: 'text' } },

    overflowMenu: { control: { type: 'text' } },
    helperText: { control: { type: 'text' } },

    helperTextSlot: { control: { type: 'text' } },

    scopedSlots: { control: { type: 'text' } },

    hasExpandAll: { control: { type: 'boolean' } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      internalData: this.data,
      filterValue: '',
      sortBy: undefined,
      sampleOverflowMenu: ['Start', 'Stop', 'Delete 3', { label: 'Overflow menu' }],
      pageStart: 1,
      pageNumber: 1,
      pageLength: 5,
    };
  },
  watch: {
    data() {
      this.internalData = this.data;
    },
  },
  computed: {
    filteredData() {
      let filteredData;
      if (this.filterValue) {
        const regex = new RegExp(this.filterValue, 'i');
        filteredData = this.internalData.filter(item => {
          return item.join('|').search(regex) >= 0;
        });
      } else {
        filteredData = this.internalData;
      }
      if (this.pageStart) {
        return filteredData.slice(this.pageStart, this.pageStart + this.pageLength);
      } else {
        return filteredData;
      }
    },
  },
  methods: {
    onFilter(val) {
      this.filterValue = val;
    },
    onSort(sortBy) {
      if (sortBy) {
        this.internalData.sort((a, b) => {
          const itemA = a[sortBy.index];
          const itemB = b[sortBy.index];

          if (sortBy.order === 'descending') {
            if (sortBy.index === 2) {
              // sort as number
              return parseFloat(itemA) - parseFloat(itemB);
            } else {
              return itemB.localeCompare(itemA);
            }
          }
          if (sortBy.order === 'ascending') {
            if (sortBy.index === 2) {
              // sort as number
              return parseFloat(itemB) - parseFloat(itemA);
            } else {
              return itemA.localeCompare(itemB);
            }
          }
          return 0;
        });
      }
    },
    actionOnPagination(ev) {
      this.paginationAction();
      this.pageStart = ev.start;
      this.pageNumber = ev.page;
      this.pageLength = ev.length;
    }
  },
  template: `
    <DataTable
      :theme="$props.theme"
      :row-size="$props.rowSize"
      :auto-width="$props.autoWidth"
      :sortable="$props.sortable"
      :title="$props.title"
      :action-bar-aria-label="$props.actionBarAriaLabel"
      :batch-cancel-label="$props.batchCancelLabel"
      :zebra="$props.zebra"
      :columns="$props.columns"
      @search="onFilter"
      :pagination="$props.pagination"
      @pagination="actionOnPagination"
      v-model="$props.rowSelects"
      @row-select-change="$props.actionRowSelectChange"
      @sort="onSort"
      :overflow-menu="$props.sampleOverflowMenu"
      :helper-text="$props.helperText"
      :data="filteredData"
      @overflow-menu-click="$props.onOverflowMenuClick"
      ref='table'>
      <template v-if='$props.useActions' slot='actions'>
        <DataTableAction @click='$props.action1'>
          <svg fill-rule='evenodd' height='16' name='download' role='img' viewBox='0 0 14 16' width='14' aria-label='Download' alt='Download'>
            <title>Download</title>
            <path d='M7.506 11.03l4.137-4.376.727.687-5.363 5.672-5.367-5.67.726-.687 4.14 4.374V0h1v11.03z'></path>
            <path d='M13 15v-2h1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-2h1v2h12z'></path>
          </svg>
        </DataTableAction>
        <DataTableAction @click='$props.action2'>
          <svg fill-rule='evenodd' height='16' name='edit' role='img' viewBox='0 0 16 16' width='16' aria-label='Edit' alt='Edit'>
            <title>Edit</title>
            <path d='M7.926 3.38L1.002 9.72V12h2.304l6.926-6.316L7.926 3.38zm.738-.675l2.308 2.304 1.451-1.324-2.308-2.309-1.451 1.329zM.002 9.28L9.439.639a1 1 0 0 1 1.383.03l2.309 2.309a1 1 0 0 1-.034 1.446L3.694 13H.002V9.28zM0 16.013v-1h16v1z'></path>
          </svg>
        </DataTableAction>
        <DataTableAction @click='$props.action3'>
          <svg fill-rule='evenodd' height='16' name='settings' role='img' viewBox='0 0 15 16' width='15' aria-label='Settings' alt='Settings'>
            <title>Settings</title>
            <path d='M7.53 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z'></path>
            <path d='M6.268 2.636l-.313.093c-.662.198-1.28.52-1.822.946l-.255.2-1.427-.754-1.214 1.735 1.186 1.073-.104.31a5.493 5.493 0 0 0-.198 2.759l.05.274L1 10.33l1.214 1.734 1.06-.56.262.275a5.5 5.5 0 0 0 2.42 1.491l.312.093L6.472 15H8.59l.204-1.636.313-.093a5.494 5.494 0 0 0 2.21-1.28l.26-.248 1.09.576 1.214-1.734-1.08-.977.071-.29a5.514 5.514 0 0 0-.073-2.905l-.091-.302 1.15-1.041-1.214-1.734-1.3.687-.257-.22a5.487 5.487 0 0 0-1.98-1.074l-.313-.093L8.59 1H6.472l-.204 1.636zM5.48.876A1 1 0 0 1 6.472 0H8.59a1 1 0 0 1 .992.876l.124.997a6.486 6.486 0 0 1 1.761.954l.71-.375a1 1 0 0 1 1.286.31l1.215 1.734a1 1 0 0 1-.149 1.316l-.688.622a6.514 6.514 0 0 1 .067 2.828l.644.581a1 1 0 0 1 .148 1.316l-1.214 1.734a1 1 0 0 1-1.287.31l-.464-.245c-.6.508-1.286.905-2.029 1.169l-.124.997A1 1 0 0 1 8.59 16H6.472a1 1 0 0 1-.992-.876l-.125-.997a6.499 6.499 0 0 1-2.274-1.389l-.399.211a1 1 0 0 1-1.287-.31L.181 10.904A1 1 0 0 1 .329 9.59l.764-.69a6.553 6.553 0 0 1 .18-2.662l-.707-.64a1 1 0 0 1-.148-1.315l1.214-1.734a1 1 0 0 1 1.287-.31l.86.454a6.482 6.482 0 0 1 1.576-.819L5.48.876z'></path>
          </svg>
        </DataTableAction>
        <Button small @click='$props.actionNew'>Add new</Button>
      </template>
      <template v-if='$props.useBatchActions' slot='batch-actions'>
        <Button @click='$props.onBatchAction1'>
          Delete
          <Icon icon='TrashCan' class='bx--btn__icon'/>
        </Button>
        <Button @click='$props.onBatchAction2'>
          Save
          <Icon icon='Save' class='bx--btn__icon'/>
        </Button>
        <Button @click='$props.onBatchAction3'>
          Download
          <Icon icon='Download' class='bx--btn__icon'/>
        </Button>
      </template>
    </DataTable>
  `
})

export const Default = Template.bind({})
Default.args = {
  theme: null,
  rowSize: '',
  autoWidth: false,
  sortable: false,
  title: 'Table title',
  actionBarAriaLabel: 'Custom action bar aria label',
  batchCancelLabel: 'Cancel',
  zebra: false,
  pagination: { numberOfItems: 23, pageSizes: [5, 10, 15, 20, 25]  },
  columns: [
    'Name',
    'Protocol',
    'Port',
    'Rule',
    'Attached Groups',
    'Status'
  ],
  data: [
    [
      'Load Balancer 11',
      'HTTP',
      '80',
      'Round Robin',
      'Maureen’s VM Groups',
      'Active'
    ],
    [
      'Load Balancer 4',
      'HTTP',
      '81',
      'Round Robin',
      'Maureen’s VM Groups',
      'Active'
    ],
    [
      'Load Balancer 2',
      'HTTP',
      '82',
      'Round Robin',
      'Maureen’s VM Groups',
      'Active'
    ],
    [
      'Load Balancer 3',
      'HTTP',
      '8080',
      'Round Robin',
      'Maureen’s VM Groups',
      'Offline'
    ],
    [
      'Load Balancer 5',
      'HTTP',
      '8001',
      'Round Robin',
      'Maureen’s VM Groups',
      'Active'
    ],
    [
      'Load Balancer 11',
      'HTTP',
      '10',
      'Round Robin',
      'Max’s VM Groups',
      'Active'
    ],
    [
      'Load Balancer 24',
      'HTTP',
      '11',
      'Round Robin',
      'Max’s VM Groups',
      'Active'
    ],
    [
      'Load Balancer 22',
      'HTTP',
      '12',
      'Round Robin',
      'Max’s VM Groups',
      'Active'
    ],
    [
      'Load Balancer 23',
      'HTTP',
      '1080',
      'Round Robin',
      'Max’s VM Groups',
      'Active'
    ],
    [
      'Load Balancer 25',
      'HTTP',
      '1001',
      'Round Robin',
      'Max’s VM Groups',
      'Failed'
    ],
    [
      'Load Balancer 311',
      'HTTP',
      '280',
      'Round Robin',
      'John’s VM Groups',
      'Active'
    ],
    [
      'Load Balancer 324',
      'HTTP',
      '281',
      'Round Robin',
      'John’s VM Groups',
      'Active'
    ],
    [
      'Load Balancer 322',
      'HTTP',
      '282',
      'Round Robin',
      'John’s VM Groups',
      'Offline'
    ],
    [
      'Load Balancer 323',
      'HTTP',
      '2080',
      'Round Robin',
      'John’s VM Groups',
      'Active'
    ],
    [
      'Load Balancer 325',
      'HTTP',
      '2001',
      'Round Robin',
      'John’s VM Groups',
      'Active'
    ]
  ],
  useActions: true,
  useBatchActions: true,
  helperText: 'This is some helpful text'
}

export const InfinitePagination = Template.bind({})
InfinitePagination.args = {
  ...Default.args,
  pagination: {numberOfItems: Infinity, pageSizes: [5, 10, 15, 20, 25] }
}

// TODO https://github.com/carbon-design-system/carbon-components-vue/blob/master/storybook/stories/cv-data-table-story.js
