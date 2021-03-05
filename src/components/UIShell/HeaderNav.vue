<template>
  <nav :class="`${carbonPrefix}--header__nav`">
    <ul :class="`${carbonPrefix}--header__menu-bar`" role="menubar" :ariaLabeldBy="ariaLabelledBy">
      <slot />
    </ul>
  </nav>
</template>

<script>
import { CarbonPrefix } from '../../mixins'

const name = 'HeaderNav'

export default {
  name,
  mixins: [CarbonPrefix],
  props: {
    ariaLabelledBy: String,
  },
};
</script>
