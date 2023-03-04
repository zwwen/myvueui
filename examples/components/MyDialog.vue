<template>
  <transition name="dialog">
    <div class="my-dialog_wrapper" v-show="visible" @click.self="handleClose">
        <div class="my-dialog" :style="{width, marginTop: top}">
            <div class="my-dialog_header">
                <slot name="title">
                    <span class="my-dialog_title">{{title}}</span>
                </slot>
                <button class="my-dialog_headerBtn" @click="handleClose"><i class="iconfont icon-guanji"></i></button>
            </div>
            <div class="my-dialog_body">
                <slot></slot>
            </div>
            <div class="my-dialog_footer" v-if="$slots.footer">
                <!-- <my-button>取消</my-button>
                <my-button type="primary">确定</my-button> -->
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MyDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
    //   this.$emit('close', false)
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-dialog_wrapper{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0, 0, 0, .5);
    .my-dialog{
        position: relative;
        margin: 15vh auto 50px;
        background: #fff;
        border-radius: 4px;
        box-sizing: border-box;
        box-shadow: 0 1px 3px rgba(0,0,0,.3);
        width: 30%;
        &_header{
            padding: 20px 20px 10px;
            border-bottom: 1px solid #ddd;
            .my-dialog_title{
                line-height: 26px;
                font-size: 18px;
                color: #303133;
            }
            .my-dialog_headerBtn{
                position: absolute;
                top: 20px;
                right: 20px;
                padding: 0;
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 16px;
                .icon-guanji{
                    color: #909399;
                }
            }
        }
        &_body{
            padding: 30px 20px;
            color: #606266;
            font-size: 14px;
            word-break: break-all;
        }
        &_footer{
            padding: 10px 20px 20px;
            text-align: right;
            box-sizing: border-box;
            ::v-deep .my-button:first-child{
                margin-right: 20px;
            }
        }
    }
}
@keyframes dialogAnimation {
    0%{
        opacity: 0;
        transform: translateY(-20px);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
}
.dialog-enter-active{
    animation: dialogAnimation .6s;
}
.dialog-leave-active{
    animation: dialogAnimation .6s reverse;
}
</style>
