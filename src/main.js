import Vue from 'vue';
import App from './App.vue';
import Vuelidate from 'vuelidate';
import VTooltip from 'v-tooltip';
import VueNotification from '@mathieustan/vue-notification';
import router from './router';
import store from './store';

Vue.use(Vuelidate);
Vue.use(VTooltip);
Vue.use(VueNotification, {
  colors: {
    success: '#181C43',
    info: '#54d861',
    warning: '#f8a623',
    error: '#ff6683',
  },
  boxShadow: 'none',
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
