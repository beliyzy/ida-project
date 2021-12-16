export default {
  state: {
    list: [
      {
        id: 1,
        title: 'Товар 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, repellendus!',
        price: '10000',
        img: 'https://picsum.photos/300/200'
      },
      {
        id: 2,
        title: 'Товар 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, repellendus!',
        price: '1000',
        img: 'https://picsum.photos/300/200'
      },
      {
        id: 3,
        title: 'Товар 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, repellendus!',
        price: '20000',
        img: 'https://picsum.photos/300/200'
      },
      {
        id: 4,
        title: 'Товар 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, repellendus!',
        price: '100000',
        img: 'https://picsum.photos/300/200'
      }
    ]
  },
  mutations: {
    delete (state, id) {
      this.state.list = this.state.list.filter(item => item.id !== id)
    },
    add (state, { title, description, price, img }) {
      this.state.list.push({
        id: Date.now(),
        title,
        description,
        price,
        img
      })
    }
  },
  getters: {
    sortedListByMin: (state) => {
      const sortedListByMin = [...state.list]
      return sortedListByMin.sort((a, b) => {
        return a.price - b.price
      })
    },
    sortedListByMax: (state) => {
      const sortedListByMax = [...state.list]
      return sortedListByMax.sort((a, b) => {
        return b.price - a.price
      })
    }
  }
}
