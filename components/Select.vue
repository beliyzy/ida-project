<template>
  <select
    v-model="selected"
    @change="$emit('sortList', selected)"
  >
    <option selected value="byName">По названию</option>
    <option value="byMinToMax">По цене min</option>
    <option value="byMaxToMin">По цене max</option>
  </select>
</template>

<script>
export default {
  data () {
    return {
      selected: ''
    }
  }
}
</script>

<style lang="scss">
select {
  background: #FFFEFB;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-family: Source Sans Pro, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #B4B4B4;
  padding: 10px 15px;
}
</style>
