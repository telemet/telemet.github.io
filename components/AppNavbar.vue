<template>
  <!-- :class="{'menu--hidden': !showMenu}" -->
  <header
    class="menu bg-gray-800 w-full h-14 z-40 flex items-center fixed justify-between flex-row-reverse border-b border-black"
  >
    <!-- Logotype -->
    <nuxt-link to="/" class="cursor-pointer leading-none mx-6">
      <AppLogomark class="h-09 w-09" />
    </nuxt-link>

    <ul class="flex">
      <li>
        <NuxtLink
          to="/t"
          class="navbar-item w-18 h-9 mx-1 rounded bg-gray-800 group hover:bg-gray-600 flex justify-center items-center"
        >
          <icon
            :icon-color="'transperant'"
            class="icon fill-current w-6 h-6 text-gray-500 group-hover:text-white"
            icon-name="Menu"
          >
            <IconUser />
          </icon>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/g"
          class="navbar-item w-18 h-9 mx-1 rounded bg-gray-800 group hover:bg-gray-600 flex justify-center items-center"
        >
          <icon
            :icon-color="'transperant'"
            class="icon fill-current w-6 h-6 text-gray-500 group-hover:text-white"
            icon-name="Menu"
          >
            <IconGroup />
          </icon>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/c"
          class="navbar-item w-18 h-9 mx-1 rounded bg-gray-800 group hover:bg-gray-600 flex justify-center items-center"
        >
          <icon
            :icon-color="'transperant'"
            class="icon fill-current w-6 h-6 text-gray-500 group-hover:text-white"
            icon-name="Menu"
          >
            <IconBolt />
          </icon>
        </NuxtLink>
      </li>
    </ul>
    <div class="main mx-6 flex">
      <app-navbar-menu class="" />
      <NuxtLink
        :to="{name: 'join', query: null}"
        class="hidden self-center md:flex justify-center items-center text-gray-400 hover:text-white bg-gray-800 hover:bg-red-600 border border-gray-600 hover:border-gray-800 text-sm py-2 leading-none px-4 mr-4 rounded-md text-center font-bold tracking-wide trans-100"
      >
        <span class="-mt-01">
          הרשמה
        </span>
      </NuxtLink>
      <!-- <div
        v-if="isDev"
        v-scroll-to="{el: 'footer', easing: 'linear', duration: 240000}"
        class="self-center mx-4 cursor-pointer"
      >
        לחץ
      </div> -->
    </div>
  </header>
</template>

<script>
export default {
  props: {
    iconStyle: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showMenu: true,
      lastScrollPosition: ''
      // isDev: process.env.NODE_ENV !== 'production'
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 48) {
        return
      }
      this.showMenu = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  }
}
</script>

<style scoped lang="postcss">
.menu {
  transform: translate3d(0, 0, 0);
  transition: 0.33s all ease;
  &.menu--hidden {
    transform: translate3d(0, -100%, 0);
  }
}

.navbar-item.nuxt-link-active {
  @apply bg-red-600;
  & .icon {
    @apply text-white;
  }
}
</style>
