<template>
  <div class="my-form-item">
    <label class="my-form-item-label" :style="labelStyle">{{label}}</label>
    <div class="my-form-item-content">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyFormItem',
  inject: ['MyForm'],
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    labelStyle () {
      return {
        width: this.MyForm.labelWidth
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.my-form-item{
    margin-bottom: 20px;
    .my-form-item-label {
        text-align: right;
        vertical-align: middle;
        float: left;
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        padding: 0 12px 0 0;
        box-sizing: border-box;
    }
    .my-form-item-content{
        line-height: 40px;
        position: relative;
        font-size: 14px;
        overflow: hidden;
    }
}
</style>
