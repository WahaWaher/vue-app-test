<template>
  <form class="form--default">
    <div class="form--container">
      <!-- Input: fullName -->
      <form-input
        type="text"
        label="Full name"
        wide
        v-model="form.fullName"
        :error="
          $v.form.fullName.$dirty && $v.form.fullName.$invalid
            ? 'Enter valid name'
            : false
        "
        @change="$v.form.fullName.$touch"
      ></form-input>
      <!-- Input: Email -->
      <form-input
        type="email"
        label="Email"
        wide
        v-model="form.email"
        :error="
          $v.form.email.$dirty && $v.form.email.$invalid
            ? 'Enter valid email'
            : false
        "
        @change="$v.form.email.$touch"
      ></form-input>
      <!-- Input: password -->
      <form-input
        :type="pwdVisible ? 'text' : 'password'"
        label="Password"
        hint="Password must contain 8+ symbols, 1 special and 2 capital letters"
        wide
        v-model="form.password"
        :error="
          $v.form.password.$dirty && $v.form.password.$invalid
            ? 'Enter valid password'
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
      <!-- Input: repeatPassword -->
      <form-input
        :type="rpPwdVisible ? 'text' : 'password'"
        label="Repeat password"
        wide
        v-model="form.repeatPassword"
        :error="
          $v.form.repeatPassword.$dirty && $v.form.repeatPassword.$invalid
            ? 'Passwords do not match'
            : false
        "
        @change="$v.form.repeatPassword.$touch"
      >
        <template v-slot:append-icon>
          <svg-icon
            class="color--primary cursor--pointer"
            @click="rpPwdVisible = !rpPwdVisible"
          >
            <icon-eye v-if="rpPwdVisible" />
            <icon-eye-off v-else />
          </svg-icon>
        </template>
      </form-input>
      <div class="form--actions">
        <btn color="primary" shape="round" wide @click.prevent="signUp()">
          Sign Up
        </btn>
      </div>
    </div>
    <div class="form--footer color--primary weight--medium center">
      <div>Already have an account?</div>
      <router-link :to="{ name: 'sign-in' }">Sign In</router-link>
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
import { required, minLength, email } from 'vuelidate/lib/validators';
import { minCapitalChars, minSpecialChars } from '@/utils/validators';
// Utils
import timer from '@/utils/timer';

export default {
  name: 'form-sign-up',
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
      fullName: 'John Doe',
      email: 'example@acme.com',
      password: '123456789ASD!',
      repeatPassword: '123456789ASD!',
    },
    pwdVisible: false,
    rpPwdVisible: false,
  }),
  validations() {
    return {
      form: {
        fullName: {
          required,
          minLength: minLength(6),
        },
        email: {
          email,
          required,
        },
        password: {
          required,
          minLength: minLength(8),
          minCapitalChars: minCapitalChars(2),
          minSpecialChars: minSpecialChars(1),
        },
        repeatPassword: {
          required,
          eqPwd: function(value) {
            return value === this.form.password;
          },
        },
      },
    };
  },
  methods: {
    signUp() {
      const {
        notify,
        form: { fullName, email, password },
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

      dispatch('auth/signUp', { fullName, email, password })
        .then(() => timer(0))
        .then(() => dispatch('auth/signIn', { email, password }))
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
