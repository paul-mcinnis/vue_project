<template>
  <div class="main" :style="cssProps">
    <TheNavBar />
    <h1 class="title">This is where my projects will go</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TheNavBar from '@/components/TheNavBar.vue'

@Component({
  components: {
    TheNavBar
  }
})
export default class Projects extends Vue {
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require('@/assets/img/projects-bg.jpg')})`
      }
    }
  }
}
</script>

<style scoped></style>
