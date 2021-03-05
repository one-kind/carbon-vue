export default {
  title: 'Components/Dropdown',
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Dropdown
      :placeholder="placeholder"
      :up="up"
      :inline="inline"
      :helper-text="helperText"
      :hide-selected="hideSelected"
      :invalid-message="invalidMessage"
      :label="label"
      :theme="theme"
      :disabled="disabled">
        <DropdownItem value="10"><span>Option with value 10 & 10.0</span></DropdownItem>
        <DropdownItem value="20">Option with value 20</DropdownItem>
        <DropdownItem value="30">Option with value 30</DropdownItem>
        <DropdownItem value="40">Option with value 40</DropdownItem>
        <DropdownItem value="50">Option with value 50</DropdownItem>
    </Dropdown>`,
});

Default.argTypes = {
  placeholder: { control: { type: 'text'}},
  up: { control: {type: 'boolean'} },
  inline: { control: {type: 'boolean'} },
  hideSelected: { control: {type: 'boolean'} },
  label: { control: { type: 'text'}},
  disabled: { control: {type: 'boolean'} },
  helperText: { control: { type: 'text'}},
  invalidMessage: { control: { type: 'text'}},
  theme: { control: {type: 'inline-radio', options: ['white', 'g10', 'g90', 'g100'] } },
}

Default.args = {
  placeholder: 'Choose an option',
  fill: '#0f62fe',
  up: false,
  inline: false,
  hideSelected: false,
  label: 'Select label',
  disabled: false,
  helperText: null,
  invalidMessage: null,
  theme: null
}

export const Slots = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Dropdown
      :placeholder="placeholder"
      :value="value"
      :up="up"
      :inline="inline"
      helper-text="helperText"
      :hide-selected="hideSelected"
      :invalid-message="invalidMessage"
      :label="label"
      :disabled="disabled">
      <template v-if="useHelperTextSlot" slot="helper-text">Some helpful text</template>
      <template v-if="useInvalidMessageSlot" slot="invalid-message">Invalid message text</template>
        <DropdownItem value="10"><span>Option with value 10 & 10.0</span></DropdownItem>
        <DropdownItem value="20">Option with value 20</DropdownItem>
        <DropdownItem value="30">Option with value 30</DropdownItem>
        <DropdownItem value="40">Option with value 40</DropdownItem>
        <DropdownItem value="50">Option with value 50</DropdownItem>
    </Dropdown>`,
});

Slots.argTypes = {
  placeholder: { control: { type: 'text'}},
  value: { control: { type: 'text'}},
  helperText: { control: { type: 'text'}},
  invalidMessage: { control: { type: 'text'}},
  up: { control: {type: 'boolean'} },
  inline: { control: {type: 'boolean'} },
  useHelperTextSlot: { control: {type: 'boolean'} },
  hideSelected: { control: {type: 'boolean'} },
  useInvalidMessageSlot: { control: {type: 'boolean'} },
  label: { control: { type: 'text'}},
  disabled: { control: {type: 'boolean'} },
}

Slots.args = {
  placeholder: 'Choose an option',
  helperText: 'helperText',
  invalidMessage: 'invalid message',
  value: '',
  up: false,
  inline: false,
  useHelperTextSlot: true,
  hideSelected: false,
  useInvalidMessageSlot: true,
  label: 'Select label',
  disabled: false,
}

export const Items = () => ({
  data () {
    return {
      items: [
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 4',
        'Option 5'
      ]
    }
  },
  template: `<Dropdown :items="items" />`,
});

export const Minimal = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Dropdown :value="value">
      <DropdownItem value="10"><span>Option with value 10 & 10.0</span></DropdownItem>
      <DropdownItem value="20">Option with value 20</DropdownItem>
      <DropdownItem value="30">Option with value 30</DropdownItem>
      <DropdownItem value="40">Option with value 40</DropdownItem>
      <DropdownItem value="50">Option with value 50</DropdownItem>
    </Dropdown>
  `,
});
Minimal.argTypes = {
  value: { control: { type: 'text'}}
}
Minimal.args = {
  value: ''
}

export const Events = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Dropdown :value="value" @change="onChange">
      <DropdownItem value="10"><span>Option with value 10 & 10.0</span></DropdownItem>
      <DropdownItem value="20">Option with value 20</DropdownItem>
      <DropdownItem value="30">Option with value 30</DropdownItem>
      <DropdownItem value="40">Option with value 40</DropdownItem>
      <DropdownItem value="50">Option with value 50</DropdownItem>
    </Dropdown>
  `,
});
Events.argTypes = {
  value: { control: { type: 'text'}},
  onChange: { action: 'changed' },
}
Events.args = {
  value: ''
}

export const VModel = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Dropdown :value="value" v-model="modelValue">
      <DropdownItem value="10"><span>Option with value 10 & 10.0</span></DropdownItem>
      <DropdownItem value="20">Option with value 20</DropdownItem>
      <DropdownItem value="30">Option with value 30</DropdownItem>
      <DropdownItem value="40">Option with value 40</DropdownItem>
      <DropdownItem value="50">Option with value 50</DropdownItem>
    </Dropdown>
  `,
});
VModel.storyName = 'v-model'
VModel.argTypes = {
  value: { control: { type: 'text'}},
  onChange: { action: 'changed' },
  modelValue: { control: { type: 'radio', options: ['10','20','30','40','50'] } },
}
VModel.args = {
  value: '',
  modelValue: '10'
}

export const Skeleton = () => ({
  template: `<div style="width: 300px"><Dropdown skeleton /></div>`,
});
