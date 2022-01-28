<template>
  <section class="author-info">
    <div class="author-info__text">
      <span class="author-info__topic">{{ topic }}</span>
      <h2 class="author-info__name">{{ name }}</h2>
      <p class="author-info__description">{{ description }}</p>
    </div>
    <div class="author-info__avatar">
      <img :src="avatar"
           width="120"
           height="120"
           alt="Фотография автора">
    </div>
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
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 24px;

  &__text {
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
  }

  &__avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 120px;
    height: 120px;
    margin-left: 16px;
    border-radius: 50%;
    overflow: hidden;
  }
}
</style>