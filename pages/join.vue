<template lang="html">
  <!-- Wrapper -->
  <div class="w-full mx-auto pt-14">
    <!-- Header -->
    <div class="container mx-auto px-6 mt-8">
      <AppTitleBar class="" title="הרשמה">
        <AppToggle @toggle="showFeatures()" />
      </AppTitleBar>
    </div>

    <!-- Select Signup -->
    <section
      class="flex flex-col lg:flex-row justify-between container mx-auto px-6"
    >
      <AppSignupSelect
        v-for="button in buttons"
        :key="button.type"
        v-scroll-to="'#main'"
        :is-active="button.isActive"
        :show-features="button.showFeatures"
        :features="button.features"
        :type="button.type"
        :title="button.title"
        :sub="button.sub"
        :divider="button.divider"
        @activate="activateButton(button, $event)"
      />
    </section>

    <!-- Form Title + Form -->
    <section id="main">
      <!-- Form -->
      <!-- <div class="" @activate="setState($event)"> -->
      <div
        class="separator flex items-center text-center mt-10 container mx-auto px-6"
      >
        <div class="mx-8 md:mx-12">
          <icon
            :icon-color="'transperant'"
            class="icon text-gray-100 fill-current w-18 h-18 md:w-20 md:h-20 mt-10 mb-2 trans-100"
            icon-name="join"
          >
            <IconUser v-if="state === 't'" />
            <IconGroup v-else-if="state === 'g'" />
            <IconBolt v-else />
          </icon>
        </div>
      </div>

      <div class="text-center">
        <h1 v-if="state === 't'" class="text-2xl md:text-3xl tracking-wide">
          {{ buttons[0].sub }}
          <span
            class="block text-4xl md:text-5xl font-bold text-red-600 leading-10"
          >
            {{ buttons[0].title }}
          </span>
        </h1>
        <h1 v-if="state === 'g'" class="text-2xl md:text-3xl tracking-wide">
          {{ buttons[1].sub }}
          <span
            class="block text-4xl md:text-5xl font-bold text-red-600 leading-10"
          >
            {{ buttons[1].title }}
          </span>
        </h1>
        <h1 v-if="state === 'c'" class="text-2xl md:text-3xl tracking-wide">
          {{ buttons[2].sub }}
          <span
            class="block text-4xl md:text-5xl font-bold text-red-600 leading-10"
          >
            {{ buttons[2].title }}
          </span>
        </h1>
      </div>

      <AppFormed
        :state="state"
        class="my-10 w-11/12 md:w-8/12 lg:w-6/12 xl:w-5/12 rounded-lg mx-auto py-3 px-5"
      />
    </section>
  </div>
</template>

<script>
export default {
  // layout: 'blank',
  data() {
    return {
      state: 't',
      buttons: [
        {
          isActive: true,
          showFeatures: false,
          type: 't',
          sub: 'הרשמה כחבר',
          title: 'אמת',
          divider: 'מקנה לך',
          features: [
            'רישום כפעיל ברשימה המרכזית',
            'הזדכות במטבע אמת אחד',
            'אפשרות להזדכות במטבעות נוספים'
          ]
        },
        {
          isActive: false,
          showFeatures: false,
          type: 'g',
          title: 'לקבוצה',
          sub: 'הרשמה כחבר תורם',
          features: [
            'הזדכות במספר מטבעות אמת התואם את תרומתך החד-פעמית',
            'דף פרופיל אישי',
            'יצירת דפים במערכת הקוד הפתוח',
            'הזמנה לשרת סגור'
          ]
        },
        {
          isActive: false,
          showFeatures: false,
          type: 'c',
          title: 'למערכה',
          sub: 'הרשמה כחבר תורם',
          features: [
            'הזדכות במספר מטבעות אמת התואם את תרומתך החד-פעמית',
            'דף פרופיל אישי',
            'יצירת דפים במערכת הקוד הפתוח',
            'הזמנה לשרת סגור'
          ]
        }
      ]
    }
  },
  methods: {
    // goBack() {
    //   this.$router.back()
    // },
    activateButton(activatedButton, event) {
      for (const button of this.buttons) {
        button.isActive = button === activatedButton
        this.state = event
      }
    },
    showFeatures() {
      for (const button of this.buttons) {
        button.showFeatures = !button.showFeatures
      }
    }
    // setState(event) {
    //   this.state = event.patload[0]
    // }
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

<style lang="postcss" scoped>
body {
  @apply bg-gray-800 text-gray-400 antialiased;
}

.separator::before,
.separator::after {
  content: '';
  @apply flex-1 border-b border-gray-700;
}
</style>
