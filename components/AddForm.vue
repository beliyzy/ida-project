<template>
  <div class="form">
    <form>
      <InputField
        :required="true"
        input-title="Наименование товара"
      >
        <input
          v-model="title"
          type="text"
          placeholder="Введите наименование товара"
        >
      </InputField>
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
        >
      </InputField>
      <InputField
        :required="true"
        input-title="Цена товара"
      >
        <input
          v-model="price"
          type="text"
          placeholder="Введите цену"
        >
      </InputField>
    </form>
    <Button
      class="btn"
      title="Добавить товар"
      @addItem="$emit('add-item', {title, description, price, img})"
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
      img: ''
    }
  }
}
</script>

<style lang="scss">
.form {
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  width: 20%;
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
