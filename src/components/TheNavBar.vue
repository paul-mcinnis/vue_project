<template>
  <div id="nav" class="nav-bar" :class="{ 'nav-bar--hidden': hideBackground }">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TheNavbar extends Vue {
  data() {
    return {
      hideBackground: true
    }
  }
  mounted() {
    window.addEventListener('scroll', this.scrolled)
  }
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrolled)
  }

  scrolled() {
    // Get the current scroll position
    const currentScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop
    if (currentScrollPosition <= 150) {
      this.hideBackground = true
      return
    }
    this.hideBackground = false
  }
}
</script>

<style scoped>
.nav-bar {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.8);
  top: 0;
  width: 100%;
  z-index: 100;
  font-size: 1.5rem;
}

.nav-bar--hidden {
  background-color: transparent;
}

.nav-bar a {
  font-weight: bold;
  color: black;
  margin-left: 10px;
  margin-right: 10px;
}

.nav-bar a.router-link-exact-active {
  color: #669999;
}

/* mobile */
@media (max-width: 544px) {
  .nav-bar {
    padding: 10px;
    font-size: 1rem;
  }
}
</style>
