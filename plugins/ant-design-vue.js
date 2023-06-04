import { createApp } from 'vue'
import { Button, Layout, notification } from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'

export default ({ app }) => {
  const appInstance = createApp(app)
  appInstance.use(Button)
  appInstance.use(Layout)
  appInstance.config.globalProperties.$notification = notification
}