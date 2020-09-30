<template>
  <AppLayout>
    <!-- Sidebar A -->
    <template v-slot:main>
      <NuxtLink
        :to="author.name + '/profile'"
        class="mb-12 bg-gray-800 rounded-lg overflow-hidden border border-gray-700 block"
      >
        <div class="block w-full h-auto">
          <Poster
            :src="author.poster"
            :alt="author.hname"
            class="w-full h-auto"
          />
        </div>
        <div class="block -mt-10 md:-mt-11 lg:-mt-12">
          <AppAvatar
            :name="author.name"
            type="t"
            :status="author.status"
            class="avatar-4xl mx-auto"
          />
        </div>
        <h1
          class="text-4xl md:text-5xl mt-2 md:mt-4 font-bold text-red-600 leading-snug text-center block"
        >
          {{ author.hname }}
        </h1>

        <p
          class="mb-6 mt-2 text-sm md:text-base text-center text-gray-400 tracking-wider mx-auto max-w-lg"
        >
          {{ author.bio }}
        </p>
        <div class="mx-auto block w-full text-center mb-6">
          <NuxtLink
            :to="authorInviteUrl"
            class="py-2 px-8 text-center inline-block hover:bg-gray-700 rounded-full border border-gray-600"
          >
            <div>
              רישום עם קוד ההזמנה של
              {{ author.hname }}
            </div>
            <div class="text-lg font-bold"></div>
          </NuxtLink>
        </div>
      </NuxtLink>

      <!-- <pre>{{ author }}</pre> -->

      <!-- <h3 class="text-gray-500">רשימת מאמרים מאת {{ author.hname }}:</h3> -->

      <ul>
        <li v-for="post of posts" :key="post.index">
          <NuxtLink
            :to="post.path"
            class="block bg-gray-800 hover:bg-gray-700 w-full rounded-lg overflow-hidden mb-8 border border-gray-700 hover:border-gray-600"
          >
            <article>
              <Poster :src="post.img" :alt="post.title" class="w-full h-auto" />
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
    </template>
  </AppLayout>
</template>

<script>
export default {
  async asyncData({$content, params}) {
    const posts = await $content(params.path, {deep: true})
      .where({
        'author.name': {
          $regex: [params.author, 'i']
        },
        type: {$containsNone: 'draft'},
        slug: {$containsNone: 'profile'}
      })
      .without('body')
      .sortBy('updatedAt', 'desc')
      .fetch()

    const authorProfilePost = await $content(params.path, {deep: true})
      .where({
        'author.name': {
          $regex: [params.author, 'i']
        },
        slug: {$contains: 'profile'}
      })
      .without('body')
      .fetch()
    // const author = posts[posts.length - 1].author
    // const authorProfilePost = posts.find((post) => {
    //   return post.slug === 'profile'
    // })
    const author = authorProfilePost[0].author
    // const authorType = authorProfilePost[0].type
    // if (author.id === '051F0EABF1') {
    //   const authorInviteUrl =
    //     '/join?type=t&id=051F0EABF1'}
    //     else {
    //   const authorInviteUrl =
    //     '/join?type=' + authorProfilePost[0].type + '&id=' + author.id
    //     }
    // }
    const authorInviteUrl =
      '/join?type=' + authorProfilePost[0].type + '&id=' + author.id
    return {
      posts,
      author,
      authorInviteUrl
    }
  },
  methods: {
    formatDate(date) {
      const options = {year: 'numeric', month: 'long', day: 'numeric'}
      return new Date(date).toLocaleDateString('he-IL', options)
    }
  },
  head() {
    return {
      title: this.author.hname
    }
  }
}
</script>
