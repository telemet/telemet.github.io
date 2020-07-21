<template>
  <div class="post bg-gray-900">
    <article class="container mx-auto py-10 px-6 max-w-screen-md">
      <!-- Post TOC -->
      <nav>
        <ul>
          <li v-for="link of post.toc" :key="link.id">
            <NuxtLink
              :to="`#${link.id}`"
              :class="{
                'py-2': link.depth === 2,
                'mr-2 pb-2': link.depth === 3
              }"
              >{{ link.text }}</NuxtLink
            >
          </li>
        </ul>
      </nav>

      <!-- Post Title -->
      <h1
        class="text-5xl md:text-6xl my-6 md:my-8 font-bold text-red-600 block"
      >
        {{ post.title }}
      </h1>

      <!-- Post Description -->
      <h2 class="text-2xl md:text-3xl tracking-wide text-white">
        {{ post.description }}
      </h2>

      <hr class="mt-12 border-gray-700" />
      <!-- Post Image -->
      <!-- <img :src="post.img" :alt="post.alt" /> -->

      <!-- Post Meta -->
      <div class="flex">
        <author
          :author="post.author"
          class="py-6 font-bold text-2xl border-l border-gray-700 pl-8"
        />
        <p class="py-6 pr-8 text-gray-600 text-2xl">
          {{ formatDate(post.updatedAt) }}
        </p>
      </div>

      <nuxt-content :document="post" class="content" />
      <!-- <pre> {{ post.author.name }} </pre> -->
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({$content, params}) {
    const post = await $content('posts', params.slug).fetch()

    return {post}
  },
  methods: {
    formatDate(date) {
      const options = {year: 'numeric', month: 'long', day: 'numeric'}
      return new Date(date).toLocaleDateString('he-IL', options)
    }
  }
}
</script>

<style lang="postcss">
.post {
}

.content {
  & p {
    @apply text-gray-400 my-6 text-2xl tracking-wide;
  }
}
</style>
