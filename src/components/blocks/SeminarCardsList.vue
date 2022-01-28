<template>
  <section class="cards">
    <div class="cards__list">
      <seminar-cards-list-item v-for="seminar in seminars"
                               :key="seminar.id"
                               :title="seminar.title"
                               :description="seminar.description"
                               :type="seminar.type"
                               :curators="seminar.curators"
                               :methodists="seminar.methodists"
                               :lockReason="seminar.lockReason"
                               :duration="seminar.duration"
                               :dateStart="seminar.dateStart"
                               :price="seminar.price"
                               :link="seminar.link" />
    </div>
  </section>
</template>

<script>
import SeminarCardsListItem from "@/components/blocks/SeminarCardsListItem";

export default {
  name: 'SeminarCardsList',
  components: {SeminarCardsListItem},
  props: {
    seminars: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.cards {
  &__list {
    display: grid;
    grid-template-columns: repeat(4, minmax(224px, 1fr));
    gap: 24px 16px;


    @media only screen and (max-width: 1400px) {
      grid-template-columns: repeat(3, minmax(224px, 1fr));
    }
    @media only screen and (max-width: 1100px) {
      grid-template-columns: repeat(2, minmax(224px, 1fr));
    }
  }
}
</style>