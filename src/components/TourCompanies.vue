<script setup>
import { ref } from 'vue'
</script>

<template>
<div >
    <h1 style="text-align: center; text-decoration: underline;">Tour Companies</h1>
 <div class="d-flex justify-end" style="padding: 2vh;">
  <v-btn to="/bookings">My Bookings</v-btn>
</div>
<v-container>
<v-row>
  <v-col>
    <v-card class="card" >
      <v-table>
        
      </v-table>
    </v-card>
  </v-col>
</v-row>
</v-container>
</div>
</template>

<style scoped>
.page{
  background-position: center;
  height: 100vh;
  width: auto;
  padding: 2%;

}
.card{
  height: 100vh;
  background-color:  rgb(251, 239, 190);
}
</style>
