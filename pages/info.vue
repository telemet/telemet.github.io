<template lang="html">
  <!-- Wrapper -->
  <div class="min-h-screen mx-auto">
    <AppPoster poster="telemet-balfur2" />

    <!-- Counter -->
    <section id="main" class="">
      <div class="text-center">
        <h1 class="text-2xl md:text-3xl lg:text-4xl">
          גיוס של
          <NuxtLink to="/#people">
            <span
              class="text-red-700 border-b border-white border-dashed hover:text-white hover:border-red-700"
              >אנשים</span
            >
          </NuxtLink>
          שהתעוררו לאמת הוא בראש מעינינו
        </h1>

        <p class="text-gray-300 text-lg md:text-xl lg:text-2xl">
          אנו זקוקים לעזרתכם, הרשמו פה ועכשיו -
        </p>
        <div class="">
          <NuxtLink to="/#join">
            <app-button class="btn btn-red mx-auto mt-10" title="להרשמה" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppButton from '~/components/AppButton'
import AppPoster from '@/components/AppPoster'

export default {
  name: 'Home',
  components: {
    AppButton,
    AppPoster
  },
  data() {
    return {
      title: 'אודות',
      description: 'אודות טלאֱמֶת',
      poster: 'https://telemet.org/images/telemet-meta-poster.jpg'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        // Open Graph / Facebook
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.$nuxt.$route.path
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'טלאֱמֶת | ' + this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.poster
        },
        // Twitter
        {
          hid: 'twitter:url',
          property: 'twitter:url',
          content: this.$nuxt.$route.path
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: 'טלאֱמֶת | ' + this.title
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: this.poster
        }
      ]
    }
  }
}
</script>

<style lang="postcss">
section {
  @apply relative min-h-screen w-full flex flex-col items-center justify-center;
}
</style>
