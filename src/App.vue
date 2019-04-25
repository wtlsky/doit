<template>
  <div id="app">
    <App-control></App-control>
    <div class="router-view">
      <Router-view />
    </div>
    <Tab-bar></Tab-bar>
  </div>
</template>

<script>
import AppControl from '@/components/AppControl.vue'
import TabBar from '@/components/TabBar.vue'
export default {
  name: "app",
  components: {
    AppControl,
    TabBar
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
.router-view {
  position: absolute;
  top: 30px;
  right: 0;
  bottom: 60px;
  left: 0;
  background: #eee;
  overflow: hidden;
}
</style>
