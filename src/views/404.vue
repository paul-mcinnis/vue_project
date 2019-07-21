<template>
  <div class="bg" :style="bgimage">
    <div class="container">
      <div class="row">
        <div id="notfoundtxt" class="col-md">
          <h1>Sorry</h1>
          <h2>We can't find that page</h2>
          <router-link to="/">
            Would you like to go the the
            <strong>home page?</strong>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import BootstrapVue from 'bootstrap-vue'

@Component
export default class PageNotFound extends Vue {
  data() {
    return {
      bgimage: {
        backgroundImage: `url(${require('@/assets/img/city-bg.png')})`,
        height: 100
      }
    }
  }
}
</script>

<style scoped>
.bg {
  /* Full height */
  height: 100vh;

  background-image: src= '@/assets/img/city-bg.png';

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
strong {
  font-style: italic;
  text-decoration: underline;
}
#notfoundtxt {
  padding-top: 100px;
}
</style>
