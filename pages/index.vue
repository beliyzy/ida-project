<template>
  <div class="container">
    <Title>Добавление товара</Title>
    <AddForm />
  </div>
</template>

<script>
export default {
  layout: 'default'
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

</style>
