<script setup>
import { divIcon } from 'leaflet';
import { ref } from 'vue'
</script>

<template>
 <div class="main-page">
     <v-container fluid class="aimee">
      <v-row>
        <v-col class="container">
          <v-img src="public/Hotels/hemmingways/Hemingways-hotel-exterior.jpg" height="60vh" cover class="image">
            <v-card-title class="heading">Tour Kenya:The heart of Africa</v-card-title>
            <v-card-text style="font-size: 1.5em; 
          text-align: center;
           color: aliceblue;">welcome to kenya...Hakuna matata!.</v-card-text>
            <!-- 🔍 Search Bar -->

            <v-text-field v-model="searchQuery" placeholder="Search..." hide-details solo flat rounded clearable
              prepend-inner-icon="mdi-magnify" class="search" />

          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.main-page{
    background-color :rgb(31, 117, 183);
    height: 100%;
}
.container{
    height: 50vh;
    padding: 0%;
}
.image{
    height:60vh;
  width: 100%;
  padding: 0%;
}


.aimee {
  padding: 0%;

}
.search {
  width: 50%;
  max-width: 100%;
  background-color: rgb(254, 254, 254);
  justify-self: center;

  opacity: var(170%);
  border-radius: 60px;
  height: 4.5em;
  white-space: initial;

}
</style>