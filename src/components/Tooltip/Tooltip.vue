<template>
  <button
    :class="[
      `${carbonPrefix}--tooltip__trigger`,
      `${carbonPrefix}--tooltip--a11y`,
      `${carbonPrefix}--tooltip--${direction}`,
      `${carbonPrefix}--tooltip--align-${alignment}`,
    ]"
    type="button"
  >
    <span :class="`${carbonPrefix}--assistive-text`">{{ tip }}</span>
    <slot>
      <Icon icon="Information" />
    </slot>
  </button>
</template>

<script>
import { CarbonPrefix } from '../../mixins'

const name = "Tooltip"
export default {
  name,
  mixins: [
    CarbonPrefix
  ],
  props: {
    alignment: { type: String, default: 'center', validator: val => ['start', 'center', 'end'].includes(val) },
    direction: {
      type: String,
      default: 'top',
      validator(val) {
        const validValues = ['top', 'left', 'right', 'bottom'];
        const valid = validValues.includes(val);
        if (!valid) {
          console.warn(`Tooltip.direction must be one of the following: ${validValues}`);
        }
        return valid;
      },
    },
    tip: { type: String, required: true },
  },
};
</script>
