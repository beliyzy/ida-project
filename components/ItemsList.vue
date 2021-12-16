<template>
  <div>
    <div
      v-if="list.length"
      class="items-list"
    >
      <ItemCard
        v-for="item in list"
        :key="item.id"
        :item="item"
        @delete="$emit('deleteItem', item.id)"
      />
    </div>
    <div
      v-else
    >
      <h1>No Data</h1>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    list: Array
  }
}
</script>

<style lang="scss">
.items-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
  margin-left: 16px;
}

@media (max-width: 1440px) {
  .items-list {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 80px;
  }
}

@media (max-width: 1024px) {
  .items-list {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-left: 40px;
  }
}

@media (max-width: 768px) {
  .items-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 30px auto;
  }
}

@media (max-width: 425px) {
  .items-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
