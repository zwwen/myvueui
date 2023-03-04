<template>
  <div class="my-switch" :class="{'is-checked': value}" @click="handleChange">
    <span class="my-switch-core" ref="core">
        <span class="my-switch-button"></span>
    </span>
    <input type="checkbox" ref="inputCheckbox" :name="name" class="my-switch-input">
  </div>
</template>

<script>
export default {
  name: 'MySwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    async handleChange () {
      this.$emit('input', !this.value)
      // this.setColor() // 直接这样修改会有点小问题 因为这样更新父组件的value值时还没完成
      // this.$nextTick(this.setColor)
      //   this.$nextTick().then(this.setColor)
      //  nextTick是基于 Promise封装的
      //  等待 value 发生了改变 再调用 setColor 方法
      //  数据修改完成后 等待DOM更新
      await this.$nextTick()
      this.setColor()
    },
    setColor () {
      this.$refs.inputCheckbox.checked = this.value
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted () {
    this.setColor()
  }
}
</script>

<style lang="scss" scoped>
.my-switch{
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    vertical-align: middle;
    .my-switch-input{
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0;
    }
    .my-switch-core{
        margin: 0;
        display: inline-block;
        position: relative;
        width: 40px;
        height: 20px;
        border: 1px solid #dcdfe6;
        outline: none;
        border-radius: 10px;
        box-sizing: border-box;
        background: #dcdfe6;
        cursor: pointer;
        transition: border-color .3s,background-color .3s;
        vertical-align: middle;
        .my-switch-button{
            position: absolute;
            top: 1px;
            left: 1px;
            border-radius: 100%;
            transition: all .3s;
            width: 16px;
            height: 16px;
            background-color: #fff;
        }
    }
}
.my-switch.is-checked {
    .my-switch-core{
        border-color: #409eff;
        background-color: #409eff;
    }
    .my-switch-button{
        transform: translateX(20px);
    }
}
</style>
