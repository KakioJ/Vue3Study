import { createApp } from 'vue'
import App from './App.vue'


// 引入ElementPlus框架
import ElementPlus from 'element-plus';
// 导入ElementPlus所需的css样式
import 'element-plus/dist/index.css'
// 注入Vue App
const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
