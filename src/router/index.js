import Vue from 'vue';
import VueRouter from 'vue-router';

// Components
import EnterScreen from '../views/EnterScreen';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import Account from '../views/Account';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'enter-screen',
    component: EnterScreen,
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: SignIn,
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUp,
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
