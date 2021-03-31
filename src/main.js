import { createApp } from 'vue'
import home from './home.vue';
import router from './router.js'

const app = createApp(home)
app.use(router)
app.mount('#app')