import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import Router from 'vue-router';

import App from './App.vue';
import Home from './views/Home.vue';

Vue.use(Vuetify);
Vue.use(Router);

Vue.config.productionTip = false;

const vuetify = new Vuetify();

const route = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/index.html',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});

new Vue({
  vuetify,
  route,
  render: h => h(App),
}).$mount('#app');
