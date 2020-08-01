<template>
  <NuxtLink :to="`/t/${author.name}`" class="flex focus:bg-red-600">
    <!-- <img
      :src="author.img"
      class="w-12 h-12 border-2 border-gray-600 rounded-full"
    /> -->

    <p class="md:py-2 self-center">{{ author.hname }}</p>
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
