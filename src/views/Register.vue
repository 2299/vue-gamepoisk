<template>
  <div class="register">
    <h1>Регистрация</h1>
    <form @submit.prevent="Register">
    <input type="text" placeholder="Введите эл. почту" v-model="email"/>
    <small>Указанная почта будет использоваться при входе в аккаунт</small>
    <input type="password" placeholder="Пароль" v-model="password">
    <input type="password" placeholder="Повторите пароль" v-model="password">
    <input type="submit" value="Зарегистрировать">
    <p>Уже есть аккаунт?  <router-link to="/login">Войти</router-link></p>
  </form>
  </div>
</template>

<script>
import firebase from 'firebase'
import {ref} from 'vue'

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const Register = () => {
      firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then(user => { 
            alert(user);
          })
          .catch(err => alert(err.message));
    }
    return {
        Register,
        email,
        password
    }
  }
}
</script>