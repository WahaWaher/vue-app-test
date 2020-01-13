<template>
  <div class="app-page page--sign-up">
    <div class="sign-up--container">
      <div class="container-fluid">
        <h1 class="color--primary center">Sign Up</h1>
        <form-sign-up />
      </div>
    </div>
  </div>
</template>

<script>
// App Components
import FormSignUp from '@/components/FormSignUp';

export default {
  name: 'sign-up',
  components: {
    FormSignUp,
  },
};
</script>
<style lang="scss" scoped>
@import '@/scss/views/sign-up';
</style>
