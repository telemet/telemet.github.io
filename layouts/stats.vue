<template>
  <main id="app">
    <app-navbar />
    <!-- Counters -->
    <section class="container mx-auto px-6 pt-16">
      <AppCounters class="stats" />
      <div class="my-05 grid-item">
        <hr />
      </div>
    </section>
    <nuxt class="container mx-auto px-6" />
    <app-footer />
  </main>
</template>

<script>
// import AppCounters from '@/components/AppCounters'
// import AppFooter from '@/components/AppFooter'
// import AppNavbar from '@/components/AppNavbar'

export default {
  components: {
    // AppCounters,
    // AppFooter,
    // AppNavbar
  }
}
</script>
<style lang="postcss"></style>
