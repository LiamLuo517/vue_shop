import Vue from 'vue'
// 按需导入
import { Button, Form, FormItem, Input, Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 把弹框组件挂载到Vue的原型对象上，这样的话，每一个组件都可以直接通过this来访问到 $message ,只要访问到 $message 就可以进行弹窗提示了
Vue.prototype.$message = Message
