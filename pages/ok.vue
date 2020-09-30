<template lang="html">
  <!-- Wrapper -->
  <div class="min-h-screen">
    <!-- Content -->
    <section class="flex">
      <!-- Posts feed -->
      <div class="absolute bottom-0 right-0 w-12/12 md:w-6/12 mb-28 md:mb-8">
        <ul>
          <li>
            <transition
              appear
              name="fade"
              @after-enter="showToast = true"
              @before-leave="showToast = false"
            >
              <div>
                <Poster
                  bg
                  src="/telemet/images/app/telemet-tlv.jpg"
                  alt="תודה"
                  class="fixed h-screen top-0 w-full mt-14 bg-top bg-no-repeat bg-fixed bg-cover"
                />
                <transition v-if="showToast" appear name="slide">
                  <NuxtLink
                    to="/telemet"
                    class="group bg-gray-800 bg-opacity-75 hover:bg-gray-700 hover:bg-opacity-90 border-0 rounded-lg transition-colors duration-150 ease-in-out flex fixed z-10 mx-8 -mt-24 max-w-lg"
                  >
                    <!-- :source="'/images/t/' + post.author.name + '.jpg'" -->
                    <AppAvatar
                      name="telemet"
                      type="g"
                      status="sup"
                      class="mr-4 my-4 avatar-lg"
                    />
                    <div
                      class="border-r border-gray-600 trans-100 mr-4 px-4 py-3 flex-1"
                    >
                      <h1
                        class="text-lg font-bold text-gray-200 tracking-wide leading-snug mb-1"
                      >
                        תודה לך
                      </h1>
                      <!-- <p class="mb-2 text-gray-100">{{ post.author.hname }}</p> -->
                      <h2
                        class="text-sm tracking-wide text-gray-400 group-hover:text-gray-200 trans-100"
                      >
                        טופס ההרשמה שמילאת נשלח בהצלחה. פרטים נוספים יישלחו
                        לכתובת הדוא״ל איתה נרשמת.
                      </h2>
                    </div>
                  </NuxtLink>
                </transition>
              </div>
            </transition>
          </li>
        </ul>
      </div>

      <!-- Tagline + Next -->
      <div
        class="absolute bottom-0 md:left-0 mb-8 md:mb-12 w-full md:w-auto px-8"
      >
        <div class="w-full block md:flex md:flex-col">
          <NuxtLink
            to="/"
            class="self-end mb-3 md:mb-4 flex w-10 p-1 justify-center bg-red-700 rounded cursor-pointer"
          >
            <icon
              :icon-color="'transperant'"
              class="fill-current w-6 h-5 text-gray-400 group-hover:text-white"
              icon-name="Menu"
            >
              <IconArrow />
            </icon>
          </NuxtLink>
          <h2>
            רשת ידע חברתית מבוזרת וחופשייה
          </h2>
        </div>
      </div>
    </section>
    <!-- <pre class="fixed">{{ posts }}</pre> -->
  </div>
</template>

<script>
export default {
  // layout: 'home',
  // async asyncData({$content, params}) {
  //   const posts = await $content(params.slug, {deep: true})
  //     .where({feature: true})
  //     .only(['title', 'description', 'img', 'slug', 'dir', 'author', 'type'])
  //     .sortBy('updatedAt', 'desc')
  //     .limit(6)
  //     // .skip(1)
  //     .fetch()
  //   return {
  //     posts
  //   }
  // },
  data() {
    return {
      currentPost: 0,
      showToast: false
    }
  },
  methods: {
    // next() {
    //   this.currentPost = (this.currentPost + 1) % this.posts.length
    // }
  },
  head() {
    return {
      // title: '',
      bodyAttrs: {
        class: 'home'
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.99s ease-in-out;
  transition-delay: 0.36s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  @apply transform translate-x-0 transition-all duration-500 ease-in-out;
}

.slide-enter,
.slide-leave-to {
  /* opacity: 0; */
  @apply transform translate-x-full transition-all duration-500 ease-in-out opacity-0;
}
</style>
