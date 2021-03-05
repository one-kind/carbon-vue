<template>
    <div :class="classes">
      <slot />
    </div>
</template>

<script>
import { CarbonPrefix } from '../../mixins'
import helpers from '../../util/helpers'

const name = 'BreadcrumbItem'
const defaultClass = `${helpers.prefix}${helpers.str2kebab(name)}`

export default {
  name,
  mixins: [
    CarbonPrefix
  ],
  props: {
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes () {
      return {
        [defaultClass]: true,
        [this.className]: this.className
      }
    }
    /* newChild (children, href) {
      if (typeof children === 'string' && !(href === undefined)) {
        return <Link href={href}>{children}</Link>;
      } else {
        return React.cloneElement(React.Children.only(children), {
          className: bx--link',
        });
      }
    }, */
  }
}
</script>
