<template>
  <div class="min-h-screen w-full mx-auto">
    <AppTitleBar title="פעילים" />
    <ul class="flex flex-wrap px-01 mx-auto mb-20">
      <AppMemberBar
        v-for="member in members"
        :key="member.index"
        :status="member.author.status"
        :authurl="'/' + member.author.name"
        :name="member.author.name"
        :hname="member.author.hname"
        :initial="member.author.hname.charAt(0)"
        keep-alive
      />
    </ul>
    <!-- <pre class> {{ members.length }} </pre> -->
  </div>
</template>

<script>
// import AppMemberBar from '@/components/AppMemberBar'
// import AppTitleBar from '@/components/AppTitleBar'

export default {
  layout: 'stats',
  // components: {
  //   AppMemberBar,
  //   AppTitleBar
  // },
  async asyncData({$content, params}) {
    const posts = await $content(params.slug, {deep: true})
      .where({type: {$eq: 't'}})
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
      dataReady: false
    }
  },
  // async mounted() {
  //   const data = await this.$axios.$get(this.api)
  //   this.dataReady = true
  //   this.users = data.values.reverse()
  // },
  async mounted() {
    let data = await this.$axios.$get(this.api)
    const keys = ['uid', 'name', 'hname']
    data = data.values.map((row) => {
      return keys.reduce((res, {key, i}) => {
        const author = {}
        author.uid = row[0]
        author.hname = row[1] + ' ' + row[2]
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
  }
}
</script>
