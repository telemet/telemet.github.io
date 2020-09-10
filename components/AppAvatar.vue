<template>
  <div v-if="status === 'sup'" class="avatar relative block">
    <!-- Member: Show Image -->
    <span class="indicator bg-green-600 border-gray-700"></span>
    <img :src="avatarSrc()" class="image border border-gray-600" />
  </div>

  <div v-else-if="status === 'sub'" class="avatar relative block">
    <!-- Member: Show Image -->
    <span class="indicator bg-blue-600 border-gray-700"></span>
    <img :src="avatarSrc()" class="image border border-gray-600" />
  </div>

  <!-- Non Member: Show Initial -->
  <div v-else class="avatar relative block">
    <span
      class="indicator bg-gray-600 border-gray-700 group-hover:bg-gray-500"
    ></span>
    <span
      class="image bg-gray-700 group-hover:bg-red-600 flex justify-center items-center"
    >
      <span
        class="initial font-bold leading-none text-gray-500 group-hover:text-white"
      >
        {{ initial }}
      </span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      default: null
    },
    // source: {
    //   type: String,
    //   default: ''
    // },
    initial: {
      type: String,
      default: 'א'
    },
    name: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null // also "g" and "c"
    }
  },
  methods: {
    avatarSrc() {
      try {
        return require(`~/content/${this.name}/images/${this.name}.jpg`)
      } catch (error) {
        return require(`~/assets/images/default.jpg`)
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.avatar {
  /* Base Size */
  @apply w-10 h-10;
  & .image {
    @apply w-full h-full rounded-full;
  }
  & .indicator {
    @apply absolute bottom-0 right-0 w-3 h-3 block border rounded-full z-10;
  }
  & .initial {
    @apply text-2xl -mt-1 -mr-01;
  }
  /* Small */
  &.avatar-sm {
    @apply w-8 h-8;
    & .indicator {
      @apply w-03 h-03;
    }
    & .initial {
      @apply text-xl -mt-01 -mr-01;
    }
  }
  /* Large */
  &.avatar-lg {
    @apply w-12 h-12;
    & .indicator {
      @apply w-04 h-04;
    }
    & .initial {
      @apply text-3xl -mt-02 -mr-1;
    }
  }
  /* Large */
  &.avatar-xl {
    @apply w-14 h-14;
    & .indicator {
      @apply w-4 h-4;
    }
    & .initial {
      @apply text-3xl -mt-02 -mr-1;
    }
  }
  /* Large */
  &.avatar-4xl {
    @apply w-24 h-24;
    & .indicator {
      @apply w-6 h-6;
    }
    & .initial {
      @apply text-5xl -mt-02 -mr-1;
    }
  }
}
</style>
