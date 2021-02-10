<template>
  <div class="about">
    <h1>Избранное</h1>
      <div v-if="items = null">
        <h2>Нет игр в избранном. Добавьте!</h2>
      </div>
      <div v-else>
          <h3>Список игр</h3>
      </div>
    <router-link to="/">Назад</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: null
    }
  },
}
</script>