<template>
  <div class="my-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MyForm',
  provide () {
    return {
      MyForm: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true,
      default: () => ({})
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
