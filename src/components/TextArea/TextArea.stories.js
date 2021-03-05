export default {
  title: 'Components/TextArea',
  argTypes: {
    label: { controls: { type: 'text' } },
  },
  args: {
    label: 'Text area label',
  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data () {
    return {
      value: null
    }
  },
  template: `
    <TextArea
      :theme="$props.theme"
      :label="$props.label"
      :value="value"
      :disabled="$props.disabled"
      placeholder="sample placeholder"
      :helper-text="$props.helperText"
      :invalid-message="$props.invalidMessage">
    </TextArea>
  `
})
Default.argTypes = {
  theme: { control: {type: 'inline-radio', options: ['white', 'g10', 'g90', 'g100'] } },
  disabled: { controls: { type: 'boolean' } },
  helperText: { control: { type: 'text'}},
  invalidMessage: { control: { type: 'text'}},
}
Default.args = {
  theme: null,
  disabled: false,
  helperText: null,
  invalidMessage: null,
}

export const HelperAndErrorSlots = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data () {
    return {
      value: null
    }
  },
  template: `
    <TextArea
      :label="label"
      :value="value"
      :disabled="disabled"
      placeholder="sample placeholder"
      :helper-text="helperText"
      :invalid-message="invalidMessage">
      <template v-if="useHelperTextSlot" slot="helper-text">Some helpful text</template>
      <template v-if="useInvalidMessageSlot" slot="invalid-message">Invalid message text</template>
    </TextArea>
  `
})
// FIXME doesn't seem to do anything
HelperAndErrorSlots.argTypes = {
  disabled: { controls: { type: 'boolean' } },
  helperText: { control: { type: 'text'}},
  invalidMessage: { control: { type: 'text'}},
  useHelperTextSlot: { control: {type: 'boolean'} },
  useInvalidMessageSlot: { control: {type: 'boolean'} },
}
HelperAndErrorSlots.args = {
  disabled: false,
  helperText: null,
  invalidMessage: null,
  useHelperTextSlot: true,
  useInvalidMessageSlot: true,
}

export const Minimal = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <TextArea
      :label="label">
    </TextArea>
  `
})

export const Events = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <TextArea
      :label="label"
      @input="onInput">
    </TextArea>
  `
})
Events.argTypes = {
  onInput: { action: { type: 'onInput' } },
}

export const VModel = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data () {
    return {
      modelValue: 'modify this text'
    }
  },
  template: `
    <div>
      <TextArea
        :label="label"
        v-model="modelValue">
      </TextArea>
      <br>
      <p><strong>result: </strong>{{modelValue}}</p>
    </div>
  `
})
