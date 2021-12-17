<template>
  <div class="input-field">
    <div class="input__title">
      {{ inputTitle }}
      <div
        v-if="required"
        class="input_required"/>
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

.input {
  background: #FFFEFB;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #B4B4B4;
  transition: .3s box-shadow;
  border-radius: 4px;
  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  }
}
textarea {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
input, textarea {
  width: 100%;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;

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

@media (max-width: 1440px) {
  input, textarea {
    font-size: 10px;
  }
}

@media (max-width: 1024px) {
  input, textarea {
    font-size: 8px;
  }
}

@media (max-width: 768px) {
  input, textarea {
    font-size: 12px;
  }
  .input__title {
    font-size: 12px;
  }
}

@media (max-width: 425px) {
  input, textarea {
    font-size: 12px;
  }
  .input__title {
    font-size: 12px;
  }
}
</style>
