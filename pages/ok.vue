<template lang="html">
  <!-- Wrapper -->
  <div class="min-h-screen mx-auto">
    <AppPoster poster="telemet-hands" />

    <!-- Counter -->
    <section id="main" class="">
      <div class="text-center">
        <h1 class="text-6xl font-bold text-red-700">
          תודה
        </h1>

        <p class="text-gray-100 text-3xl">
          בקשתך נשלחה בהצלחה
        </p>
        <p class="max-w-screen-sm px-10 mx-auto text-gray-300 mt-6">
          פרטים נוספים והוראות לקידום המערכה יישלחו לכתובת הדוא״ל איתו נרשמת תוך
          24-48 שעות. עד אז, אם יש לך רעיונות משלך לקידום המערכה, הצטרף/י לשיחה
          בפייסבוק .
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

<style lang="postcss">
section {
  @apply relative min-h-screen w-full flex flex-col items-center justify-center;
}
</style>
