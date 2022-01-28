<template>
  <main class="content">
    <author-info v-if="author"
                 :topic="author.topic"
                 :name="author.name"
                 :avatar="author.avatar"
                 :description="author.description" />
    <seminar-cards-list v-if="seminars"
                        :seminars="seminars" />
  </main>
</template>

<script>
import AuthorInfo from "@/components/blocks/AuthorInfo"
import SeminarCardsList from "@/components/blocks/SeminarCardsList"
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'PageContentInner',
  components: {AuthorInfo ,SeminarCardsList},
  computed: {
    ...mapGetters(['author', 'seminars'])
  },
  async mounted() {
    await this.getSeminarsData()
  },
  methods: {
    ...mapActions(['getSeminarsData'])
  }
}
</script>