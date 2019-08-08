import Vue from 'vue';
import './plugins/axios'
import Vuetify from 'vuetify/lib';
import router from './router';
import App from './App.vue';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

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
