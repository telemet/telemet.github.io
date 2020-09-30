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
        <!-- <span class="mr-4">{{ coins }}</span> -->
      </p>

      <NuxtLink
        v-if="id"
        :to="{name: 'join', query: {id: id, type: type}}"
        class="ml-4 self-center flex justify-center items-center text-gray-600 group-hover:text-gray-100 group-hover:bg-red-600 text-sm py-3 leading-none px-4 mr-14 rounded-md text-center font-bold tracking-wide trans-100"
      >
        <span class="-mt-01">
          {{ id }}
        </span>
      </NuxtLink>

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
        <!-- <span class="mr-4">{{ coins }}</span> -->
      </p>
    </NuxtLink>
  </li>
</template>

<script>
export default {
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
    },
    id: {
      type: String,
      default: null
    },
    coins: {
      type: String,
      default: null
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
