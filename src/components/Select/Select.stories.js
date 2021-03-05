export default {
  title: 'Components/Select',
  argTypes: {
    label: { control: { type: 'text' } },
    hideLabel: { control: { type: 'boolean' } },
    inline: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    helperText: { control: { type: 'text' } },
    helperTextSlot: { control: { type: 'text' } },
    invalidMessage: { control: { type: 'text' } },
    invalidMessageSlot: { control: { type: 'text' } },
    useHelperTextSlot: { control: { type: 'boolean' } },
    useInvalidMessageSlot: { control: { type: 'boolean' } },
  },
  args: {
    label: 'Select label',
    hideLabel: false,
    inline: false,
    disabled: false,
    helperText: '',
    helperTextSlot: 'Some helpful text',
    invalidMessage: '',
    invalidMessageSlot: 'Invalid message text',
    useHelperTextSlot: false,
    useInvalidMessageSlot: false,
  }
}

const Template = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  template: `
    <Select
      v-bind="$props"
    >
      <template v-if="useHelperTextSlot" slot="helper-text">Some helpful text</template>
      <template v-if="useInvalidMessageSlot" slot="invalid-message">Invalid message text</template>
      <SelectOption disabled selected hidden>Choose an option</SelectOption>
      <SelectOption value="solong">A much longer SelectOption that is worth having around to check how text flows</SelectOption>
      <SelectOptionGroup label="Category 1">
        <SelectOption value="Select Option 1">Select Option 1</SelectOption>
        <SelectOption value="Select Option 2">Select Option 2</SelectOption>
      </SelectOptionGroup>
      <SelectOptionGroup label="Category 2">
        <SelectOption value="Select Option 3">Select Option 3</SelectOption>
        <SelectOption value="Select Option 4">Select Option 4</SelectOption>
      </SelectOptionGroup>
    </Select>
  `
})

export const Default = Template.bind({})

export const Slots = Template.bind({})
Slots.attrs = {
  useHelperTextSlot: true,
  useInvalidMessageSlot: true
}

export const Minimal = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  template: `
    <Select
      :label="$props.label"
    >
      <SelectOption disabled selected hidden>Choose an option</SelectOption>
      <SelectOption value="solong">A much longer SelectOption that is worth having around to check how text flows</SelectOption>
      <SelectOptionGroup label="Category 1">
        <SelectOption value="Select Option 1">Select Option 1</SelectOption>
        <SelectOption value="Select Option 2">Select Option 2</SelectOption>
      </SelectOptionGroup>
      <SelectOptionGroup label="Category 2">
        <SelectOption value="Select Option 3">Select Option 3</SelectOption>
        <SelectOption value="Select Option 4">Select Option 4</SelectOption>
      </SelectOptionGroup>
    </Select>
  `
})


// needs completion
