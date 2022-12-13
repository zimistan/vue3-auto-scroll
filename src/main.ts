import {Component, createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {autoScroll} from "./directive/autoScroll";

const app = createApp(App)
autoScroll(app)
app.mount('#app')
