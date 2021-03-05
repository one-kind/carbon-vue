export default {
  title: 'Components/Loading',
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Loading
      :active="isActive"
      :overlay="overlay"
    />
  `
})
Default.argTypes = {
  active: { control: { type: 'boolean' } },
  overlay: { control: { type: 'boolean' } },
}
Default.args = {
  active: true,
  overlay: true,
}

export const FixedOverlay = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Loading
      :active="isActive"
      overlay
    />
  `
})
FixedOverlay.argTypes = {
  active: { control: { type: 'boolean' } },
}
FixedOverlay.args = {
  active: true,
}

export const Events = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Loading
      :active="isActive"
      @loading-end="actionEnd"
      :overlay="overlay"
    />
  `
})
Events.argTypes = {
  active: { control: { type: 'boolean' } },
  actionEnd: { action: 'actionEnd' },
  overlay: { control: { type: 'boolean' } },
}
Events.args = {
  active: true,
  overlay: true,
}
