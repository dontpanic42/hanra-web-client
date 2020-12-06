import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);
app.config.devtools = true;
app.use(store).use(router).mount('#app');
