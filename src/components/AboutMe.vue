<template>
  <div id="about-me" class="row">
    <div class="col-md">
      <img src="@/assets/img/ocean.jpg" />
    </div>
    <div class="col-md">
      <h2>Hi, My name is Paul</h2>
      <h3>Web Designer and Developer</h3>
      <p>
        I built this site to devlop my work and play around with new
        technologies. It's a little sparse right now, but there are projects in
        the works. As I start developing them I'll add links. Until then feel
        free to look around
      </p>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AboutMe extends Vue {}
</script>

<style scoped>
#about-me {
  text-align: center;
  padding: 20px;
  margin-top: 60px;
}

#about-me img {
  width: 100%;
  max-height: 50vh;
  object-fit: cover;
}
</style>
