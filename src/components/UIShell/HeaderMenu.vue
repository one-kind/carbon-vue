<template>
  <li
    :class="`${carbonPrefix}--header__submenu`"
    @mouseenter="doHoverToggle(true)"
    @mouseleave="doHoverToggle(false)"
  >
    <a
      aria-haspopup="true"
      :aria-expanded="expanded ? 'true' : 'false'"
      :class="`${carbonPrefix}--header__menu-item ${carbonPrefix}--header__menu-title`"
      href="javascript:void(0)"
      role="menuitem"
      tabindex="0"
      :aria-label="$attrs.ariaLabel"
      @click="doToggle"
      @keydown.space.prevent
      @keyup.space.prevent="doToggle"
      @keydown.enter.prevent="doToggle"
      @focusout="onFocusout"
    >
      {{ title }}
      <Icon icon="ChevronDown" size="glyph" :class="`${carbonPrefix}--header__menu-arrow`" :aria-label="$attrs.ariaLabel" />
    </a>
    <ul
      :aria-label="$attrs.ariaLabel"
      :aria-labelledby="$attrs.ariaLabelledBy"
      :class="`${carbonPrefix}--header__menu`"
      role="menu"
      ref="menu"
      @focusout="onFocusout"
    >
      <slot></slot>
    </ul>
  </li>
</template>

<script>
import { CarbonPrefix } from '../../mixins'

const name = 'HeaderMenu'

export default {
  name,
  mixins: [CarbonPrefix],
  props: {
    title: String,
    hoverToggle: { type: Boolean, default: true },
  },
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    doHoverToggle(force) {
      if (this.hoverToggle) {
        this.doToggle(force);
      }
    },
    doToggle(force) {
      if (typeof force === 'boolean') {
        this.expanded = force;
      } else {
        this.expanded = !this.expanded;
      }
    },
    onFocusout(ev) {
      if (!(this.$el.contains(ev.relatedTarget) || this.$refs.menu.contains(ev.relatedTarget))) {
        this.expanded = false;
      }
    },
  },
};
</script>
