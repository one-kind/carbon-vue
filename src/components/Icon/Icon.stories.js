import IconCollection from './_IconCollection'

export default {
  title: 'Extras/Icon',
  argTypes: {
    description: { control: { type: 'text' } },
    fill: { control: { type: 'color' } },
    size: { control: { type: 'inline-radio', options: [16, 20, 24, 32] } },
  },
  args: {
    description: 'This is a description of the icon and what it does in context',
    size: 24
  }
}



export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data: () => {
    return {
      icons: IconCollection
    }
  },
  template: `<div>
      <Tooltip v-for="(iconName, index) in icons" :key="iconName" :tip="iconName" :direction="index < 20 ? 'bottom' : 'top' ">
        <Icon :icon="iconName" style="margin: 16px" v-bind="$props" />
      </Tooltip>
    </div>`,
});

export const Individual = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div>
      <Icon style="margin: 16px" v-bind="$props" />
    </div>`,
});

Individual.argTypes = {
  icon: { control: {type: 'select', options: IconCollection}},
  fill: { control: { type: 'color' } },
}

Individual.args = {
  icon: 'Add',
  fill: '#0f62fe'
}
