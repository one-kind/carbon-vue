export default {
  title: 'Components/Accordion',
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Accordion v-bind="$props">
      <AccordionItem>
        <p slot="title">Section 1 title</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </AccordionItem>
      <AccordionItem open>
        <p slot="title">Section 2 title</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </AccordionItem>
      <AccordionItem>
        <h4 slot="title">Section 4 title (<em>the title can be a node</em>)</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </AccordionItem>
    </Accordion>
  `,
})

Default.argTypes = {
  align: { control: { type: 'select', options: ['end', 'start'] } },
  skeleton: { control: { type: 'boolean' } },
  theme: { control: {type: 'inline-radio', options: ['white', 'g10', 'g90', 'g100'] } },
}
Default.args = {
  align: 'end',
  skeleton: false,
  theme: null
}

export const Skeleton = () => ({
  template: `<Accordion skeleton></Accordion>`
})
