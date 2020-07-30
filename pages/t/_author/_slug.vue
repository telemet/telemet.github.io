<template>
  <div class="post bg-gray-900 min-h-screen">
    <article class="container mx-auto py-10 px-6 max-w-screen-md">
      <!-- Post Meta -->
      <div class="flex mt-8">
        <author
          :author="post.author"
          class="py-3 md:py-2 px-3 md:px-4 ml-2 font-bold text-base md:text-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white rounded-md md:rounded-md focus"
        />

        <div
          class="py-3 md:py-4 flex hover:bg-gray-800 active:bg-red-600 group rounded-md flex-1 self-center px-3 md:px-4 text-gray-500 text-base md:text-lg cursor-pointer trans-100"
          @click.prevent="copy"
        >
          <icon
            :icon-color="'transperant'"
            class="w-4 h-4 self-center text-gray-600 group-hover:text-gray-100 fill-current cursor-pointer trans-100"
            icon-name="Share"
          >
            <IconLink />
          </icon>
          <span
            class="text-sm self-center px-4 opacity-0 group-hover:opacity-100 trans-100"
            >העתק קישור</span
          >
          <span class="flex-1 text-left group-hover:text-gray-100 trans-100">
            {{ formatDate(post.createdAt) }}
            <!-- Hidden Input for Copy -->
            <input
              ref="input"
              type="text"
              :value="copyValue()"
              aria-hidden="true"
            />
          </span>
          <!-- telemet.org/t/{{ post.slug }} -->
        </div>
      </div>

      <!-- Post Image -->
      <!-- :src="imgUrl(post.img)" -->
      <img
        :src="post.img"
        :alt="post.alt"
        class="mt-3 block w-full h-full object-cover rounded-lg"
      />

      <!-- Post TOC -->
      <!-- <nav>
        <ul>
          <li v-for="link of post.toc" :key="link.id">
            <NuxtLink
              :to="`#${link.id}`"
              :class="{
                'py-2': link.depth === 2,
                'mr-2 pb-2': link.depth === 3
              }"
              >{{ link.text }}</NuxtLink
            >
          </li>
        </ul>
      </nav> -->

      <!-- Post Title -->
      <h1
        class="text-4xl md:text-5xl my-6 md:my-8 font-bold text-red-600 leading-snug block"
      >
        {{ post.title }}
      </h1>

      <!-- Post Description -->
      <h2 class="text-2xl md:text-3xl tracking-wide text-white">
        {{ post.description }}
      </h2>

      <!-- <hr class="mt-10 md:mt-12 border-gray-700" /> -->

      <nuxt-content :document="post" class="content" />

      <a
        :href="
          'https://github.com/telemet/telemet/blob/master/content/t/' +
            post.slug +
            post.extension
        "
        title="קישור עריכה"
        target="_blank"
        class="transition-colors duration-100 ease-in-out bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white p-4 mt-4 mb-12 tracking-wider font-base rounded-lg block"
      >
        <p>
          מצאת טעות או רוצה לתרום לעריכה? הקוד פתוח ב- GitHub
        </p>
      </a>
      <!-- <pre> {{ post }} </pre> -->
    </article>
  </div>
</template>

<script>
import Icon from '@/components/icons/Icon'
import IconLink from '@/components/icons/IconLink'

export default {
  components: {
    Icon,
    IconLink
  },
  async asyncData({$content, params}) {
    const post = await $content('t', params.slug).fetch()

    return {post}
  },
  // data() {
  //   return {
  //     postImg: this.post.img
  //   }
  // },
  methods: {
    formatDate(date) {
      const options = {year: 'numeric', month: 'long', day: 'numeric'}
      return new Date(date).toLocaleDateString('he-IL', options)
    },
    copy() {
      const copyUrl = this.$refs.input
      copyUrl.select()
      document.execCommand('Copy')
    },
    copyValue() {
      return 'telemet.org/t/' + this.post.author.name + '/' + this.post.slug
    }
    // Check if path is absolute or relative
    // imgUrl(url) {
    //   const pat = /^https?:\/\//i
    //   if (pat.test(url)) {
    //     return url
    //   } else {
    //     return '../' + url
    //   }
    // }
  }
}
</script>

<style lang="postcss">
.content {
  @apply tracking-wide overflow-hidden;
  & h2 {
    @apply mt-12 text-3xl text-red-600 font-bold;
    @screen md {
      @apply mt-16 text-4xl;
    }
  }
  & h3 {
    @apply mt-12 text-2xl text-red-600 font-bold;
    @screen md {
      @apply mt-10;
    }
    /* & + p {
      @apply mt-4;
    } */
  }
  & p {
    @apply text-gray-400 my-4 text-xl;
    @screen md {
      @apply my-6 text-2xl;
    }
    & img {
      @apply my-10 rounded-lg;
      @screen md {
        @apply my-12;
      }
    }
  }
  & blockquote p {
    @apply pr-4 py-2 my-8 text-xl text-gray-400 border-r-4 border-red-600 tracking-wider font-bold;
    @screen md {
      @apply pr-6 py-3 my-12 text-2xl border-r-8;
    }
  }
  & ul {
    @apply px-3 my-6 text-lg list-none;
    @screen md {
      @apply px-4 my-8 text-xl;
    }
    & li {
      @apply list-none;
      &::before {
        @apply ml-3 text-red-500 font-bold;
        content: '+';
        @screen md {
          @apply ml-4;
        }
      }
    }
  }
  & ol {
    @apply px-3 my-10 text-lg list-none;
    counter-reset: my-counter;
    @screen md {
      @apply px-4 my-12 text-xl;
    }
    & li {
      @apply flex my-4 text-gray-400;
      counter-increment: my-counter;
      @screen md {
        @apply my-6;
      }
      &::before {
        @apply ml-3 text-red-500 font-bold;
        content: counter(my-counter) '';
        @screen md {
          @apply ml-4;
        }
      }
    }
  }
  & hr {
    @apply border-gray-700 block mt-16 mb-8;
    & + p {
      @apply text-xl;
    }
  }
  /* & table {
    @apply table-fixed;
    & td {
      @apply p-1 text-xl w-auto;
      &:first-child {
        @apply w-20;
      }
      &:empty {
        visibility: hidden;
      }
    }
  } */
}
[aria-hidden='true'] {
  @apply w-1 opacity-0 absolute pointer-events-none;
  z-index: -9999;
}

.footnotes {
  & hr {
    @apply border-gray-700 mt-12;
    &::after {
      content: 'רשימת מקורות וקישורים חיצונים:';
      @apply text-gray-500 my-4 block;
    }
  }
  & ol {
    @apply mt-14 text-base;
    @screen md {
      @apply text-lg;
    }
    & li {
      @apply my-2;
      & a {
        @apply transition-colors duration-100 ease-in-out;
        &:hover {
          @apply text-white;
        }
      }
    }
  }
}
.footnote-ref {
  @apply pr-01 font-sans border-0 text-red-600 font-bold text-xs;
}

.footnote-backref {
  @apply bg-gray-800 font-mono px-2 mx-2 rounded inline-block;
  &:hover {
    @apply bg-gray-600;
  }
}
</style>
