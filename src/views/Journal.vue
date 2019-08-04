<template>
  <div class="main" :style="cssProps">
    <TheNavBar />
    <h1 class="title">Its a blog!</h1>
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
export default class journal extends Vue {
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require('@/assets/img/journal-bg.jpg')})`
      }
    }
  }
}
</script>

<style scoped></style>
