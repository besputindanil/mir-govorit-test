<template>
  <header class="page-header">
      <div class="title-wrapper">
        <h1 class="title">Витрина</h1>
        <h2 class="title title--sub">Семинары и курсы</h2>
      </div>
      <span class="section-title">Моё обучение</span>
  </header>
</template>

<script>
export default {
  name: 'PageContentHeader'
}
</script>

<style lang="scss" scoped>
.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
}

.title-wrapper {
  display: flex;
  align-items: center;
}

.title {
  font-size: 36px;

  &--sub {
    margin-left: 16px;
    color: #C4C4C4;
  }
}

.section-title {
  font-weight: 700;
  color: #007FF4;
}
</style>