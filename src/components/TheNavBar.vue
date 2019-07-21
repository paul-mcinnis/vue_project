<template>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TheNavBar extends Vue {}
</script>

<style scoped>
#nav {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  opacity: 0.8;
  z-index: 100;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* mobile */
@media (max-width: 544px) {
  #nav {
    padding: 10px;
  }
}
</style>
