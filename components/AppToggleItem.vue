<template>
  <div
    class="mb-1 block py-2 px-3 bg-gray-800 hover:bg-gray-700 rounded-md text-sm text-gray-400 hover:text-white tracking-wider cursor-pointer"
    @click="toggle()"
  >
    <div class="title block font-bold text-base text-red-600">
      {{ item.title }}
    </div>
    <div v-show="isActive" class="desc block mt-2">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p v-html="item.desc" />
      <NuxtLink
        v-if="item.url"
        :to="item.url"
        class="mt-2 block border border-gray-600 hover:border-gray-600 hover:text-white hover:bg-gray-600 rounded-md text-center p-1"
        >{{ item.cta }}</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive
    }
  }
}
</script>
