<template>
  <td :style="cellStyle">
    <slot />
  </td>
</template>

<script>
const name = 'DataTableCell'
export default {
  name,
  props: {
    cellStyle: {},
  },
};
</script>
