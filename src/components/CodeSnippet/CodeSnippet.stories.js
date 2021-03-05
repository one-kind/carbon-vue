export default {
  title: 'Components/CodeSnippet',
  argTypes: {
    copyFeedback: { control: { type: 'text' } },
    feedbackAriaLabel: { control: { type: 'text' } },
    lessText: { control: { type: 'text' } },
    moreText: { control: { type: 'text' } },
  },
  args: {
    copyFeedback: 'Content copied!',
    feedbackAriaLabel: 'feedback aria label',
    lessText: 'Show less',
    moreText: 'Show more',
  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <CodeSnippet>
      @mixin grid-container {
      width: 100%;
      padding-right: padding(mobile);
      padding-left: padding(mobile);

      @include breakpoint(bp--xs--major) {
        padding-right: padding(xs);
        padding-left: padding(xs);
      }
    }

    $z-indexes: (
      modal : 9000,
      overlay : 8000,
      dropdown : 7000,
      header : 6000,
      footer : 5000,
      hidden : - 1,
      overflowHidden: - 1,
      floating: 10000
    );
    </CodeSnippet>`
})

export const Inline = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <CodeSnippet kind="inline"
      :copy-feedback="$props.copyFeedback"
      :feedback-aria-label="$props.feedbackAriaLabel">
      printf("A short bit of code.");
    </CodeSnippet>`
})

export const InlineMinimal = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <CodeSnippet kind="inline">
      printf("A short bit of code.");
    </CodeSnippet>`
})
InlineMinimal.storyName="Inline (minimal)"

export const Multiline = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <CodeSnippet kind="multiline"
      :copy-feedback="$props.copyFeedback"
      :feedback-aria-label="$props.feedbackAriaLabel" :less-text="$props.lessText" :more-text="$props.moreText">

      printf("A short bit of code.");
      @mixin grid-container {
      width: 100%;
      padding-right: padding(mobile);
      padding-left: padding(mobile);

      @include breakpoint(bp--xs--major) {
        padding-right: padding(xs);
        padding-left: padding(xs);
      }
    }

    $z-indexes: (
      modal : 9000,
      overlay : 8000,
      dropdown : 7000,
      header : 6000,
      footer : 5000,
      hidden : - 1,
      overflowHidden: - 1,
      floating: 10000
    );
    </CodeSnippet>`
})

export const MultilineMinimal = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <CodeSnippet kind="multiline">
      @mixin grid-container {
      width: 100%;
      padding-right: padding(mobile);
      padding-left: padding(mobile);

      @include breakpoint(bp--xs--major) {
        padding-right: padding(xs);
        padding-left: padding(xs);
      }
    }

    $z-indexes: (
      modal : 9000,
      overlay : 8000,
      dropdown : 7000,
      header : 6000,
      footer : 5000,
      hidden : - 1,
      overflowHidden: - 1,
      floating: 10000
    );
    </CodeSnippet>`
})
MultilineMinimal.storyName="Multiline (minimal)"

export const Oneline = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <CodeSnippet kind="oneline"
      :copy-feedback="$props.copyFeedback"
      :feedback-aria-label="$props.feedbackAriaLabel">

      @mixin grid-container {
      width: 100%;
      padding-right: padding(mobile);
      padding-left: padding(mobile);

      @include breakpoint(bp--xs--major) {
        padding-right: padding(xs);
        padding-left: padding(xs);
      }
    }

    $z-indexes: (
      modal : 9000,
      overlay : 8000,
      dropdown : 7000,
      header : 6000,
      footer : 5000,
      hidden : - 1,
      overflowHidden: - 1,
      floating: 10000
    );
    </CodeSnippet>`
})

export const OnelineMinimal = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <CodeSnippet kind="oneline">
      @mixin grid-container {
      width: 100%;
      padding-right: padding(mobile);
      padding-left: padding(mobile);

      @include breakpoint(bp--xs--major) {
        padding-right: padding(xs);
        padding-left: padding(xs);
      }
    }

    $z-indexes: (
      modal : 9000,
      overlay : 8000,
      dropdown : 7000,
      header : 6000,
      footer : 5000,
      hidden : - 1,
      overflowHidden: - 1,
      floating: 10000
    );
    </CodeSnippet>`
})
OnelineMinimal.storyName="Oneline (minimal)"

export const Skeleton = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<CodeSnippet :kind="$props.kind" skeleton />`
})
Skeleton.argTypes = {
  kind: { control: { type: 'select', options: ['inline', 'multiline', 'oneline'] } }
}
Skeleton.args = {
  kind: 'oneline'
}
