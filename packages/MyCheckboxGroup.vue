<template>
  <div class="my-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MyCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>
