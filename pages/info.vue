<template lang="html">
  <!-- Wrapper -->
  <div class="min-h-screen mx-auto">
    <AppPoster poster="telemet-hands" />

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

        <p
          class="w-3/4 md:w-3/5 mx-auto text-gray-200 text-md md:text-lg lg:text-xl mt-6 mb-4"
        >
          השלב ראשון במערכה לשחרור העם הוא גיוס חברים וקרובים שמוכנים לפעול ביחד
          באופן מאורגן, שיטתי וממוקד למען החופש של כולנו ונטרולה המיידי של
          ״המציאות החדשה״ בחסות הסדר העולמי החדש ומהנדסי החברה בארץ ובעולם.
        </p>
        <p
          class="w-3/4 md:w-3/5 mx-auto text-gray-200 text-md md:text-lg lg:text-xl"
        >
          כולנו ביחד נהייה חייבים להשיג
          <a
            href="https://he.wikipedia.org/wiki/%D7%9E%D7%A1%D7%94_%D7%A7%D7%A8%D7%99%D7%98%D7%99%D7%AA_(%D7%A1%D7%95%D7%A6%D7%99%D7%95%D7%9C%D7%95%D7%92%D7%99%D7%94)"
            title="מסה קריטית (סוציולוגיה)"
            target="_blank"
            >מסה קריטית
          </a>
          לפני שיוצאים לפעולה אחת ועוצמתית. לכן,
          <b
            >הגיוס מתבצע בשיטת חבר-מביא-חבר והאחריות לגיוס היא משותפת לכל חברי
            המערכה.</b
          >
          גם את/ה תתבקש/י לפעול לקידום מטרה זו. פרטים נוספים ישלחו אליך במייל
          לאחר הרישום.
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
