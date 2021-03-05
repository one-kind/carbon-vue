const fruits = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Kiwi Fruit',
  'Lemon',
  'Lime',
  'Mango',
  'Orange',
  'Passion Fruit',
  'Raisin',
  'Satsuma',
  'Tangerine',
  'Ugli Fruit',
  'Watermelon',
].map(item => {
  const nameVal = item.replace(/\W/, '_').toLowerCase();
  return {
    name: nameVal,
    label: item,
    value: `val-${nameVal}`,
  };
});

export default {
  title: 'Components/ComboBox',
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data () {
    return {
      options: fruits
    }
  },
  template: `
    <ComboBox
      :theme="theme"
      :label="label"
      :title="title"
      :disabled="disabled"
      :autoFilter="autoFilter"
      :autoHighlight="autoHighlight"
      :initialValue="initialValue"
      :helper-text="helperText"
      :invalid-message="invalidMessage"
      :value="initialValue"
      :options="options"
    />
    `
})
Default.argTypes = {
  autoFilter: { control: {type: 'boolean'} },
  autoHighlight: { control: {type: 'boolean'} },
  disabled: { control: {type: 'boolean'} },
  helperText: { control: { type: 'text' } },
  initialValue: { control: { type: 'text' } },
  invalidMessage: { control: { type: 'text' } },
  label: { control: { type: 'text' } },
  theme: { control: {type: 'inline-radio', options: ['white', 'g10', 'g90', 'g100'] } },
  title: { control: { type: 'text' } },
  useHelperTextSlot: { control: {type: 'boolean'} },
  useInvalidMessageSlot: { control: {type: 'boolean'} },
},
Default.args = {
  autoFilter: false,
  autoHighlight: false,
  disabled: false,
  helperText: null,
  initialValue: '',
  invalidMessage: null,
  label: 'Choose an option',
  theme: null,
  title: 'ComboBox title',
  useHelperTextSlot: true,
  useInvalidMessageSlot: true,
}

export const Filter = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data () {
    return {
      value: '',
      options: fruits,
      highlight: ''
    }
  },
  methods: {
    onFilter(filter) {
      let pat = new RegExp(`^${filter}`, 'ui');
      if (this.userFilter) {
        this.options = fruits.filter(opt => pat.test(opt.label)).slice(0);
      }
      if (this.userHighlight && this.options.length > 0) {
        let found = this.options.find(opt => pat.test(opt.label));
        if (found) {
          this.highlight = found.value;
        } else {
          this.highlight = '';
        }
      }
    },
  },
  template: `
    <ComboBox
      @filter="onFilter" :highlight="highlight"
      :options="options" :user-filter="$props.userFilter" :user-highlight="$props.userHighlight" >
    </ComboBox>
  `
})
Filter.storyName = 'user Filter and/or Highlight'
Filter.argTypes = {
  userFilter: { control: {type: 'boolean'} },
  userHighlight: { control: {type: 'boolean'} },
}
Filter.args = {
  userFilter: true,
  userHighlight: false
}

export const Slots = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data () {
    return {
      value: '',
      options: fruits,
      highlight: ''
    }
  },
  template: `
    <ComboBox
      :theme="theme"
      :label="label"
      :helper-text="helperText"
      :invalid-message="invalidMessage"
      :title="title"
      :disabled="disabled"
      :auto-filter="autoFilter"
      :auto-highlight="autoHighlight"
      :value="initialValue"
      :options="options">
      <template v-if="useHelperTextSlot" slot="helper-text">Some helpful text</template>
      <template v-if="useInvalidMessageSlot" slot="invalid-message">Invalid message text</template>
    </ComboBox>
  `
})
Slots.argTypes = {
  ...Default.argTypes,
}
Slots.args = {
  ...Default.args,
}

export const Events = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data () {
    return {
      value: '',
      options: fruits,
      highlight: ''
    }
  },
  template: `
    <ComboBox
      @change="actionChange" @filter="actionFilter"
      :options="options">
    </ComboBox>
  `
})
Events.argTypes = {
  actionChange: { action: 'actionChange' },
  actionFilter: { action: 'actionFilter' },
}

export const VModel = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data () {
    return {
      value: '',
      options: fruits,
      highlight: ''
    }
  },
  template: `
    <ComboBox
      v-model="value"
      :options="options">
    </ComboBox>
  `
})
