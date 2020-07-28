<template>
  <header
    :class="{'menu--hidden': !showMenu}"
    class="menu bg-black w-full h-12 z-40 flex fixed"
  >
    <!-- Logomark -->
    <nuxt-link to="/">
      <icon
        :icon-color="'transperant'"
        class="logomark absolute cursor-pointer w-6 h-6 left-0 mt-3 ml-5"
        icon-name="Telemet"
      >
        <icon-logomark />
      </icon>
    </nuxt-link>

    <app-navbar-menu class="absolute right-0 mt-3 mr-5" />
  </header>
</template>

<script>
import AppNavbarMenu from '@/components/AppNavbarMenu'
import Icon from '@/components/icons/Icon'
import IconLogomark from '@/components/icons/IconLogomark'

export default {
  components: {
    AppNavbarMenu,
    Icon,
    IconLogomark
  },
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
    // closeToast(toastId) {
    //   this.showToast = false
    // }
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
</style>
