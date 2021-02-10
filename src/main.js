import { createApp } from 'vue'
import App from './App.vue'
// import store from './store'
import router from './router'
import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyCX0WyMb37g8caJwPp-27MpwBc0dyNDSec",
  authDomain: "vue-gamepoisk.firebaseapp.com",
  projectId: "vue-gamepoisk",
  storageBucket: "vue-gamepoisk.appspot.com",
  messagingSenderId: "885019530374",
  appId: "1:885019530374:web:2a21f428c5b1e30959ad07"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
