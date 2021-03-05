export default {
  title: 'Components/Tag',
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Tag
      :label="label"
      :disabled="disabled"
      :kind="kind"
    />
  `
})
Default.argTypes = {
  label: { control: { type: 'text' } },
  disabled: { control: { type: 'boolean' } },
  kind: { control: { type: 'text' } },
}
Default.args = {
  label: 'I am a tag',
  disabled: false,
  kind: 'gray',
}

export const Filter = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Tag
      filter @remove="onRemove"
      :label="label"
      :disabled="disabled"
      :kind="kind"
    />
  `
})
Filter.argTypes = {
  label: { control: { type: 'text' } },
  disabled: { control: { type: 'boolean' } },
  kind: { control: { type: 'text' } },
  onRemove: { action: 'onRemove' },
}
Filter.args = {
  label: 'I am a tag',
  disabled: false,
  kind: 'gray',
}

export const FilterAndClearAriaLabel = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Tag
      filter @remove="onRemove"
      :label="label"
      :disabled="disabled"
      :kind="kind"
      :clear-aria-label="clearAriaLabel"
    />
  `
})
FilterAndClearAriaLabel.argTypes = {
  label: { control: { type: 'text' } },
  disabled: { control: { type: 'boolean' } },
  kind: { control: { type: 'text' } },
  clearAriaLabel: { control: { type: 'text' } },
  onRemove: { action: 'onRemove' },
}
FilterAndClearAriaLabel.args = {
  label: 'I am a tag',
  disabled: false,
  kind: 'gray',
  clearAriaLabel: 'Custom clear filter'
}

export const Skeleton = () => ({
  template: `
    <Tag skeleton/>
  `
})
