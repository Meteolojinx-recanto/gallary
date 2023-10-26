// main.js
import { createApp } from 'vue';
import App from './App.vue';
import EasyLightbox from 'vue-easy-lightbox';

const app = createApp(App);
app.use(EasyLightbox); // Регистрируем плагин
app.mount('#app');
