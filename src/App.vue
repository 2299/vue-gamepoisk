<template>
  <button v-on:click="greet">Greet</button>
  <my-header></my-header>
  <router-view/>
</template>

<script>
// import { useStore } from "vuex";
// import { onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import firebase from 'firebase';

import Header from './components/Header';


export default {
  components: {
      'my-header':Header
  },

  setup () {
    const router = useRouter();
    const route = useRoute();

      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          console.log('not loggined');
        } else if (route.path == '/login' || route.path == '/register') {
          console.log('loggined');
          router.replace('/')
        }
      });

  },
  methods: {
    greet() {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
         alert('not loggined');
        } else {
          alert('loggined');
        }
      });
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

* {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
body {
  background: $grey-2;
  font-family: $main-font;
  color: #fff;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
a {
  color: inherit
}
</style>
