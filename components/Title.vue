<template>
  <div class="title">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.title {
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: #3F3F3F;
}

@media (max-width: 1500px) {
  .title {
    font-size: 20px;
  }
}
</style>
