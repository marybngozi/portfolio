import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import axios from 'axios'
import Vuelidate from  'vuelidate';
import VueToastr from "vue-toastr";
import moment from 'moment';

import "@/assets/css/tailwind.css";

Vue.prototype.$http = axios;
Vue.prototype.$moment = moment;

Vue.use(Vuelidate)
Vue.use(VueToastr, {});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
