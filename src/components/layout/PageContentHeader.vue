<template>
  <header class="page-header">
      <div class="title-wrapper">
        <h1 class="title">Витрина</h1>
        <h2 class="title title--sub">Семинары и курсы</h2>
      </div>
      <span class="section-title">Моё обучение</span>
      <page-filter class="page-header__filter" />
  </header>
</template>

<script>
import PageFilter from '@/components/elements/PageFilter'
export default {
  name: 'PageContentHeader',
  components: {PageFilter}
}
</script>

<style lang="scss" scoped>
.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  &__filter {
    display: none;

    @media only screen and (max-width: 767px) {
      display: block;
      grid-column: 1/3;
      margin-top: 24px;
    }
  }
}

.title-wrapper {
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.title {
  font-size: 36px;
  line-height: 48px;

  @media only screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 32px;
  }

  &--sub {
    margin-left: 16px;
    color: #C4C4C4;

    @media only screen and (max-width: 1100px) {
      margin-left: 0;
      font-size: 24px;
      line-height: 32px;
    }

    @media only screen and (max-width: 767px) {
      font-size: 16px;
      line-height: 24px;
    }
  }
}

.section-title {
  font-weight: 700;
  color: #007FF4;
}
</style>