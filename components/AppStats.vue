<template>
  <div class="stats flex flex-col">
    <!-- Counter: Members -->
    <div class="grid-item members group">
      <NuxtLink
        to="/t"
        class="counter bg-gray-800 group-hover:bg-gray-700 trans-100"
      >
        <h2>פעילים</h2>
        <animated-number
          :value="tMembers"
          :format-value="formatNumber"
          :delay="100"
          :duration="duration"
          class="number group-hover:text-red-700"
          easing="easeOutCirc"
        />
      </NuxtLink>
    </div>

    <!-- Counter: Groups -->
    <div class="grid-item groups group">
      <NuxtLink
        to="/g"
        class="counter bg-gray-800 group-hover:bg-gray-700 trans-100"
      >
        <h2>קבוצות</h2>
        <animated-number
          :value="tGroups"
          :format-value="formatNumber"
          :delay="1000"
          :duration="duration"
          class="number group-hover:text-red-700"
          easing="easeOutCirc"
        />
      </NuxtLink>
    </div>

    <!-- Counter: Campaigns -->
    <div class="grid-item campaigns group">
      <NuxtLink
        to="/c"
        class="counter bg-gray-800 group-hover:bg-gray-700 trans-100"
      >
        <h2>מערכות</h2>
        <animated-number
          :value="tCampaigns"
          :format-value="formatNumber"
          :delay="1500"
          :duration="duration"
          class="number group-hover:text-red-700"
          easing="easeOutCirc"
        />
      </NuxtLink>
    </div>

    <!-- Counter: Goal -->
    <!-- <div class="grid-item goal group w-3/12 lg:w-1/12">
      <NuxtLink to="/goal" class="counter bg-gray-700 group-hover:bg-gray-600">
        <h2>מטרה</h2>
        <animated-number
          :value="tGoal"
          :format-value="formatNumber"
          :delay="2000"
          :duration="duration"
          class="number group-hover:text-red-700"
          easing="easeOutCirc"
        />
      </NuxtLink>
    </div> -->
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import AnimatedNumber from 'animated-number-vue'

export default {
  components: {
    AnimatedNumber
  },
  props: {
    duration: {
      type: Number,
      default: 1666
    }
  },
  data() {
    return {
      api:
        'https://sheets.googleapis.com/v4/spreadsheets/1gwIzncB37WScVHQgI8P2uEqj1QYGS0JrS4tM7PzQgxQ/values/vars!G1:G1?key=AIzaSyCzDCILqQpcc1wCKmAvTsiQ98UhQA9VX9g',
      dataReady: false,
      tMembers: 0,
      tGroups: 18,
      tCampaigns: 2
      // tGoal: 1
    }
  },
  async mounted() {
    const totalUsers = await this.$axios.$get(this.api)
    this.dataReady = true
    this.tMembers = totalUsers.values[0][0]
  },
  methods: {
    formatNumber(value) {
      return `${value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
    }
  }
}
</script>

<style scoped lang="postcss">
h2 {
  @apply text-lg;
  @screen xl {
    @apply text-xl;
  }
}
.nuxt-link-active {
  @apply bg-gray-700;
}

.counter {
  @apply w-full flex items-center cursor-pointer py-2 px-3 rounded-md;
  @screen lg {
    @apply text-xl rounded-lg px-04;
  }
  @screen xl {
    @apply text-2xl px-4;
  }
}

.number {
  @apply text-red-600 font-bold text-lg leading-none tracking-tight mt-1 block flex-1 text-left;
  @screen md {
    @apply text-xl;
  }
  @screen lg {
    @apply text-2xl;
  }
}
</style>
