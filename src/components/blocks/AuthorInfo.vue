<template>
  <section class="author-info">
    <div class="author-info__header">
      <span class="author-info__topic">{{ topic }}</span>
      <h2 class="author-info__name">{{ name }}</h2>
    </div>
    <div class="author-info__avatar">
      <img :src="avatar"
           width="120"
           height="120"
           alt="Фотография автора">
    </div>
    <p class="author-info__description">{{ description }}</p>
  </section>
</template>

<script>
export default {
  name: 'TeacherBlock',
  props: {
    topic: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.author-info {
  display: grid;
  grid-template-columns: minmax(464px, 1fr) 1fr;
  grid-template-areas: "header avatar"
                       "description avatar";

  @media only screen and (max-width: 1023px) {
    grid-template-columns:repeat(2, 1fr);
    grid-template-areas: "header avatar"
                        "description description";
  }

  &__header {
    grid-area: header;
    display: flex;
    flex-direction: column;
    max-width: 464px;
  }

  &__topic {
    font-size: 12px;
    line-height: 16px;
    font-weight: 700;
    text-transform: uppercase;
  }

  &__name {
    margin-bottom: 8px;
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;

    @media only screen and (max-width: 767px) {
      font-size: 20px;
      line-height: 24px;
    }
  }

  &__avatar {
    grid-area: avatar;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 120px;
    height: 120px;
    margin-left: 16px;
    border-radius: 50%;
    overflow: hidden;

    @media only screen and (max-width: 1023px) {
      justify-self: end;
      margin-bottom: 8px;
    }
  }

  &__description {
    grid-area: description;
  }
}
</style>