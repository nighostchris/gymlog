import Vue from 'vue';
import Router from 'vue-router';
import RegisterBox from './components/RegisterBox.vue';
import Dashboard from './views/Dashboard.vue';
import History from './views/History.vue';

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
      path: '/history',
      name: 'history',
      component: History,
    },
    {
      path: '/test',
      name: 'test',
      component: RegisterBox,
    },
  ],
});
