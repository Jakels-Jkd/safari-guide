<script setup>
</script>

<template>
  
  <div class="home" >
   
    <v-container fluid>
       <h1 class="home-title" style="color:azure;">Welcome to Safari-Guide</h1> 
      <v-row>
        <v-col cols="12" md="5">
          <v-card class="card-content" style="color: black;">
            <v-img src="public/homeimage.png"></v-img>
            <v-card-text style="font-size: 2vh;">
            Discover the heart of Kenyan tourism with SafariGuide — your trusted companion for exploring breathtaking destinations, luxury hotels, and authentic tour experiences. Whether you're planning a serene getaway, a wildlife adventure, or a cultural exploration, SafariGuide connects you to the best travel options with ease.
            From scenic national parks and coastal escapes to trusted tour companies and eco-friendly lodges, our platform helps travelers and explorers experience Kenya’s beauty responsibly. Plan your journey, find hidden gems, and embrace the spirit of adventure — all in one place.
            Start your next adventure today with SafariGuide — where travel meets purpose. &#127757;&#127775;
            <div class="text-center mt-10">
              <v-btn 
                size="x-large" 
                color="#8B4513" 
                dark 
                rounded 
                class="mx-4 px-10 text-h6 font-weight-bold"
                to="/destinations"
              >
                Explore Destinations
              </v-btn>
              <v-btn 
                size="x-large" 
                variant="outlined" 
                color="white" 
                class="mx-4 px-10 text-h6"
                to="/hotels"
              >
                Find Your Stay
              </v-btn>
            </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
  
</template>

<style scoped>
.home {
  background-image: url('/public/Lion attacks_ How to.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  align-items: flex-start; 
  justify-content: flex-start; 
  padding: 10px; 
  background-color: palegreen;
}
.card-content {
  background-color: rgba(219, 219, 219, 0.85);
  padding: 0px;
  border-radius: 12px;
  font-size: 170%;
}
.home-title{
  text-decoration: underline black;
  font-style: bold;
}


</style>