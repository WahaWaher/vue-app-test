<template>
  <div class="app-page page--account">
    <div class="account--container">
      <div class="_item _text">
        <div class="container-fluid center">
          <h1 class="color--primary">
            Hello, John Doe!
          </h1>
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
import SvgIcon from '@/components/SvgIcon';
import IconWoomanRest from '@/components/icons/IconWoomanRest';

export default {
  name: 'account',
  components: {
    SvgIcon,
    IconWoomanRest,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/views/account';
</style>
