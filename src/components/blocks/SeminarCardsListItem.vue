<template>
  <div class="card"
       @click="$router.push({ path: link })">
    <div class="header">
      <h3 v-if="title"
          class="header__title">{{ title }}</h3>
      <div v-if="translatedType"
           class="block">
        <span class="block__icon">
          <layers-icon v-if="isSeminarType" class="" color="#FBAD00" />
          <layers-icon v-if="isTrainingType" color="#007FF4" />
        </span>
        <span class="block__title">{{ translatedType }}</span>
      </div>
      <div v-if="duration"
           class="block">
        <span class="block__icon">
            <clock-icon color="#C4C4C4" />
        </span>
        <span class="block__title">{{ formattedDuration }}</span>
      </div>
      <div v-if="dateStart"
           class="block">
        <span class="block__icon">
            <calendar-icon color="#C4C4C4" />
        </span>
        <span class="block__title">{{ formattedDateStart }}</span>
      </div>
    </div>
    <p v-if="description"
       class="card__description text-content">{{ description }}</p>
    <div v-if="curators.length"
         class="card__curators text-content">
      Куратор:
      <span v-for="(curator, index) in curators"
            :key="index">
        {{ curator }}
      </span>
    </div>
    <div v-if="methodists.length"
         class="card__curators text-content">
      Методисты:
      <span v-for="(methodist, index) in methodists"
            :key="index">
        {{ methodist }}
      </span>
    </div>
    <card-button v-if="isSeminarType"
               orange
               class="card__button">
      <span>{{ price }} ₽</span>
    </card-button>
    <card-button v-else-if="isTrainingType"
               blue
               class="card__button">
      Выбрать тариф
    </card-button>
  </div>
</template>

<script>
import LayersIcon from "@/components/icons/LayersIcon"
import ClockIcon from "@/components/icons/ClockIcon"
import CalendarIcon from "@/components/icons/CalendarIcon"
import CardButton from "@/components/elements/CardButton"
import {CARDS_TYPE} from "@/utils/cards"
import {formatDate, createFormattedDuration, getDuration} from '@/utils/formatters'

export default {
  name: 'SeminarCardsListItem',
  components: {
    LayersIcon,
    ClockIcon,
    CalendarIcon,
    CardButton
  },
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    curators: {
      type: Array,
      default: () => []
    },
    methodists: {
      type: Array,
      default: () => []
    },
    lockReason: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: null
    },
    dateStart: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: null
    },
    link: {
      type: String,
      default: ''
    }
  },
  computed: {
    isSeminarType() {
      return this.type === CARDS_TYPE.SEMINAR
    },
    isTrainingType() {
      return this.type === CARDS_TYPE.TRAINING
    },
    translatedType() {
      switch (true) {
        case this.isSeminarType:
          return 'Семинар'
        case this.isTrainingType:
          return 'Повышение квалификации'
        default:
          return
      }
    },
    formattedDuration() {
      const durationOptions = { weeks: this.duration }
      const weeksDuration =   createFormattedDuration(durationOptions, {format: ['weeks']})

      let monthsDuration = null

      if (this.dateStart) {
        const intervalToDuration = getDuration(this.dateStart, durationOptions)
        const { months } = intervalToDuration
        monthsDuration = createFormattedDuration({ months }, {format: ['months']})
      }

      return monthsDuration || weeksDuration
    },
    formattedDateStart() {
      return formatDate(this.dateStart)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 320px;
  padding: 16px;
  border: 1px solid #EDEDED;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  transition: transform .3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &__description {
    margin-bottom: 4px;
  }

  &__button {
    align-self: flex-end;
    margin-top: auto;
  }

  @media only screen and (max-width: 767px) {
    min-height: 288px;
  }
}

.header {
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;

  &__title {
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
  }
}

.block {
  position: relative;
  display: flex;
  align-items: flex-start;

  &__icon {
    position: absolute;
    left: 0;
    top: 2px;
  }

  &__title {
    margin-left: 24px;
    font-size: 15px;
    line-height: 20px;
    font-weight: 500;
  }
}

.text-content {
  font-size: 12px;
  line-height: 16px;
}
</style>