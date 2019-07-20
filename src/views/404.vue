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
h1,
h2 {
  color: darkslategray;
}

h1 {
  size: 6rem;
}
h2 {
  size: 3rem;
}

/* mobile */
@media (min-width: 544px) {
  h1 {
    size: 1.5rem;
  }
  h2 {
    size: 1rem;
  }
}

/* tablet */
@media (min-width: 768px) {
  h1 {
    size: 3rem;
  }
  h2 {
    size: 1.5rem;
  }
}

strong {
  font-style: italic;
  text-decoration: underline;
}
#notfoundcartoon {
  padding-top: 100px;
  width: 70%;
}
#notfoundtxt {
  padding-top: 100px;
}
</style>
