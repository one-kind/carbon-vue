export default {
  title: 'Components/Overflow Menu',
  parameters: {
    layout: 'centered'
  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <OverflowMenu
      :flip-menu="flipMenu"
      :up="up"
      :offset="offset"
      :label="label" :tip-position="tipPosition"
      :tip-alignment="tipAlignment">
      <OverflowMenuItem primary-focus>list item 1</OverflowMenuItem>
      <OverflowMenuItem disabled>list item 2</OverflowMenuItem>
      <OverflowMenuItem danger>list item 3</OverflowMenuItem>
    </OverflowMenu>
  `
})
Default.argTypes = {
  flipMenu: { control: { type: 'boolean' } },
  up: { control: { type: 'boolean' } },
  offset: { control: { type: 'object' } },
  label: { control: { type: 'text' } },
  tipPosition: { control: { type: 'inline-radio', options: ['top', 'left', 'bottom', 'right'] } },
  tipAlignment: { control: { type: 'inline-radio', options: ['start', 'center', 'end'] } },
}
Default.args = {
  flipMenu: false,
  up: false,
  offset: {
    left: 0,
    top: 0,
  },
  label: 'Oveflow menu',
  tipPosition: 'right',
  tipAlignment: 'center',
}

export const Minimal = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <OverflowMenu
      :label="label">
      <OverflowMenuItem primary-focus>list item 1</OverflowMenuItem>
      <OverflowMenuItem disabled>list item 2</OverflowMenuItem>
      <OverflowMenuItem danger>list item 3</OverflowMenuItem>
    </OverflowMenu>
  `
})
Minimal.argTypes = {
  label: { control: { type: 'text' } },
}
Minimal.args = {
  label: 'Oveflow menu',
}
