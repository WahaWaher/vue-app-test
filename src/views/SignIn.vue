<template>
  <div class="app-page page--sign-in">
    <div class="sign-in--container">
      <div class="container-fluid">
        <h1 class="color--primary center">Sign In</h1>
        <form class="form--default">
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
              <btn color="primary" wide @click="signIn">
                Sign In
              </btn>
            </div>
          </div>
          <div class="form--footer color--primary weight--medium center">
            <div>Don’t have an account yet?</div>
            <router-link :to="{ name: 'sign-up' }">Sign Up</router-link>
          </div>
        </form>
      </div>
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
      email: 'example@acme.com',
      password: '123456789',
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
          minLength: minLength(8),
        },
      },
    };
  },
  methods: {
    signIn() {
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
@import '@/scss/views/sign-in';
</style>
