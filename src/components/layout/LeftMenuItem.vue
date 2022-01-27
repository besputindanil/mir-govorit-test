<template>
    <div class="menu-item">
      <template v-if="menuItem.subMenu">
        <div class="menu-item__title"
             @click="showSubMenu = !showSubMenu">
          <span>{{ menuItem.name }}</span>
          <div class="icon"
               :class="{'icon--down': showSubMenu}">
            <arrow-icon :width="8"
                           :height="12"/>
          </div>
        </div>
        <div v-if="menuItem.subMenu && showSubMenu"
             class="sub-menu">
          <a v-for="(subItem, index) in menuItem.subMenu"
             :key="index"
             href="#"
             class="sub-menu__item item-link hovered">{{ subItem }}</a>
        </div>
      </template>
      <template v-else>
        <a class="menu-item__title item-link hovered" href="#">{{ menuItem.name }}</a>
      </template>
    </div>
</template>

<script>
import ArrowIcon from "@/components/icons/ArrowIcon";
export default {
  name: 'LeftMenuItem',
  components: {ArrowIcon},
  props: {
    menuItem: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      showSubMenu: false
    }
  }
}
</script>

<style lang="scss">
.menu-item {
  width: 100%;
  cursor: pointer;

  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 40px 4px 32px;
    font-size: 16px;
    font-weight: 700;
  }
}

.sub-menu {
  display: flex;
  flex-direction: column;
  &__item {
    padding: 4px 56px;

  }
}

.hovered {
  &:hover {
    background-color: #FACB64;
  }
}

.item-link {
  text-decoration: none;
  color: #191919;
}

.icon {
  transition: transform .3s ease;
  &--down {
    transform: rotate(90deg);
  }
}
</style>