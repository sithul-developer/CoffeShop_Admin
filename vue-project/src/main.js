import './assets/main.css'
const app = createApp(App)
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import  AppNavbar from './components/partials/AppNavbar.vue'
import  AppFooter from './components/partials/AppFooter.vue'
import  AppSidebar from './components/partials/AppSidebar.vue'

import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/plugins/jquery/jquery.min.js'
import 'admin-lte/plugins/fontawesome-free/css/all.min.css'
import 'admin-lte/dist/js/adminlte.js'



app.component("AppNavbar", AppNavbar);
app.component("AppFooter", AppFooter);
app.component("AppSidebar", AppSidebar);


app.use(router)

app.mount('#app')
