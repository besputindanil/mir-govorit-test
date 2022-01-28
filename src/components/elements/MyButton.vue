<template>
  <div class="button orange"
       :class="{
          'orange': orange,
          'blue': blue
       }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    orange: {
      type: Boolean,
      default: false
    },
    blue: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.button {
  display: flex;
  padding: 8px 16px;
  color: #ffffff;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  border-radius: 8px;
}

.orange {
  background-color: #FBAD00;
}

.blue {
  background-color: #007FF4;
}
</style>