<template>
  <div class="about">
    <TheNavBar />
    <h1>This is an about page</h1>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TheNavBar from '@/components/TheNavBar.vue'
import TheFooter from '@/components/TheFooter.vue'

@Component({
  components: {
    TheNavBar,
    TheFooter
  }
})
export default class About extends Vue {}
</script>
