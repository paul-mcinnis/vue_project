<template>
  <div class="home">
    <TheNavBar />
    <div class="main" :style="cssProps">
      <h1 class="title">Welcome</h1>
    </div>
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
export default class Home extends Vue {
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require('@/assets/img/lake.jpg')})`
      }
    }
  }
}
</script>

<style scoped></style>
