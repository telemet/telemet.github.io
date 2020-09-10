<template>
  <div class="min-h-screen w-full mx-auto">
    <AppTitleBar title="קבוצות" />
    <ul class="flex flex-wrap px-01 mx-auto mb-20">
      <!-- <AppMemberBar
        v-for="group in groups"
        :key="group.index"
        :status="group.author.name ? 'green' : ''"
        :authurl="'/g/' + group.author.name"
        :source="'/images/g/' + group.author.name + '.jpg'"
        :hname="group.author.hname"
        :initial="group.author.hname.charAt(0)"
        keep-alive
      /> -->

      <AppMemberBar
        v-for="(group, index) in groups"
        :key="index"
        :type="group.type"
        :status="group.author.status"
        :authurl="'/' + group.author.name"
        :name="group.author.name"
        :hname="group.author.hname"
        :initial="group.author.hname.charAt(0)"
        keep-alive
      />
      <!-- <AppMemberBar status="" hname="המבינים החופשיים" initial="ה" keep-alive /> -->
      <AppMemberBar status="" hname="אג'נדה 2030" initial="א" keep-alive />
      <AppMemberBar status="" hname="אמת וחובה" initial="א" keep-alive />
      <AppMemberBar status="" hname="אמת שכדאי לדעת" initial="א" keep-alive />
      <AppMemberBar status="" hname="אני שולמן" initial="א" keep-alive />
      <AppMemberBar status="" hname="בני חורין" initial="ב" keep-alive />
      <AppMemberBar
        status=""
        hname="די לסגר - משחררים את ישראל"
        initial="ד"
        keep-alive
      />
      <AppMemberBar status="" hname="זעקת השכמה" initial="ז" keep-alive />
      <AppMemberBar status="" hname="כיפה אדומה" initial="כ" keep-alive />
      <AppMemberBar
        status=""
        hname="לא ניתן להפעיל את 5G בישראל"
        initial="ל"
        keep-alive
      />
      <AppMemberBar status="" hname="לצאת מעדר הרגיל" initial="ל" keep-alive />
      <AppMemberBar status="" hname="מורידים מסכות" initial="מ" keep-alive />
      <AppMemberBar status="" hname="סוף עידן התמימות" initial="ס" keep-alive />
      <AppMemberBar status="" hname="צעדת המיליון" initial="צ" keep-alive />
      <AppMemberBar status="" hname="שקרונה" initial="ש" keep-alive />
      <AppMemberBar
        status=""
        hname="Check 5G-Israel חייבים להתעורר"
        initial="C"
        keep-alive
      />
      <AppMemberBar status="" hname="Stop 5G Israel" initial="S" keep-alive />
      <!-- <AppMemberBar status="" hname="2030" initial="א" keep-alive /> -->
    </ul>
    <!-- <pre class> {{ members.length }} </pre> -->
  </div>
</template>

<script>
import AppMemberBar from '@/components/AppMemberBar'
import AppTitleBar from '@/components/AppTitleBar'

export default {
  layout: 'stats',
  components: {
    AppMemberBar,
    AppTitleBar
  },
  async asyncData({$content, params}) {
    const posts = await $content(params.slug, {deep: true})
      .where({type: {$eq: 'g'}})
      .only(['title', 'description', 'img', 'slug', 'author', 'type'])
      .sortBy('updatedAt', 'desc')
      // .limit(6)
      // .skip(1)
      .fetch()
    const groups = posts.reduce(
      (x, y) =>
        x.findIndex((e) => e.author.name === y.author.name) < 0 ? [...x, y] : x,
      []
    )
    return {
      groups
    }
  },
  data() {
    return {
      // signups: '',
      // users: '',
      // members: '',
      api:
        'https://sheets.googleapis.com/v4/spreadsheets/1gwIzncB37WScVHQgI8P2uEqj1QYGS0JrS4tM7PzQgxQ/values/vars!A1:D?key=AIzaSyCzDCILqQpcc1wCKmAvTsiQ98UhQA9VX9g',
      dataReady: false
    }
  }
}
</script>
