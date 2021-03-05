export default {
  title: 'Components/Button',
  argTypes: {
    onClick: { action: 'clicked' },
  }
}

export const Primary = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div>
      <Button v-bind="$props" @click="onClick">primary Button</Button>
      <Button v-bind="$props" @click="onClick" href="#">primary link</Button>
    </div>
  `,
})

export const Secondary = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div>
      <Button v-bind="$props" to="/" @click="onClick" kind="secondary">Seconday Button</Button>
      <Button v-bind="$props" @click="onClick" href="#" kind="secondary">Secondary link</Button>
    </div>
  `,
})
export const Small = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div>
      <Button v-bind="$props" to="/" :click="onClick" small>Small Primary Button</Button>
      <Button v-bind="$props" to="/" @click="onClick" small kind="secondary">Small Secondary Button</Button>
      <Button v-bind="$props" to="/" @click="onClick" small kind="ghost" icon="AddFilled" iconDescription="Add">Small Ghost Button</Button>
      <Button v-bind="$props" to="/" @click="onClick" small kind="danger">Small Danger Button</Button>
      <Button v-bind="$props" onClick="onClick" href="#" small>Small Primary link</Button>
    </div>
  `,
})

export const Disabled = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Button v-bind="$props" @click="onClick" disabled>Disabled Button</Button>
  `,
})

export const Icon = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div>
      <Button v-bind="$props" icon="Search" iconDescription="Search" @click="onClick">
        Primary with icon
      </Button>
      &nbsp;
      <Button
        v-bind="$props"
        kind="secondary"
        icon="Search"
        iconDescription="Search"
        @click="onClick">
        Secondary with icon
      </Button>
      &nbsp;
      <Button
        v-bind="$props"
        small
        kind="primary"
        icon="Search"
        iconDescription="Search"
        @click="onClick">
        Small primary with icon
      </Button>
      &nbsp;
      <Button
        v-bind="$props"
        small
        kind="secondary"
        icon="Search"
        iconDescription="Search"
        @click="onClick">
        Small secondary with icon
      </Button>
    </div>
  `,
})

export const Ghost = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div>
      <Button
        v-bind="$props"
        kind="ghost"
        icon="AddFilled"
        iconDescription="Add"
        @click="onClick">
        Ghost button
      </Button>
      &nbsp;
      <Button
        v-bind="$props"
        kind="ghost"
        href="#"
        icon="AddFilled"
        iconDescription="Add"
        @click="onClick">
        Ghost link
      </Button>
    </div>
  `,
})

export const Danger = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div>
      <Button v-bind="$props" kind="danger" @click="onClick" className="some-class">
        Danger button
      </Button>
      &nbsp;
      <Button v-bind="$props" kind="danger" @click="onClick" href="#" className="some-class">
        Danger link
      </Button>
      &nbsp;
      <Button v-bind="$props" kind="danger--primary" @click="onClick" className="some-class">
        Danger Primary button
      </Button>
      &nbsp;
      <Button
        v-bind="$props"
        kind="danger--primary"
        @click="onClick"
        href="#"
        className="some-class">
        Danger Primary link
      </Button>
    </div>
  `,
})

export const Set = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <ButtonSet>
      <Button v-bind="$props" kind="secondary" @click="onClick" className="some-class">
        Secondary button
      </Button>
      <Button v-bind="$props" kind="primary" @click="onClick" className="some-class">
        Primary button
      </Button>
    </ButtonSet>
  `,
})

export const Skeleton = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div><Button v-bind="$props" @click="onClick" skeleton></Button><Button v-bind="$props" @click="onClick" skeleton small></Button></div>
  `,
})
