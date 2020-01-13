<template>
  <div class="app-page page--sign-in">
    <div class="sign-in--container">
      <div class="container-fluid">
        <h1 class="color--primary center">Sign In</h1>
        <form-sign-in />
      </div>
    </div>
  </div>
</template>

<script>
import FormSignIn from '@/components/FormSignIn';
export default {
  name: 'sign-in',
  components: {
    FormSignIn,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/views/sign-in';
</style>
