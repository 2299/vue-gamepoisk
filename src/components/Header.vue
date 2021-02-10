<template>
  <header class="header">
    <a href="#" class="header__logo">ИгроПоиск </a>
    <input type="text" class="header__search" placeholder="Ищите среди 300,000 игр">
    <router-link to="/favourites" class="header__library">Моя библиотека</router-link>
    <small class="logout" @click="Logout">Выйти</small>
  </header>
</template>

<script>
import firebase from 'firebase'

export default {
  setup() {
  const Logout = () => {
    firebase 
      .auth()
      .signOut()
      .then(() => console.log("Signed out"))
      .catch(err => alert(err.message));
  }

  return { 
    Logout
    
    }
  }
}
</script>

<style lang="scss">
$main-font: Segoe UI, sans-serif;
$breakpoint-tablet: 768px;
$grey-1: #151515; $grey-2: #252525; $grey-3: #353535;
$grey-4: #454545; $grey-5: #555555; $grey-6: #656565;
$card-width: 366px; $card-height: 290px;

  .logout {
    cursor: pointer;
  }
  .header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  background-color: $grey-1;
  height: 100px;
    // .header__logo

  & a {
    text-decoration: none;
  }

  &__logo {
    padding: 12px;
    color: white;
    font-size: 24px;
  }

  // .header__search

  &__search {
    border: none;
    color: $grey-5;
    text-indent: 20px;
    font-size: 14px;
    background-color: $grey-2;
    border-radius: 15px;
    width: 70%;
    height: 40px;
  }


  &__library {
    color: white;
    font-size: 14px;
  }
}
</style>