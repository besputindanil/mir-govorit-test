<template>
  <div class="page-content">
    <page-content-header class="page-content__header" />
    <page-content-inner />
  </div>
</template>

<script>
import PageContentHeader from '@/components/layout/PageContentHeader'
import PageContentInner from '@/components/layout/PageContentInner'

export default {
  name: 'PageContent',
  components: {
    PageContentHeader,
    PageContentInner
  }
}
</script>

<style lang="scss" scoped>
.page-content {
  padding: 32px;
  overflow-y: auto;

  &__header {
    margin-bottom: 32px;
  }

  @media only screen and (max-width: 767px) {
    padding: 8px 16px;
  }
}
</style>