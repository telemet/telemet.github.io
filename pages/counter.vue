<template lang="html">
  <!-- Wrapper -->
  <div class="mx-auto">
    <!-- <AppPoster poster="telemet-tlv.jpg" class="h-64 overflow-hidden" /> -->

    <!-- Counter -->
    <section id="main" class="relative bg-black">
      <div>
        <AppCounterStream
          v-scroll-to="{element: '#people', duration: 1222, offset: 0}"
          class="mt-16 py-4"
        />
        <h1 class="text-center text-3xl">
          <span class="font-bold pl-2 text-gray-100">#האיחוד</span>
          <span class="divider text-gray-400">|</span>
          <span class="text-gray-400 pr-2">מתאחדים ומאחדים</span>
        </h1>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      poster: 'https://telemet.org/images/telemet-poster-fb.jpg'
    }
  }
}
</script>

<style lang="postcss">
section {
  @apply relative h-64 w-full flex flex-col;
}
</style>
