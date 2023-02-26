<template>
  <header>
    <div id="top-menu">
      <router-link :to="{ name: 'index' }" class="menu-item">
        <p>Home</p>
      </router-link>
      <div class="menu-item"><a href="#">Docs</a></div>
      <router-link :to="{ name: 'team' }" class="menu-item">
        <p href="./team.html">Team</p>
      </router-link>
      <div class="menu-item">
        <img src="../../public/images/logout.svg" width="32" />
      </div>
    </div>
    <div id="medium-menu">
      <div class="medium-menu-item">
        <img src="../../public/images/home.svg" width="32" />
      </div>
    </div>
    <div id="lower-menu"></div>
  </header>

  <div id="content">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "MainApp",
};
</script>

<style></style>
