export default {
  title: 'Components/Form',
  argtypes: {
    actionSubmit: { action: 'actionSubmit' }
  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Form @submit.prevent="$props.actionSubmit">
      <TextInput
        id="sample-input"
        label="Example text label"
        helper-text="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
        placeholder="Optional placeholder text">
      </TextInput>
      <!-- <TextArea
        label="Example text label"
        helper-text="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
        placeholder="Optional placeholder text">
      </TextArea> -->
      <Select label="Example select label">
        <SelectOption disabled selected hidden>Choose an option</SelectOption>
        <SelectOptionGroup label="Category 1">
          <SelectOption value="SelectOption1">SelectOption 1</SelectOption>
          <SelectOption value="SelectOption2">SelectOption 2</SelectOption>
        </SelectOptionGroup>
        <SelectOptionGroup label="Category 2">
          <SelectOption value="SelectOption3">SelectOption 3</SelectOption>
          <SelectOption value="SelectOption4">SelectOption 4</SelectOption>
        </SelectOptionGroup>
      </Select>
      <Button>Submit</Button>
    </Form>
  `
})



