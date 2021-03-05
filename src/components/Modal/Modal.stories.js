export default {
  title: 'Components/Modal',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    actionShown: { action: 'actionShown' },
    actionHidden: { action: 'actionHidden' },
    actionHideRequest: { action: 'actionHideRequest' },
  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Modal
      :close-aria-label="closeAriaLabel"
      :size="size"
      :visible="visible"
      @modal-shown="actionShown"
      @modal-hidden="actionHidden"
      @modal-hide-request="actionHideRequest"
      :auto-hide-off="autoHideOff">
        <template v-if="use_label" slot="label">Label of modal</template>
        <template v-if="use_title" slot="title">Title of modal</template>
        <template v-if="use_content" slot="content"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, seed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></template>
    </Modal>
  `
})
Default.argTypes = {
  closeAriaLabel: { control: { type: 'text' } },
  use_label: { control: { type: 'boolean' } },
  use_title: { control: { type: 'boolean' } },
  use_content: { control: { type: 'boolean' } },
  size: { control: { type: 'inline-radio', options: ['xs', 'small', 'large'] } },
  visible: { control: { type: 'boolean' } },
  autoHideOff: { control: { type: 'boolean' } },
}
Default.args = {
  closeAriaLabel: 'Close',
  use_label: true,
  use_title: true,
  use_content: true,
  size: '',
  visible: true,
  autoHideOff: false,
}

export const NoBody = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Modal
      :close-aria-label="closeAriaLabel"
      :size="size"
      :visible="visible"
      @modal-shown="actionShown"
      @modal-hidden="actionHidden"
      @modal-hide-request="actionHideRequest"
      :auto-hide-off="autoHideOff">
        <template v-if="use_label" slot="label">Label of modal</template>
        <template v-if="use_title" slot="title">Title of modal</template>
    </Modal>
  `
})
NoBody.argTypes = {
  closeAriaLabel: { control: { type: 'text' } },
  use_label: { control: { type: 'boolean' } },
  use_title: { control: { type: 'boolean' } },
  size: { control: { type: 'inline-radio', options: ['xs', 'small', 'large'] } },
  visible: { control: { type: 'boolean' } },
  autoHideOff: { control: { type: 'boolean' } },
}
NoBody.args = {
  closeAriaLabel: 'Close',
  use_label: true,
  use_title: true,
  size: '',
  visible: true,
  autoHideOff: false,
}

export const Buttons = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Modal
      :close-aria-label="closeAriaLabel"
      :size="size"
      visible
      :primary-button-disabled="primaryButtonDisabled"
      @modal-shown="actionShown"
      @modal-hidden="actionHidden"
      @modal-hide-request="actionHideRequest"
      :auto-hide-off="autoHideOff">
        <template v-if="use_label" slot="label">Label of modal</template>
        <template v-if="use_title" slot="title">Title of modal</template>
        <template v-if="use_content" slot="content"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, seed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></template>
        <template v-if="use_secondaryButton" slot="secondary-button">secondary</template>
        <template v-if="use_primaryButton" slot="primary-button">primary</template>
    </Modal>
  `
})
Buttons.argTypes = {
  closeAriaLabel: { control: { type: 'text' } },
  use_label: { control: { type: 'boolean' } },
  use_title: { control: { type: 'boolean' } },
  use_content: { control: { type: 'boolean' } },
  size: { control: { type: 'inline-radio', options: ['xs', 'small', 'large'] } },
  use_secondaryButton: { control: { type: 'boolean' } },
  use_primaryButton: { control: { type: 'boolean' } },
  primaryButtonDisabled: { control: { type: 'boolean' } },
  autoHideOff: { control: { type: 'boolean' } },
}
Buttons.args = {
  closeAriaLabel: 'Close',
  use_label: true,
  use_title: true,
  use_content: true,
  size: '',
  use_secondaryButton: true,
  use_primaryButton: true,
  primaryButtonDisabled: false,
  autoHideOff: false
}

export const Programmatically = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  template: `
    <Grid>
      <Grid col aspectRatio="1:1">
        <Button @click="handleClick">Inject modal</Button>
      </Grid>
    </Grid>`,
  methods: {
    handleClick () {
      const {
        $modal,
        closeAriaLabel,
        size,
        autoHideOff,
        label,
        title,
        secondaryButton,
        primaryButton,
        actionShown,
        actionHidden,
        actionHideRequest,
      } = this
      $modal.open({
        closeAriaLabel,
        size,
        autoHideOff,
        label,
        title,
        secondaryButton,
        primaryButton,
        actionShown,
        actionHidden,
        actionHideRequest,
        inputElements: [
          { type: 'text', name: 'email', label: "Email address" },
          { type: 'boolean', name: 'rememberMe', label: "Remember Me" }
        ]
      });
    }
  }
})
Programmatically.argTypes = {
  closeAriaLabel: { control: { type: 'text' } },
  size: { control: { type: 'inline-radio', options: ['xs', 'small', 'large'] } },
  autoHideOff: { control: { type: 'boolean' } },
  label: { control: { type: 'text' } },
  title: { control: { type: 'text' } },
  secondaryButton: { control: { type: 'text' } },
  primaryButton: { control: { type: 'text' } },
}
Programmatically.args = {
  closeAriaLabel: 'Close',
  size: '',
  autoHideOff: false,
  label: 'Modal Label',
  title: 'Modal Title',
  secondaryButton: 'Secondary',
  primaryButton: 'Primary',
}
