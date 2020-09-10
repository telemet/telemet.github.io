<template lang="html">
  <!-- Wrapper -->
  <div class="min-h-screen pt-14">
    <!-- Content -->
    <section class="flex w-full">
      <div class="hidden lg:flex w-3/12">
        <div class="w-full max-w-sm px-6">
          <div class="sticky inset-14 pt-2">
            <div
              class="block py-2 px-3 bg-gray-800 hover:bg-gray-700 rounded-md text-sm text-gray-400 hover:text-white tracking-wider cursor-pointer"
              @click="toggleAnswer"
            >
              <span class="block font-bold text-base text-red-600"
                >מהן מערכות?</span
              >
              <span v-show="showAnswer" class="block mt-2">
                <b>מערכות</b> מאפשרות לקבוצות להתארגן ולפעול למען מטרות באופן
                ממוקד וחופשי.</span
              >
            </div>
            <NuxtLink
              to="/telemet/faq"
              class="mt-1 block py-2 px-3 bg-gray-800 hover:bg-gray-700 rounded-md text-sm text-gray-600 hover:text-white tracking-wide"
            >
              <span class="block font-bold text-center">עוד</span>
            </NuxtLink>
            <!-- <AppStats class="stats" /> -->
          </div>
        </div>
      </div>
      <div class="flex-1 max-w-2xl mx-auto p-2">
        <div class="mb-12">
          <ul>
            <li v-for="campaign of campaigns" :key="campaign.index" class="">
              <NuxtLink :to="campaign.path" class="">
                <article
                  class="bg-gray-800 w-full rounded-lg overflow-hidden mb-12"
                >
                  <Poster
                    :src="campaign.dir + '/images/' + campaign.img"
                    :alt="campaign.title"
                    class="w-full h-auto filter"
                  />
                  <!-- <img
                    :src="'/images/' + campaign.img"
                    class="w-full h-auto filter"
                    alt="תיאור"
                  /> -->
                  <div class="px-4 py-04">
                    <h1
                      class="text-2xl font-normal text-gray-200 tracking-wide"
                    >
                      {{ campaign.title }}
                    </h1>
                    <p class="mt-01 mb-2 tracking-wide">
                      <span class="text-gray-500">בחסות: </span>
                      <span class="text-red-600 font-bold">{{
                        campaign.author.hname
                      }}</span>
                    </p>
                    <h2 class="text-lg tracking-wide text-gray-500">
                      {{ campaign.description }}
                    </h2>
                  </div>
                </article>
              </NuxtLink>
            </li>
          </ul>
          <!-- <pre>{{ campaigns }}</pre> -->
        </div>
      </div>
      <div class="hidden lg:flex w-2/12">
        <div class="w-full max-w-xs ml-0 mr-auto">
          <div class="sticky inset-14">
            <!-- <AppStats class="stats" /> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import AppTitleBar from '@/components/AppTitleBar'

export default {
  // layout: 'stats',
  // components: {
  //   AppTitleBar
  // },
  async asyncData({$content, params}) {
    const campaigns = await $content(params.slug, {deep: true})
      .where({
        type: {$eq: 'c'},
        slug: {$containsNone: ['profile', 'sample']}
      })
      .only(['title', 'description', 'img', 'slug', 'author', 'dir'])
      .sortBy('updatedAt', 'desc')
      .limit(20)
      // .skip(1)
      .fetch()
    return {
      campaigns
    }
  },
  data() {
    return {
      title: 'ראשי',
      description: 'דף הבית של טלאֱמֶת',
      poster: 'https://telemet.org/images/telemet-poster-fb.jpg',
      showAnswer: false
      // isSticky: false,
      // lastScrollPosition: ''
    }
  },
  methods: {
    toggleAnswer() {
      this.showAnswer = !this.showAnswer
    }
  }
  // mounted() {
  //   window.addEventListener('scroll', this.onScroll)
  // },
  // beforeDestroy() {
  //   window.removeEventListener('scroll', this.onScroll)
  // },
  // methods: {
  //   onScroll() {
  //     const currentScrollPosition = document.documentElement.scrollTop
  //     this.isSticky = currentScrollPosition > 234
  //   }
  // }
}
</script>

<style lang="postcss" scoped>
/* .sticky {
  margin-top: 76vh;
} */
</style>
