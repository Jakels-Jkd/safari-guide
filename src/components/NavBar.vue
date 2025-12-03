<script setup>
import { ref } from 'vue'

const user = ref("")

const initials = user.value
  .split(' ')
  .map(name => name[0])
  .join('')
  .toUpperCase()
  .slice(0, 2)
</script>

<template>
  <v-app-bar elevate-on-scroll color="#f2dfdf" height="64">
      
    <div class="logo-title">
      <v-img
        src="public/icon/tourism.png"
        width="40"
        height="40"
        class="logo-img"
        cover
      />
      <span class="app-title">| Safari Guide</span>
    </div>
    <v-spacer />

    
    <div class="hidden-sm-and-down"> 
      <v-btn variant="plain" color="black" to="/">Home</v-btn>
      <v-btn variant="plain" color="black" to="/destinations">Destinations</v-btn>
      <v-btn variant="plain" color="black" to="/hotels">Hotels</v-btn>
      <v-btn variant="plain" color="black" to="/tourcompanies">Tour Companies</v-btn>
      <v-btn variant="plain" color="black" to="/travelblog">Travel Blog</v-btn>
      <v-btn variant="plain" color="black" to="/contactus">Contact us</v-btn>
      <v-btn variant="plain" color="black" to="/faqs">FAQs</v-btn>
    </div>

    <v-btn variant="plain" color="black" to="/login" class="mx-2">Log In</v-btn>

    <v-avatar color="primary" size="40" class="ml-3">
      <span class="white--text text-h6">{{ initials }}</span>
    </v-avatar>

    <v-app-bar-nav-icon class="hidden-md-and-up" />
  </v-app-bar>
</template>

<style scoped>
.logo-title {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 8px;
}

.logo-img {
  border-radius: 8px;
}

.app-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: 0.5px;
}

.v-btn_before {
  background-color: transparent;
}
.v-btn_hover-before {
  opacity: 0.08;
}
</style>