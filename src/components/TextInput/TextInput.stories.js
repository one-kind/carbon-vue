export default {
  title: 'Components/TextInput',
  argTypes: {
    theme: { control: {type: 'inline-radio', options: ['white', 'g10', 'g90', 'g100'] } },
    inputType: { control: {type: 'inline-radio', options: ['text', 'email', 'password'] } },
    label: { controls: { type: 'text' } },
    value: { controls: { type: 'text' } },
    disabled: { controls: { type: 'boolean' } },
    passwordVisible: { controls: { type: 'boolean' } },
    passwordHideLabel: { controls: { type: 'text' } },
    passwordShowLabel: { controls: { type: 'text' } },
    placeholder: { controls: { type: 'text' } },
    helperText: { controls: { type: 'text' } },
    invalidMessage: { controls: { type: 'text' } },
    onClick: { action: 'clicked' },
    onChange: { action: 'changed' },
  },
  args: {
    theme: '',
    inputType: 'text',
    label: 'Text input label',
    value: '',
    disabled: false,
    passwordVisible: false,
    passwordHideLabel: 'Hide password',
    passwordShowLabel: 'Show password',
    placeholder: 'Sample placeholder',
    helperText: 'helperText',
    invalidMessage: '',
  }
}

export const Default = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  data () {
    return {
      inputValue: ''
    }
  },
  template: `
    <TextInput
      :theme="theme"
      :label="label"
      :value="value"
      :disabled="disabled"
      :type="inputType"
      :password-visible="passwordVisible"
      :password-hide-label="passwordHideLabel"
      :password-show-label="passwordShowLabel"
      :placeholder="placeholder"
      :helper-text="helperText"
      :invalid-message="invalidMessage">
    </TextInput>
  `
})

export const VModel = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  data () {
    return {
      inputValue: ''
    }
  },
  template: `
    <Grid>
      <Grid row>
        <TextInput
          :theme="theme"
          :label="label"
          v-model="inputValue"
          :disabled="disabled"
          :type="inputType"
          :password-visible="passwordVisible"
          :password-hide-label="passwordHideLabel"
          :password-show-label="passwordShowLabel"
          :placeholder="placeholder"
          :helper-text="helperText"
          :invalid-message="invalidMessage">
        </TextInput>
      </Grid>
      <Grid row>
        <p><strong>result: </strong>{{inputValue}}</p>
      </Grid>
    </Grid>
  `
})

