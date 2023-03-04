<template>
  <button class="my-button" :class="[`my-button--${type}`,{
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled
  }]" @click="handleClick" :disabled="disabled">
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
  .my-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    // 禁止元素的文字被选中
    user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover, &:focus{
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
  }
  .my-button--primary{
    color: #fff;
    border-color: #409eff;
    background-color: #409eff;
    &:hover, &:focus{
        color: #fff;
        border-color: #66b1ff;
        background-color: #66b1ff;
    }
  }
  .my-button--success{
    color: #fff;
    border-color: #67c23a;
    background-color: #67c23a;
    &:hover, &:focus{
        color: #fff;
        border-color: #85ce61;
        background-color: #85ce61;
    }
  }
  .my-button--info{
    color: #fff;
    border-color: #909399;
    background-color: #909399;
    &:hover, &:focus{
        color: #fff;
        border-color: #a6a9ad;
        background-color: #a6a9ad;
    }
  }
  .my-button--warning{
    color: #fff;
    border-color: #e6a23c;
    background-color: #e6a23c;
    &:hover, &:focus{
        color: #fff;
        border-color: #ebb563;
        background-color: #ebb563;
    }
  }
  .my-button--danger{
    color: #fff;
    border-color: #f56c6c;
    background-color: #f56c6c;
    &:hover, &:focus{
        color: #fff;
        border-color: #f78989;
        background-color: #f78989;
    }
  }
  .my-button.is-plain {
    &:hover, &:focus{
        color: #409eff;
        border-color: #409eff;
        background-color: #fff;
    }
  }
  .my-button--primary.is-plain{
    color: #409eff;
    border-color: #b3d8ff;
    background-color: #ecf5ff;
    &:hover, &:focus{
        color: #fff;
        border-color: #409eff;
        background-color: #409eff;
    }
  }
  .my-button--success.is-plain{
    color: #67c23a;
    border-color: #c2e7b0;
    background-color: #f0f9eb;
    &:hover, &:focus{
        color: #fff;
        border-color: #67c23a;
        background-color: #67c23a;
    }
  }
  .my-button--info.is-plain{
    color: #909399;
    border-color: #d3d4d6;
    background-color: #f4f4f5;
    &:hover, &:focus{
        color: #fff;
        border-color: #909399;
        background-color: #909399;
    }
  }
  .my-button--warning.is-plain{
    color: #e6a23c;
    border-color: #f5dab1;
    background-color: #fdf6ec;
    &:hover, &:focus{
        color: #fff;
        border-color: #e6a23c;
        background-color: #e6a23c;
    }
  }
  .my-button--danger.is-plain{
    color: #f56c6c;
    border-color: #fbc4c4;
    background-color: #fef0f0;
    &:hover, &:focus{
        color: #fff;
        border-color: #f56c6c;
        background-color: #f56c6c;
    }
  }
  .my-button.is-round{
    border-radius: 20px;
    padding: 12px 22px;
  }
  .my-button.is-circle{
    border-radius: 50%;
    padding: 12px;
  }
  .my-button [class*=icon-]+span{
    margin-left: 5px;
  }
</style>
