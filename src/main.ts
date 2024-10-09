import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/main.css';

// Import all Font Awesome styles
import '@fortawesome/fontawesome-free/css/all.css';

// Import optional JavaScript functionality (if needed)
import '@fortawesome/fontawesome-free/js/all.js';

createApp(App).use(store).use(router).mount('#app');
