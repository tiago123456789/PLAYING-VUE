import Vue from 'vue'
import VueResource from "vue-resource";
import App from './App.vue'
import NotFound from "./components/NotFound"
import VueRouter from "vue-router"

Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
  { path: "/", component: App },
  { path: "*", component: NotFound }
]

const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount('#app')
