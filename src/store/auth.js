import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    signedIn: false,
  },
  actions: {
    /**
     * User sign up
     */
    signUp(context, user = {}) {
      return new Promise((rs, rj) => {
        const { $appStorage } = Vue.prototype;
        const { fullName, email, password } = user;

        if ($appStorage.isUserExists(email)) {
          rj({ message: 'User with specified email already exists' });
        }

        $appStorage.signUpUser({
          fullName,
          email,
          password,
        });

        if (!$appStorage.isUserExists(email)) {
          rj({ message: 'Something went wrong' });
        }

        rs('Registration success!');
      });
    },
    /**
     * User sign in
     */
    signIn(context, user = {}) {
      return new Promise((rs, rj) => {
        const { $appStorage } = Vue.prototype;
        const { email, password } = user;
        const dbUser = $appStorage.getUserByEmail(email);

        if (!dbUser || dbUser.password !== password) {
          rj({ message: 'Wrong email or password' });
        }

        $appStorage.signInUser({
          fullName: dbUser.fullName,
          email: dbUser.email,
        });

        rs({ message: 'Auth successful' });
      });
    },
    /**
     * User logout
     */
    logout() {
      return new Promise(rs => {
        Vue.prototype.$appStorage.logout();
        rs({ message: 'Logout successful' });
      });
    },
  },
};
