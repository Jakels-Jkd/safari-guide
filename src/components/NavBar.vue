<script setup>
const isLoggedIn = true
</script>

<template>
  <v-app-bar elevate-on-scroll style="background-color: rgb(242, 223, 223);">
    
    <div class="logo-title">
      <v-img
        src="public/icon/tourism.png"
        width="40"
        height="40"
        class="logo-img"
        cover
      />
      <span class="app-title">Safari Guide</span>
    </div>

    <v-spacer></v-spacer>

    <v-btn variant="plain" color="black" to="/">Home</v-btn>
    <v-btn variant="plain" color="black" to="/destinations">Destinations</v-btn>
    <v-btn variant="plain" color="black" to="/hotels">Hotels</v-btn>
    <v-btn variant="plain" color="black" to="/tourcompanies">Tour Companies</v-btn>
    <v-btn variant="plain" color="black" to="/travelblog">Travel Blog</v-btn>
    <v-btn variant="plain" color="black" to="/conservation">Conservation</v-btn>
    <v-btn variant="plain" color="black" to="/faqs">FAQs</v-btn>
    <v-btn variant="plain" color="black" to="/login">Log In</v-btn>

    <v-avatar to="/userprofile" v-if="isLoggedIn">
      <span>J</span>
    </v-avatar>
  </v-app-bar>
</template>

<style scoped>
.logo-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 16px; 
}

.logo-img {
  min-width: 40px;
  min-height: 40px;
}

.app-title {
  font-size: 20px;
  font-weight: bold;
  color: black;
}
</style>