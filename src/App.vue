<template>
  <div id="app">
    <header-app></header-app>
    <div>
    <router-view id="container"/>
    </div>
    <footer-bar class="footer"></footer-bar>
  </div>
</template>

<script>
import Footer from './views/custom/FooterBar'
import HeaderApp from './views/custom/HeaderApp'
export default {
  name: 'App',
  components: {
    'footer-bar':Footer,
    'header-app':HeaderApp
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
