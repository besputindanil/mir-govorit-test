<template>
  <div class="main-page">
    <main-menu />
    <page-content />
  </div>
</template>

<script>
import MainMenu from '@/components/layout/MainMenu'
import PageContent from '@/components/layout/PageContent'

export default {
  name: 'MainPage',
  components: {
    MainMenu,
    PageContent
  }
}
</script>

<style lang="scss" scoped>
.main-page {
  display: grid;
  grid-template-columns: 1fr 3fr;
}
</style>
