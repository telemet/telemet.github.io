<template lang="html">
  <div class="app-social">
    <a
      href="https://www.youtube.com/channel/UCoLvL_pRexyH31iD1kHVacA"
      target="_blank"
      class="wrapper"
    >
      <icon
        class="icon-youtube"
        icon-name="icon-youtube"
        width="16px"
        height="16px"
        icon-color="transperant"
      >
        <IconYoutube />
      </icon>
    </a>
    <a
      href="https://t.me/telemetISR"
      target="_blank"
      rel="noreferrer"
      class="wrapper"
    >
      <icon
        class="icon-telegram"
        icon-name="icon-telegram"
        width="16px"
        height="16px"
        icon-color="transperant"
      >
        <icon-telegram />
      </icon>
    </a>
    <a
      href="https://www.facebook.com/groups/telemetISR"
      target="_blank"
      rel="noreferrer"
      class="wrapper"
    >
      <icon
        class="icon-facebook"
        icon-name="icon-facebook"
        width="16px"
        height="16px"
        icon-color="transperant"
      >
        <icon-facebook />
      </icon>
    </a>
  </div>
</template>

<script>
import Icon from '@/components/icons/Icon'
import IconFacebook from '@/components/icons/IconFacebook'
import IconTelegram from '@/components/icons/IconTelegram'
import IconYoutube from '@/components/icons/IconYoutube'

export default {
  components: {
    Icon,
    IconFacebook,
    IconTelegram,
    IconYoutube
  }
}
</script>

<style scoped lang="postcss">
svg {
  @apply fill-current text-gray-500;
}
.wrapper {
  @apply inline-block p-032 border-2 border-gray-500 -ml-021;
}
.app-social {
  @apply leading-nan overflow-hidden cursor-pointer select-none;
  &:hover {
    & .wrapper {
      @apply border-2 border-red-700;
      &:hover {
        @apply bg-red-700;
        & svg g {
          @apply fill-current text-white;
        }
      }
    }
    & svg g {
      @apply fill-current text-red-700;
    }
  }
}
</style>
