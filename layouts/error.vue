<template lang="html">
  <!-- Wrapper -->
  <div class="min-h-screen mx-auto">
    <!-- <AppPoster poster="telemet-sheep" /> -->

    <!-- Counter -->
    <section
      id="main"
      class="fixed min-h-screen w-full flex flex-col items-center justify-center"
    >
      <div class="text-center -mt-12">
        <NuxtLink to="/">
          <h1 class="text-14xl font-bold text-red-700">
            404
          </h1>
        </NuxtLink>

        <NuxtLink to="/" class="block text-gray-100 text-3xl -mt-12">
          דף לא זמין
        </NuxtLink>
        <!-- <div class="">
          <NuxtLink to="/#join">
            <app-button class="btn btn-red mx-auto mt-10" title="להרשמה" />
          </NuxtLink>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
// import AppButton from '~/components/AppButton'
// import AppPoster from '@/components/AppPoster'

export default {
  name: 'Home',
  components: {
    // AppButton,
    // AppPoster
  },
  data() {
    return {
      title: 'אודות',
      description: 'אודות טלאֱמֶת'
      // poster: 'https://telemet.org/images/telemet-meta-poster.jpg'
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
