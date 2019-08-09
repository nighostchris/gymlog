import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import axios from 'axios';
import router from './router';
import App from './App.vue';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

axios.defaults.baseURL = 'https://gymlog-backend.herokuapp.com';

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

const vuetify = new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');
