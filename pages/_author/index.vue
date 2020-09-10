<template>
  <div class="post bg-gray-900 min-h-screen tracking-wide">
    <div class="container mx-auto py-10 px-6 max-w-screen-md">
      <div class="my-8 bg-gray-800 py-4 md:py-6 px-8 rounded-lg">
        <NuxtLink :to="author.name + '/profile'" class="block">
          <AppAvatar
            :name="author.name"
            type="t"
            :status="author.status"
            class="avatar-4xl mx-auto"
          />
        </NuxtLink>
        <h1
          class="text-4xl md:text-5xl mt-2 md:mt-4 font-bold text-red-600 leading-snug text-center block"
        >
          {{ author.hname }}
        </h1>

        <p
          class="mb-0 mt-2 text-sm md:text-base text-center text-gray-400 tracking-wider mx-auto max-w-lg"
        >
          {{ author.bio }}
        </p>
      </div>

      <h3 class="text-gray-500">רשימת מאמרים מאת {{ author.hname }}:</h3>
      <!-- <hr /> -->
      <ul>
        <li
          v-for="post in posts"
          :key="post.slug"
          class="my-02 text-lg md:text-xl tracking-wide"
        >
          <NuxtLink
            :to="post.path"
            class="text-gray-400 hover:text-white block group border-0 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors duration-100 ease-in-out focus"
          >
            <!-- <img :src="`../${post.img}`" :alt="post.alt" /> -->
            <div class="flex py-4 px-4">
              <h2 class="flex-1">{{ post.title }}</h2>
              <!-- <p>{{ post.description }}</p> -->
              <p class="text-base md:text-lg self-center">
                <!-- {{ formatDate(post.createdAt) }} -->
                <icon
                  :icon-color="'transperant'"
                  class="w-4 h-4 self-center text-gray-700 group-hover:text-gray-500 fill-current cursor-pointer trans-100"
                  icon-name="Share"
                >
                  <IconLink />
                </icon>
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/icons/Icon'
import IconLink from '@/components/icons/IconLink'

export default {
  components: {
    Icon,
    IconLink
  },
  async asyncData({$content, params}) {
    const posts = await $content(params.path, {deep: true})
      .where({
        'author.name': {
          $regex: [params.author, 'i']
        },
        type: {$containsNone: 'draft'}
      })
      .without('body')
      .sortBy('createdAt', 'desc')
      .fetch()
    const author = posts[posts.length - 1].author

    return {
      posts,
      author
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
