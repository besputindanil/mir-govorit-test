<template>
  <div class="page-content">
    <page-content-header />
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
}
</style>