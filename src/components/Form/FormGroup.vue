<template>
  <Fieldset :class="`${carbonPrefix}--fieldset`">
    <Legend :class="`${carbonPrefix}--label`">
      <slot name="label"></slot>
    </Legend>
    <slot name="content"></slot>
  </Fieldset>
</template>

<script>
import { CarbonPrefix } from '../../mixins'
const name = 'FormGroup'
export default {
  name,
  mixins: [CarbonPrefix],
}
</script>
