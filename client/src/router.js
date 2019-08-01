import Vue from 'vue';
import Router from 'vue-router';
import RegisterBox from './components/RegisterBox.vue';
import Dashboard from './views/Dashboard.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/test',
      name: 'test',
      component: RegisterBox,
    },
  ],
});
