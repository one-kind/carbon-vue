export default {
  title: 'Components/Tooltip',
  parameters: {
    layout: 'centered'
  }
}

export const DefaultInteractive = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <TooltipInteractive v-bind="$props">
      <template v-if="$props.use_label" slot="label">
        Tooltip label
      </template>
      <template v-if="$props.use_trigger" slot="trigger">
        <Icon icon="Filter" className="bx--overflow-menu__icon bx--toolbar-filter-icon" />
      </template>
      <template v-if="$props.use_content" slot="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, seed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Button>Click one</Button>
      </template>
    </TooltipInteractive>`
})
DefaultInteractive.storyName = 'Default (Interactive)';
DefaultInteractive.args = {
  alignment: 'center',
  direction: 'bottom',
  use_label: true,
  use_trigger: true,
  use_content: true,
  visible: false
}
DefaultInteractive.argTypes = {
  alignment: { control: { type: 'inline-radio', options: ['start', 'center', 'end'] } },
  direction: { control: { type: 'inline-radio', options: ['top', 'left', 'right', 'bottom'] } },
  use_label: { control: { type: 'boolean' } },
  use_trigger: { control: { type: 'boolean' } },
  use_content: { control: { type: 'boolean' } },
  visible: { control: { type: 'boolean' } },
}

export const MinimalInteractive = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <TooltipInteractive>
      <template v-if="$props.use_content" slot="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, seed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Button>Click one</Button>
      </template>
    </TooltipInteractive>`
})
MinimalInteractive.storyName = 'Minimal (Interactive)';
MinimalInteractive.argTypes = {
  use_content: { control: { type: 'boolean' } }
}
MinimalInteractive.args = {
  use_content: true
}

export const DefaultTooltip = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Tooltip v-bind="$props">
      <Icon icon="SettingsAdjust" :size="32" />
    </Tooltip>`
})
DefaultTooltip.storyName = 'Default (Tooltip)';
DefaultTooltip.args = {
  alignment: 'center',
  direction: 'bottom',
  tip: 'This is your tip!'
}
DefaultTooltip.argTypes = {
  alignment: { control: { type: 'inline-radio', options: ['start', 'center', 'end'] } },
  direction: { control: { type: 'inline-radio', options: ['top', 'left', 'right', 'bottom'] } },
  tip: { control: { type: 'text' } }
}

export const MinimalTooltip = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<Tooltip v-bind="$props" />`
})
MinimalTooltip.storyName = 'Minimal (Tooltip)';
MinimalTooltip.args = {
  tip: 'This is your tip!'
}
MinimalTooltip.argTypes = {
  tip: { control: { type: 'text' } }
}

export const DefaultDefinition = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<p>would you like to know the <TooltipDefinition v-bind="$props" /> to the Ultimate Question of Life, the Universe, and Everything?</p>`
})
DefaultDefinition.storyName = 'Default (Definition)';
DefaultDefinition.args = {
  alignment: 'center',
  direction: 'bottom',
  definition: '42! Calculated by an enormous supercomputer named Deep Thought over a period of 7.5 million years.',
  term: 'answer',
}
DefaultDefinition.argTypes = {
  alignment: { control: { type: 'inline-radio', options: ['start', 'center', 'end'] } },
  direction: { control: { type: 'inline-radio', options: ['top', 'left', 'right', 'bottom'] } },
  definition: { control: { type: 'text' } },
  term: { control: { type: 'text' } },
}

export const MinimalDefinition = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<TooltipDefinition v-bind="$props" />`
})
MinimalDefinition.storyName = 'Minimal (Definition)';
MinimalDefinition.args = {
  definition: 'Answer to the Ultimate Question of Life, the Universe, and Everything, calculated by an enormous supercomputer named Deep Thought over a period of 7.5 million years.',
  term: '42!',
}
MinimalDefinition.argTypes = {
  definition: { control: { type: 'text' } },
  term: { control: { type: 'text' } },
}
