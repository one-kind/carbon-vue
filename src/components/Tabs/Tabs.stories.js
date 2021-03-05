export default {
  title: 'Components/Tabs',
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Tabs
      :container="container"
      @tab-selected="actionSelected" aria-label="navigation tab label">
      <tab id="tab-1"label="Tab link 1">
        Sample tab panel content 1
      </tab>
      <tab id="tab-2"label="Tab link 2"
      :selected="selected">
        Sample tab panel content 2
      </tab>
      <tab id="tab-3"label="Tab link 3">
        Sample tab panel content 3
      </tab>
      <tab id="tab-4"label="Tab link 4"
      :disabled="disabled">
        Sample tab panel content 4
      </tab>
      <tab id="tab-5"label="Tab link 5">
        Sample tab panel content 5 <a href="javascript:void(0)">with some active content</a>
      </tab>
    </Tabs>
  `
})
Default.argTypes = {
  container: { control: { type: 'boolean' } },
  selected: { control: { type: 'boolean' } },
  disabled: { control: { type: 'boolean' } },
  actionSelected: { action: 'actionSelected' },
}
Default.args = {
  container: false,
  selected: false,
  disabled: false,
}

export const Minimal = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Tabs
      :container="container" aria-label="navigation tab label">
      <Tab label="Tab link 1">
        Sample tab panel content 1
      </Tab>
      <Tab label="Tab link 2" >
        Sample tab panel content 2
      </Tab>
      <Tab label="Tab link 3">
        Sample tab panel content 3
      </Tab>
      <Tab label="Tab link 4" >
        Sample tab panel content 4
      </Tab>
      <Tab label="Tab link 5">
        Sample tab panel content 5 <a href="javascript:void(0)">with some active content</a>
      </Tab>
    </Tabs>
  `
})
Minimal.argTypes = {
  container: { control: { type: 'boolean' } },
}
Minimal.args = {
  container: false,
}

export const TabsForData = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      dataSet1: [
        {
          name: 'item1',
          label: 'Item 1',
          content: 'Content for item 1',
        },
        {
          name: 'item2',
          label: 'Item 2',
          content: 'Content for item 2',
        },
      ],
      dataSet2: [
        {
          name: 'item3',
          label: 'Item 3',
          content: 'Content for item 3',
        },
        {
          name: 'item4',
          label: 'Item 4',
          content: 'Content for item 4',
        },
      ],
      activeSet: undefined,
      selectedIndex: 0,
    };
  },
  methods: {
    changeSet() {
      this.activeSet = this.activeSet === this.dataSet1 ? this.dataSet2 : this.dataSet1;
      this.selectedIndex = 0;
    },
    addToSet(selectNew) {
      const id = `${Date.now()}`;
      this.activeSet.push({
        name: id,
        label: `${id}`,
        content: `Content for ${id}`,
      });
      if (selectNew) {
        this.selectedIndex = this.activeSet.length - 1;
      }
    },
    removeFromSet() {
      const rnd = Math.floor(Math.random() * this.activeSet.length);
      this.activeSet.splice(rnd, 1);
    },
    onTabSelected(index) {
      this.selectedIndex = index;
    },
  },
  mounted() {
    this.activeSet = this.dataSet1;
  },
  template: `
    <Grid>
      <Grid row>
        <tabs
          :container="container" aria-label="navigation tab label" @tab-selected="onTabSelected">
          <Tab :key="tab.name" :label="tab.label" v-for="(tab, index) in activeSet" v-html="tab.content" :data-selected="index===selectedIndex" :selected="index === selectedIndex">
          </Tab>
        </tabs>
      </Grid>
      <Grid row>
        <ButtonSet>
          <Button small @click="changeSet">Change set</Button>
          <Button small @click="addToSet()">Add to set</Button>
          <Button small @click="addToSet(true)">Add to set & select</Button>
          <Button small @click="removeFromSet">Remove from set</Button>
        </ButtonSet>
      </Grid>
    </Grid>
  `
})
TabsForData.argTypes = {
  container: { control: { type: 'boolean' } },
}
TabsForData.args = {
  container: false,
}

export const Skeleton = () => ({
  template: `<Tabs skeleton />`
})

