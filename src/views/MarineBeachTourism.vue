<!-- src/views/HomeView.vue or pages/MarineBeach.vue -->
<script setup>
import { ref, onMounted } from 'vue'

const fadeElements = ref([])

const features = [
  { icon: 'mdi-waves', title: 'Pristine Beaches', desc: 'Untouched white sands and turquoise waters' },
  { icon: 'mdi-diving-scuba', title: 'World-Class Diving', desc: 'Coral reefs, shipwrecks & marine life' },
  { icon: 'mdi-leaf', title: 'Eco-Friendly', desc: 'Sustainable tourism that protects oceans' },
  { icon: 'mdi-shield-sun', title: 'Safe & Guided', desc: 'Expert local guides & safety first' }
]

const destinations = [
  {
    name: 'Maldives Atolls',
    tagline: 'Overwater villas & manta rays',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop',
    rating: 4.9,
    reviews: 1240
  },
  {
    name: 'Zanzibar Coast',
    tagline: 'Spice islands & dolphin tours',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&h=600&fit=crop',
    rating: 4.8,
    reviews: 892
  },
  {
    name: 'Great Barrier Reef',
    tagline: 'The world’s largest coral ecosystem',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop',
    rating: 5.0,
    reviews: 2103
  }
]

onMounted(() => {
  const elements = document.querySelectorAll('.animate-on-scroll')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated')
      }
    })
  }, { threshold: 0.1 })

  elements.forEach(el => observer.observe(el))
})
</script>

<template>
  <!-- HERO SECTION -->
  <div class="hero-section">
    <v-parallax
      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2400&h=1600&fit=crop"
      height="100vh"
    >
      <div class="hero-overlay"></div>
      
      <v-container class="fill-height d-flex align-center justify-center text-center">
        <div class="hero-content pa-4">
          <h1 class="text-h3 text-md-h2 text-lg-h1 font-weight-bold text-white mb-4 mb-md-6">
            Discover the Ocean's Soul
          </h1>
          <p class="text-h6 text-md-h5 text-white mb-8 max-w-3xl mx-auto opacity-90">
            Pristine beaches • Crystal lagoons • Underwater wonders • Sustainable marine adventures
          </p>
          
          <div class="d-flex flex-column flex-sm-row gap-4 justify-center">
            <v-btn
              size="x-large"
              color="#00bcd4"
              class="rounded-xl px-8"
              to="/destinations"
            >
              Explore Destinations
            </v-btn>
            <v-btn
              size="x-large"
              color="white"
              variant="outlined"
              class="rounded-xl px-8"
              to="/tours"
            >
              Book Your Dive
            </v-btn>
          </div>
        </div>
      </v-container>

      <!-- Animated Waves -->
      <div class="wave wave1"></div>
      <div class="wave wave2"></div>
      <div class="wave wave3"></div>
    </v-parallax>
  </div>

  <!-- FEATURES -->
  <v-container class="py-16">
    <v-row class="animate-on-scroll">
      <v-col v-for="feature in features" :key="feature.title" cols="12" sm="6" md="3">
        <v-card
          class="text-center pa-8 h-100 rounded-xl feature-card"
          elevation="12"
          color="blue-grey-lighten-5"
        >
          <v-icon :icon="feature.icon" size="64" color="#00bcd4" class="mb-4"></v-icon>
          <h3 class="text-h5 font-weight-bold mb-3">{{ feature.title }}</h3>
          <p class="text-body-1">{{ feature.desc }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- DESTINATIONS -->
  <div class="destinations-section py-16">
    <v-container>
      <div class="text-center mb-12">
        <h2 class="text-h3 font-weight-bold text-white mb-4">Paradise Awaits</h2>
        <p class="text-h6 text-white opacity-90">Handpicked marine destinations</p>
      </div>

      <v-row>
        <v-col v-for="(dest, i) in destinations" :key="i" cols="12" md="4">
          <v-card class="destination-card rounded-xl overflow-hidden h-100" elevation="16">
            <v-img
              :src="dest.image"
              height="320"
              cover
              class="destination-img"
            >
              <div class="gradient-overlay"></div>
              <div class="pa-6 text-white">
                <h3 class="text-h4 font-weight-bold">{{ dest.name }}</h3>
                <p class="text-h6 opacity-90">{{ dest.tagline }}</p>
              </div>
            </v-img>

            <v-card-text class="pt-6">
              <div class="d-flex align-center mb-4">
                <v-rating
                  :model-value="dest.rating"
                  color="yellow-darken-3"
                  density="compact"
                  size="small"
                  readonly
                />
                <span class="ml-2 text-caption opacity-70">{{ dest.rating }} ({{ dest.reviews }})</span>
              </div>
              <v-btn block color="#00bcd4" size="large" class="rounded-lg">
                Explore {{ dest.name.split(' ')[0] }}
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <!-- CTA -->
  <div class="cta-section py-16 text-center">
    <v-container>
      <h2 class="text-h3 font-weight-bold text-white mb-6">
        Ready to Dive Into Paradise?
      </h2>
      <p class="text-h5 text-white mb-10 max-w-3xl mx-auto opacity-90">
        Join thousands of ocean lovers on their perfect marine adventure.
      </p>
      <v-btn
        size="x-large"
        color="white"
        class="px-12 rounded-xl"
        to="/register"
      >
        Start Your Journey
      </v-btn>
    </v-container>
  </div>
</template>

<style scoped>
.hero-section {
  position: relative;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,188,212,0.4));
  z-index: 1;
}
.hero-content { position: relative; z-index: 2; }

/* Animated Waves */
.wave {
  position: absolute;
  bottom: 0;
  width: 200%;
  height: 180px;
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V60C300,20 900,100 1200,60V0Z" fill="%23ffffff33"/></svg>') repeat-x;
  animation: wave 15s linear infinite;
}
.wave1 { animation-duration: 15s; opacity: 0.5; }
.wave2 { animation-duration: 20s; opacity: 0.3; bottom: 20px; }
.wave3 { animation-duration: 25s; opacity: 0.2; bottom: 40px; }
@keyframes wave {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* Background Sections */
.destinations-section {
  background: linear-gradient(135deg, #006064 0%, #00bcd4 100%);
}
.cta-section {
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), 
              url('https://images.unsplash.com/photo-1519046902490-7e04cd90ad25?w=2400') center/cover;
}

/* Card Effects */
.feature-card, .destination-card {
  transition: all 0.4s ease;
}
.feature-card:hover, .destination-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.25) !important;
}
.destination-img {
  transition: transform 0.6s ease;
}
.destination-card:hover .destination-img {
  transform: scale(1.1);
}
.gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent 40%, rgba(0,0,0,0.9));
}

/* Animation */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(60px);
  transition: all 0.8s ease;
}
.animate-on-scroll.animated {
  opacity: 1;
  transform: translateY(0);
}
</style>