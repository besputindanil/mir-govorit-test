<template>
  <div class="menu-filter">
    <span class="menu-filter__title">Фильтры</span>
    <span class="menu-filter__count">3</span>
  </div>
</template>

<script>
export  default {
  name: 'PageFilter'
}
</script>

<style lang="scss" scoped>
.menu-filter {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px;
  background-color: #F5F5F5;
  border-radius: 8px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  text-align: center;

  &__count {
    margin-left: 8px;
    color: #007FF4
  }
}
</style>