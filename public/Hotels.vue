<script setup>
import { divIcon } from 'leaflet';
import { ref } from 'vue'
</script>

<template>
 <div class="main-page">
    <v-container class="container">
       <v-row>
        <v-col cols="12" md="8">
            <v-img src="public/Hotels/hemmingways/Hemingways-hotel-exterior.jpg"></v-img>
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
}

</style>