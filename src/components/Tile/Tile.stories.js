export default {
  title: 'Components/Tile'
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<Tile v-bind="$props">Default tile</Tile>`,
})
