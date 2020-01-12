<template>
  <div class="app-page page--sign-up">
    <div class="sign-up--container">
      <h1 class="color--primary center">Sign Up</h1>
      <!-- <div>valid: {{ !$v.form.$invalid }}</div>
      <div>fullName: {{ !$v.form.fullName.$invalid }}</div>
      <div>email: {{ !$v.form.email.$invalid }}</div>
      <div>password: {{ !$v.form.password.$invalid }}</div>
      <div>repeatPassword: {{ !$v.form.repeatPassword.$invalid }}</div> -->
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
                ? 'Invalid full name'
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
                ? 'Invalid email'
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
          <!-- Input: repeatPassword -->
          <form-input
            :type="rpPwdVisible ? 'text' : 'password'"
            label="Repeat password"
            wide
            v-model="form.repeatPassword"
            :error="
              $v.form.repeatPassword.$dirty && $v.form.repeatPassword.$invalid
                ? 'Invalid repeatPassword'
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
          <!-- Button: Submit -->
          <btn color="primary" shape="round" wide @click.prevent="signUp()">
            Sign Up
          </btn>
        </div>
        <div class="form--footer color--primary weight--medium center">
          <div>Already have an account?</div>
          <router-link :to="{ name: 'sign-in' }">Sign In</router-link>
        </div>
      </form>
    </div>
  </div>
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

export default {
  name: 'sign-up',
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
      password: '123456789',
      repeatPassword: '123456789',
    },
    pwdVisible: false,
    rpPwdVisible: false,
  }),
  validations() {
    return {
      form: {
        fullName: {
          required,
          minLength: minLength(3),
        },
        email: {
          email,
          required,
        },
        password: {
          required,
          minLength: minLength(8),
        },
        repeatPassword: {
          required,
        },
      },
    };
  },
  methods: {
    signUp() {
      let { notify /* , form */ } = this;
      let { $touch /* , $invalid */, $pending, $error } = this.$v.form;

      $touch();

      if ($pending || $error) {
        notify({
          type: 'error',
          message: 'Error',
        });
      } else {
        notify({
          type: 'success',
          message: 'Ok',
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/scss/views/sign-up';
</style>
