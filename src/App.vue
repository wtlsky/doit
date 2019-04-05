<template>
  <div id="app">
    <app-control></app-control>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import AppControl from '@/components/AppControl.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    AppControl
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
