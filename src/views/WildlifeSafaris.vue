
<template>
wraetyuoi

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
  background-color: #d2d2d2;
  background-size: cover;
  height: 100%;
  padding: 0;
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
<script setup>
import { ref } from 'vue'
 

</script>
