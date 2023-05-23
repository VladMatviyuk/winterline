import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router";

import App from './App.vue'
import components from './components';
import routes from "./routes.js";
import './style.css'

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.use(components);
app.mount('#app');
