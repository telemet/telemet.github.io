<template lang="html">
  <section
    id="poster"
    :style="{backgroundImage: 'url(\'' + imageTitle + '\')'}"
    class="fixed h-screen top-0 w-full pt-12 bg-bottom bg-no-repeat"
  />
</template>

<script>
export default {
  props: {
    poster: {
      type: String,
      default: 'telemet-hands'
    }
  },
  computed: {
    imageTitle() {
      return require('../assets/images/' + this.poster + '.jpg')
    }
  }
}
</script>
