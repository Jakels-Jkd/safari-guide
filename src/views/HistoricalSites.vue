<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Sample data for cultures
const cultures = ref([
  {
    id: 1,
    name: "Maasai Traditions",
    shortDescription: "Explore the Maasai's rich customs, attire, and ceremonies.",
    image: "/destinations/cultures/maasai.jpg"
  },
  {
    id: 2,
    name: "Kikuyu Heritage",
    shortDescription: "Discover Kikuyu music, dances, and traditional rituals.",
    image: "/destinations/cultures/kikuyu.jpg"
  },
  {
    id: 3,
    name: "Swahili Coast Culture",
    shortDescription: "Experience the coastal Swahili culture, food, and architecture.",
    image: "/destinations/cultures/swahili.jpg"
  },
  // Add more cultures here...
]);

const viewCulture = (id) => {
  router.push(`/cultures/${id}`); // route to culture details page
};
</script>

<template>
  <!-- Hero Section -->
  <div class="hero-section d-flex align-center justify-center">
    <div class="overlay"></div>
    <h1 class="title">The Kenyan Cultures</h1>
  </div>

  <v-container class="mt-8">
    <v-row>
      <v-col
        v-for="culture in cultures"
        :key="culture.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card class="culture-card">
          <v-img :src="culture.image" height="200px"></v-img>
          <v-card-title class="font-weight-bold">{{ culture.name }}</v-card-title>
          <v-card-text>{{ culture.shortDescription }}</v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="viewCulture(culture.id)">
              Learn More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
/* Hero Section */
.hero-section {
  position: relative;
  background-image: url("/destinations/cultures/degleex-ganzorig-0kIbj3yEvOM-unsplash.jpg");
  background-size: cover;
  background-position: center;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(20, 143, 236, 0.5);
  z-index: 1;
}
.title {
  position: relative;
  z-index: 2;
  color: white;
  font-size: 3em;
  font-weight: bolder;
  text-align: center;
}

/* Culture Cards */
.culture-card {
  transition: 0.3s;
  border-radius: 12px;
}
.culture-card:hover {
  transform: translateY(-5px);
}
.v-btn.primary {
  background-color: rgb(20, 143, 236) !important;
  color: white !important;
}
</style>
