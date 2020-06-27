<template>
  <div id="app">
    <div class="container">
      <Navbar />
      <router-view />
      <DevLinks />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import DevLinks from "./components/DevLinks.vue";

export default {
  name: "App",
  components: {
    Navbar,
    DevLinks
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
}
</style>