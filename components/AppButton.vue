<template>
  <!-- <a v-if="url" :href="url" :class="buttonClass" class="btn" target="_blank">
    <span>{{ title }}</span>
  </a> -->
  <button :class="buttonClass" type="submit">
    <span>{{ title }}</span>
  </button>
</template>

<script>
export default {
  // name: 'btn'
  props: {
    url: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'Press'
    },
    buttonClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss">
.btn {
  @apply font-bold inline-block rounded-lg leading-none;
  &.btn-lg {
    @apply py-4 px-8 text-xl;
    @screen md {
      @apply py-4 px-12 text-2xl;
    }
  }
  &.btn-md {
    @apply py-3 px-12 text-lg;
    /* @screen md {
      @apply py-3 px-12 text-lg;
    } */
  }
  &.btn-sm {
    @apply py-4 px-8 text-xl;
  }
}

.btn span {
  @apply block -mt-1;
}
.btn-red {
  @apply bg-red-700 text-white;
  &:hover {
    @apply bg-red-600;
  }
}

button:disabled {
  @apply cursor-not-allowed;
  /* cursor: not-allowed; */
}
</style>
