<template>
  <div class="app-page page--account">
    <div class="account--container">
      <div class="_item _text">
        <div class="container-fluid center">
          <h1 class="color--primary">Hello, {{ fullName }}!</h1>
          <btn color="white" @click="logout">Logout</btn>
        </div>
      </div>
      <div class="_item _image">
        <svg-icon viewBox="0 0 296 467" fill="none">
          <icon-wooman-rest />
        </svg-icon>
      </div>
    </div>
  </div>
</template>

<script>
// App Components
import Btn from '@/components/Btn';
import SvgIcon from '@/components/SvgIcon';
import IconWoomanRest from '@/components/icons/IconWoomanRest';

export default {
  name: 'account',
  components: {
    Btn,
    SvgIcon,
    IconWoomanRest,
  },
  computed: {
    fullName() {
      return this.$appStorage.getSignedIn().fullName || '';
    },
  },
  methods: {
    logout() {
      const {
        notify,
        $store: { dispatch },
      } = this;

      dispatch('auth/logout')
        .then(() => this.$router.push({ name: 'enter-screen' }))
        .catch(({ message }) =>
          notify({
            message,
            type: 'error',
          })
        );
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/views/account';
</style>
