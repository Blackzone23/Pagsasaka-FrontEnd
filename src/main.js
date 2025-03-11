import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'
import { Icon } from '@iconify/vue';
import { create, NButton, NCarousel, NDataTable, NPagination, NRate } from "naive-ui";

const naive = create({
    components: [NButton, NCarousel,NRate,NDataTable,NPagination] // Register the components you need
  });

const app = createApp(App)
app.use(naive);


app.use(router)
app.use(store)
app.component('Icon', Icon); 
app.mount('#app')

