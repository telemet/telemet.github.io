<template>
  <div class="post pt-14">
    <!-- Post Image -->
    <Parallax :section-height="100">
      <Poster :url="post.dir + '/images/' + post.img" :alt="post.title" />
    </Parallax>

    <!-- Post Meta -->
    <div class="absolute flex top-0 mt-24 px-8 w-full justify-between">
      <!-- Author Avatar + Name -->
      <Creator
        :author="post.author"
        :type="post.type"
        :status="post.author.status"
      />

      <div
        v-scroll-to="{el: '#main', offset: -66}"
        class="h-10 flex items-center bg-gray-900 bg-opacity-50 hover:bg-gray-600 hover:bg-opacity-90 group rounded-full px-2 text-gray-400 hover:text-gray-100 text-base md:text-base cursor-pointer"
        @click.prevent="copy"
      >
        <span class="text-left group-hover:text-gray-100 trans-100 mx-2">
          {{ formatDate(post.createdAt) }}
          <input
            ref="input"
            type="text"
            :value="copyValue()"
            aria-hidden="true"
          />
        </span>

        <div class="flex justify-center items-center ml-2 mr-1">
          <icon
            :icon-color="'transperant'"
            class="w-04 h-04 text-gray-500 group-hover:text-gray-100 fill-current cursor-pointer"
            icon-name="Share"
          >
            <IconLink />
          </icon>
        </div>
      </div>
    </div>

    <article id="main" class="container mx-auto px-6 max-w-screen-md">
      <!-- class="mt-3 block w-full h-full object-cover rounded-lg" -->
      <!-- <img
        :src="post.img"
        :alt="post.alt"
        class="mt-3 block w-full h-full object-cover rounded-lg"
      /> -->

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

      <!-- Post TOC -->
      <!-- <nav>
        <ul>
          <li v-for="link of post.toc" :key="link.id">
            <NuxtLink
              v-scroll-to="`#${link.id}`"
              :to="'#'"
              :class="{
                'py-2': link.depth === 2,
                'mr-2 pb-2': link.depth === 3
              }"
              >{{ link.text }}</NuxtLink
            >
          </li>
        </ul>
      </nav> -->

      <!-- <hr class="mt-10 md:mt-12 border-gray-700" /> -->

      <nuxt-content :document="post" class="content" />

      <a
        v-if="post.fbUrl"
        :href="
          'https://www.facebook.com/groups/telemetISR/permalink/' + post.fbUrl
        "
        title="קישור עריכה"
        target="_blank"
        class="transition-colors duration-100 ease-in-out bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white p-3 md:p-4 mt-12 mb-0 tracking-wider text-sm md:text-base rounded-lg block focus"
      >
        <p>
          רוצה להגיב? התחברו לקבוצת טלאֱמֶת ב- Facebook
        </p>
      </a>

      <a
        :href="
          'https://github.com/telemet/telemet/blob/master/content/' +
            post.path +
            post.extension
        "
        title="קישור עריכה"
        target="_blank"
        class="transition-colors duration-100 ease-in-out bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white p-3 md:p-4 mt-2 mb-12 tracking-wider text-sm md:text-base rounded-lg block focus"
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
import Parallax from 'vue-parallaxy'

export default {
  components: {
    Parallax
  },
  async asyncData({$content, params}) {
    const post = await $content(params.author, params.slug, {
      deep: true
    }).fetch()

    return {post}
  },
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
      return 'telemet.org/' + this.post.path
    }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.post.img
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.post.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.post.description
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: this.post.img
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.content {
  @apply tracking-wide overflow-hidden;
  & h2 {
    @apply mt-12 text-3xl text-red-600 font-bold;
    @screen md {
      @apply mt-14 text-4xl;
    }
  }
  & h3 {
    @apply mt-12 text-2xl text-red-600 font-bold;
    @screen md {
      @apply mt-10 text-3xl;
    }
  }
  & p {
    @apply text-gray-400 my-4 text-xl;
    @screen md {
      @apply my-6 text-2xl;
    }
    & img {
      @apply my-10 rounded-lg;
      @screen md {
        @apply my-16;
      }
    }
  }
  & p > img {
    @apply w-4/5 mx-auto mt-12;
    @screen md {
      @apply w-3/4 mx-auto mt-16;
    }
  }
  & blockquote p {
    @apply pr-4 py-2 my-8 text-xl text-gray-200 border-r-4 border-red-600 tracking-wider font-bold;
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
      @apply my-4 text-gray-400;
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

.footnotes a {
  @apply border-0;
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
