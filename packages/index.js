import MyButton from './MyButton.vue'
import MyDialog from './MyDialog.vue'
import MyInput from './MyInput.vue'
import MySwitch from './MySwitch.vue'
import MyRadio from './MyRadio.vue'
import MyRadioGroup from './MyRadioGroup.vue'
import MyCheckbox from './MyCheckbox.vue'
import MyCheckboxGroup from './MyCheckboxGroup.vue'
import MyForm from './MyForm.vue'
import MyFormItem from './MyFormItem.vue'
import './iconfont/iconfont.css'

const components = [
  MyButton,
  MyInput,
  MySwitch,
  MyRadio,
  MyRadioGroup,
  MyCheckbox,
  MyCheckboxGroup,
  MyForm,
  MyFormItem,
  MyDialog
]

// 定义 install 方法，接受一个参数 Vue 。如果使用 use 注册插件，则所有的组件都将被注册
const install = Vue => {
  console.log('install')
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 判断是否是直接引入文件，如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 导出的对象必须具有一个 install 方法，才能被 Vue.use() 方法使用
export default install
