<template>
  <div class="form">
    <form
      @change="checkForm"
    >
      <InputField
        :required="true"
        input-title="Наименование товара"
      >
        <input
          v-model="title"
          type="text"
          placeholder="Введите наименование товара"
          :class="title === '' ? 'invalidInput' : ''"
        >
      </InputField>
      <p
        v-if="title.trim() === ''"
        class="error-message"
      >Поле является обязательным</p>

      <InputField
        input-title="Описание товара"
      >
        <textarea
          v-model="description"
          placeholder="Введите описание товара"
        />
      </InputField>
      <InputField
        :required="true"
        input-title="Ссылка на изображение товара"
      >
        <input
          v-model="img"
          type="text"
          placeholder="Введите ссылку"
          :class="img === '' ? 'invalidInput' : ''"
        >
      </InputField>
      <p
        v-if="img.trim() === ''"
        class="error-message"
      >Поле является обязательным</p>

      <InputField
        :required="true"
        input-title="Цена товара"
      >
        <input
          v-model="price"
          placeholder="Введите цену"
          :class="price === '' ? 'invalidInput' : ''"
          type="text"
          @change="price = price.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')"
        >
      </InputField>
      <p
        v-if="price.trim() === ''"
        class="error-message"
      >Поле является обязательным</p>

    </form>
    <Button
      :isValidForm="isValidForm"
      class="btn"
      title="Добавить товар"
      @addItem="$emit('add-item', {title, description, price, img})"
      @clearForm="clearForm"
    />
  </div>
</template>

<script>

export default {
  data () {
    return {
      title: '',
      description: '',
      price: '',
      img: '',
      isValidForm: false
    }
  },
  methods: {
    checkForm () {
      if ((this.title.trim() !== '') && (this.img.trim() !== '') && (this.price.trim() !== '')) {
        this.isValidForm = true
      } else {
        this.isValidForm = false
      }
    },
    clearForm () {
      this.title = ''
      this.description = ''
      this.img = ''
      this.price = ''
    }
  }
}
</script>

<style lang="scss">
.form {
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  width: 30%;
  margin-top: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: sticky;
  top: 24px;

  .btn {
    margin-top: 24px;
  }
}

.invalidInput {
  border: 1px solid #FF8484;
}

.error-message {
  font-family: Source Sans Pro, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: #FF8484;
  margin-top: 4px;
}

@media (max-width: 768px) {
  .form {
    width: 50%;
    margin: 0 auto;
    position: relative;
    top: 0;
  }
}

@media (max-width: 425px) {
  .form {
    width: 75%;
    margin: 0 auto;
    position: relative;
    top: 0;
  }
}

</style>
