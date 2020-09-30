<template lang="html">
  <AppLayout>
    <!-- Sidebar A -->
    <template v-slot:sidebarA>
      <div v-for="(item, index) in items" :key="index">
        <AppToggleItem :item="item" />
      </div>
      <NuxtLink
        to="/telemet/faq#מי-הם-חברי-האמת"
        class="mt-1 block py-2 px-3 bg-gray-800 hover:bg-gray-700 rounded-md text-sm text-gray-600 hover:text-white tracking-wide"
      >
        <span class="block font-bold text-center">עוד</span>
      </NuxtLink>
    </template>

    <!-- Main -->
    <template v-slot:main>
      <ul>
        <li v-for="post of posts" :key="post.index">
          <NuxtLink
            :to="post.path"
            class="block bg-gray-800 w-full rounded-lg overflow-hidden mb-12 border-gray-700 border"
          >
            <article>
              <div class="flex items-center justify-between mr-3">
                <Creator
                  :author="post.author"
                  :type="post.type"
                  :status="post.author.status"
                  size="sm"
                  class="my-3"
                />
                <span
                  class="ml-4 text-gray-400 text-sm flex items-center justify-center bg-gray-700 rounded-full py-1 px-3 hover:bg-gray-600 hover:text-gray-100"
                >
                  {{ formatDate(post.updatedAt) }}
                </span>
              </div>
              <Poster
                :src="post.img"
                :alt="post.title"
                class="w-full h-auto filter"
              />
              <div class="px-4 py-04">
                <h1
                  class="text-xl md:text-2xl font-bold text-gray-100 tracking-wide"
                >
                  {{ post.title }}
                </h1>
                <h2 class="text-base md:text-lg tracking-wide text-gray-400">
                  {{ post.description }}
                </h2>
              </div>
            </article>
          </NuxtLink>
        </li>
      </ul>
      <!-- Sidebar B (default state empty) -->
    </template>
  </AppLayout>
</template>

<script>
export default {
  async asyncData({$content, params}) {
    const posts = await $content(params.slug, {deep: true})
      .where({
        type: {$eq: 'g'},
        slug: {$containsNone: ['profile', 'sample']}
      })
      // .only([
      //   'title',
      //   'description',
      //   'img',
      //   'slug',
      //   'author',
      //   'dir',
      //   'updatedAt'
      // ])
      .sortBy('updatedAt', 'desc')
      .limit(20)
      .fetch()
    return {
      posts
    }
  },
  data() {
    return {
      items: [
        {
          title: 'מהן קבוצות?',
          desc:
            '<b>קבוצות</b> מעודדות התארגנות ועשייה משותפת בין חברי קבוצה למען קידום מטרות הקבוצה או מערכות בחסות הקבוצה.',
          cta: 'רשימת קבוצות',
          url: '/g/list'
        }
      ]
    }
  },
  methods: {
    formatDate(date) {
      const options = {month: 'long', day: 'numeric'}
      return new Date(date).toLocaleDateString('he-IL', options)
    },
    toggleAnswer() {
      this.showAnswer = !this.showAnswer
    }
  },
  head() {
    return {
      title: 'קבוצות'
    }
  }
}
</script>
