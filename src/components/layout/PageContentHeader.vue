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
  margin-bottom: 32px;
}

.title-wrapper {
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1050px) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.title {
  font-size: 36px;

  &--sub {
    margin-left: 16px;
    color: #C4C4C4;

    @media only screen and (max-width: 1050px) {
      margin-left: 0;
    }
  }
}

.section-title {
  font-weight: 700;
  color: #007FF4;
}
</style>