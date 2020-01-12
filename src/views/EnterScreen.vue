<template>
  <div class="app-page page--enter-screen">
    <div class="enter-screen--container center">
      <h1 class="color--primary">Ready for a great <br />User experience?</h1>
      <p class="color--primary">Bring your media to the next level!</p>
      <div class="enter-screen--nav">
        <btn color="white" @click="$router.push({ name: 'sign-up' })">
          Sign Up
        </btn>
        <btn
          shape="circle"
          color="primary"
          @click="$router.push({ name: 'sign-in' })"
        >
          <svg-icon class="color--white">
            <icon-arrow-right />
          </svg-icon>
        </btn>
      </div>
    </div>
  </div>
</template>

<script>
// App Components
import Btn from '@/components/Btn';
import SvgIcon from '@/components/SvgIcon';
import IconArrowRight from '@/components/icons/IconArrowRight';

export default {
  name: 'enter-screen',
  components: {
    Btn,
    SvgIcon,
    IconArrowRight,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/views/enter-screen';
</style>
