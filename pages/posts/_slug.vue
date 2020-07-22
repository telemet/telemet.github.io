<template>
  <div class="post bg-gray-900">
    <article class="container mx-auto py-10 px-6 max-w-screen-md">
      <!-- Post Image -->
      <img
        :src="post.img"
        :alt="post.alt"
        class="block w-full h-full object-cover"
      />

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

      <hr class="mt-10 md:mt-12 border-gray-700" />

      <!-- Post Meta -->
      <div class="flex">
        <author
          :author="post.author"
          class="py-4 md:py-6 pl-6 md:pl-8 font-bold text-xl md:text-2xl border-l border-gray-700"
        />
        <p class="py-4 md:py-6 pr-6 md:pr-8 text-gray-500 text-xl md:text-2xl">
          {{ formatDate(post.createdAt) }}
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
  @apply tracking-wide;
  & h2 {
    @apply mt-12 text-4xl text-red-600 font-bold;
    @screen md {
      @apply mt-16 text-5xl;
    }
  }
  & p {
    @apply text-gray-400 my-4 text-xl;
    @screen md {
      @apply my-6 text-2xl;
    }
  }
  & blockquote p {
    @apply pr-6 py-4 my-8 text-2xl text-gray-400 border-r-4 border-red-600 font-bold;
    @screen md {
      @apply pr-8 py-6 my-12 text-3xl border-r-8;
    }
  }
  & ol {
    @apply list-none px-4 my-12 text-2xl;
    counter-reset: my-counter;
    & li {
      @apply flex my-8;
      counter-increment: my-counter;
      &::before {
        @apply ml-4 text-gray-600 font-bold;
        content: counter(my-counter) '';
        /* content: counter(my-counter) '. '; */
        /* color: red; */
        /* font-weight: bold; */
      }
    }
  }
}
</style>
