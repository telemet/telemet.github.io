<template>
  <img v-if="!bg" :src="imgSrc()" :alt="alt" />

  <div
    v-else
    :style="{backgroundImage: 'url(\'' + imgSrc() + '\')'}"
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
    bg: {
      type: Boolean,
      default: false
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
        if (/(https?:\/\/.*\.(?:png|jpg|jpeg))/.test(this.src)) {
          return this.src
        } else return require(`~/content${this.src}`)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
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
