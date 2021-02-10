<template>
  <div v-for="info in infos" :key="info.id">
    <div class="main-cards__card" v-bind:style="{background: 'url('+ info.background_image +') center', backgroundSize: 'cover'}">
      <div class="main-cards__favourite"><i>Add</i></div>
      <h2 class="main-cards__title">{{ info.name }}</h2>
       <p class="text">Дата выпуска - {{ info.released }}</p>
      <span class="main-cards__rating"> {{ info.metacritic }}</span>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      infos: {},
    }
  },
  mounted() {
    axios
        .get('https://api.rawg.io/api/games?page=1')
        .then(response => (this.infos = response.data.results))
        .catch(error => console.log(error));
  },
}
</script>

<style lang="scss">
$main-font: Segoe UI, sans-serif;
$breakpoint-tablet: 768px;
$grey-1: #151515; $grey-2: #252525; $grey-3: #353535;
$grey-4: #454545; $grey-5: #555555; $grey-6: #656565;
$card-width: 366px; $card-height: 290px;

.main-cards {
  margin-top: 22px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .text {
    z-index: 1;
    bottom: 14px;
    position: absolute;
    margin: 0 auto;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%);
    font-size: 14px;
    color: white;
    font-weight: 200;
    letter-spacing: 2px;
    opacity: 0;
    max-height:0;
    transition: all 0.3s ease;
  }
  
  
  &__card:hover .text {
    transition: all 0.3s ease;
    opacity: 1;
    max-height:40px;
  }

  &__card {
    position: relative;
    width: $card-width;
    height: $card-height;
    margin-bottom: 10px;
    border-radius: 10px;
    transition: 0.3s;
  }

  &__card::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: .7;
    border-radius: 10px;
  }

  &__favourite {
    cursor: pointer;
    color: white;
    position: absolute;
    top: 10px;
    right: 20px;
    z-index: 1;
    transition: 0.3s;
  }

  &__favourite:active {
    color: $grey-4;
    font-size: 20px;
  }

  &__title {
    position: absolute;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%);
    bottom: 40px;
    font-weight: 350;
    font-size: 24px;
    line-height: 32px;
    max-width: 250px;
    z-index: 1;
  }

  &__rating {
    font-size: 20px;
    font-weight: 300;
    right: 20px;
    bottom: 32px;
    position: absolute;
    border: 1px solid #00FF19;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 2px 8px 5px 8px;
    z-index: 1;
  }

  &__rating i {
    color: white;
  }
}

@media screen and (max-width: 1366px) {

  .main-cards {
    margin-top: 22px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  
    .text {
      z-index: 1;
      bottom: 14px;
      position: absolute;
      margin: 0 auto;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%);
      font-size: 14px;
      color: white;
      font-weight: 200;
      letter-spacing: 2px;
      opacity: 0;
      max-height:0;
      transition: all 0.3s ease;
    }
    
    
    &__card:hover .text {
      transition: all 0.3s ease;
      opacity: 1;
      max-height: 40px;
    }
  
    &__card {
      position: relative;
      width: $card-width / 1.1;
      height: $card-height / 1.1;
      margin-bottom: 10px;
      border-radius: 10px;
      transition: 0.3s;
    }
  
    &__card::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100%;
      opacity: .7;
      border-radius: 10px;
    }
  
    &__favourite {
      cursor: pointer;
      color: white;
      position: absolute;
      top: 10px;
      right: 20px;
      z-index: 1;
      transition: 0.3s;
    }
  
    &__favourite:active {
      color: $grey-4;
      font-size: 20px;
    }
  
    &__title {
      position: absolute;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%);
      bottom: 40px;
      font-weight: 350;
      font-size: 24px / 1.1;
      line-height: 32px;
      max-width: 250px / 1.1;
      z-index: 1;
    }
  
    &__rating {
      font-size: 20px / 1.1;
      font-weight: 300;
      right: 20px;
      bottom: 32px / 1.1;
      position: absolute;
      border: 1px solid #00FF19;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 2px 8px 5px 8px;
      z-index: 1;
    }
  
    &__rating i {
      color: white;
    }
  }
}
</style>