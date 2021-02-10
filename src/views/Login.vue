<template>
  <div class="login">
    <h1> Войти в аккаунт </h1>
    <form @submit.prevent="Login">
    <label for="email">Электронная почта</label>
    <input type="text" name="email" placeholder="e-mail" v-model="email"/>
    <br>
    <label for="password">Пароль</label>
    <input type="password" placeholder="Пароль" v-model="password">
    <input type="submit" value="Login">
    <p>Нет аккаунта? <router-link to="/register">Регистрация</router-link></p>
  </form>
  </div>
</template>

<script>
import {ref} from 'vue';
import firebase from 'firebase';

export default {
 setup() {
   const email = ref("");
   const password = ref("");

   const Login = () => {
     firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(data => console.log(data))
        .catch(err => alert(err.message))
   }

   return { 
      Login,
      email,
      password
   }
 }
}
</script>