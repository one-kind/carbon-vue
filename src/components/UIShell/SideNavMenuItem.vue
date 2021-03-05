<template>
  <li :class="classes">
    <component
      :is="tagType"
      v-on="$listeners"
      :class="[`${carbonPrefix}--side-nav__link`, { [`${carbonPrefix}--side-nav__link--current`]: active }]"
      v-bind="{ ...$attrs, ...linkProps }"
      role="menuitem"
    >
      <SideNavLinkText>
        <slot />
      </SideNavLinkText>
    </component>
  </li>
</template>

<script>
import { CarbonPrefix, LinkMixin } from '../../mixins'

const name = 'SideNavMenuItem'

export default {
  name,
  inheritAttrs: false,
  mixins: [
    LinkMixin,
    CarbonPrefix
  ],
  props: {
    active: Boolean,
  },
  computed: {
    classes () {
      return {
        [`${this.carbonPrefix}--side-nav__menu-item`]: true
      }
    }
  },
};
</script>
