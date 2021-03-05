export default {
  title: 'Extras/Pagination',
  argTypes: {
    onChange: { action: 'onChange' },
    backwardsText: { control: { type: 'text' } },
    forwardsText: { control: { type: 'text' } },
    pageNumberLabel: { control: { type: 'text' } },
    pageSizesLabel: { control: { type: 'text' } },
    numberOfItems: { control: { type: 'number' } },
    page: { control: { type: 'number' } },
    pageSizes: { control: {type: 'object' } },
    disableBackwards: { control: {type: 'boolean' } },
    disabledForwards: { control: {type: 'boolean' } },
  },
  args: {
    backwardsText: 'Previous page',
    forwardsText: 'Next page',
    pageNumberLabel: 'Page number',
    pageSizesLabel: 'Items per page',
    numberOfItems: 103,
    page: 2,
    pageSizes: [10, { value: 20, selected: true }, 30, 40, 50],
    disableBackwards: false,
    disabledForwards: false,
  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Pagination
      v-bind="$props"
    ></Pagination>
  `
})
