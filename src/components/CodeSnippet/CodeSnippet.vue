<template>
  <component
    :is="theComponent"
    v-bind="$attrs"
    :class="classes"
    @copy-code="onCopyCode"
    :copy-feedback="copyFeedback"
    :feedback-aria-label="feedbackAriaLabel"
  >
    <code ref="code" v-if="!skeleton">
      <slot></slot>
    </code>
    <!-- textarea cannot be fully hidden for clipboard to work -->
    <textarea
      style="position: absolute; left: -9999px; max-width: 0; opacity: 0; overflow: hidden;"
      aria-hidden="true"
      ref="clippy"
      v-if="!skeleton"
    ></textarea>
    <div :class="`${carbonPrefix}--snippet-container`" v-if="skeleton">
      <span />
      <span v-if="kind === 'multiline'" />
      <span v-if="kind === 'multiline'" />
    </div>
  </component>
</template>

<script>
import { CarbonPrefix } from '../../mixins'

import CodeSnippetInline from './CodeSnippetInline'
import CodeSnippetMultiline from './CodeSnippetMultiline'
import CodeSnippetOneline from './CodeSnippetOneline'

const name = 'CodeSnippet'
export default {
  name,
  mixins: [CarbonPrefix],
  components: {
    CodeSnippetInline,
    CodeSnippetMultiline,
    CodeSnippetOneline,
  },
  inheritAttrs: false,
  props: {
    feedbackAriaLabel: { type: String, default: 'Copy code' },
    copyFeedback: { type: String, default: 'Copied!' },
    kind: {
      type: String,
      default: 'oneline',
      validator: value => ['inline', 'multiline', 'oneline'].includes(value),
    },
    skeleton: Boolean
  },
  computed: {
    classes () {
      const {carbonPrefix, kind} = this
      return {
        [`${carbonPrefix}--snippet`]: this.skeleton,
        [`${carbonPrefix}--skeleton`]: this.skeleton,
        [`${carbonPrefix}--snippet--${kind === 'multiline' ? 'multi' : 'single'}`]: this.skeleton
      }
    },
    theComponent() {
      if(this.skeleton) {
        return 'div'
      }
      switch (this.kind) {
        case 'inline':
          return 'CodeSnippetInline';
        case 'multiline':
          return 'CodeSnippetMultiline';
        default:
          return 'CodeSnippetOneline';
      }
    },
  },
  methods: {
    onCopyCode() {
      // copy to clipboard
      this.$refs.clippy.value = this.$refs.code.innerText;
      this.$refs.clippy.select();
      document.execCommand('copy');
    },
  },
};
</script>
