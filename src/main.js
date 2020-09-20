import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import moment from 'moment';
import "@/assets/css/tailwind.css";
import Meta from "vue-meta";

Vue.use(Meta);

Vue.prototype.$moment = moment;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
