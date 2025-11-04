<script setup>

</script>

<template>

  <v-app-bar elevate-on-scroll style="background-color: rgb(242, 223, 223); ">
    <v-app-bar-title >Safari Guide</v-app-bar-title>

    <v-spacer></v-spacer>
    <v-btn  variant="plain" color="black"to="/">Home</v-btn>
    <v-btn  variant="plain" color="black"to="/destinations">Destinations</v-btn>
    <v-btn  variant="plain" color="black"to="/hotels">Hotels</v-btn>
    <v-btn  variant="plain" color="black"to="/tourcompanies">Tour Companies</v-btn>
    <v-btn  variant="plain" color="black"to="/travelblog">Travel Blog</v-btn>
    <v-btn  variant="plain" color="black"to="/conservation">conservation</v-btn>
    <v-btn  variant="plain" color="black"to="/faqs">FAQs</v-btn>
    <v-btn  variant="plain" color="black"to="/login">Log In</v-btn>
    <v-avatar to="/userprofile" v-if="isLoggedIn">
      <span>J</span>
    </v-avatar>
  </v-app-bar>


</template>
<style scoped>

</style>