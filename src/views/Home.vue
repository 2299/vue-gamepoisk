<template>
  <div class="home">
    <h1>Привет, {{ name }}</h1>
      <main class="main">
        <section class="main-cards" id="main-cards">
          <card-game v-cloak></card-game>
        </section>
     </main>
    <button @click="Logout">Выйти</button>
  </div>
</template>

<style lang="scss">
.main {
  margin: 40px 10%;
}
[v-cloak] > * { display:none }
[v-cloak]::before { content: "loading…" }
</style>
<script>
import { ref, onBeforeMount } from 'vue'
import firebase from 'firebase'

import Card from '../components/Card'

export default {
  components: {
      'card-game':Card
  },

  setup() {
  const name = ref("");

  onBeforeMount(() => {
    const user = firebase.auth().currentUser;
    if (user) {
        name.value = user.email.split('@')[0];
    }
  });

  const Logout = () => {
    firebase 
      .auth()
      .signOut()
      .then(() => console.log("Signed out"))
      .catch(err => alert(err.message));
  }

  return { 
    name,
    Logout
    
    }
  }, 

  methods: {

  },

}
</script>