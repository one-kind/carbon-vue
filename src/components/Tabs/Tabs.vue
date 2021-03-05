<template>
  <div :class="classes" @focusout="onFocusout" @focusin="onFocusin" style="width: 100%;">
    <div
      data-tabs
      :class="[`${carbonPrefix}--tabs`, { [`${carbonPrefix}--tabs--container`]: container }]"
      role="navigation"
      v-on="$listeners"
      v-bind="$attrs"
      @keydown.right.prevent="onRight"
      @keydown.left.prevent="onLeft"
      @keydown.down.prevent="onDown"
      @keydown.up.prevent="onUp"
      @keydown.esc.prevent="onEsc"
      v-if="!skeleton"
    >
      <div
        :class="[`${carbonPrefix}--tabs-trigger`, { ' ${carbonPrefix}--tabs-trigger--open': open }]"
        :tabindex="-1"
        ref="trigger"
        @click="onClick"
        @keydown.enter.prevent="onClick"
      >
        <a href="javascript:void(0)" :class="`${carbonPrefix}--tabs-trigger-text`" tabindex="-1">
          {{ currentTabLabel }}
        </a>
        <Icon icon="ChevronDown" size="16" />
      </div>
      <ul :class="[`${carbonPrefix}--tabs__nav`, { [`${carbonPrefix}--tabs__nav--hidden`]: !open }]" role="tablist">
        <li
          v-for="tab in tabs"
          :key="tab.uid"
          :class="[
            `${carbonPrefix}--tabs__nav-item`,
            {
              [`${carbonPrefix}--tabs__nav-item--selected`]: selectedId == tab.uid,
              [`${carbonPrefix}--tabs__nav-item--disabled`]: disabledTabs.indexOf(tab.uid) !== -1,
            },
          ]"
          role="tab"
          :aria-selected="selectedId == tab.uid ? 'true' : 'false'"
          :aria-disabled="disabledTabs.indexOf(tab.uid) !== -1"
        >
          <a
            :class="`${carbonPrefix}--tabs__nav-link`"
            href="javascript:void(0)"
            role="tab"
            :aria-controls="tab.uid"
            :id="`${tab.uid}-link`"
            @click="onTabClick(tab.uid)"
            @keydown.enter.prevent="onTabEnter(tab.uid)"
            ref="link"
            >{{ tab.label }}</a
          >
        </li>
      </ul>
    </div>
    <div v-if="!skeleton">
      <slot></slot>
    </div>
    <div :class="`${carbonPrefix}--tabs-trigger`" v-if="skeleton">
      <div :class="`${carbonPrefix}--tabs-trigger-text`">&nbsp;</div>
      <svg width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
        <path d="M10 0L5 5 0 0z" />
      </svg>
    </div>
    <ul :class="`${carbonPrefix}--tabs__nav ${carbonPrefix}--tabs__nav--hidden`" v-if="skeleton">
      <li :class="`${carbonPrefix}--tabs__nav-item ${carbonPrefix}--tabs__nav-item--selected`">
        <div :class="`${carbonPrefix}--tabs__nav-link`">&nbsp;</div>
      </li>
      <li :class="`${carbonPrefix}--tabs__nav-item`">
        <div :class="`${carbonPrefix}--tabs__nav-link`">&nbsp;</div>
      </li>
      <li :class="`${carbonPrefix}--tabs__nav-item`">
        <div :class="`${carbonPrefix}--tabs__nav-link`">&nbsp;</div>
      </li>
      <li :class="`${carbonPrefix}--tabs__nav-item`">
        <div :class="`${carbonPrefix}--tabs__nav-link`">&nbsp;</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { CarbonPrefix } from '../../mixins'
const name = 'Tabs'
export default {
  name,
  mixins: [CarbonPrefix],
  props: {
    noDefaultToFirst: Boolean,
    container: Boolean,
    skeleton: Boolean
  },
  data() {
    return {
      tabs: [],
      selectedId: undefined,
      disabledTabs: [],
      open: false,
      lastDisplayProp: undefined,
      // data is open
    };
  },
  created() {
    // add these on created otherwise mounted is too early.
    this.$on('mounted', srcComponent => this.onMount(srcComponent));
    this.$on('beforeDestroy', srcComponent => this.onBeforeDestroy(srcComponent));
    this.$on('selected', srcComponent => this.onSelected(srcComponent));
    this.$on('disabled', srcComponent => this.onDisabled(srcComponent));
    this.$on('enabled', srcComponent => this.onEnabled(srcComponent));
  },
  computed: {
    classes () {
      const {carbonPrefix} = this
      return {
        [`${carbonPrefix}--tabs`]: this.skeleton,
        [`${carbonPrefix}--skeleton`]: this.skeleton,
      }
    },
    triggerStyleOverride() {
      // <style carbon tweaks - DO NOT USE STYLE TAG as it causes SSR issues
      return { padding: 0 };
    },
    currentTabLabel() {
      const index = this.tabs.findIndex(tab => tab.uid === this.selectedId);
      return index > -1 ? this.tabs[index].label : '';
    },
  },
  methods: {
    onFocusin(ev) {
      if (
        ev.target.classList.contains(`${this.carbonPrefix}--tabs__nav-link`) ||
        ev.target.classList.contains(`${this.carbonPrefix}--tabs-trigger`)
      ) {
        // record display prop state
        this.lastDisplayProp = window.getComputedStyle(this.$refs.trigger).getPropertyValue('display');
      } else {
        this.lastDisplayProp = undefined;
      }
    },
    onFocusout(ev) {
      // works with onFocusin to determine whether focus needs to be set to a tab or trigger
      const displayProp = window.getComputedStyle(this.$refs.trigger).getPropertyValue('display');
      if (ev.relatedTarget) {
        if (
          ev.relatedTarget.classList.contains(`${this.carbonPrefix}--tabs__nav-link`) ||
          ev.relatedTarget.classList.contains(`${this.carbonPrefix}--tabs-trigger`)
        ) {
          return; // no need to do anything - focus is going somewhere
        } else {
          this.open = false;
        }
      } else {
        if (this.lastDisplayProp && this.lastDisplayProp !== displayProp) {
          if (displayProp === 'none') {
            // focus on selected tab
            const currentTabLink = this.$refs.link.find(link => link.getAttribute('aria-controls') === this.selectedId);
            if (currentTabLink) {
              currentTabLink.focus();
            }
          } else {
            this.$refs.trigger.focus();
          }
        } else {
          this.open = false;
        }
      }
    },
    onWindowResize() {
      // check whether trigger is displayed
      this.dataDropdownShown = window.getComputedStyle(this.$refs.trigger).getPropertyValue('display') !== 'none';
    },
    onDropChange(val) {
      this.onTabClick(val);
    },
    onMount(srcComponent) {
      this.tabs.push(srcComponent);
      if (this.tabs.filter(item => item.uid === srcComponent.uid).length > 1) {
        console.error(`Tabs: Duplicate ID specified for Tab, this may cause issues. {id: ${srcComponent.id}}}`);
      }
      this.checkDisabled(srcComponent);
      if (this.selectedId === undefined) {
        this.checkSelected();
      } else {
        if (srcComponent.internalSelected) {
          this.onTabClick(srcComponent.uid);
        }
      }
    },
    onBeforeDestroy(srcComponent) {
      const tabIndex = this.tabs.findIndex(item => item.uid === srcComponent.uid);
      if (tabIndex > -1) {
        const wasSelected = srcComponent.uid === this.selectedId;
        this.tabs.splice(tabIndex, 1);
        this.checkDisabled(srcComponent);
        if (wasSelected && this.tabs.length) {
          this.onTabClick(this.tabs[Math.max(tabIndex - 1, 0)].uid);
        }
      }
    },
    onTabClick(id) {
      if (this.disabledTabs.indexOf(id) === -1) {
        if (this.selectedId !== id) {
          let newIndex = -1;
          this.selectedId = id;
          for (let i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i].uid === id) {
              this.tabs[i].internalSelected = true;
              newIndex = i;
            } else {
              this.tabs[i].internalSelected = false;
            }
          }
          this.open = false;
          if (this.$refs.trigger) {
            // following code build sometimes trigger is not yet available
            this.$refs.trigger.focus();
          }
          this.$emit('tab-selected', newIndex);
        }
      }
    },
    onSelected(srcComponent) {
      this.onTabClick(srcComponent.uid);
    },
    onDisabled(srcComponent) {
      this.disabledTabs.push(srcComponent.uid);
    },
    onEnabled(srcComponent) {
      let arrIdx = this.disabledTabs.indexOf(srcComponent.uid);
      if (arrIdx !== -1) {
        this.disabledTabs.splice(arrIdx, 1);
      }
    },
    checkDisabled(srcComponent) {
      if (srcComponent.internalDisabled) {
        this.onDisabled(srcComponent);
      } else {
        this.onEnabled(srcComponent);
      }
    },
    checkSelected() {
      let id;
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i].internalSelected) {
          id = this.tabs[i].uid;
        }
      }
      if (!this.noDefaultToFirst && id === undefined && this.tabs.length) {
        id = this.tabs[0].uid;
      }
      if (id !== undefined) {
        this.$nextTick(() => {
          this.onTabClick(id);
        });
      }
    },
    isAllTabsDisabled() {
      return this.disabledTabs.length === this.tabs.length;
    },
    onTabEnter(id) {
      // const newIndex = this.tabs.findIndex(tab => tab.uid === id);
      this.onTabClick(id);
      this.$refs.trigger.focus();
    },
    onClick() {
      this.open = !this.open;
    },
    onEsc() {
      this.open = false;
    },
    onUp() {
      if (this.isAllTabsDisabled()) {
        return;
      }
      const displayProp = window.getComputedStyle(this.$refs.trigger).getPropertyValue('display');
      if (displayProp !== 'none') {
        const el = document.activeElement;
        let id;
        if (el.classList.contains(`${this.carbonPrefix}--tabs__nav-link`)) {
          id = el.getAttribute('aria-controls');
        } else {
          id = this.selectedId;
        }
        const newIndex = this.move(id, false);
        this.$refs.link[newIndex].focus();
      }
    },
    onDown() {
      if (this.isAllTabsDisabled()) {
        return;
      }
      const displayProp = window.getComputedStyle(this.$refs.trigger).getPropertyValue('display');
      if (displayProp !== 'none') {
        if (!this.open) {
          this.open = true;
        } else {
          const el = document.activeElement;
          let id;
          if (el.classList.contains(`${this.carbonPrefix}--tabs__nav-link`)) {
            id = el.getAttribute('aria-controls');
          } else {
            id = this.selectedId;
          }
          const newIndex = this.move(id, true);
          this.$refs.link[newIndex].focus();
        }
      }
    },
    onLeft() {
      if (this.isAllTabsDisabled()) {
        return;
      }
      const displayProp = window.getComputedStyle(this.$refs.trigger).getPropertyValue('display');
      if (displayProp === 'none') {
        const newIndex = this.move(this.selectedId, false);
        const newId = this.tabs[newIndex].uid;
        this.onTabClick(newId);
        this.$refs.link[newIndex].focus();
      }
    },
    move(id, next) {
      let newIndex;
      let newId;
      newIndex = this.tabs.findIndex(tab => tab.uid === id);
      if (newIndex > -1) {
        newIndex = next ? newIndex + 1 : newIndex - 1;
      }
      if (newIndex < 0 || newIndex >= this.tabs.length) {
        newIndex = next ? 0 : this.tabs.length - 1;
      }
      newId = this.tabs[newIndex].uid;
      while (newId === this.selectedId || this.disabledTabs.indexOf(newId) !== -1) {
        if (newIndex > -1) {
          newIndex = next ? newIndex + 1 : newIndex - 1;
        }
        if (newIndex < 0 || newIndex >= this.tabs.length) {
          newIndex = next ? 0 : this.tabs.length - 1;
        }
        newId = this.tabs[newIndex].uid;
      }
      return newIndex;
    },
    onRight() {
      if (this.isAllTabsDisabled()) {
        return;
      }
      const displayProp = window.getComputedStyle(this.$refs.trigger).getPropertyValue('display');
      if (displayProp === 'none') {
        const newIndex = this.move(this.selectedId, true);
        const newId = this.tabs[newIndex].uid;
        this.onTabClick(newId);
        this.$refs.link[newIndex].focus();
      }
    },
    selected(index) {
      let selItem = this.tabs[index ? index : -1];
      this.selectedId = selItem ? selItem.uid : undefined;
    },
  },
};
</script>
