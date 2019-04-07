<template>
  <div id="app">
    <app-control></app-control>
    <router-view />
  </div>
</template>

<script>
import AppControl from '@/components/AppControl.vue'

export default {
  name: "app",
  components: {
    AppControl
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
@media screen and (min-width: 200px) {
  html {
    font-size: 100px;
  }
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
