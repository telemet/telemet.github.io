<template>
  <NuxtLink :to="`/t/author/${author.name}`" class="flex">
    <!-- <img
      :src="author.img"
      class="w-12 h-12 border-2 border-gray-600 rounded-full"
    /> -->

    <p class="md:py-2 self-center">{{ author.name }}</p>
    <!-- <p>{{ author.bio }}</p> -->
  </NuxtLink>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>
