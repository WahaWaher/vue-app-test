<template>
  <div id="app">
    <!-- Temp* -->
    <nav class="app-navigation" :hidden="false">
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
      </ul>
    </nav>
    <div class="container">
      <router-view :key="$route.path" />
    </div>
  </div>
</template>

<style lang="scss">
@import './scss/app.scss';
</style>
