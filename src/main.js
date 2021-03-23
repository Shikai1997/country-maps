import { createApp } from 'vue'
// import App from './App.vue'
import home from './home.vue';
import router from './router'

const app = createApp(home)
app.use(router)
app.mount('#app')