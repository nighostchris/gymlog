import Vue from 'vue';
import axios from 'axios';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Dashboard from './views/Dashboard.vue';
import History from './views/History.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/history',
      name: 'history',
      component: History,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path !== '/') {
    const localToken = localStorage.getItem('token');
    console.log(localToken);
    if (localToken == null) {
      next('/');
    } else {
      axios.post('http://localhost:3000/api/v1/token', {
        token: localToken,
      }).then((res) => {
        if ('verify' in res.data) {
          next();
        } else {
          next('/');
        }
      }).catch((e) => {
        console.log(e.response);
        next('/');
      });
    }
  }

  next();
});

export default router;
