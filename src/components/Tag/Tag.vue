<template>
  <component :is="skeleton ? 'div' : 'span'"
    :class="classes"
    :tabindex="!disabled ? 0 : undefined"
    role="listitem"
    :title="title"
    @keydown.enter.stop.prevent="$emit('remove')"
    @keydown.space.prevent
    @keyup.space.prevent="$emit('remove')"
  >
    <span
      v-if="!skeleton"
      :class="`${carbonPrefix}--tag__label`"
    >
      {{ label }}
    </span>
    <button
      v-if="!skeleton && isFilter"
      :class="`${carbonPrefix}--tag__close-icon`"
      :aria-label="clearAriaLabel"
      @click.stop.prevent="onRemove"
      :disabled="disabled"
    >
      <Icon icon="Close" />
    </button>
  </component>
</template>

<script>
import { CarbonPrefix } from '../../mixins'

const tagKinds = [
  'red',
  'magenta',
  'purple',
  'blue',
  'cyan',
  'teal',
  'green',
  'gray',
  'cool-gray',
  'warm-gray',
  'high-contrast',
];
const name = 'Tag'
export default {
  name,
  mixins: [CarbonPrefix],
  props: {
    clearAriaLabel: { type: String, default: 'Clear filter' },
    disabled: Boolean,
    label: {
      type: String
    },
    kind: {
      type: String,
      default: tagKinds[0],
      validator(val) {
        if (val === 'filter' && process.env.NODE_ENV === 'development') {
          console.warn('DEPRECARTED: Prefer props.filter (bool)');
          return true;
        }
        return tagKinds.includes(val);
      },
    },
    filter: {
      type: Boolean,
      default: false,
    },
    skeleton: Boolean,
  },
  computed: {
    classes () {
      const {
        carbonPrefix,
        tagKind,
        skeleton,
        isFilter,
        disabled,
      } = this

      return {
        [`${carbonPrefix}--tag`]: true,
        [`${carbonPrefix}--tag--${tagKind}`]: !skeleton,
        [`${carbonPrefix}--tag--filter`]: !skeleton && isFilter,
        [`${carbonPrefix}--tag--disabled`]: !skeleton && disabled,
        [`${carbonPrefix}--skeleton`]: skeleton
      }
    },
    isFilter() {
      return this.filter || this.kind === 'filter';
    },
    tagKind() {
      return this.kind === 'filter' ? 'high-contrast' : this.kind;
    },
    title() {
      return this.isFilter ? this.clearAriaLabel : null;
    },
  },
  methods: {
    onRemove() {
      if (!this.disabled) {
        this.$emit('remove');
      }
    },
  },
};
</script>
