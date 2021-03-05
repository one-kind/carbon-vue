export default {
  title: 'Components/Progress',
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Progress
      :initial-step="initialStep"
      :steps="steps"
      :vertical="vertical" />
    `
})
Default.argTypes = {
  initialStep: { control: { type: 'number' } },
  steps: { control: { type: 'array' } },
  vertical: { control: { type: 'boolean' } },
}
Default.args = {
  initialStep: 2,
  steps: [
    'Step 1',
    'Step 2 overflows and shows a tip',
    'Step 3',
    'Step 4',
    'Step 5',
  ],
  vertical: false,
}

export const Slotted = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data () {
    return {
      complete: [true, false, false, false, false]
    }
  },
  template: `
    <Grid>
      <Grid col :sm="16">
        <Grid row>
          <Progress
            :vertical="vertical">
            <ProgressStep label="Step 1" additional-info="Optional info" :complete="complete[0]"/>
            <ProgressStep label="Step 2 is a bit longer" :complete="complete[1]"/>
            <ProgressStep label="Step 3" :complete="complete[2]" tip-text="Step 3 has hard coded tip"/>
            <ProgressStep label="Step 4" :complete="complete[3]" invalid />
            <ProgressStep label="Step 4" :complete="complete[4]" disabled />
          </Progress>
        </Grid>
        <br>
        <Grid row>

          <strong>result:</strong>
          <p><input type="checkbox" v-model="complete[0]" /></p>
          <p><input type="checkbox" v-model="complete[1]" /></p>
          <p><input type="checkbox" v-model="complete[2]" /></p>
          <p><input type="checkbox" v-model="complete[3]" /></p>
          <p><input type="checkbox" v-model="complete[4]" /></p>
        </Grid>
      </Grid>
    </Grid>
    `
})
Slotted.argTypes = {
  vertical: { control: { type: 'boolean' } },
}
Slotted.args = {
  vertical: false,
}
