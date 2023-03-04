<template>
  <div id="app">
    <my-button plain icon="iconfont icon-gantanhao-yuan" round>按钮</my-button>
      <my-button plain icon="iconfont icon-gantanhao-yuan" round type="primary">登录</my-button>
      <my-button plain icon="iconfont icon-gantanhao-yuan" round type="danger">删除</my-button>
      <my-button plain icon="iconfont icon-gantanhao-yuan" round type="info">信息</my-button>
      <my-button plain icon="iconfont icon-gantanhao-yuan" round type="success">成功</my-button>
      <my-button plain icon="iconfont icon-gantanhao-yuan" round type="warning">警告</my-button>
    <hr />
    <MyInput placeholder="请输入" type="password" disabled></MyInput>
    <!-- v-model 是一个语法糖，实质上是表单元素的 value 与 input事件的组合 -->
    <input type="text" :value="username" @input="value = $event.target.value">
    <MyInput placeholder="请输入" v-model="username"></MyInput>
    <MyInput placeholder="请输入" type="password" v-model="username" show-password></MyInput>
    <MyInput placeholder="请输入" v-model="username" clearable></MyInput>
    <MySwitch v-model="active"></MySwitch>
    <MySwitch v-model="active" name="username" active-color="#13ce66" inactive-color="#ff4949"></MySwitch>
    <MyRadio label="1" v-model="gender">男</MyRadio>
    <MyRadio label="0" v-model="gender">女</MyRadio>
    <hr />
    <MyRadio label="1" v-model="gender"></MyRadio>
    <MyRadio label="0" v-model="gender"></MyRadio>
    <hr />
    <MyRadioGroup v-model="gender">
      <MyRadio label="1">男</MyRadio>
      <MyRadio label="0">女</MyRadio>
    </MyRadioGroup>
    <hr />
    <MyCheckbox v-model="active">是否选中</MyCheckbox>
    <hr />
    <MyCheckboxGroup v-model="hobby">
      <MyCheckbox label="抽烟"></MyCheckbox>
      <MyCheckbox label="喝酒"></MyCheckbox>
      <MyCheckbox label="烫头"></MyCheckbox>
    </MyCheckboxGroup>
    <MyForm :model="formModel" label-width="100px">
      <MyFormItem label="用户名">
        <MyInput placeholder="请输入用户名" v-model="formModel.username"></MyInput>
      </MyFormItem>
      <MyFormItem label="记住">
        <MySwitch v-model="formModel.remenber"></MySwitch>
      </MyFormItem>
    </MyForm>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      username: 'haha',
      active: false,
      gender: '1',
      hobby: ['抽烟'],
      formModel: {
        username: '',
        remenber: true
      }
    }
  },
  methods: {
    handle (e) {
      console.log(e)
    },
    close (value) {
      this.visible = value
    }
  }
}
</script>

<style lang="scss" scoped>
.row{
  margin-bottom: 20px;
  .my-button{
    margin-right: 20px;
  }
}
</style>
