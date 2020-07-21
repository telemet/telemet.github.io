<template>
  <div class="">
    <h1>Posts</h1>
    <ul>
      <li v-for="post of posts" :key="post.slug">
        <NuxtLink :to="{name: 'posts-slug', params: {slug: post.slug}}">
          <img :src="post.img" />
          <div>
            <h2>{{ post.title }}</h2>
            <p>by {{ post.author.name }}</p>
            <p>{{ post.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({$content, params}) {
    const posts = await $content('posts', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      posts
    }
  }
}
</script>
