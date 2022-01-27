<template>
  <svg :width="width" :height="height" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.589996 10.58L5.17 6L0.589996 1.41L2 0L8 6L2 12L0.589996 10.58Z" :fill="color"/>
  </svg>
</template>

<script>
import icon from '@/mixins/iconMixin'

export default {mixins: [icon]}
</script>

