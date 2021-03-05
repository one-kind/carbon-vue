<template>
  <li
    :class="[
      `${carbonPrefix}--overflow-menu-options__option`,
      {
        [`${carbonPrefix}--overflow-menu-options__option--disabled`]: disabled,
        [`${carbonPrefix}--overflow-menu-options__option--danger`]: danger,
      },
    ]"
    @keydown.esc.prevent="onEsc"
  >
    <button
      type="button"
      :class="`${carbonPrefix}--overflow-menu-options__btn`"
      :data-floating-menu-primary-focus="primaryFocus"
      :disabled="disabled"
      v-on="$listeners"
      @click="onClick"
    >
      <span :class="`${carbonPrefix}--overflow-menu-options__option-content`">
        <slot></slot>
      </span>
    </button>
  </li>
</template>

<script>
import { CarbonPrefix } from '../../mixins'
const name = 'OverflowMenuItem'
export default {
  name,
  mixins: [CarbonPrefix],
  props: {
    primaryFocus: Boolean,
    disabled: Boolean,
    danger: Boolean,
  },
  methods: {
    onClick() {
      this.$parent.$emit('click');
    },
    onEsc() {
      this.$parent.$emit('close');
    },
  },
};
</script>
