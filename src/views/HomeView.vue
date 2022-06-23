<template>
  <div class="container-fluid home-page">
    <div class="row">
      <div class="col text-center home-page__left-side">
        <a href="/">
          <img src="../../public/image/Logo.png" alt="Лого" class="home-page__left-side__logo">
        </a>
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
          <a href="/auth">
            <input type="button" class="btn btn-primary home-page__buttons__auth-button" value="Войти">
          </a>
        </p>
        <p>
          <a href="/register">
            <input type="button" class="btn btn-success home-page__buttons__register-button" value="Зарегистрироваться" href="/register">
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style lang="sass"></style>