<template>
  <div class="ocean-bg" :style="oceanBg">
    <h1>Sorry</h1>
    <h2>We can't find that page</h2>
    <router-link to="/">
      Would you like to
      <strong>Go to Home?</strong>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oceanBg: {
        backgroundImage: `url(${require('@/assets/ocean.jpg')})`,
        height: `100%`
      }
    }
  }
}
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
</style>
