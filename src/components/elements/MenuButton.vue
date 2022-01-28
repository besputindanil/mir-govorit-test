<template>
  <button class="menu-button" />
</template>

<script>
export default {
  name: 'MenuButton'
}
</script>
<style lang="scss" scoped>
.menu-button {
  position: relative;

  display: block;
  width: 18px;
  height: 12px;
  margin-right: 43px;

  background-color: transparent;
  border: none;
  outline: none;

  cursor: pointer;

  transition: 1s ease;

  &::before {
    position: absolute;
    top: 0;
    left: 0;

    width: 18px;
    height: 2px;

    background-color: #000000;
    box-shadow: 0 6px 0 0 #000000, 0 12px 0 0 #000000;

    content: "";
  }
}
</style>