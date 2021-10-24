import { createApp } from 'vue'
import App from './App.vue'
import { handle } from "./common/promise"; 
import { createApp } from 'vue' 
import App from './App.vue' 
import "bootstrap/dist/css/bootstrap.min.css"; 
import "@fortawesome/fontawesome-free/css/all.min.css";
import router from "./router";

createApp(App).mount('#app')


createApp(App) 
    .mixin({ 
        methods: { 
            handle, 
        } 
    })
    .mount('#app');

createApp(App).use(router).mount('#app');