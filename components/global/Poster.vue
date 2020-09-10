<template>
  <img v-if="src" :src="imgSrc()" :alt="alt" />

  <div
    v-else
    :style="{backgroundImage: 'url(\'' + imgUrl() + '\')'}"
    class="poster top-0 w-full bg-center bg-no-repeat bg-fixed bg-cover"
  />
</template>

<script>
// import Parallax from 'vue-parallaxy'

export default {
  components: {
    // Parallax
  },
  props: {
    // Use :url for background-image
    url: {
      type: String,
      default: null
    },
    // Use :src for img tag
    src: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      required: true
    }
  },
  methods: {
    imgSrc() {
      try {
        return require(`~/content${this.src}`)
      } catch (error) {
        return require(`~/assets/images/default.jpg`)
      }
    },
    imgUrl() {
      try {
        return require(`~/content${this.url}`)
      } catch (error) {
        return require(`~/assets/images/default.jpg`)
      }
    }
  }
}
</script>
<style lang="postcss" scoped>
.poster {
  /* screen height - navbar height (14) */
  height: calc(100vh - 3.5rem);
}
</style>
