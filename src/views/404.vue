<template>
  <div class="fullscreen">
    <div>
      <img id="notfoundcartoon" src="@/assets/img/SadPanda.png" />
    </div>
    <div id="notfoundtxt">
      <h1>Sorry</h1>
      <h2>We can't find that page</h2>
      <router-link to="/">
        Would you like to
        <strong>Go to Home?</strong>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import BootstrapVue from 'bootstrap-vue'

@Component
export default class PageNotFound extends Vue {}
</script>

<style scoped>
h1 {
  color: red;
}
h2 {
  color: blue;
}
strong {
  font-style: italic;
  text-decoration: underline;
}
#notfoundcartoon {
  float: right;
  padding-top: 100px;
  width: 30%;
  margin-left: 10%;
  margin-right: 20%;
}
#notfoundtxt {
}
</style>
