<template>
  <AppLayout>
    <template v-slot:sidebarA>
      <div v-for="(item, index) in items" :key="index">
        <AppToggleItem :item="item" />
      </div>
      <NuxtLink
        to="/telemet/faq#מי-הם-חברי-אמת"
        class="mt-1 block py-2 px-3 bg-gray-800 hover:bg-gray-700 rounded-md text-sm text-gray-600 hover:text-white tracking-wide"
      >
        <span class="block font-bold text-center">עוד</span>
      </NuxtLink>
    </template>
    <template v-slot:main>
      <!-- <div class="min-h-screen w-full mx-auto"> -->
      <!-- <AppTitleBar title="פעילים" /> -->
      <ul class="flex flex-wrap px-01 mx-auto mb-20">
        <AppMemberBar
          v-for="member in members"
          :id="member.author.id"
          :key="member.index"
          :type="member.type"
          :status="member.author.status"
          :authurl="'/' + member.author.name"
          :name="member.author.name"
          :hname="member.author.hname"
          :coins="member.author.coins"
          :initial="member.author.hname.charAt(0)"
          keep-alive
        />
      </ul>
      <!-- <pre class> {{ members }} </pre> -->
      <!-- </div> -->
    </template>
  </AppLayout>
</template>

<script>
export default {
  // layout: 'stats',
  async asyncData({$content, params}) {
    const posts = await $content(params.slug, {deep: true})
      .where({type: {$eq: 't'}, slug: {$contains: 'profile'}})
      .only(['author'])
      .sortBy('createdAt', 'desc')
      .fetch()
    const authors = posts.reduce(
      (x, y) =>
        x.findIndex((e) => e.author.name === y.author.name) < 0 ? [...x, y] : x,
      []
    )
    return {
      authors
    }
  },
  data() {
    return {
      signups: '',
      // users: '',
      members: '',
      api:
        'https://sheets.googleapis.com/v4/spreadsheets/1gwIzncB37WScVHQgI8P2uEqj1QYGS0JrS4tM7PzQgxQ/values/vars!A1:D?key=AIzaSyCzDCILqQpcc1wCKmAvTsiQ98UhQA9VX9g',
      dataReady: false,
      items: [
        {
          title: 'הרשמה כחבר אמת',
          desc:
            'הרשמה כחבר אמת מתבצעת ע״י מילוי הטופס בדף ההרשמה המרכזי ובחירה בהרשמה כחבר אמת עם קוד ההזמנה של קבוצת טלאמת.',
          cta: 'טופס הרשמה',
          url: '/join'
        }
      ]
    }
  },
  // async mounted() {
  //   const data = await this.$axios.$get(this.api)
  //   this.dataReady = true
  //   this.users = data.values.reverse()
  // },
  async mounted() {
    let data = await this.$axios.$get(this.api)
    const keys = ['id', 'name', 'hname']
    data = data.values.map((row) => {
      return keys.reduce((res, {key, i}) => {
        const author = {}
        author.id = row[0]
        author.hname = row[1] + ' ' + row[2]
        author.coins = row[3]
        return {author}
      }, {})
    })
    this.signups = data
    const users = this.authors.concat(this.signups.reverse())
    this.members = users.reduce(
      (x, y) =>
        x.findIndex((e) => e.author.hname === y.author.hname) < 0
          ? [...x, y]
          : x,
      []
    )
    this.dataReady = true
  },
  head() {
    return {
      title: 'רשימת חברי אמת'
    }
  }
}
</script>
