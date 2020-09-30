<template>
  <div ref="menu" :class="{active: isOpen}" class="flex" @click="toggle">
    <div
      class="w-9 h-9 rounded-full bg-gray-700 group hover:bg-gray-600 flex justify-center items-center cursor-pointer"
    >
      <icon
        :icon-color="'transperant'"
        class="elipses fill-current w-3 h-3 text-gray-400 group-hover:text-white"
        icon-name="Menu"
      >
        <Arrow />
      </icon>
    </div>
    <!-- v-show="isOpen" -->
    <ul
      :class="{active: isOpen, hidden: !isOpen}"
      class="dropdown absolute mt-13 w-36 rounded-md bg-red-700 shadow-lg opacity-0 transition-opacity duration-200 ease-in-out scale-0"
    >
      <li><nuxt-link to="/telemet/faq">אודות</nuxt-link></li>
      <!-- <li><nuxt-link to="/join">הרשמה</nuxt-link></li> -->
      <!-- <li><a href="https://t.me/telemetISR" target="blank">טלגרם</a></li>
      <li>
        <a href="https://www.facebook.com/groups/telemetISR" target="blank"
          >פייסבוק</a
        >
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
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
  &.active {
    @apply scale-100 opacity-100 transition-opacity duration-100 ease-in-out;
  }
}
</style>
