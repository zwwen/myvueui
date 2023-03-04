<template>
  <div class="my-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MyRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
