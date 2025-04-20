import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'
import { Icon } from '@iconify/vue';
import { create, NButton, NCarousel, NConfigProvider, NDataTable, NInputNumber, NMarquee, NPagination, NRate, NSkeleton, NSteps, NTimeline, NCheckbox } from "naive-ui";

const naive = create({
    components: [NButton, NCarousel,NRate,NDataTable,NPagination,NMarquee,NConfigProvider,NSteps,NTimeline,NInputNumber,NSkeleton, NCheckbox] // Register the components you need
  });

const app = createApp(App)
app.use(naive);


app.use(router)
app.use(store)
app.component('Icon', Icon); 
app.mount('#app')

