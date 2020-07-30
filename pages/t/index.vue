<template>
  <div class="bg-gray-900 tracking-wide min-h-screen">
    <div class="container mx-auto py-10 px-6 max-w-screen-md">
      <!-- <h1
        class="text-4xl md:text-5xl my-6 md:my-8 font-bold text-red-600 leading-snug block"
      >
        Posts
      </h1> -->
      <ul class="mt-8">
        <li v-for="post of posts" :key="post.slug" class="">
          <NuxtLink
            :to="{
              path: post.author.name + '/' + post.slug
            }"
            class="my-4 px-2 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg block transition-colors duration-150 ease-in-out"
          >
            <!-- <img
              :src="post.img"
              class="block w-full h-full object-cover rounded-lg"
            /> -->
            <div class="px-2">
              <h2
                class="text-2xl md:text-3xl font-bold text-red-600 leading-snug block"
              >
                {{ post.title }}
              </h2>
              <p class="mb-2 text-gray-100">מאת {{ post.author.hname }}</p>
              <p class="text-xl text-gray-500">{{ post.description }}</p>
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
    const posts = await $content('t', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      posts
    }
  }
}
</script>
