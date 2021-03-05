<template>
  <footer :class="classes">
    <button
      :class="`${carbonPrefix}--side-nav__toggle`"
      type="button"
      v-bind="$attrs"
      @click="$emit('toggle-expand')"
      :title="assistiveText"
    >
      <div :class="`${carbonPrefix}--side-nav__icon`">
        <Close20
          v-if="expanded"
          :class="`${carbonPrefix}--side-nav__icon--collapse ${carbonPrefix}--side-nave-collapse-icon`"
        />
        <ChevronRight20
          v-if="!expanded"
          :class="`${carbonPrefix}--side-nav__icon--expand ${carbonPrefix}--side-nave-expand-icon`"
        />
      </div>
      <span :class="`${carbonPrefix}--assistive-text`">{{ assistiveText }}</span>
    </button>
  </footer>
</template>

<script>
import Close20 from '@carbon/icons-vue/es/close/20'
import ChevronRight20 from '@carbon/icons-vue/es/chevron--right/20'
import { CarbonPrefix } from '../../mixins'

const name = 'SideNavFooter'

export default {
  name,
  mixins: [
    CarbonPrefix
  ],
  components: { ChevronRight20, Close20 },
  props: {
    assistiveText: {
      type: String,
      default: 'Open / close side nav'
    },
    expanded: {
      type: Boolean
    }
  },
  computed: {
    classes () {
      return {
        [`${this.carbonPrefix}--side-nav__footer`]: true
      }
    }
  }
}
</script>
