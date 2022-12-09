import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js'
import "@popperjs/core"
import axios from "axios"

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.mount('#app')
