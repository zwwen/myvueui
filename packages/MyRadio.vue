<template>
  <label class="my-radio" :class="{'is-checked': label === model}">
    <span class="my-radio-input">
        <span class="my-radio-inner"></span>
        <input
            type="radio"
            :name="name"
            :value="label"
            v-model="model"
            class="my-radio-original"
        />
    </span>
    <span class="my-radio-label">
        <slot></slot>
        <!-- 如果没有传内容就把label作为内容 -->
        <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'MyRadio',
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        // 触发父组件给当前组件注册的input事件
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () { // 判断是否被 RadioGroup 组件包裹
      return !!this.RadioGroup
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    value: null
  }
}
</script>

<style lang="scss" scoped>
.my-radio{
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    user-select: none;
    .my-radio-input{
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
        .my-radio-inner{
            border: 1px solid #dcdfe6;
            border-radius: 100%;
            width: 14px;
            height: 14px;
            background-color: #fff;
            position: relative;
            cursor: pointer;
            display: inline-block;
            box-sizing: border-box;
            &:after{
                width: 4px;
                height: 4px;
                border-radius: 100%;
                background-color: #fff;
                content: "";
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(0);
                transition: transform .15s ease-in;
            }
        }
        .my-radio-original{
            opacity: 0;
            outline: none;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0;
        }
    }
    .my-radio-label{
        font-size: 14px;
        padding-left: 10px;
    }
}
.my-radio.is-checked{
    .my-radio-input{
        .my-radio-inner{
            border-color: #409eff;
            background-color: #409eff;
            &:after{
                transform: translate(-50%, -50%) scale(1);
            }
        }
    }
    .my-radio-label{
        color: #409eff;
    }
}
</style>
