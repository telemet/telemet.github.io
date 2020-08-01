<template lang="html">
  <div class="app-social">
    <a
      href="https://github.com/telemet/telemet"
      target="_blank"
      class="wrapper"
      title="Github"
    >
      <icon
        class="icon-github"
        icon-name="icon-github"
        width="16px"
        height="16px"
        icon-color="transperant"
      >
        <IconGithub />
      </icon>
    </a>
    <a
      href="https://www.youtube.com/channel/UCoLvL_pRexyH31iD1kHVacA"
      target="_blank"
      class="wrapper"
      title="YouTube"
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
      title="Telegram"
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
      title="Facebook"
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
import IconGithub from '@/components/icons/IconGithub'
import IconTelegram from '@/components/icons/IconTelegram'
import IconYoutube from '@/components/icons/IconYoutube'

export default {
  components: {
    Icon,
    IconFacebook,
    IconGithub,
    IconTelegram,
    IconYoutube
  }
}
</script>

<style scoped lang="postcss">
svg {
  @apply fill-current text-gray-600 w-4 h-4;
}
.wrapper {
  @apply inline-block p-032 mx-01 rounded cursor-pointer;
  &:focus {
    @apply bg-red-700 text-white;
    & svg g {
      @apply fill-current text-white;
    }
  }
}
.app-social {
  @apply leading-nan overflow-hidden select-none;
  &:hover {
    & .wrapper {
      &:hover {
        @apply bg-red-700;
        & svg g {
          @apply fill-current text-white;
        }
      }
    }
    /* & svg g {
      @apply fill-current text-red-700;
    } */
  }
}
</style>
