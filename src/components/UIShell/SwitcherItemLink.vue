<template>
  <component
    :is="tagType"
    v-on="$listeners"
    v-bind="linkProps"
    :class="[
      `${carbonPrefix}--switcher__item-link`,
      { [`${carbonPrefix}--switcher__item-link--selected`]: selected },
    ]"
  >
    <slot />
  </component>
</template>

<script>
import { CarbonPrefix, LinkMixin } from '../../mixins'

const name = 'SwitcherItemLink'

export default {
  name,
  mixins: [
    LinkMixin,
    CarbonPrefix
  ],
  props: {
    selected: Boolean,
  },
};
</script>
