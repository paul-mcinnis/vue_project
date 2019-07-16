<template>
  <div class="ocean-bg" :style="oceanBg">
    <h1>404 Page not found !!</h1>
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
