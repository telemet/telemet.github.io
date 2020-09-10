<template>
  <div class="w-12/12 lg:w-4/12 flex p-2">
    <button
      :class="{active: isActive}"
      type="submit"
      class="bg-gray-700 opacity-25 hover:opacity-75 flex flex-col items-center justify-center w-full rounded-lg focus:outline-none focus:shadow-outline self-start transition-opacity duration-200 ease-in-out"
      @click="toggleClass()"
    >
      <icon
        :icon-color="'transperant'"
        class="icon text-gray-100 fill-current w-14 h-14 mt-6 mb-2 trans-100"
        icon-name="join"
      >
        <IconUser v-if="type === 't'" />
        <IconGroup v-else-if="type === 'g'" />
        <IconBolt v-else />
      </icon>
      <span class="sub text-gray-100 text-xl tracking-wide trans-100">
        {{ sub }}
      </span>
      <span
        class="title text-red-600 text-2xl font-bold leading-none mb-6 trans-100"
        >{{ title }}</span
      >
      <div v-show="showFeatures" class="features w-full flex flex-col mb-4">
        <div
          class="divider text-gray-400 block border-t border-gray-600 pt-8 font-bold mb-4 tracking-wider trans-100"
        >
          {{ divider }}
        </div>
        <p
          v-for="(feature, index) in features"
          :key="index"
          class="text-gray-400 my-4 px-6 text-lg tracking-wide trans-100"
        >
          {{ feature }}
        </p>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  // name: 'btn'
  props: {
    title: {
      type: String,
      default: 'לחץ'
    },
    sub: {
      type: String,
      default: 'לחץ'
    },
    type: {
      type: String,
      default: null
    },
    isActive: {
      type: Boolean,
      default: false
    },
    divider: {
      type: String,
      default: 'כל ההטבות של פעיל אמת ועוד...'
    },
    showFeatures: {
      type: Boolean,
      default: false
    },
    features: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    toggleClass(type) {
      this.$emit('activate', this.type)
    }
  }
}
</script>

<style lang="postcss" scoped>
button.active {
  @apply opacity-100;
}
</style>
