import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routeConfig from './router-config'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);

const router=new VueRouter(routeConfig );
new Vue({
    router,
  el: '#app',
  render: h => h(App)
})
