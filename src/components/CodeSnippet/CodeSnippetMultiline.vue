<template>
  <div
    :class="[
      `${carbonPrefix}--snippet`,
      `${carbonPrefix}--snippet--multi`,
      { [`${carbonPrefix}--snippet--expand`]: expanded },
    ]"
    data-code-snippet
  >
    <div :class="`${carbonPrefix}--snippet-container`">
      <pre>
        <slot></slot>
      </pre>
    </div>
    <FeedbackButton :feedback="copyFeedback" :aria-label="feedbackAriaLabel" @click="$emit('copy-code')">
      <Icon icon="Copy" :class="`${carbonPrefix}--snippet__icon`" />
    </FeedbackButton>

    <Button
      kind="ghost"
      size="small"
      :class="`${carbonPrefix}--snippet-btn--expand`"
      @click="toggleExpand"
    >
      <span :class="`${carbonPrefix}--snippet-btn--text`">{{ expandButtonText }}</span>
      <Icon icon="ChevronDown" :class="`${carbonPrefix}--icon-chevron--down`" />
    </Button>
  </div>
</template>

<script>
import { CarbonPrefix } from '../../mixins'

const name = 'CodeSnippetMultiline'
export default {
  name,
  mixins: [CarbonPrefix],
  props: {
    lessText: { type: String, default: 'Show less' },
    moreText: { type: String, default: 'Show more' },
    feedbackAriaLabel: String,
    copyFeedback: String,
  },
  data() {
    return {
      expanded: false,
    };
  },
  computed: {
    expandButtonText() {
      return this.expanded ? this.lessText : this.moreText;
    },
  },
  methods: {
    toggleExpand() {
      this.expanded = !this.expanded;
    },
  },
};
</script>
