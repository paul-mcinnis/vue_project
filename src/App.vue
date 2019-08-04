<template>
  <div id="app">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { Vue } from 'vue-property-decorator'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.main .title {
  padding-top: 20vh;
}

h1 {
  font-size: 6rem;
  color: rgb(38, 38, 38);
}
h2 {
  font-size: 3rem;
  color: rgb(38, 38, 38);
}

/* tablet */
@media (max-width: 768px) {
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 1.5rem;
  }
}

/* mobile */
@media (max-width: 544px) {
  h1 {
    font-size: 1.5rem;
  }
  h2 {
    font-size: 1rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.1s;
}

.fade-enter-active {
  transition-delay: 0.1s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
