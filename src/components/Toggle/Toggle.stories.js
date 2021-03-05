export default {
  title: 'Components/Toggle',
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Toggle
      :checked="checked"
      :label="label"
      :value="value"
      :small="small"
      :disabled="disabled"
      :form-item="formItem"
      :hide-label="hideLabel">
      <template v-if="useTextLeft" slot="text-left">0</template>
      <template v-if="useTextRight" slot="text-right">1</template>
    </Toggle>
  `
})
Default.argTypes = {
  checked: { control: { type: 'boolean' } },
  label: { control: { type: 'text'} },
  value: { control: { type: 'text'} },
  small: { control: { type: 'boolean' } },
  disabled: { control: { type: 'boolean' } },
  formItem: { control: { type: 'boolean' } },
  hideLabel: { control: { type: 'boolean' } },
  useTextLeft: { control: { type: 'boolean' } },
  useTextRight: { control: { type: 'boolean' } },
}
Default.args = {
  checked: false,
  label: 'Toggle label',
  value: 'check-1',
  small: false,
  disabled: false,
  formItem: true,
  hideLabel: false,
  use_textLeft: true,
  use_textRight: true,
}

export const Minimal = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<Toggle :value="value" />`
})
Minimal.argTypes = {
  value: { control: { type: 'text'} },
}
Minimal.args = {
  value: 'check-1',
}

export const Events = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<Toggle :value="value" @change="actionChange" />`
})
Events.argTypes = {
  value: { control: { type: 'text'} },
  actionChange: { action: 'actionChange' },
}
Events.args = {
  value: 'check-1',
}

export const VModel = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data () {
    return {
      modelValue: true
    }
  },
  template: `
    <Grid>
      <Grid row>
        <Toggle :value="value" v-model="modelValue" />
      </Grid>
      <Grid row>
        <p><strong>result: </strong>{{modelValue}}</p>
      </Grid>
    </Grid>
  `
})
VModel.argTypes = {
  value: { control: { type: 'text'} },
}
VModel.args = {
  value: 'check-1',
}

export const ArrayVModel = () => ({
  data () {
    return {
      checks: []
    }
  },
  template: `
    <Grid>
      <Grid row>
        <Toggle v-model="checks" name="check-1" value="check-1" />
        <Toggle v-model="checks" name="check-2" value="check-2" />
        <Toggle v-model="checks" name="check-3" value="check-3" />
      </Grid>
      <Grid row>
        <strong>result:</strong>
        <p><input type="checkbox" value="check-1" v-model="checks"></p>
        <p><input type="checkbox" value="check-2" v-model="checks"></p>
        <p><input type="checkbox" value="check-3" v-model="checks"></p>
      </Grid>
    </Grid>
  `
})

export const Skeleton = () => ({
  template: `<Toggle skeleton />`
})
