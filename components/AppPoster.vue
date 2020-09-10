<template lang="html">
  <section
    id="poster"
    :style="{backgroundImage: 'url(\'' + imageTitle + '\')'}"
    class="fixed h-screen top-0 w-full mt-14 bg-top bg-no-repeat bg-fixed bg-cover"
  />
</template>

<script>
export default {
  props: {
    poster: {
      type: String,
      default: 'telemet-finger.jpg'
    }
  },
  computed: {
    imageTitle() {
      return require('../assets/images/' + this.poster)
    }
  }
}
</script>
<style scoped lang="postcss">
section {
  height: calc(100vh - 3.5rem);
}
</style>
