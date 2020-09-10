<template>
  <li v-if="status" class="member w-full block px-02 mx-auto">
    <NuxtLink
      :to="authurl"
      class="flex items-center py-3 px-4 hover:bg-gray-800 rounded-lg trans-100 cursor-pointer border-none group"
    >
      <!-- Avatar -->
      <AppAvatar :name="name" :type="type" :status="status" class="avatar" />

      <!-- Name -->
      <p
        class="flex items-center flex-1 text-gray-500 group-hover:text-gray-100 text-base md:text-lg lg:text-xl tracking-wide trans-100"
      >
        <span class="name mr-4">{{ hname }}</span>
      </p>

      <!-- Icon -->
      <icon
        :icon-color="'transperant'"
        class="w-4 h-4 mx-2 text-gray-600 group-hover:text-gray-500 fill-current cursor-pointer trans-100"
        icon-name="Share"
      >
        <IconLink />
      </icon>
    </NuxtLink>
  </li>
  <li v-else class="w-full block px-02 mx-auto">
    <NuxtLink
      to="/"
      class="flex items-center py-3 px-4 hover:bg-gray-800 rounded-lg trans-100 cursor-pointer border-none group"
    >
      <!-- Avatar -->
      <AppAvatar :initial="initial" />

      <!-- Name -->
      <p
        class="flex items-center flex-1 text-gray-500 group-hover:text-gray-100 text-base md:text-lg lg:text-xl tracking-wide trans-100"
      >
        <span class="name mr-4">{{ hname }}</span>
      </p>
    </NuxtLink>
  </li>
</template>

<script>
// import AppAvatar from '@/components/AppAvatar'
// import Icon from '@/components/icons/Icon'
// import IconLink from '@/components/icons/IconLink'

export default {
  components: {
    // AppAvatar,
    // Icon,
    // IconLink
  },
  props: {
    status: {
      type: String,
      default: null
    },
    authurl: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 't'
    },
    name: {
      type: String,
      default: null
    },
    hname: {
      type: String,
      default: null
    },
    initial: {
      type: String,
      default: 'א'
    }
  }
}
</script>

<style lang="postcss" scoped>
.member {
  & > div:hover {
    @apply bg-gray-700;
  }
  &:hover {
    & .name {
      @apply text-gray-100;
    }
  }
  & .name {
    @apply text-gray-400;
  }
}
</style>
