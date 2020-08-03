<template>
  <div class="counter text-center cursor-pointer">
    <animated-number
      :value="total"
      :format-value="formatNumber"
      :delay="0"
      :duration="duration"
      class="text-red-700 hover:text-red-600 font-bold text-12xl md:text-14xl leading-none tracking-tight"
      easing="easeOutCirc"
    />
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
      total: 0
    }
  },
  async mounted() {
    const totalUsers = await this.$axios.$get(this.api)
    this.dataReady = true
    this.total = totalUsers.values[0][0]
  },
  methods: {
    formatNumber(value) {
      return `${value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
    }
  }
}
</script>

<style scoped lang="postcss">
.counter {
  /* display: inline-block; */
  /* font-weight: $bold; */
  /* text-align: center; */
  /* cursor: pointer; */
  /* @include fp(font-size, 96, 256);
  @include fp(line-height, 96, 256);
  @include fp(letter-spacing, -2, -8); */
  /* span {
    color: $white;
  }
  .num {
    color: $red;
    text-shadow: 3px 8px 12px rgba($brand-0, 0.33);
  } */
}
</style>
