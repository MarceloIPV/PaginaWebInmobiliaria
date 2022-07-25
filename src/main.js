import { createApp, VueElement } from 'vue'
import './style.css'
import App from './App.vue'

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

import 'aos/dist/aos.css'
import 'aos/dist/aos.js'

import router from "./routes/routes"



createApp(App)
.use(router)
.mount('#app')

