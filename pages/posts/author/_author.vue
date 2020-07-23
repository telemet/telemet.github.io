<template>
  <div class="post bg-gray-900 min-h-screen">
    <div class="container mx-auto py-10 px-6 max-w-screen-md">
      <!-- <img
        :src="`/posts/authors/${posts[0].author.img}`"
        class="w-16 h-16 rounded-full"
      /> -->
      <h1
        class="text-4xl md:text-5xl my-6 md:my-8 font-bold text-red-600 leading-snug block"
      >
        {{ posts[0].author.name }}
      </h1>
      <!-- <p>{{ posts[0].author.bio }}</p> -->

      <h3 class="text-gray-500">
        רשימת מאמרים מאת {{ posts[0].author.name }}:
      </h3>
      <!-- <hr /> -->
      <ul>
        <li
          v-for="post in posts"
          :key="post.slug"
          class="my-2 text-2xl tracking-wide bg-gray-700 hover:bg-gray-600 rounded-md transition-colors duration-100 ease-in-out"
        >
          <NuxtLink
            :to="{name: 'posts-slug', params: {slug: post.slug}}"
            class="text-gray-400 hover:text-white transition-colors duration-100 ease-in-out"
          >
            <!-- <img :src="`../${post.img}`" :alt="post.alt" /> -->
            <div class="flex py-4 px-4">
              <h2 class="flex-1">{{ post.title }}</h2>
              <!-- <p>{{ post.description }}</p> -->
              <p class="text-lg self-center">
                {{ formatDate(post.createdAt) }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({$content, params}) {
    const posts = await $content('posts', params.slug)
      .where({
        'author.name': {
          $regex: [params.author, 'i']
        }
      })
      .without('body')
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      posts
    }
  },
  methods: {
    formatDate(date) {
      const options = {year: 'numeric', month: 'long', day: 'numeric'}
      return new Date(date).toLocaleDateString('he-IL', options)
    }
  }
}
</script>
