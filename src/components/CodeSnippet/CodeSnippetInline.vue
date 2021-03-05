<template>
  <FeedbackButton
    :class="[
      `${carbonPrefix}--snippet`,
      `${carbonPrefix}--snippet--inline`
    ]"
    :feedback="copyFeedback"
    inline
    :aria-label="feedbackAriaLabel"
    @click="$emit('copy-code')"
  >
    <slot></slot>
  </FeedbackButton>
</template>

<script>
import { CarbonPrefix } from '../../mixins'
const name = 'CodeSnippetInline'
export default {
  name,
  mixins: [
    CarbonPrefix
  ],
  props: {
    copyFeedback: String,
    feedbackAriaLabel: String,
  },
};
</script>
