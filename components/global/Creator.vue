<template>
  <!-- Large -->
  <NuxtLink
    v-if="size === 'lg'"
    :to="'/' + author.name"
    class="h-16 bg-gray-900 bg-opacity-50 hover:bg-gray-600 hover:bg-opacity-90 trans-100 rounded-full flex justify-center items-center group"
  >
    <AppAvatar
      :name="author.name"
      :type="type"
      :status="author.status"
      class="avatar-xl ml-3 mr-2"
    />
    <div class="">
      <h1
        class="text-xl font-bold text-gray-200 tracking-wide leading-snug mb-1 ml-5"
      >
        {{ author.hname }}
      </h1>
    </div>
  </NuxtLink>
  <!-- Small -->
  <NuxtLink
    v-else
    :to="'/' + author.name"
    class="h-12 hover:bg-gray-600 hover:bg-opacity-90 trans-100 rounded-full flex justify-center items-center group"
  >
    <AppAvatar
      :name="author.name"
      :type="type"
      :status="author.status"
      class="avatar ml-2 mr-1"
    />
    <div class="">
      <h1
        class="text-lg font-bold text-gray-200 tracking-wide leading-snug mb-01 ml-4"
      >
        {{ author.hname }}
      </h1>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      default: 't' // or g, c and f
    },
    size: {
      type: String,
      default: 'lg'
    }
    // status: {
    //   type: String,
    //   default: 'sup' // or sub
    // }
  }
}
</script>
