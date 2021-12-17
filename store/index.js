export default {
  state: {
    list: [
      {
        id: 1,
        title: 'Товар 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, repellendus!',
        price: '10 000',
        img: 'https://loremflickr.com/300/200/mouse'
      },
      {
        id: 2,
        title: 'Товар 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, repellendus!',
        price: '1 000',
        img: 'https://loremflickr.com/300/200/cat'
      },
      {
        id: 3,
        title: 'Товар 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, repellendus!',
        price: '20 000',
        img: 'https://loremflickr.com/300/200/dog'
      },
      {
        id: 4,
        title: 'Товар 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, repellendus!',
        price: '100 000',
        img: 'https://loremflickr.com/300/200/snake'
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
    },
    sort ({ state, getters }, value) {
      switch (value) {
        case 'byName':
          this.state.list = this.getters.sortedListByName
          break
        case 'byMinToMax':
          this.state.list = this.getters.sortedListByMin
          break
        case 'byMaxToMin':
          this.state.list = this.getters.sortedListByMax
          break
      }
    }
  },
  getters: {
    sortedListByMin: (state) => {
      const sortedListByMin = [...state.list]
      return sortedListByMin.sort((a, b) => {
        return a.price.replace(/\s+/g, '') - b.price.replace(/\s+/g, '')
      })
    },
    sortedListByMax: (state) => {
      const sortedListByMax = [...state.list]
      return sortedListByMax.sort((a, b) => {
        return b.price.replace(/\s+/g, '') - a.price.replace(/\s+/g, '')
      })
    },
    sortedListByName: (state) => {
      const sortedListByName = [...state.list]
      return sortedListByName.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1
        }
        return 0
      })
    }
  }
}
