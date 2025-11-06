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

    <!-- the Filter Bar -->
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

    <!--  Hotels Grid -->
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

<script>
export default {
  name: "HotelItems",
  data() {
    return {
      regions: ["Nairobi", "Coast", "Rift Valley", "Central", "Western","Northern"],
      priceRanges: ["< KSh 10,000", "10K - 20K", "20K - 40K", "40K+"],
      ratings: ["2 Stars","3 Stars", "4 Stars", "5 Stars"],
      hotels: [
        {
          id: 1,
          name: "Hemingways ",
          location: "Karen, Nairobi, Kenya",
          price: "65,000 / night",
          rating: 4.9 ,
          image: "public/Hotels/hemmingways/Hemingways-hotel-exterior.jpg"
        },
        {
          id: 2,
          name: "Diani Reef Resort",
          location: "Diani Beach (Ukunda), Kwale County, Kenya",
          price: "Ksh 14,500 / night",
          rating: 4.8,
          image: "public/Hotels/coverimages/dianibeefresort.png"
        },
        {
          id: 3,
          name: "Sarova Mara Camp",
          location: "Maasai Mara",
          price: "Ksh 49,300 / night.",
          rating: 4.9,
          image: "public/Hotels/coverimages/sarova mara camp.png"
        },
        {
          id: 4,
          name:"Palacina The Residence & The Suites",
          location: "Nairobi",
          price:"Ksh 27,000 / night",
          rating:4.9,
          image:"public/Hotels/coverimages/palacina.png"
        },
        {
          id:5 ,
          name:"Fairmont The Norfolk",
          location: "Harry Thuku Road, Nairobi, Kenya",
          price:"Ksh 37,000 / night",
          rating: 4.6,
          image:"public/Hotels/coverimages/Fairmont The Norfolk.png"
        },
        {
          id:6 ,
          name:"The Majlis Lamu",
          location: "Ras Kitau Bay, Manda Island, Lamu, Kenya",
          price:"Ksh 43,000",
          rating:4.5,
          image:"public/Hotels/coverimages/The Majlis Resort.png"
        },
        {
          id:7,
          name:"Mahali Mzuri",
          location:"Masai Mara, Narok County, Kenya",
           price:"KSh 95,000 / night",
          rating:4.9,
         image:"public/Hotels/coverimages/MAHALI MZURI.png"
        },
        {
         id:8,
  name:"Mara Plains Camp",
  location:"Masai Mara, Narok County, Kenya",
  price:"≈ KSh 120,000 / night",
  rating:4.9,
  image:"public/Hotels/coverimages/mara plain camp.png"
},
{
  id:9,
  name:"Elsa's Kopje Lodge",
  location:"Meru National Park, Meru County, Kenya",
  price:"≈ KSh 85,000  night",
  rating:4.8,
  image:"public/Hotels/coverimages/elsa kiploges camp.png"
},
{
  id:12,
  name:"Villa Rosa Kempinski",
  location:"Nairobi, Kenya",
  price:"≈ KSh 70,000 / night",
  rating:4.7,
  image:"public/Hotels/coverimages/kempinski.png"
},

{
  id:14,
  name:"Sarova Stanley",
  location:"Nairobi, Kenya",
  price:"≈ KSh 50,000 / night",
  rating:4.5,
  image:"public/Hotels/coverimages/sarova stanley.png"
},
{
  id:15,
  name:"Fairmont Mara Safari Club",
  location:"Masai Mara, Narok County, Kenya",
  price:"≈ KSh 120,000 / night",
  rating:4.7,
  image:"public/Hotels/coverimages/Fairmont Mara Safari Club.png"
},
{
  id:16,
  name:"Fairmont Mount Kenya Safari Club",
  location:"Mount Kenya region, Kenya",
  price:"≈ KSh 75,000 / night",
  rating:4.7,
  image:"public/Hotels/coverimages/Fairmont Mount Kenya Safari Club.png"
},
{
  id:17,
  name:"Ol Pejeta Bush Camp",
  location:"Ol Pejeta Conservancy, Laikipia County, Kenya",
  price:"≈ KSh 60,000 / night",
  rating:4.8,
  image:"public/Hotels/coverimages/Ol Pejeta Bush Camp.png"
},
{
  id:18,
  name:"Ol Pejeta Safari Cottages",
  location:"Ol Pejeta Conservancy, Laikipia County, Kenya",
  price:"≈ KSh 65,000 / night",
  rating:4.8,
  image:"public/Hotels/coverimages/Ol Pejeta Safari Cottages.png"
},
{
  id:19,
  name:"Diani Reef Beach Resort & Spa",
  location:"Diani Beach, Kwale County, Kenya",
  price:"≈ KSh 47,200 / night",
  rating:4.5,
  image:"public/Hotels/coverimages/Diani Reef Beach Resort & Spa.png"
},
{
  id:21,
  name:"Best Western Plus Meridian Hotel",
  location:"Nairobi, Kenya",
  price:"≈ KSh 12,000–20,000 per night",
  rating:4.4,
  image:"public/Hotels/coverimages/Best Western Plus Meridian Hotel.png"
},
{
  id:22,
  name:"Ibis Styles Nairobi Westlands",
  location:"Westlands, Nairobi, Kenya",
  price:"≈ KSh 9,000–15,000 per night",
  rating:4.2,
  image:"public/Hotels/coverimages/Ibis Styles Nairobi Westlands.png"
},
{
  id:23,
  name:"Ole Sereni Hotel",
  location:"Nairobi, Kenya",
  price:"≈ KSh 18,000–30,000 per night",
  rating:4.3,
  image:"public/Hotels/coverimages/Ole Sereni Hotel.png"
},
{
  id:24,
  name:"Sarova Panafric Hotel",
  location:"Nairobi, Kenya",
  price:"≈ KSh 15,000–25,000 per night",
  rating:4.1,
  image:"public/Hotels/coverimages/Sarova Panafric Hotel.png"
},
{
  id:25,
  name:"Radisson Blu Hotel Nairobi Upper Hill",
  location:"Upper Hill, Nairobi, Kenya",
  price:"≈ KSh 20,000–35,000 per night",
  rating:4.3,
  image:"public/Hotels/coverimages/Radisson Blu Hotel Nairobi Upper Hill.png"
},
{
  id:26,
  name:"Holiday Inn Nairobi Two Rivers Mall",
  location:"Nairobi, Kenya",
  price:"≈ KSh 14,000–22,000 per night",
  rating:4.0,
  image:"public/Hotels/coverimages/Holiday Inn Nairobi Two Rivers Mall.png"
},
{
  id:27,
  name:"Park Inn by Radisson Nairobi Westlands",
  location:"Westlands, Nairobi, Kenya",
  price:"≈ KSh 16,000–28,000 per night",
  rating:4.0,
  image:"public/Hotels/coverimages/Park Inn by Radisson Nairobi Westlands.png"
},
{
  id:28,
  name:"Four Points by Sheraton Nairobi Hurlingham",
  location:"Hurlingham, Nairobi, Kenya",
  price:"≈ KSh 18,000–30,000 per night",
  rating:4.1,
  image:"public/Hotels/coverimages/Four Points by Sheraton Nairobi Hurlingham.png"
},
{
  id:29,
  name:"Eka Hotel Nairobi",
  location:"Nairobi, Kenya",
  price:"≈ KSh 12,000–20,000 per night",
  rating:4.2,
  image:"public/Hotels/coverimages/eka hotel.png"
},
{
  id:30,
  name:"Crowne Plaza Nairobi Airport",
  location:"Nairobi, Kenya",
  price:"≈ KSh 25,000–40,000 per night",
  rating:4.3,
  image:"public/Hotels/coverimages/Crowne Plaza Nairobi Airport.png"
},
{
  id:31,
  name:"Sarova Stanley Hotel",
  location:"Nairobi, Kenya",
  price:"≈ KSh 18,000–30,000 per night",
  rating:4.2,
  image:"public/Hotels/coverimages/Sarova Stanley Hotel.png"
},
{
  id:32,
  name:"JW Marriott Hotel Nairobi",
  location:"Westlands, Nairobi, Kenya",
  price:"≈ KSh 28,000–45,000 per night",
  rating:4.5,
  image:"public/Hotels/coverimages/JW Marriott Hotel Nairobi.png"
},
{
  id:33,
  name:"Tribe Hotel",
  location:"Gigiri, Nairobi, Kenya",
  price:"≈ KSh 25,000–40,000 per night",
  rating:4.4,
  image:"public/Hotels/coverimages/Tribe Hotel.png"
},
{
  id:34,
  name:"Giraffe Manor",
  location:"Karen, Nairobi, Kenya",
  price:"≈ KSh 70,000–100,000 per night",
  rating:4.8,
  image:"public/Hotels/coverimages/giraffe manor.png"
},
{
  id:35,
  name:"Serena Hotel Nairobi",
  location:"Nairobi, Kenya",
  price:"≈ KSh 35,000–60,000 per night",
  rating:4.5,
  image:"public/Hotels/coverimages/Serena Hotel Nairobi.png"
},
{
  id:36,
  name:"Hilton Garden Inn Nairobi",
  location:"Nairobi, Kenya",
  price:"≈ KSh 18,000–32,000 per night",
  rating:4.2,
  image:"public/Hotels/coverimages/Hilton Garden Inn Nairobi.png"
},
{
  id:37,
  name:"Safari Park Hotel",
  location:"Nairobi, Kenya",
  price:"≈ KSh 20,000–35,000 per night",
  rating:4.1,
  image:"public/Hotels/coverimages/Safari Park Hotel.png"
},
{
  id:39,
  name:"The Boma Nairobi Hotel",
  location:"Nairobi, Kenya",
  price:"≈ KSh 16,000–28,000 per night",
  rating:4.0,
  image:"public/Hotels/coverimages/The Boma Nairobi Hotel.png"
},
{
  id:40,
  name:"Southern Sun Mayfair Nairobi",
  location:"Nairobi, Kenya",
  price:"≈ KSh 18,000–30,000 per night",
  rating:4.1,
  image:"public/Hotels/coverimages/Southern Sun Mayfair Nairobi.png"
},
{
  id:41,
  name:"PrideInn Paradise Hotel & Conference Centre",
  location:"Mombasa, Kenya",
  price:"≈ KSh 12,000–20,000 per night",
  rating:4.0,
  image:"public/Hotels/coverimages/PrideInn Paradise Hotel & Conference Centre.png"
},
{
  id:42,
  name:"Sarova Whitesands Beach Resort & Spa",
  location:"Mombasa, Kenya",
  price:"≈ KSh 25,000–40,000 per night",
  rating:4.3,
  image:"public/Hotels/coverimages/sarova white sands.png"
},
{
  id:43,
  name:"Voyager Beach Resort",
  location:"Mombasa, Kenya",
  price:"≈ KSh 22,000–35,000 per night",
  rating:4.1,
  image:"public/Hotels/coverimages/voyage beach resort.png"
},
{
  id:44,
  name:"Bahari Beach Hotel",
  location:"Mombasa, Kenya",
  price:"≈ KSh 12,000–22,000 per night",
  rating:4.0,
  image:"public/Hotels/coverimages/bahari beach hotel.png"
},
{
  id:45,
  name:"Sarova Shaba Game Lodge",
  location:"Samburu, Kenya",
  price:"≈ KSh 35,000–55,000 per night",
  rating:4.3,
  image:"public/Hotels/coverimages/Sarova Shaba Game Lodge.png"
},
{
  id:47,
  name:"Khweza Bed & Breakfast",
  location:"Nairobi, Kenya",
  price:"≈ KSh 2,000–4,000 per night",
  rating:2.9,
  image:"public/Hotels/coverimages/Khweza Bed & Breakfast.png"
},
{
  id:48,
  name:"Olive Gardens Hotel",
  location:"Mombasa, Kenya",
  price:"≈ KSh 3,000–5,000 per night",
  rating:2.9,
  image:"public/Hotels/coverimages/olive gardens.png"
},
{
  id:52,
  name:"New Swanga Guest House",
  location:"Naivasha, Kenya",
  price:"≈ KSh 1,800–3,500 per night",
  rating:2.9,
  image:"public/Hotels/coverimages/New Swanga Guest House.png"
},
{
  id:57,
  name:"YWCA Parkview Suites",
  location:"Watamu, Kenya",
  price:"≈ KSh 2,500–4,500 per night",
  rating:2.9,
  image:"public/Hotels/coverimages/YWCA parkview suites.png"
},
{
  id:58,
  name:"Sentrim Boulevard Hotel",
  location:"Nakuru, Kenya",
  price:"≈ KSh 3,000–5,000 per night",
  rating:2.9,
  image:"public/Hotels/coverimages/Sentrim Boulevard Hotel.png"
},
{
  id:61,
  name:"Royal Court Hotel",
  location:"Malindi, Kenya",
  price:"≈ KSh 2,500–4,500 per night",
  rating:2.9,
  image:"public/Hotels/coverimages/Royal Court hotel.png"
},
{
  id:64,
  name:"African Heritage Hotel",
  location:"Naivasha, Kenya",
  price:"≈ KSh 2,500–4,500 per night",
  rating:2.8,
  image:"public/Hotels/coverimages/African Heritage Hotel.png"
},
{
  id:65,
  name:"Tamarind Hotel",
  location:"Mombasa, Kenya",
  price:"≈ KSh 3,000–5,000 per night",
  rating:2.9,
  image:"public/Hotels/coverimages/tamarind.png"
},
{
  id:66,
  name:"Queens Hotel",
  location:"Mombasa, Kenya",
  price:"≈ KSh 2,500–4,000 per night",
  rating:2.9,
  image:"public/Hotels/coverimages/Queens hotel.png"
},
{
  id:68,
  name:"Lantana Suites",
  location:"Nairobi, Kenya",
  price:"≈ KSh 2,000–3,500 per night",
  rating:2.9,
  image:"public/Hotels/coverimages/Lantana Suites.png"
},
{
  id:69,
  name:"Mombasa Continental Hotel",
  location:"Mombasa, Kenya",
  price:"≈ KSh 3,000–4,500 per night",
  rating:2.9,
  image:"public/Hotels/coverimages/Mombasa Continental Hotel.png"
}



        
      ]
    };
  },
  methods: {
    viewHotel(id) {
      this.$router.push(`/hotels/${id}`);
    }
  }
};
</script>


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