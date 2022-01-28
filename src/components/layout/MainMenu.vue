<template>
  <div class="main-menu">
    <div class="logo">
      <logo :width="logo.width"
            :height="logo.height"/>
    </div>
    <nav class="main-menu__list">
      <main-menu-item v-for="(item, index) in menuItems"
                      :key="index"
                      :menu-item="item"/>
    </nav>
    <menu-button class="main-menu__button" />
    <div class="user">
      <div class="user__avatar">
        <img :src="userData.photoSrc"
             width="48"
             height="48"
             alt="Фотография пользователя">
      </div>
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
import MenuButton from "@/components/elements/MenuButton"

export default {
  name: 'MainMenu',
  components: {
    Logo,
    MainMenuItem,
    MenuButton
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
        photoSrc: require('../../assets/images/user-avatar.jpg'),
        name: 'Екатерина Иванова',
        total: '2 458 ⌘'
      },
      logo: {
        width: 256,
        height: 64
      }
    }
  },
  created() {
    window.addEventListener("resize", this.logoSizeHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.logoSizeHandler);
  },
  methods: {
    logoSizeHandler(e) {
      const width = e.target.innerWidth
      switch (true) {
        case width >= 1024:
          this.logo.width = 256
          this.logo.height = 64
          break
        case  width >= 768 && width < 1024:
          this.logo.width = 208
          this.logo.height = 52
          break
        case width < 768:
          this.logo.width = 118
          this.logo.height = 40
          break
        default:
          break
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

  @media only screen and (max-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 56px;
    padding: 8px 16px;
    background-color: #ffffff;

  }

  &__list {
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 767px) {
      display: none;
    }
  }

  &__button {
    display: none;

    @media only screen and (max-width: 767px) {
      display: block;
    }
  }
}

.logo {
  display: flex;
  padding: 24px 32px;

  @media only screen and (max-width: 767px) {
    padding: 0;
  }
}

.user {
  display: flex;
  align-items: center;
  margin-top: auto;
  padding: 16px 32px;
  border-top: 1px solid #b8b8b8;

  @media only screen and (max-width: 767px) {
    display: none;
  }

  &__avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    overflow: hidden;
    border-radius: 8px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left: 8px;
    font-weight: 700;
  }

  &__name {
    font-size: 14px;
    line-height: 16px;
  }

  &__total {
    margin-top: 8px;
    padding: 4px 8px;
    font-size: 12px;
    line-height: 16px;
    background-color: #FACB64;
    border-radius: 8px;
  }
}
</style>

