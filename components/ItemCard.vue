<template>
  <div class="item-card">
    <div class="item-card__img">
      <img :src="item.img" alt="CardPhoto">
    </div>
    <div class="item-card__info">
      <div class="item-card__title">{{ item.title }}</div>
      <div class="item-card__description">{{ item.description }}</div>
      <div class="item-card__price">{{ item.price }} руб.</div>
    </div>
    <div
      class="item-card__delete-btn"
      @click="$emit('delete', item.id)"
    >
      <img src="@/assets/img/delete.svg" alt="delete">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style lang="scss">
.item-card {
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  font-family: Source Sans Pro, sans-serif;
  font-style: normal;
  color: #3F3F3F;
  width: 300px;
  cursor: pointer;
  position: relative;
  &__img {
    img {
      width: 300px;
      height: 200px;
    }
  }
  &__info {
    padding: 16px 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 200px;
  }

  &__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
  }

  &__description {
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    margin-top: 16px;
  }

  &__price {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    margin-top: 32px;
  }

  &__delete-btn {
    background: #FF8484;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 32px;
    height: 32px;
    position: absolute;
    top: -10px;
    right: -10px;
    transition: all 0.2s;

    &:hover {
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.6);
    }

    &:active {
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.9);
    }
    img {
      padding: 8px;
    }
  }
}
</style>
