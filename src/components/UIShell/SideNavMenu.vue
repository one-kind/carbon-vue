<template>
  <li
    :class="classes"
  >
    <button
      aria-haspopup="true"
      :aria-expanded="isExpanded ? 'true' : 'false'"
      :class="`${carbonPrefix}--side-nav__submenu`"
      role="menuitem"
      type="button"
      @click="doToggle"
      @keydown.space.prevent
      @keyup.space.prevent="doToggle"
      @keydown.enter.prevent="doToggle"
    >
      <SideNavIcon v-if="hasIcon">
        <slot name="nav-icon" />
      </SideNavIcon>
      <span :class="`${carbonPrefix}--side-nav__submenu-title`">{{ title }}</span>
      <SideNavIcon
        :class="`${carbonPrefix}--side-nav__submenu-chevron`"
        small
        :aria-label="isExpanded ? 'collapse nav menu' : 'expand nav menu'"
      >
        <Icon icon="ChevronDown" :size="20" class="side-nav-menu__chevron-svg" />
      </SideNavIcon>
    </button>
    <ul :class="`${carbonPrefix}--side-nav__menu`" ref="menu">
      <slot></slot>
    </ul>
  </li>
</template>

<script>

import { CarbonPrefix } from '../../mixins'

const name = 'SideNavMenu'

export default {
  name,
  mixins: [
    CarbonPrefix
  ],
  props: {
    active: Boolean,
    title: { type: String, required: true },
    expanded: { type: Boolean, default: false },
  },
  data() {
    return {
      isExpanded: false,
      hasNavIcon: false,
    };
  },
  mounted() {
    // NOTE: this.$slots is not reactive so needs to be managed on beforeUpdate
    this.hasNavIcon = !!this.$slots['nav-icon'];
  },
  beforeUpdate() {
    this.hasNavIcon = !!this.$slots['nav-icon'];
  },
  computed: {
    classes () {
      return {
        [`${this.carbonPrefix}--side-nav__item`]: true,
        [`${this.carbonPrefix}--side-nav__item--active`]: this.active,
        [`${this.carbonPrefix}--side-nav__item--icon`]: this.hasIcon
      }
    },
    hasIcon() {
      return !!this.$slots['nav-icon'];
    },
  },
  methods: {
    doToggle() {
      this.isExpanded = !this.isExpanded;
    },
  },
  watch: {
    expanded: {
      immediate: true,
      handler(value) {
        this.isExpanded = value;
      },
    },
  },
};
</script>
