<script setup>
import { ref } from 'vue'
</script>


<template>
  <div class="page">
    <div class="nema">
      <h2 class="title">The Lakes and Westlands</h2>
    </div>

    <v-container class="py-10 px-6">
      <h1 
        class="display-2 text-center font-weight-bold" 
        style="text-decoration: underline;"
      >
        Explore Lakes & Westlands
      </h1>
    </v-container>

    <v-container class="py-10 px-6">
      <v-row class="d-flex align-center">

        <!-- ------------------------------------ -->
        <!-- 🌊 LAKES SECTION -->
        <!-- ------------------------------------ -->

        <v-col cols="12" md="6">
          <v-carousel
            height="500"
            show-arrows
            class="rounded-lg elevation-2"
            hide-delimiter-background
            cycle interval="3000" pause-on-hover
          >
            <v-carousel-item src='public/destinations/lakes/lake-naivasha.jpg'/>
            <v-carousel-item src='public/destinations/lakes/lake-nakuru.jpg'/>
            <v-carousel-item src='public/destinations/lakes/lake-victoria.jpg'/>
          </v-carousel>
        </v-col>

        <v-col cols="12" md="6">
          <h3 class="card-subtitles">Lakes of Kenya</h3>
          <p class="tribe-description">
            Add your lakes description here.
          </p>
        </v-col>

        <v-divider color="black" thickness="2" class="my-8" />


        <!-- ------------------------------------ -->
        <!-- 🏙️ WESTLANDS SECTION -->
        <!-- ------------------------------------ -->

        <v-col cols="12" md="6">
          <h3 class="card-subtitles">Westlands – Nairobi’s Urban Gem</h3>
          <p class="tribe-description">
            Add your Westlands description here.
          </p>
        </v-col>

        <v-col cols="12" md="6">
          <v-img src='public/destinations/westlands/westlands-city.jpg'/>
        </v-col>

        <v-divider color="black" thickness="2" class="my-8" />


        <!-- ------------------------------------ -->
        <!-- OPTIONALLY ADD MORE LAKES OR TOWNS -->
        <!-- ------------------------------------ -->

        <v-col cols="12" md="6">
          <v-img src='public/destinations/lakes/lake-turkana.jpg'/>
        </v-col>

        <v-col cols="12" md="6">
          <h3 class="card-subtitles">Lake Turkana</h3>
          <p class="tribe-description">
            Add lake description here.
          </p>
        </v-col>

        <v-divider color="black" thickness="2" class="my-8" />


        <v-col cols="12" md="6">
          <h3 class="card-subtitles">Westlands Nightlife</h3>
          <p class="tribe-description">
            Add nightlife description here.
          </p>
        </v-col>

        <v-col cols="12" md="6">
          <v-carousel
            height="500"
            show-arrows
            class="rounded-lg elevation-2"
            hide-delimiter-background
            cycle interval="3000" pause-on-hover
          >
            <v-carousel-item src='public/destinations/westlands/night-1.jpg'/>
            <v-carousel-item src='public/destinations/westlands/night-2.jpg'/>
            <v-carousel-item src='public/destinations/westlands/night-3.jpg'/>
          </v-carousel>
        </v-col>

      </v-row>

      <br/>

      <!-- ----------------------------------------------------------- -->
      <!-- QUOTE -->
      <!-- ----------------------------------------------------------- -->

      <p 
        style="
          font-style: italic;
          font-size: 2em;
          line-height: 3em;
          text-decoration: underline;
        "
      >
        "Every journey leads to discovery — from tranquil lakes to the city that never sleeps."
      </p>

      <br/>

      <!-- ----------------------------------------------------------- -->
      <!-- CALL TO ACTION -->
      <!-- ----------------------------------------------------------- -->

      <h2 class="title"
          style="color: black;text-decoration: underline;text-align: left;">
        Experience Kenya
      </h2>

      <p class="text" style=" font-size: 1.2rem">
        Explore Kenya’s natural beauty and vibrant city life. Book hotels, plan safaris,
        and discover everything this country has to offer.
      </p>

      <p style="text-align: center; font-size: 1.2rem;">
        <router-link to="/hotels">Click here!</router-link> to book your stay and start your adventure.
      </p>

      <br/><br/>

      <p style="font-size: 2em;text-align: center;">
        Karibu Kenya — We Love You All!
      </p>

    </v-container>
  </div>

  <!-- ----------------------------------------------------------- -->
  <!-- FOOTER -->
  <!-- ----------------------------------------------------------- -->

  <div class="footer">
    <p>© 2025 SafariGuide</p>
    <div class="contact">
      <h3>For Assistance Contact Us On :</h3>
      <p> +254 113268956 | +254 723075680</p>
      <p> safariguide@gmail.com</p>
    </div>
    <p>Your next great adventure begins here.</p>
    <p class="highlight">Karibu Kenya.</p>
  </div>
</template>

<style scoped>
.text{
  font-size: 1.65em;
}
.page {
  background-color: #f5f5dc;
  min-height: 100vh;
}

.nema {
  position: relative;
  background-image: url("/destinations/cultures/degleex-ganzorig-0kIbj3yEvOM-unsplash.jpg");
  background-size: cover;
  background-position: center;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nema::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.title {
  position: relative;
  z-index: 2;
  color: azure;
  font-weight: bolder;
  text-align: center;
}

.card-subtitles {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}

.tribe-description {
  font-size: 1.2rem;
  line-height: 1.8;
  padding: 1%;
}
.footer {
  background: linear-gradient(135deg, #e6f4ea, #d0f0d9);
  color: #1b5e20;
  width: 100%;
  border-top: 2px solid #1b5e20;
  text-align: center;
  padding: 2rem 1rem;
  font-family: sans-serif;
}

.footer p {
  margin: 0.3rem 0;
}

.footer .highlight {
  font-size: 1.5em;
  font-weight: bold;
}

.footer .contact p {
  margin: 0.2rem 0;
  font-size: 1rem;
  font-weight: 500;
}


</style>

<!-- <v-col  cols="12" md="6" >
        
          <h2 style="text-align: center;text-decoration: underline;">1. Lions - The Kings of the Savannah</h2>
         
          <p style="font-size: 1.3em;">
            Lions, often called the “kings of the savannah,” are iconic symbols of strength, courage, and majesty. These
            magnificent big cats are known for their social nature, living in groups called prides that showcase complex
            family bonds and teamwork. Male lions, with their majestic manes, patrol and protect the territory, while
            lionesses are skilled hunters, working together to provide for the pride.
            Lions play a crucial role in maintaining the balance of their ecosystem, regulating prey populations and
            ensuring the health of the grasslands. Observing a lion in the wild is an awe-inspiring experience — from
            their powerful roar echoing across the plains to their graceful yet powerful movements while hunting or
            resting under the shade of acacia trees.
            Conservation efforts are vital to protect these iconic creatures, as their numbers face threats from habitat
            loss, human-wildlife conflict, and poaching. By visiting responsible wildlife reserves and supporting
            eco-tourism, travelers can contribute to the survival of lions and experience the thrill of seeing these
            magnificent predators in their natural habitat.  </p>
        </v-col>
        <v-col cols="12" md="6" class="d-flex">
        <v-carousel cycle interval="2000" pause-on-hover>
            <v-carousel-item
              src="public/destinations/wildlifesafaris/lions/ramon-vloon-_t99u7ktTnU-unsplash.jpg"></v-carousel-item>
            <v-carousel-item
              src="public/destinations/wildlifesafaris/lions/michael-starkie-7nRiGv33d2g-unsplash.jpg"></v-carousel-item>
            <v-carousel-item
              src="public/destinations/wildlifesafaris/lions/jeff-lemond-bwr9XpsYK98-unsplash.jpg"></v-carousel-item>
          </v-carousel> 
            </v-col><v-spacer></v-spacer>
            <v-col cols="12" md="6" class="d-flex">
              <h1></h1>
            </v-col>-->