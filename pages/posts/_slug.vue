<template>
  <div class="post bg-gray-900">
    <article class="container mx-auto py-10 px-6 max-w-screen-md">
      <!-- Post Image -->
      <!-- <div class="py-8 md:py-10 px-10 md:px-20">
        <div class="bg-red-400 pb-full relative">
          <img
            :src="post.img"
            :alt="post.alt"
            class="absolute block w-full h-full object-cover rounded-lg"
          />
        </div>
      </div> -->

      <!-- Post Image -->
      <img
        :src="post.img"
        :alt="post.alt"
        class="mt-8 block w-full h-full object-cover rounded-lg"
      />

      <!-- Post TOC -->
      <!-- <nav>
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
      </nav> -->

      <!-- Post Title -->
      <h1
        class="text-4xl md:text-5xl my-6 md:my-8 font-bold text-red-600 leading-snug block"
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
          class="py-4 md:py-3 pl-4 md:pl-6 font-bold text-lg md:text-xl border-l border-gray-700"
        />
        <p
          class="flex-1 self-center pr-4 md:pr-6 text-gray-500 text-lg md:text-xl"
        >
          {{ formatDate(post.createdAt) }}
        </p>
        <icon
          :icon-color="'transperant'"
          class="w-6 h-6 self-center text-gray-500 hover:text-white fill-current  cursor-pointer"
          icon-name="Share"
        >
          <IconShare />
        </icon>
      </div>

      <nuxt-content :document="post" class="content" />

      <a
        :href="
          'https://github.com/telemet/telemet/tree/master/content/posts/' +
            post.slug
        "
        title="קישור עריכה"
        target="_blank"
        class="transition-colors duration-100 ease-in-out bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white p-4 my-12 tracking-wider font-base rounded-lg block"
      >
        <p>
          מצאת טעות או רוצה לתרום לעריכה? הקוד פתוח ב- GitHub
        </p>
      </a>
      <!-- <pre> {{ post }} </pre> -->
    </article>
  </div>
</template>

<script>
import Icon from '@/components/icons/Icon'
import IconShare from '@/components/icons/IconShare'

export default {
  components: {
    Icon,
    IconShare
  },
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
    @apply mt-12 text-3xl text-red-600 font-bold;
    @screen md {
      @apply mt-16 text-4xl;
    }
  }
  & p {
    @apply text-gray-400 my-4 text-xl;
    @screen md {
      @apply my-6 text-2xl;
    }
    & img {
      @apply my-10 rounded-lg;
      @screen md {
        @apply my-12;
      }
    }
  }
  & blockquote p {
    @apply pr-4 py-2 my-8 text-xl text-gray-400 border-r-4 border-red-600 tracking-wider font-bold;
    @screen md {
      @apply pr-6 py-3 my-12 text-2xl border-r-8;
    }
  }
  & ol {
    @apply px-3 my-10 text-lg list-none;
    counter-reset: my-counter;
    @screen md {
      @apply px-4 my-12 text-xl;
    }
    & li {
      @apply flex my-6 text-gray-400;
      counter-increment: my-counter;
      @screen md {
        @apply my-8;
      }
      &::before {
        @apply ml-3 text-red-500 font-bold;
        content: counter(my-counter) '';
        @screen md {
          @apply ml-4;
        }
        /* content: counter(my-counter) '. '; */
        /* color: red; */
        /* font-weight: bold; */
      }
    }
  }
}
</style>
