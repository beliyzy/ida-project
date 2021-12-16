<template>
  <div class="container">
    <div class="wrapper">
      <AddForm @add-item="addItem"/>
      <ItemsList
        :list="list"
        @deleteItem="deleteItem"/>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data () {
    return {
      list: [
        {
          id: 1,
          title: 'Товар 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, repellendus!',
          price: '10 000',
          img: 'https://picsum.photos/300/200'
        },
        {
          id: 2,
          title: 'Товар 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, repellendus!',
          price: '1 000',
          img: 'https://picsum.photos/300/200'
        },
        {
          id: 3,
          title: 'Товар 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, repellendus!',
          price: '20 000',
          img: 'https://picsum.photos/300/200'
        },
        {
          id: 4,
          title: 'Товар 4',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, repellendus!',
          price: '100 000',
          img: 'https://picsum.photos/300/200'
        }
      ]
    }
  },
  methods: {
    deleteItem (id) {
      this.list = this.list.filter(item => item.id !== id)
    },
    addItem ({ title, description, price, img }) {
      this.list.push({
        id: Date.now(),
        title,
        description,
        price,
        img
      })
    }
  }
}
</script>

<style lang="scss">
//1440, 768, 320
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

.wrapper {
  display: flex;
  flex-direction: row;
}
@media (max-width: 768px) {
  .wrapper {
    flex-direction: column;
  }
}
</style>
