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
@media (max-width: 2000px){
  .items-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px;
    margin-left: 16px;
  }
}
@media (max-width: 1600px){
  .items-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    margin-left: 16px;
  }
}

</style>
