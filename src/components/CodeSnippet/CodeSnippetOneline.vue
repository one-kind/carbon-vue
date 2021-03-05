<template>
  <div
    :class="[
      `${carbonPrefix}--snippet`,
      `${carbonPrefix}--snippet--single`,
    ]"
  >
    <div :class="`${carbonPrefix}--snippet-container`">
      <pre>
        <slot></slot>
      </pre>
    </div>
    <FeedbackButton :feedback="copyFeedback" :aria-label="feedbackAriaLabel" @click="$emit('copy-code')">
      <Icon icon="Copy" :class="`${carbonPrefix}--snippet__icon`" />
    </FeedbackButton>
  </div>
</template>

<script>
import { CarbonPrefix } from '../../mixins'

const name = 'CodeSnippetOneline'
export default {
  name,
  mixins: [CarbonPrefix],
  props: {
    copyFeedback: String,
    feedbackAriaLabel: String,
  },
};
</script>
