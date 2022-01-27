<template>
  <div class="main-menu">
    <div class="logo">
      <logo :width="256"
            :height="64"/>
    </div>
    <nav class="main-menu__list">
      <main-menu-item v-for="(item, index) in menuItems"
                      :key="index"
                      :menu-item="item"/>
    </nav>
    <div class="user">
      <img :src="userData.photoSrc"
           width="48"
           height="48"
           alt="Фотография пользователя">
      <div class="user__info">
        <span class="user__name">{{ userData.name }}</span>
        <div class="user__total">{{ userData.total }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/icons/Logo"
import MainMenuItem from "@/components/layout/MainMenuItem"

export default {
  name: 'MainMenu',
  components: {
    Logo,
    MainMenuItem
  },
  data() {
    return {
      menuItems: [
        {
          name: 'Мой кабинет',
          subMenu: ['Профиль', 'Настройки']
        },
        {
          name: 'Обучение',
          subMenu: ['Семинары и курсы', 'Вебинары', 'Самообучение', 'Тьютор']
        },
        {name: 'Чат'},
        {name: 'Конкурсы'},
        {name: 'Онлайн преподавание'},
        {name: 'Маркет'},
        {name: 'Правила'},
        {name: 'Представители'},
      ],
      userData: {
        photoSrc: require('../../assets/images/user-photo.jpg'),
        name: 'Екатерина Иванова',
        total: '2 458 ⌘'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main-menu {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #F5F5F5;

  &__list {
    display: flex;
    flex-direction: column;
  }
}

.logo {
  padding: 24px 32px;
}

.user {
  display: flex;
  align-items: center;
  margin-top: auto;
  padding: 16px 32px;
  border-top: 1px solid #b8b8b8;

  &__info {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left: 8px;
    font-weight: 700;
  }

  &__name {
    font-size: 14px;
  }

  &__total {
    margin-top: 8px;
    padding: 4px 8px;
    font-size: 12px;
    background-color: #FACB64;
    border-radius: 8px;
  }
}
</style>

