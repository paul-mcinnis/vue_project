<template>
  <div class="home">
    <TheNavBar />
    <div id="coverbanner">
      <img src="@/assets/img/lake.jpg" border="0" />
      <!-- <img src="@/assets/img/ocean.jpg" border="0" />
      <img src="@/assets/img/big-sur.jpg" border="0" />-->
    </div>
    <div id="welcome">
      <h1>Welcome to my site</h1>
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
import TheFooter from '@/components/TheFooter.vue'
import HelloWorld from '@/components/HelloWorld.vue'

@Component({
  components: {
    HelloWorld,
    TheNavBar,
    TheFooter
  }
})
export default class Home extends Vue {}
</script>

<style scoped>
#welcome {
  height: 5000px;
}

#coverbanner img {
  width: 100%;
  max-height: 66vh;
  object-fit: cover;
}
</style>
