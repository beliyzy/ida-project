<template>
  <button
    type="button"
    class="button"
    @click="$emit('addItem')"
    :class="{activeBtn: isDone}"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  data () {
    return {
      isDone: true
    }
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.button {
  background: #EEEEEE;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  width: 100%;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: #B4B4B4;
  border: none;
  cursor: pointer;
}

.activeBtn {
  background: #7BAE73;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  color: #FFFFFF;
}
</style>
