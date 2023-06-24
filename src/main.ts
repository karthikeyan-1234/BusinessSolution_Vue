import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetifySetup from './setup/VuetifySetup' 
import axiosSetUp from './setup/AxiosSetup';
import router from './router';

axiosSetUp();
const vuetify = vuetifySetup();

createApp(App).use(router).use(vuetify).mount('#app')
