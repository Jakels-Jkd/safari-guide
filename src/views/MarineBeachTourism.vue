<template>
  <v-container fluid class="pa-0 bg-blue-50 min-h-screen">
    <section class="relative w-full h-[85vh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Beach"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/70 to-black/20 flex flex-col justify-center items-center text-center px-4"
      >
        <h1 class="text-white text-5xl md:text-7xl font-bold drop-shadow-lg">
          Explore Kenya's Marine & Beach Wonders
        </h1>
        <p class="text-white text-lg md:text-2xl mt-4 max-w-3xl drop-shadow-md">
          From turquoise waters and vibrant coral reefs to serene beaches and cultural coastal towns, Kenya's marine destinations are perfect for adventure, relaxation, and unforgettable memories.
        </p>
        <v-btn color="cyan lighten-4" class="mt-6 px-8 py-4 rounded-xl text-lg font-semibold">
          Discover More
        </v-btn>
      </div>
    </section>

    <!-- Highlights Section -->
    <section class="py-20 px-6 md:px-16 bg-blue-100">
      <h2 class="text-4xl font-bold text-center mb-12 text-blue-900">
        Top Destinations
      </h2>
      <p class="text-center text-blue-700 mb-16 max-w-3xl mx-auto">
        Our curated selection of Kenya's most breathtaking marine and beach spots, featuring idyllic sands, rich marine life, and cultural experiences.
      </p>
      <v-row dense>
        <v-col cols="12" md="4" v-for="dest in destinations" :key="dest.title">
          <v-card class="rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
            <v-img :src="dest.image" height="220px" />
            <v-card-title class="text-xl font-semibold text-blue-900">{{ dest.title }}</v-card-title>
            <v-card-text>{{ dest.caption }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <!-- Activities Section -->
    <section class="py-20 px-6 md:px-16">
      <h2 class="text-4xl font-bold text-center text-blue-900 mb-12">
        Activities & Adventures
      </h2>
      <p class="text-center text-blue-700 mb-16 max-w-3xl mx-auto">
        Dive into thrilling water sports, cultural tours, and wildlife encounters. There's something for every explorer.
      </p>
      <v-row dense>
        <v-col cols="12" md="3" v-for="activity in activities" :key="activity.title">
          <v-card class="p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition">
            <v-icon size="48" color="blue-darken-2">{{ activity.icon }}</v-icon>
            <h3 class="text-xl font-semibold mt-4 text-blue-900">{{ activity.title }}</h3>
            <p class="mt-2 text-blue-700">{{ activity.description }}</p>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <!-- Marine Life Section -->
    <section class="py-20 px-6 md:px-16 bg-blue-50">
      <h2 class="text-4xl font-bold text-center text-blue-900 mb-12">
        Rich Marine Life
      </h2>
      <p class="text-center text-blue-700 mb-16 max-w-3xl mx-auto">
        Kenya's waters are home to colorful coral reefs, dolphins, sea turtles, and a variety of fish species. Experience snorkeling and diving like never before.
      </p>
      <v-row dense>
        <v-col cols="12" md="4" v-for="life in marineLife" :key="life.name">
          <v-card class="rounded-2xl shadow-lg hover:shadow-2xl transition">
            <v-img :src="life.image" height="200px" />
            <v-card-title class="text-lg font-semibold text-blue-900">{{ life.name }}</v-card-title>
            <v-card-text>{{ life.caption }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <!-- Contact Section -->
    <section class="py-20 px-6 md:px-16 bg-white">
      <h2 class="text-4xl font-bold text-center text-blue-900 mb-6">
        Connect With Us
      </h2>
      <p class="text-center text-blue-700 max-w-2xl mx-auto mb-10">
        Promote your beach resorts, tour packages, or marine services. Let us help you reach thousands of tourism enthusiasts.
      </p>
      <div class="max-w-xl mx-auto">
        <v-text-field label="Your Name" variant="outlined" class="mb-4" />
        <v-text-field label="Email" variant="outlined" class="mb-4" />
        <v-textarea label="Message" variant="outlined" rows="5" class="mb-4" />
        <v-btn color="blue-darken-2" class="w-full py-4 rounded-xl text-lg" elevation="4">
          Send Message
        </v-btn>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-blue-900 text-white text-center py-6 text-lg">
      © 2025 Marine & Beach Tourism – Experience, Explore, Enjoy
    </footer>
  </v-container>
</template>

<script>
export default {
  name: "MarineBeachTourism",
  data() {
    return {
      destinations: [
        {
          title: "Diani Beach",
          image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
          caption: "White sands, crystal-clear waters, and vibrant beach resorts perfect for relaxation and adventure."
        },
        {
          title: "Watamu Marine Park",
          image: "https://images.unsplash.com/photo-1526481280695-3c720685208b",
          caption: "Explore coral gardens, sea turtles, and some of the clearest waters on the East African coast."
        },
        {
          title: "Lamu Archipelago",
          image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
          caption: "A cultural and marine paradise with dhow rides, historical charm, and serene beaches."
        }
      ],
      activities: [
        {
          icon: "mdi-snorkel",
          title: "Snorkeling",
          description: "Experience vibrant coral reefs and marine life up close."
        },
        {
          icon: "mdi-fish",
          title: "Dolphin Watching",
          description: "Watch playful dolphins glide through turquoise waters."
        },
        {
          icon: "mdi-sail-boat",
          title: "Dhow Sailing",
          description: "Enjoy traditional dhow rides at sunset along the coastline."
        },
        {
          icon: "mdi-surfing",
          title: "Water Sports",
          description: "Surfing, jet skiing, kitesurfing — adventure for thrill seekers."
        }
      ],
      marineLife: [
        {
          name: "Coral Reefs",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
          caption: "Dive into vibrant underwater ecosystems full of life."
        },
        {
          name: "Sea Turtles",
          image: "https://images.unsplash.com/photo-1542486070-0cc4f1a1e3c3",
          caption: "Encounter these gentle creatures in their natural habitat."
        },
        {
          name: "Tropical Fish",
          image: "https://images.unsplash.com/photo-1502920917128-1aa500764b2c",
          caption: "Colorful and diverse fish species that will take your breath away."
        }
      ]
    };
  }
};
</script>

<style scoped>
.bg-blue-50 {
  background-color: #e0f7ff;
}
</style>