export default {
  title: 'Components/RadioButton',
  argTypes: {
    checked1: { control: { type: 'boolean'} },
    disabled2: { control: { type: 'boolean'} },
    vertical: { control: { type: 'boolean'} },
    labelLeft: { control: { type: 'boolean'} },
  },
  args: {
    checked1: true,
    disabled2: true,
    vertical: false,
    labelLeft: false
  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <RadioGroup :vertical="vertical">
      <RadioButton
        name="group-1"
        label="radio-1"
        value="value-1"
        :checked="checked1"
        :label-left="labelLeft"
      />
      <RadioButton
        name="group-1"
        label="radio-2"
        value="value-2"
        :disabled="disabled2"
        :label-left="labelLeft"
      />
      <RadioButton
        name="group-1"
        label="radio-3"
        value="value-3"
        :label-left="labelLeft"
      />
    </RadioGroup>
  `
})

export const Events = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <RadioGroup :vertical="vertical" @change="actionChange">
      <RadioButton
        name="group-1"
        label="radio-1"
        value="value-1"
        :checked="checked1"
        :label-left="labelLeft"
      />
      <RadioButton
        name="group-1"
        label="radio-2"
        value="value-2"
        :disabled="disabled2"
        :label-left="labelLeft"
      />
      <RadioButton
        name="group-1"
        label="radio-3"
        value="value-3"
        :label-left="labelLeft"
      />
    </RadioGroup>
  `
})

Events.argTypes = {
  actionChange: { action: 'actionChange' },
}
