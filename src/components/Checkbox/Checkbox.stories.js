export default {
  title: 'Components/Checkbox',
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Fieldset>
      <Legend>Checkbox heading</Legend>
      <Checkbox v-bind="$props" id="checkbox-label-1" />
      <Checkbox v-bind="$props" id="checkbox-label-2" />
    </Fieldset>`
})

Default.storyName = 'Default';
Default.args = {
  label: 'checkbox',
  checked: false,
  value: 'check-1',
  mixed: false,
  disabled: false,
  hideLabel: false,
}
Default.argTypes = {
  label: { control: { type: 'text' } },
  checked: { control: { type: 'boolean' } },
  value: { control: { type: 'text' } },
  mixed: { control: { type: 'boolean' } },
  disabled: { control: { type: 'boolean' } },
  hideLabel: { control: { type: 'boolean' } },
}

export const Skeleton = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Fieldset>
      <Legend>Checkbox heading</Legend>
      <Checkbox skeleton />
      <Checkbox skeleton />
    </Fieldset>`
})
