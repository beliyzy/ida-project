<template>
  <div class="container">
    <div class="top-info">
      <Title>Добавление товара</Title>
      <Select/>
    </div>
    <div class="wrapper">
      <AddForm @add-item="addItem"/>
      <Select/>
      <ItemsList
        :list="list"
        @deleteItem="deleteItem"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  layout: 'default',
  computed: {
    ...mapGetters(['sortedListByMin', 'sortedListByMax']),
    ...mapState({
      list: state => state.list
    })
  },
  methods: {
    ...mapMutations(['delete', 'add']),
    deleteItem (id) {
      this.delete(id)
    },
    addItem ({ title, description, price, img }) {
      this.add({ title, description, price, img })
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  background: rgba(255, 254, 251, 0.8);
}

.container {
  margin: 32px;
}

.top-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  select {
    margin-right: 20px;
  }

  @media (max-width: 1024px) {
    select {
      margin-right: 100px;
    }
  }
  @media (max-width: 768px) {
    select {
      display: none;
    }
    justify-content: center;
  }
}

.wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  select {
    display: none;
  }

  @media (max-width: 768px) {
    select {
      display: block;
      margin: 20px auto 0 auto;
    }
  }
}
@media (max-width: 768px) {
  .wrapper {
    flex-direction: column;
  }
}
</style>
