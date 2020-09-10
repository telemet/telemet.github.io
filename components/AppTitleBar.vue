<template>
  <div
    class="mb-4 grid-item flex items-center bg-gray-800 rounded-lg mx-2 p-03"
  >
    <h1
      class="flex-1  md:text-2xl mr-2 leading-snug text-2xl text-gray-400 block tracking-wide"
    >
      {{ title }}
    </h1>

    <!-- Toggle Button -->
    <slot />

    <!-- <NuxtLink
      to="/join"
      class="w-9 h-9 flex justify-center items-center bg-gradient-red m-02 rounded-full text-center font-bold tracking-wide"
    >
      <icon
        :icon-color="'transperant'"
        class="w-6 h-6 mx-02 text-gray-100 fill-current cursor-pointer"
        icon-name="Help"
      >
        <IconT />
      </icon>
    </NuxtLink> -->

    <!-- <NuxtLink
      to="/join"
      class="w-9 h-9 flex justify-center items-center bg-gradient-red m-02 rounded-full text-center font-bold tracking-wide"
    >
      <icon
        :icon-color="'transperant'"
        class="w-6 h-6 mx-02 text-gray-100 fill-current cursor-pointer"
        icon-name="Help"
      >
        <IconG />
      </icon>
    </NuxtLink> -->

    <!-- <NuxtLink
      to="/join"
      class="cta-btn flex justify-center items-center text-gray-400 hover:text-white bg-gray-800 hover:bg-red-600 border border-gray-600 hover:border-gray-800 text-lg py-2 px-6 mx-2 rounded-lg text-center font-bold tracking-wide trans-100"
    >
      <span class="-mt-01">
        הרשמה
      </span>
    </NuxtLink> -->

    <!-- <div
      class="w-9 h-9 flex justify-center items-center bg-gradient-red mx-3 rounded-full text-center font-bold tracking-wide"
    >
      <icon
        :icon-color="'transperant'"
        class="w-6 h-6 mx-02 text-gray-100 fill-current"
        icon-name="Help"
      >
        <IconC />
      </icon>
    </div> -->

    <!-- <NuxtLink
      to="/join"
      class="cta-btn flex justify-center items-center h-9 text-white bg-gradient-red text-lg py-02 px-6 m-02 rounded-lg text-center font-bold tracking-wide"
    >
      <span class="-mt-01">
        הרשמה
      </span>
    </NuxtLink> -->
  </div>
</template>

<script>
// import Icon from '@/components/icons/Icon'
// import IconC from '@/components/icons/ui/IconC'
// import IconG from '@/components/icons/ui/IconG'
// import IconT from '@/components/icons/ui/IconT'

export default {
  components: {
    // Icon,
    // IconC,
    // IconG,
    // IconT
  },
  props: {
    title: {
      type: String,
      default: 'הזן כותרת'
    }
  }
}
</script>
