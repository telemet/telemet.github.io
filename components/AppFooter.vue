<template lang="html">
  <footer>
    <app-social />
    <NuxtLink to="/">
      <AppLogotype
        :width="140"
        :height="32"
        :icon-color="'transperant'"
        class="logotype dark"
        icon-name="Telemet"
      />
    </NuxtLink>
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

<style scoped lang="postcss">
footer {
  position: relative;
  display: flex !important;
  flex-direction: row-reverse;
  justify-content: space-between;
  height: 66px;
  direction: rtl;
  width: 100%;
  background: black;
}

.logotype {
  margin: 15px 0;
  display: flex-item;
}
.app-social {
  display: flex-item;
  padding: 0 8px;
  margin: 13px 20px 10px;
}
</style>
