<template>
  <div class="post bg-gray-900 min-h-screen tracking-wide">
    <div class="container mx-auto py-10 px-6 max-w-screen-md">
      <div class="my-8 bg-gray-800 py-4 md:py-6 px-8 rounded-lg">
        <img
          :src="`/t/authors/${t[0].author.img}`"
          class="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto"
        />
        <h1
          class="text-4xl md:text-5xl mt-2 md:mt-4 font-bold text-red-600 leading-snug text-center block"
        >
          {{ t[0].author.name }}
        </h1>

        <p
          class="mb-0 mt-2 text-sm md:text-base text-center text-gray-400 tracking-wider"
        >
          {{ t[0].author.bio }}
        </p>
      </div>

      <h3 class="text-gray-500">רשימת מאמרים מאת {{ t[0].author.name }}:</h3>
      <!-- <hr /> -->
      <ul>
        <li
          v-for="post in t"
          :key="post.slug"
          class="my-2 text-lg md:text-xl tracking-wide bg-gray-700 hover:bg-gray-600 rounded-md transition-colors duration-100 ease-in-out"
        >
          <NuxtLink
            :to="{name: 't-slug', params: {slug: post.slug}}"
            class="text-gray-400 hover:text-white transition-colors duration-100 ease-in-out"
          >
            <!-- <img :src="`../${post.img}`" :alt="post.alt" /> -->
            <div class="flex py-4 px-4">
              <h2 class="flex-1">{{ post.title }}</h2>
              <!-- <p>{{ post.description }}</p> -->
              <p class="text-base md:text-lg self-center">
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
    const t = await $content('t', params.slug)
      .where({
        'author.name': {
          $regex: [params.author, 'i']
        }
      })
      .without('body')
      .sortBy('updatedAt', 'desc')
      .fetch()

    return {
      t
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
