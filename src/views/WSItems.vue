<script setup>
import { ref } from 'vue'
</script>

<template>
      <div class="page">
   <v-container variant="outlined">
  <v-row align="center" justify="center" class="my-8">
    <v-col style="background-color: blanchedalmond;">
         
            
    <!-- Text on the RIGHT -->
    <v-col >
      <h2 class="text-h5 font-weight-bold text-center mb-3">
        1. Lions - The Kings of the Savannah
      </h2>
      <v-card-text style="font-size: 1.2em; text-align: justify;">
        Lions, often called the “kings of the savannah,” are iconic symbols of strength,
        courage, and majesty. These magnificent big cats are known for their social nature,
        living in groups called prides that showcase complex family bonds and teamwork.
        Male lions, with their majestic manes, patrol and protect the territory, while
        lionesses are skilled hunters, working together to provide for the pride.
        <br /><br />
        Lions play a crucial role in maintaining the balance of their ecosystem, regulating
        prey populations and ensuring the health of the grasslands. Observing a lion in the
        wild is an awe-inspiring experience — from their powerful roar echoing across the
        plains to their graceful yet powerful movements while hunting or resting under the
        shade of acacia trees.
        <br /><br />
        Conservation efforts are vital to protect these iconic creatures, as their numbers
        face threats from habitat loss, human-wildlife conflict, and poaching. By visiting
        responsible wildlife reserves and supporting eco-tourism, travelers can contribute
        to the survival of lions and experience the thrill of seeing these magnificent
        predators in their natural habitat.
      </v-card-text>
    </v-col>
    <!-- Image on the LEFT -->
    <v-col>
      <v-carousel cycle interval="2000" pause-on-hover height="400">
        <v-carousel-item
          src="public/destinations/wildlifesafaris/lions/ramon-vloon-_t99u7ktTnU-unsplash.jpg"
        ></v-carousel-item>
        <v-carousel-item
          src="public/destinations/wildlifesafaris/lions/michael-starkie-7nRiGv33d2g-unsplash.jpg"
        ></v-carousel-item>
        <v-carousel-item
          src="public/destinations/wildlifesafaris/lions/jeff-lemond-bwr9XpsYK98-unsplash.jpg"
        ></v-carousel-item>
      </v-carousel>
    </v-col>

    
    
    </v-col>

  </v-row>
</v-container>
  </div>
</template>
