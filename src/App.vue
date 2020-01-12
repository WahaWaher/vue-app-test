<template>
  <div id="app">
    <!-- Temp* -->
    <nav v-if="menu" class="app-navigation">
      <ul class="app-navigation-list">
        <li>
          <router-link to="/">EnterScreen</router-link>
        </li>
        <li>
          <router-link to="/sign-up">SignUp</router-link>
        </li>
        <li>
          <router-link to="/sign-in">SignIn</router-link>
        </li>
        <li>
          <router-link to="/account">Account</router-link>
        </li>
        <li>
          <button @click="menu = false">Close</button>
        </li>
      </ul>
    </nav>
    <!-- <div class="container"> -->
    <router-view :key="$route.path" />
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data: () => ({
    menu: true,
  }),
};
</script>

<style lang="scss">
@import './scss/app.scss';
</style>
