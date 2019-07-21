<template>
  <div class="home">
    <TheNavBar />
    <div id="coverbanner">
      <img src="@/assets/img/lake.jpg" border="0" />
    </div>
    <div id="welcome">
      <h2>Welcome to my site</h2>
      <p>
        My name is Paul. I built this site to devlop my work and play around
        with new technologies. It's a little sparse right now, but there are
        projects in the works. As I start developing them I'll add links. Until
        then feel free to look around
      </p>
    </div>
    <Thefooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TheNavBar from '@/components/TheNavBar.vue'
import HelloWorld from '@/components/HelloWorld.vue'

@Component({
  components: {
    HelloWorld,
    TheNavBar
  }
})
export default class Home extends Vue {}
</script>

<style scoped>
#welcome {
  height: 1000px;
}

#coverbanner img {
  width: 100%;
  max-height: 50vh;
  object-fit: cover;
}
</style>
