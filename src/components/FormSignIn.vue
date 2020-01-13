<template>
  <form class="form--default form--sign-in">
    <div class="form--container">
      <form-input
        type="email"
        label="Email"
        wide
        v-model="form.email"
        :error="
          $v.form.email.$dirty && $v.form.email.$invalid
            ? 'Invalid email'
            : false
        "
        @change="$v.form.email.$touch"
      ></form-input>
      <form-input
        :type="pwdVisible ? 'text' : 'password'"
        label="Password"
        wide
        v-model="form.password"
        :error="
          $v.form.password.$dirty && $v.form.password.$invalid
            ? 'Invalid password'
            : false
        "
        @change="$v.form.password.$touch"
      >
        <template v-slot:append-icon>
          <svg-icon
            class="color--primary cursor--pointer"
            @click="pwdVisible = !pwdVisible"
          >
            <icon-eye v-if="pwdVisible" />
            <icon-eye-off v-else />
          </svg-icon>
        </template>
      </form-input>
      <div class="form--actions">
        <btn color="primary" wide @click.prevent="signIn">
          Sign In
        </btn>
      </div>
    </div>
    <div class="form--footer color--primary weight--medium center">
      <div>Don’t have an account yet?</div>
      <router-link :to="{ name: 'sign-up' }">Sign Up</router-link>
    </div>
  </form>
</template>

<script>
// App Components
import Btn from '@/components/Btn';
import FormInput from '@/components/FormInput';
import SvgIcon from '@/components/SvgIcon';
import IconEye from '@/components/icons/IconEye';
import IconEyeOff from '@/components/icons/IconEyeOff';
// Mixins
import notifier from '@/mixins/notifier.mixin';
// Libs
import { required, email } from 'vuelidate/lib/validators';
// Utils
import timer from '@/utils/timer';

export default {
  name: 'form-sign-in',
  components: {
    Btn,
    FormInput,
    SvgIcon,
    IconEye,
    IconEyeOff,
  },
  mixins: [notifier],
  data: () => ({
    form: {
      email: 'example@acme.com',
      password: '123456789ASD!',
    },
    pwdVisible: false,
  }),
  validations() {
    return {
      form: {
        email: {
          email,
          required,
        },
        password: {
          required,
        },
      },
    };
  },
  methods: {
    signIn() {
      const {
        notify,
        form: { email, password },
        $store: { dispatch },
        $router,
        $v,
      } = this;

      $v.form.$touch();

      if ($v.form.$pending || $v.form.$error) {
        return notify({
          type: 'error',
          message: 'Invalid form fields',
        });
      }

      dispatch('auth/signIn', { email, password })
        .then(() => timer(0))
        .then(() => $router.push({ name: 'account' }))
        .catch(({ message }) => {
          notify({
            message,
            type: 'error',
          });
        });
    },
  },
};
</script>
