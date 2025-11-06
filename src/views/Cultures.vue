<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="nema">
    <div class="overlay"></div>
    <h1 class="title">The Kenyan Cultures.</h1>
  </div>

  <v-container>
    <v-row>
    </v-row>
  </v-container>
</template>

<style scoped>
.nema {
  position: relative;
  background-image: url("/destinations/cultures/degleex-ganzorig-0kIbj3yEvOM-unsplash.jpg");
  background-size: cover;
  background-position: center;
  height: 60vh;
}


.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(20, 143, 236, 0.5);
  z-index: 1;
}


.title {
  position: relative;
  z-index: 2; 
  text-align: center;
  color: black;
  font-size: 3em;
  font-weight: bolder;
  line-height: 3.0em;
}
</style>
