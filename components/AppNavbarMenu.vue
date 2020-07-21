<template>
  <div ref="menu" :class="{active: isOpen}" @click="toggle">
    <icon
      :icon-color="'transperant'"
      class="elipses fill-current w-6 h-6 text-gray-200 hover:text-white cursor-pointer"
      icon-name="Menu"
    >
      <Elipses />
    </icon>
    <ul
      v-show="isOpen"
      class="dropdown mt-1 w-36 min-w-full rounded-md bg-red-700 shadow-lg"
    >
      <li><nuxt-link to="/info">אודות</nuxt-link></li>
      <li><a href="https://t.me/telemetISR" target="blank">טלגרם</a></li>
      <li>
        <a href="https://www.facebook.com/groups/telemetISR" target="blank"
          >פייסבוק</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from '@/components/icons/Icon'
import Elipses from '@/components/icons/ui/Elipses'

export default {
  components: {
    Icon,
    Elipses
  },
  data() {
    return {
      isOpen: false,
      scrolled: false
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
    document.addEventListener('click', this.handleClick)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    document.removeEventListener('click', this.handleClick)
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    handleScroll() {
      this.scrolled = window.scrollY > 0
      this.isOpen = false
    },
    handleClick(e) {
      const el = this.$refs.menu
      const target = e.target
      if (el !== target && !el.contains(target)) {
        this.isOpen = false
      }
    }
  }
}
</script>

<style lang="css">
.dropdown {
  @apply py-01;
  & li {
    @apply font-normal border-b my-1 border-red-500 text-lg;
    &:first-child {
      @apply border-t;
    }
    & a {
      @apply block py-4 pr-4 text-gray-200;
      &:hover {
        @apply bg-red-600 text-white;
      }
    }
  }
  .nuxt-link-exact-active {
    background: darken($red, 5);
  }
}
</style>
