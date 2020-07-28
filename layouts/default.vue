<template>
  <main id="app">
    <app-navbar />
    <nuxt />
    <app-footer />
  </main>
</template>

<script>
import AppFooter from '@/components/AppFooter'
import AppNavbar from '@/components/AppNavbar'

export default {
  components: {
    AppFooter,
    AppNavbar
  }
}
</script>
<style lang="postcss">
body {
  @apply bg-black text-gray-400 antialiased;
}
</style>
