<template>
  <li :class="classes">
    <component
      :is="tagType"
      v-on="$listeners"
      :class="internalClasses"
      :disabled="disabled"
      :to="to"
      :href="href"
      v-bind="linkProps"
    >
      <SideNavIcon v-if="hasNavIcon" small>
        <slot name="nav-icon" />
      </SideNavIcon>
      <SideNavLinkText>
        <slot />
      </SideNavLinkText>
    </component>
  </li>
</template>

<script>
import { CarbonPrefix, LinkMixin } from '../../mixins'

const name = "SideNavLink"

export default {
  name,
  inheritAttrs: false,
  mixins: [
    LinkMixin,
    CarbonPrefix
  ],
  props: {
    active: Boolean,
    icon: Object,
  },
  data() {
    return {
      hasNavIcon: this.$slots['nav-icon'],
    };
  },
  computed: {
    classes () {
      const classes = {
        [`${this.carbonPrefix}--side-nav__item`]: true
      }
      return classes
    },
    internalClasses () {
      const classes = {
        [`${this.carbonPrefix}--side-nav__link`]: true,
        [`${this.carbonPrefix}--side-nav__link--current`]: this.active,
      }
      return classes
    }
  },
  beforeUpdate() {
    this.hasNavIcon = !!this.$slots['nav-icon'];
  },
};
</script>
