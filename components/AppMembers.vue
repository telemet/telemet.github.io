<template>
  <ul class="members" start="1">
    <li
      v-for="(value, index) in users"
      :key="index"
      class="inline-block px-2 py-1 text-lg hover:text-red-700 cursor-default"
    >
      <span class="">{{ value[1] }}</span>
      <span class="">{{ value[2] }}</span>
      <!-- <span class="score-farts">{{ value[2] }}</span> -->
    </li>
  </ul>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios'

export default {
  layout: 'home',
  components: {
    // TMember
  },
  props: {
    mode: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      users: '',
      api:
        'https://sheets.googleapis.com/v4/spreadsheets/1gwIzncB37WScVHQgI8P2uEqj1QYGS0JrS4tM7PzQgxQ/values/vars!A1:C?key=AIzaSyCzDCILqQpcc1wCKmAvTsiQ98UhQA9VX9g',
      dataReady: false
    }
  },
  async mounted() {
    const data = await this.$axios.$get(this.api)
    this.dataReady = true
    this.users = data.values.reverse()
  }
}
</script>

<style scoped lang="postcss">
ul.members {
  text-align: center;
  display: block;
  @extend .h5;
  list-style: none;
  margin: 0;
  padding: 0 0 60px 0;
  li {
    line-height: 34px;
    display: inline-block;
    padding: 0 6px;
    cursor: default;
    @extend .pt-20, .pb-20;
    position: relative;
    color: $white;
    transition: all 0.23s ease;
    &:hover {
      color: $red;
      transition: all 0.13s ease-out;
      &::before {
        color: $brand-1;
      }
    }
    &::before {
      font-size: 1rem;
      color: $brand-3;
      position: absolute;
      left: 0;
      text-align: left;
      font-style: italic;
    }
  }
}
</style>
