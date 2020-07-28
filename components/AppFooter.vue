<template lang="html">
  <footer class="h-16 w-full bg-black flex justify-between relative">
    <NuxtLink to="/" class="self-center mr-5">
      <AppLogotype
        :width="68"
        :height="32"
        :icon-color="'transperant'"
        class="logotype dark"
        icon-name="Telemet"
      />
    </NuxtLink>
    <app-social class="ml-5 pl-02 self-center" />
  </footer>
</template>

<script>
import AppSocial from '@/components/AppSocial'
import AppLogotype from '@/components/AppLogotype'
// import LogotypeHebrew from '@/components/icons/LogotypeHebrew'

export default {
  components: {
    AppLogotype,
    AppSocial
    // LogotypeHebrew
  }
}
</script>
