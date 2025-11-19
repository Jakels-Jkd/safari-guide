
<script setup>
import { ref } from 'vue'
 

</script>

<template>
  <div></div>
  <div  class="page">
<v-container>
  <v-row>
    <v-col cols="12" md="6">
      <v-img src="public/Lion attacks_ How to.png"/>
    </v-col>
    <v-col cols="12" md="6">
        <h2 class="text-h5 font-weight-bold text-center mb-3">
        1. Lions - The Kings of the Savannah
      </h2>
      <p style="font-size: 1.2em; text-align: justify;">
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
      </p>
    </v-col>
    <div class="divider"></div>
  </v-row>
</v-container>
</div>
</template>
<style scoped>
.image-card {
  transition: 0.3s;
  /* smooth animation for hover */
}

.image-card:hover {
  transform: scale(1.03);
  /* slightly enlarges the card when hovered */
  z-index: 1;
  /* keeps the hovered card on top */
}

.page {
  background-color: biege;
  background-size: cover;
  height: 100%;
}

.imag {
  width: 100%;
  padding: 0%;
}

.cards {
  width: 50vh;
  height: 100%;
  padding: 0%;
  justify-self: flex-start;

}
.divider {
  width: 100%;
  height: 2px;
  background-color: black;
  margin: 40px 0;
}
.jam{
  float: right;
  width: 1050px;
  height: 550px;
  margin-top: 50px;
  border-radius: 8px;
  object-fit: fill;

}
.jake{
  float: left;
  width: 1050px;
  height: 550px;
  margin-top: 50px;
  border-radius: 8px;
  object-fit: fill;

}

</style>