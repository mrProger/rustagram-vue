<template>
  <div class="auth-window">
    <div class="text-center">
      <p class="auth-window__login d-flex flex-column">
        <input class="auth-window__login__input align-self-center" type="text" placeholder="Логин">
      </p>
      <p class="auth-window__password d-flex flex-column">
        <input class="auth-window__password__input align-self-center" type="password" placeholder="Пароль">
      </p>
      <p class="auth-window__button">
        <input type="button" class="btn btn-success home-page__buttons__auth-button" value="Войти" onclick="auth()">
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthView.vue"
}
</script>

<style scoped>

</style>