<script>
import { Hotels } from "../router/HotelDetails.js";

export default {
  name: "Hotels",
  data() {
    return {
      hotels: Hotels
    };
  },
  methods: {
    viewHotel(id) {
      this.$router.push({ name: "HotelItems", params: { id } });
    }
  }
};


</script>


  
  <template>
  <v-container fluid class="hotels-page pa-0">
    <div class="hero-section d-flex align-center justify-center">
      <div class="overlay"></div>
      <div class="text-center hero-content">
        <h1 class="text-h3 font-weight-bold white--text mb-2">
          Explore Eco-Friendly Hotels in Kenya
                      <!-- trial Search Bar not sure -->

            <v-text-field 
            v-model="searchQuery" 
            placeholder="Search...,location ,Name eg.Hemingways" 
            hide-details solo flat rounded clearable
            prepend-inner-icon="mdi-magnify" 
            class="search" />
        </h1>
        <p class="white--text text-subtitle-1">
          Discover the best lodges, resorts, and camps that care for nature 🌿
        </p>
      </div>
    </div>

     the Filter Bar 
    <v-container class="mt-6">
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-card class="pa-4 elevation-2">
            <v-row>
              <v-col cols="12" md="4">
                <v-select label="Region" :items="regions" outlined dense></v-select>
              </v-col>
              <v-col cols="12" md="4">
                <v-select label="Price Range" :items="priceRanges" outlined dense></v-select>
              </v-col>
              <v-col cols="12" md="4">
                <v-select label="Rating" :items="ratings" outlined dense></v-select>
              </v-col>
            </v-row>
            <v-btn color="primary" class="mt-3" block>Search</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

      Hotels Grid 
    <v-container class="mt-10">
      <v-row>
        <v-col
          v-for="hotel in hotels"
          :key="hotel.id"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card class="hotel-card" elevation="3">
            <v-img :src="hotel.image" height="200px"></v-img>
            <v-card-title class="font-weight-bold">
              {{ hotel.name }}
            </v-card-title>
            <v-card-subtitle class="grey--text">
              {{ hotel.location }}
            </v-card-subtitle>
            <v-card-text>
              <p>💰 {{ hotel.price }}</p>
              <p>⭐ {{ hotel.rating }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="primary"
                text
                @click="viewHotel(hotel.id)"
                variant="elevated"
              >
                View Details
              </v-btn>
               <v-btn
                color="primary"
                text
                to="/bookings"
                variant="elevated"
              >
                Book Now
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style scoped>
.hero-section {
  position: relative;
  background-image: url("public/Hotels/hotelspagemain.png");
  background-size: cover;
  background-position: center;
  height: 60vh;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(20, 143, 236, 0.5); 
}
.hero-content {
  position: relative;
  z-index: 2;
}

.hotel-card {
  border-radius: 12px;
  transition: 0.3s;
}
.hotel-card:hover {
  transform: translateY(-5px);
}

.v-btn.primary {
  background-color: rgb(20, 143, 236) !important;
  color: white !important;
}
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
  width: 100%;
  padding: 0%;
}


.aimee {
  padding: 0%;

}
.search {
  width: 75%;
  max-width: 100%;
  background-color: rgb(254, 254, 254);
  justify-self: center;
  overlay: auto;
  opacity: var(170%);
  border-radius: 60px;
  height: 4.5em;
  white-space: initial;

}
</style>

