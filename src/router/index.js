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
    meta: {
      authHidden: true,
    },
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUp,
    meta: {
      authHidden: true,
    },
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
    meta: {
      auth: true,
    },
  },
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

/**
 * Routes protection
 */
router.beforeEach((to, from, next) => {
  const $appStorage = Vue.prototype.$appStorage;
  const { auth, authHidden } = to.meta;
  const isSignIn = $appStorage.getSignedIn();

  // Hide private routes for unsigned users
  if (auth && !isSignIn) {
    next({ name: 'sign-in' });
    // Hide public routes for signed users
  } else if (isSignIn && authHidden) {
    next({ name: 'account' });
    // Other routes
  } else {
    next();
  }
});

export default router;
