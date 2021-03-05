export default {
  title: 'Components/TimePicker',
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <TimePicker
      :theme="theme"
      :label="label"
      :time="time"
      :ampm="ampm"
      :timezone="timezone"
      :timezones="timezones"
      :pattern="pattern"
      :placeholder="placeholder"
      :timzones-select-label="timezonesSelectLabel"
      :ampm-select-label="ampmSelectLabel"
      :invalid-message="invalidMessage"
      :disabled="disabled" :form-item="true"
    />
  `
})
Default.argTypes = {
  theme: { control: { type: 'text' } },
  label: { control: { type: 'text' } },
  time: { control: { type: 'text' } },
  ampm: { control: { type: 'text' } },
  timezone: { control: { type: 'text' } },
  timezones: { control: { type: 'array' } },
  pattern: { control: { type: 'text' } },
  placeholder: { control: { type: 'text' } },
  timezonesSelectLabel: { control: { type: 'text' } },
  ampmSelectLabel: { control: { type: 'text' } },
  disabled: { control: { type: 'boolean' } },
  invalidMessage: { control: { type: 'text' } },
}
Default.args = {
  theme: '',
  label: 'Select time',
  time: '',
  ampm: 'AM',
  timezone: 'timezone1',
  timezones: [
    {
      'label': 'Timezone-1',
      'value': 'timezone1',
    },
    {
      'label': 'Timezone-2',
      'value': 'timezone2',
    }
  ],
  pattern: '(1[012]|[1-9]):[0-5][0-9](\\s)?(?i)',
  placeholder: 'hh:mm',
  timezonesSelectLabel: 'Timezone label',
  ampmSelectLabel: 'AM/PM',
  disabled: false,
  invalidMessage: '',
}

export const InvalidSlot = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <TimePicker
      :theme="theme"
      :label="label"
      :time="time"
      :ampm="ampm"
      :timezone="timezone"
      :timezones="timezones"
      :pattern="pattern"
      :placeholder="placeholder"
      :timzones-select-label="timezonesSelectLabel"
      :ampm-select-label="ampmSelectLabel"
      :invalid-message="invalidMessage"
      :disabled="disabled" :form-item="true">
        <template v-if="useInvalidMessageSlot" slot="invalid-message">Invalid time.</template>
    </TimePicker>
  `
})
InvalidSlot.argTypes = {
  theme: { control: { type: 'text' } },
  label: { control: { type: 'text' } },
  time: { control: { type: 'text' } },
  ampm: { control: { type: 'text' } },
  timezone: { control: { type: 'text' } },
  timezones: { control: { type: 'array' } },
  pattern: { control: { type: 'text' } },
  placeholder: { control: { type: 'text' } },
  timezonesSelectLabel: { control: { type: 'text' } },
  ampmSelectLabel: { control: { type: 'text' } },
  useInvalidMessageSlot: { control: { type: 'boolean' } },
  disabled: { control: { type: 'boolean' } },
  invalidMessage: { control: { type: 'text' } },
}
InvalidSlot.args = {
  theme: '',
  label: 'Select time',
  time: '',
  ampm: 'AM',
  timezone: 'timezone1',
  timezones: [
    {
      'label': 'Timezone-1',
      'value': 'timezone1',
    },
    {
      'label': 'Timezone-2',
      'value': 'timezone2',
    }
  ],
  pattern: '(1[012]|[1-9]):[0-5][0-9](\\s)?(?i)',
  placeholder: 'hh:mm',
  timezonesSelectLabel: 'Timezone label',
  ampmSelectLabel: 'AM/PM',
  useInvalidMessageSlot: true,
  disabled: false,
  invalidMessage: '',
}

export const Minimal = () => ({
  template: `
    <TimePicker :form-item="true" />
  `
})

export const Events = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <TimePicker
    @update:time="onUpdateTime"
    @update:ampm="onUpdateAmpm"
    @update:timezone="onUpdateTimezone" :form-item="true" />
  `
})
Events.argTypes = {
  onUpdateTime: { action: 'onUpdateTime' },
  onUpdateAmpm: { action: 'onUpdateAmpm' },
  onUpdateTimezone: { action: 'onUpdateTimezone' },
}
