<template>
  <div class="container-fluid home-page">
    <div class="row">
      <div class="col text-center home-page__left-side">
        <img src="../../public/image/Logo.png" alt="Лого" class="home-page__left-side__logo">
        <div class="home-page__left-side__slogan text-justify">
          <p>Бесплатный,</p>
          <p>Современный,</p>
          <p>Родной!</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col text-center home-page__buttons">
        <p>
          <input type="button" class="btn btn-primary home-page__buttons__auth-button" value="Войти" onclick="showAuthWindow()">
        </p>
        <p>
          <input type="button" class="btn btn-success home-page__buttons__register-button" value="Зарегистрироваться" onclick="showRegisterWindow()">
        </p>
      </div>
    </div>

    <div class="auth-window" title="Вход">
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

    <div class="register-window" title="Регистрация">
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
  </div>
</template>

<script lang="ts"></script>

<style lang="sass"></style>