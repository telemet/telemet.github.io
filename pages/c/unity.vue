<template lang="html">
  <!-- Wrapper -->
  <div class="min-h-screen mx-auto">
    <AppPoster />

    <!-- Counter -->
    <section
      id="main"
      class="relative min-h-screen w-full flex flex-col items-center justify-center"
    >
      <div>
        <AppCounter
          v-scroll-to="{element: '#people', duration: 1222, offset: 0}"
          class="py-4"
        />
        <h1
          v-scroll-to="'#people'"
          class="text-center text-3xl md:text-4xl cursor-pointer"
        >
          <span class="font-bold pl-2 text-gray-100">#כולנו</span>
          <span class="divider text-gray-400">|</span>
          <span class="text-gray-400 pr-2">
            מתאגדים ונערכים לשחרור העם
          </span>
        </h1>
        <div class="mt-10 text-center">
          <AppButton
            v-scroll-to="{element: '#join', duration: 1222, offset: 0}"
            class="btn btn-lg btn-red mx-auto focus"
            title="להרשמה"
          />
          <div class="clearfix" />
          <NuxtLink
            to="/t/tal.amitay/unity"
            class="mx-auto text-sm md:text-base mt-2 inline-block text-gray-400 hover:text-gray-100 trans-100 focus"
            >איך משיגים חופש?</NuxtLink
          >
        </div>
      </div>
    </section>

    <section id="people" class="relative bg-gray-800">
      <div class="container text-center p-10">
        <h3 class="text-red-700 font-bold text-5xl tracking-wide">
          הכוח של האנשים
        </h3>
        <p class="font-normal text-2xl tracking-wider text-white">
          גדול בהרבה מהאנשים עם הכוח
        </p>
        <hr class="my-10 border-gray-700" />
        <AppMembers />
      </div>
    </section>

    <section id="join" class="relative bg-gray-900">
      <div class="container text-center p-10">
        <h3 class="text-red-700 font-bold text-5xl tracking-wide">הרשמה</h3>
        <p class="font-normal text-2xl text-white tracking-wider">
          למערכה לשחרור העם
        </p>
        <hr class="my-10 border-gray-800" />
        <p class="">
          בשלב זה ההרשמה למערכה לשחרור העם מתבצעת ע״י הזמנה אישית בלבד. <br />
          לפרטים נוספים
          <NuxtLink to="/t/tal.amitay/unity" class="">לחצו כאן</NuxtLink>
          .
        </p>
        <AppForm />
      </div>
    </section>
  </div>
</template>

<script>
import AppButton from '~/components/AppButton'
import AppCounter from '~/components/AppCounter'
import AppForm from '@/components/AppForm'
import AppMembers from '@/components/AppMembers'
import AppPoster from '@/components/AppPoster'

export default {
  name: 'Home',
  components: {
    AppButton,
    AppCounter,
    AppForm,
    AppMembers,
    AppPoster
  },
  data() {
    return {
      title: 'ראשי',
      description: 'דף הבית של טלאֱמֶת',
      poster: 'https://telemet.org/images/telemet-poster-fb.jpg'
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

<style scoped lang="postcss">
section {
  @apply min-h-screen w-full flex flex-col items-center justify-center;
}
</style>
