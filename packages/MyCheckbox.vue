<template>
  <label class="my-checkbox" :class="{'is-checked': isChecked}">
    <span class="my-checkbox-input">
        <span class="my-checkbox-inner"></span>
        <input
            type="checkbox"
            :name="name"
            :value="label"
            v-model="model"
            class="my-checkbox-original"
        />
    </span>
    <span class="my-checkbox-label">
        <slot></slot>
        <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'MyCheckbox',
  inject: {
    CheckboxGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.CheckboxGroup.value : this.value
      },
      set (value) {
        // 触发父组件给当前组件注册的input事件
        this.isGroup ? this.CheckboxGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () { // 判断是否被 CheckboxGroup 组件包裹
      return !!this.CheckboxGroup
    },
    isChecked () {
      return this.isGroup ? this.model.includes(this.label) : this.model
    }
  }
}
</script>

<style lang="scss" scoped>
.my-checkbox{
    font-weight: 500;
    color: #606266;
    font-size: 14px;
    cursor: pointer;
    position: relative;
    white-space: nowrap;
    user-select: none;
    margin-right: 30px;
    display: inline-block;
    .my-checkbox-input{
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
        .my-checkbox-inner{
            position: relative;
            display: inline-block;
            border-radius: 2px;
            box-sizing: border-box;
            border: 1px solid #dcdfe6;
            width: 14px;
            height: 14px;
            background-color: #fff;
            z-index: 1;
            transition: border-color .25s cubic-bezier(.71, -.46, .29, 1.46) background-color .25s cubic-bezier(.71, -.46, .29, 1.46);
            &:after{
                box-sizing: content-box;
                content: "";
                width: 3px;
                height: 7px;
                border: 1px solid #fff;
                border-left: 0;
                border-top: 0;
                position: absolute;
                left: 4px;
                top: 1px;
                transform: rotate(45deg) scaleY(0);
                transition: transform .15s ease-in .05s;
                transform-origin: center;
            }
        }
        .my-checkbox-original{
            width: 0;
            height: 0;
            opacity: 0;
            outline: none;
            position: absolute;
            left: 18px;
            margin: 0;
            z-index: -1;
        }
    }
    .my-checkbox-label{
        display: inline-block;
        padding-left: 10px;
        line-height: 20px;
        font-size: 14px;
    }
}
.my-checkbox.is-checked{
    .my-checkbox-input{
        .my-checkbox-inner{
            border-color: #409eff;
            background-color: #409eff;
            &:after{
                transform: rotate(45deg) scaleY(1);
            }
        }
    }
    .my-checkbox-label{
        color: #409eff;
    }
}
</style>
