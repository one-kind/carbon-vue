export default {
  title: 'Components/Slider',
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Slider
      :theme="theme"
      :label="label"
      :disabled="disabled"
      :min="min"
      :max="max"
      :value="value"
      :step="step"
      :step-multiplier="stepMultiplier"
      :min-label="minLabel"
      :max-label="maxLabel"
    />
  `
})
Default.argTypes = {
  theme: { control: { type: 'text' } },
  label: { control: { type: 'text' } },
  disabled: { control: { type: 'boolean' } },
  min: { control: { type: 'text' } },
  max: { control: { type: 'text' } },
  value: { control: { type: 'text' } },
  step: { control: { type: 'text' } },
  stepMultiplier: { control: { type: 'text' } },
  minLabel: { control: { type: 'text' } },
  maxLabel: { control: { type: 'text' } },
}
Default.args = {
  theme: '',
  label: 'Slider label',
  disabled: false,
  min: '-50',
  max: '150',
  value: '50',
  step: '1',
  stepMultiplier: '10',
  minLabel: 'Min',
  maxLabel: 'Max',
}

export const Minimal = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Slider
      :label="label"
    />
  `
})
Minimal.argTypes = {
  label: { control: { type: 'text' } },
}
Minimal.args = {
  label: 'Slider label',
}

export const Events = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Slider
      :label="label"
      @change="onChange"
    />
  `
})
Events.argTypes = {
  label: { control: { type: 'text' } },
  onChange: { action: 'onChange' }
}
Events.args = {
  label: 'Slider label',
}

export const Vmodel = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data () {
    return {
      modelValue: 45
    }
  },
  template: `
    <Grid>
      <Grid row>
        <Slider
          :label="label"
          v-model="modelValue"
        />
      </Grid>
      <Grid row>
        <p><strong>result: </strong>{{modelValue}}</p>
      </Grid>
    </Grid>
  `
})
Vmodel.argTypes = {
  label: { control: { type: 'text' } }
}
Vmodel.args = {
  label: 'Slider label',
}

export const Skeleton = () => ({
  template: `<Slider skeleton />`
})
