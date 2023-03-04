<template>
  <div class="my-input" :class="{'my-input--suffix': showSuffix}">
    <input
        :type="showPassword ? (passwordVisible ? 'text': 'password') : type"
        :name="name"
        :value="value"
        :disabled="disabled"
        :clearable="clearable"
        :showPassword="showPassword"
        :placeholder="placeholder"
        @input="handleInput"
        :class="{'is-disabled': disabled}"
        class="my-input-inner"
    >
    <span class="my-input-suffix" v-if="showSuffix">
        <i class="iconfont icon-RectangleCopy" v-if="clearable && value" @click="clear"></i>
        <i class="iconfont icon-browse" :class="{'icon-browse-active': passwordVisible}" v-if="showPassword" @click="handlePassword"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      passwordVisible: false
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.my-input{
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .my-input-inner{
        appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(0.645, 0.045, 0.355, 1);
        width: 100%;
        &:focus{
            outline: none;
            border-color: #409eff;
        }
        &.is-disabled{
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor: all-scroll;
        }
    }
}
.my-input--suffix{
    .my-input-inner{
        padding-right: 30px;
    }
    .my-input-suffix{
        position: absolute;
        height: 100%;
        right: 10px;
        top: 0;
        line-height: 40px;
        text-align: center;
        color: #c0c4cc;
        transition: all .3s;
        z-index: 900;
        i{
            color: #c0c4cc;
            font-size: 14px;
            cursor: pointer;
            transition: color .2s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        .icon-browse-active{
            color: #606266;
        }
    }
}
</style>
