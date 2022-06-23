<template>
  <div class="register-window">
    <div class="text-center">
      <p class="register-window__login d-flex flex-column">
        <input class="register-window__login__input align-self-center" type="text" placeholder="Логин">
      </p>
      <p class="register-window__password d-flex flex-column">
        <input class="register-window__password__input align-self-center" type="password" placeholder="Пароль">
      </p>
      <p class="register-window__button">
        <input type="button" class="btn btn-success home-page__buttons__register-button" value="Зарегистрироваться" onclick="registration()">
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterView.vue"
}
</script>

<style scoped>

</style>