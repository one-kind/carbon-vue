export default {
  title: 'Components/ToastNotification',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    title: { control: { type: 'text'} },
    subTitle: { control: { type: 'text'} },
    caption: { control: { type: 'text'} },
    kind: { control: { type: 'inline-radio', options: ['success', 'error', 'warning', 'info'] } },
    duration: { control: { type: 'range', min: 1, max: 60, step: 0.1} },
    closeOnClick: { control: { type: 'boolean'} },
    waitPreviousClose: { control: { type: 'boolean'} },
    position: { control: { type: 'inline-radio', options: ['top-right', 'top', 'top-left', 'bottom-right', 'bottom', 'bottom-left'] } }
  },
  args: {
    title: 'This is a sample message',
    subTitle: 'This is a subtitle',
    caption: 'the caption',
    kind: 'info',
    duration: 5,
    closeOnClick: true,
    waitPreviousClose: false,
    position: 'top-right',
  }
}

export const Default = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  template: `
    <Grid>
      <Grid col aspectRatio="1:1">
        <Button @click="handleClick">Toast me</Button>
      </Grid>
    </Grid>`,
  methods: {
    handleClick () {
      const {title, subTitle, caption, kind, duration, closeOnClick, waitPreviousClose, position} = this
      this.$toaster.open({
        title,
        subTitle,
        caption,
        kind,
        duration: duration * 1000,
        closeOnClick,
        waitPreviousClose,
        position
      });
    }
  }
})
