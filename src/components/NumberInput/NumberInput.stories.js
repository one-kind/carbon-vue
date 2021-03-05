export default {
  title: 'Components/NumberInput',
  argTypes: {
    invalidMessage: { control: { type: 'text' } },
    helperText: { control: { type: 'text' } },
    onInput: { action: 'onInput' },
  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <NumberInput
      :theme="theme"
      :label="label"
      :invalid-message="invalidMessage"
      :helper-text="helperText"
      :disabled="disabled"
      :value="value"
      :min="min"
      :max="max"
      :step="step"
      :mobile="mobile"
      @input="onInput">
    </NumberInput>
  `
})
Default.argTypes = {
  theme: { control: { type: 'text' } },
  label: { control: { type: 'text' } },
  disabled: { control: { type: 'boolean' } },
  value: { control: { type: 'text' } },
  min: { control: { type: 'text' } },
  max: { control: { type: 'text' } },
  step: { control: { type: 'text' } },
  mobile: { control: { type: 'boolean' } },
}
Default.args = {
  theme: '',
  label: 'Text input label',
  disabled: false,
  value: '0',
  min: '0',
  max: '10',
  step: '1',
  mobile: false,
}

export const Skeleton = () => ({
  template: `<NumberInput skeleton />`
})
