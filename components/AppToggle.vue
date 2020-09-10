<template>
  <div class="toggle">
    <input id="toggle" type="checkbox" @click="toggle" />
    <label for="toggle" class="mx-2 cursor-pointer">
      <span class="mx-3">הצג פרטים</span>
      <span
        class="relative rounded-full transition-all ease-in-out duration-100"
      ></span
    ></label>
  </div>
</template>

<script>
export default {
  methods: {
    toggle() {
      this.$emit('toggle')
    }
  }
}
</script>

<style lang="postcss" scoped>
.toggle {
  max-width: 200px;
  & label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding: 15px; */
  }
  & input {
    opacity: 0;
    position: absolute;
    width: 1px;
    height: 1px;
  }
  & span:last-child {
    @apply bg-gray-600;
    width: 48px;
    height: 24px;
  }
  & span:last-child::before,
  & span:last-child::after {
    content: '';
    position: absolute;
  }
  & span:last-child::before {
    right: 2px;
    top: 2px;
    width: 20px;
    height: 20px;
    background: #ffffff;
    border-radius: 50%;
    z-index: 1;
    transition: transform 0.1s;
  }
  & [type='checkbox']:checked + label span:last-child {
    @apply bg-red-600;
  }
  & [type='checkbox']:checked + label span:last-child::before {
    transform: translateX(-24px);
  }
}
</style>
