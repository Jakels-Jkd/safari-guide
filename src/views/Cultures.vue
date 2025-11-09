<script setup>
import { ref } from 'vue'

</script>

<template>
  <div class="page">
    <div class="nema">
      <h2 class="title">The Kenyan Cultures.</h2>
    </div>

    <v-container class="py-10 px-6">
      <h1 class="display-2 text-center font-weight-bold" style="text-decoration: underline;">
        Discover the Rich Cultures of Kenya
      </h1>
    </v-container>

    <v-container class="py-10 px-6">
      <v-row class="d-flex align-center">
        <v-col cols="12" md="6">
          <v-carousel
            height="500"
            show-arrows
            hide-delimiter-background
            cycle interval="2000" pause-on-hover
          >
            <v-carousel-item src='public/destinations/cultures/the maasai 2.png'/>
             <v-carousel-item src='destinations/cultures/degleex-ganzorig-0kIbj3yEvOM-unsplash.jpg'/>
              <v-carousel-item src='public/destinations/cultures/modern maasai.png'/>
               <v-carousel-item src='/destinations/cultures/the maasai.png'/>
          </v-carousel>
        </v-col>

        <v-col cols="12" md="6">
          <h3 class="card-subtitles">1. The Maasai</h3>
          <p class="tribe-description">
            The Maasai are one of Kenya’s most iconic communities, known for their vibrant red shukas, intricate beadwork, and spectacular jumping dances.
            Traditionally semi-nomadic, they primarily inhabit southern Kenya and northern Tanzania, relying on cattle herding as their main livelihood.
            Maasai culture places a strong emphasis on community, age-set ceremonies, and oral traditions, which celebrate important life events such as birth, initiation, marriage, and elderhood.
            Despite modernization, the Maasai have preserved much of their traditions, making them a living symbol of Kenya’s rich cultural heritage.<br/>
            Enjoy both old and modernized traditions.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.page {
  background-color: #F5F1E6;
  min-height: 100vh;
}

.nema {
  position: relative;
  background-image: url("/destinations/cultures/degleex-ganzorig-0kIbj3yEvOM-unsplash.jpg");
  background-size: cover;
  background-position: center;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nema::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.title {
  position: relative;
  z-index: 2;
  color: azure;
  font-size: 3em;
  font-weight: bolder;
  text-align: center;
}

.card-subtitles {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}

.tribe-description {
  font-size: 1.2rem;
  line-height: 1.8;
  padding: 1rem;
}
</style>