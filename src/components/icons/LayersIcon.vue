<template>
  <svg :width="width" :height="height" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M8 10.6667L12.9067 6.84671L14 6.00004L8 1.33337L2 6.00004L3.08667 6.84671L8 10.6667ZM8 12.36L3.08 8.54004L2 9.38004L8 14.0467L14 9.38004L12.9133 8.53337L8 12.36Z"
        :fill="color"/>
  </svg>

</template>

<script>
import icon from '@/mixins/iconMixin'

export default {mixins: [icon]}
</script>

