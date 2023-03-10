import Vue from 'vue'
import App from './App.vue'
import MyVueUI from '../packages/index'
Vue.config.productionTip = false
Vue.use(MyVueUI)
new Vue({
  render: h => h(App)
}).$mount('#app')
