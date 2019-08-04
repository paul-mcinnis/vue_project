<template>
  <div class="main" :style="cssProps">
    <TheNavBar />
    <h1 class="title">This will be the contacts page</h1>
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
export default class Contact extends Vue {
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require('@/assets/img/contact-bg.jpg')})`
      }
    }
  }
}
</script>

<style scoped></style>
