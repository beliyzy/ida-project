<template>
  <div class="input-field">
    <div class="input__title">
      {{ inputTitle }}
      <div
        v-if="required"
        class="input_required" />
    </div>
    <div class="input">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    inputTitle: {
      type: String
    },
    required: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss">

.input-field {
  margin-top: 16px;
}

.input__title {
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: -0.02em;
  color: #49485E;
  margin-bottom: 4px;
  display: flex;
}

.input_required {
  height: 4px;
  width: 4px;
  background-color: #FF8484;
  border-radius: 50%;
}
@media (max-width: 1500px) {
  input,textarea {
    font-size: 10px;
  }
}
.input {
  background: #FFFEFB;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #B4B4B4;
  transition: .3s box-shadow;

  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  }
}

input, textarea {
  width: 100%;
  border: none;
  padding: 10px 15px;

  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
  }
}

textarea {
  font-family: inherit;
  resize: none;
  height: 110px;
}
</style>
