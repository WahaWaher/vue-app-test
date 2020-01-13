<template>
  <div id="app">
    <transition name="slide-left" mode="out-in">
      <router-view :key="$route.path" />
    </transition>
  </div>
</template>

<style lang="scss">
@import './scss/app.scss';
</style>
