<script setup>
import { ref, onMounted } from 'vue'

const features = [
  { icon: 'mdi-binoculars', title: 'Big Five Safaris', desc: 'Lion • Leopard • Elephant • Rhino • Buffalo' },
  { icon: 'mdi-earth', title: 'Great Migration', desc: '1.8 million wildebeest crossing the Mara' },
  { icon: 'mdi-camera', title: 'World-Class Photography', desc: 'Once-in-a-lifetime wildlife moments' },
  { icon: 'mdi-account-group', title: 'Private & Small Group', desc: 'No crowds. Just you and the wild' }
]

const parks = [
  {
    name: 'Maasai Mara',
    tagline: 'The Greatest Wildlife Show on Earth',
    image: 'public/safari/mara-sunset.jpg',
    rating: 5.0,
    reviews: 3421,
    highlight: 'Great Migration • Big Cats • Balloon Safaris'
  },
  {
    name: 'Amboseli',
    tagline: 'Kilimanjaro’s Elephant Kingdom',
    image: 'public/safari/amboseli-elephants.jpg',
    rating: 4.9,
    reviews: 1892,
    highlight: 'Super Tuskers • Snow-Capped Backdrop'
  },
  {
    name: 'Tsavo',
    tagline: 'Red Dust & Ancient Wilderness',
    image: 'public/safari/tsavo-red.jpg',
    rating: 4.8,
    reviews: 1567,
    highlight: 'Man-Eaters • Vast Untouched Land'
  }
]


</script>

<template>
  <!-- HERO -->
  <div class="hero-section" style="background-color: palegreen; height: 60vh;">
    <v-parallax src="public/safari/hero-mara-lions.jpg" height="100vh">
      <div class="hero-overlay"></div>
      
      <v-container class="fill-height d-flex align-center justify-center text-center">
        <div class="hero-content pa-6">
          <h1 class="text-h3 text-md-h2 text-lg-h1 font-weight-black text-white mb-6">
            This Is Not A Safari
          </h1>
          <h2 class="text-h4 text-md-h3 text-lg-h2 font-weight-light text-amber-100 mb-10">
            This Is Kenya Claiming Your Soul
          </h2>
          
          <p class="text-h6 text-md-h5 text-white mb-12 max-w-4xl mx-auto opacity-90 leading-loose">
            Sunrise game drives • Leopards in golden light • A million hooves thundering • Nights so quiet you hear lions breathe
          </p>
          
          <div class="d-flex flex-column flex-sm-row gap-6 justify-center">
            <v-btn size="x-large" color="#8B4513" class="rounded-xl px-14 text-h6 font-weight-bold">
              <v-icon left size="36">mdi-compass-rose</v-icon>
              Design My Safari
            </v-btn>
            <v-btn size="x-large" color="white" variant="outlined" class="rounded-xl px-12 border-2"
                   href="https://wa.me/254722000000?text=I need the real Kenya safari experience. Call me."
                   target="_blank">
              <v-icon left color="white">mdi-whatsapp</v-icon>
              Speak to Expert
            </v-btn>
          </div>
        </div>
      </v-container>

      <!-- Animated Grass -->
      <div class="grass grass1"></div>
      <div class="grass grass2"></div>
      <div class="grass grass3"></div>
    </v-parallax>
  </div>

  <!-- FEATURES -->
  <v-container class="py-20">
    <div class="text-center mb-16 animate-on-scroll">
      <h2 class="text-h3 font-weight-black mb-4" style="color:#5D2F0A;">
        Why Safari With Us?
      </h2>
      <p class="text-h6 opacity-80">We don’t do tours. We deliver life-changing encounters.</p>
    </div>

    <v-row class="animate-on-scroll">
      <v-col v-for="f in features" :key="f.title" cols="12" sm="6" md="3">
        <v-card class="text-center pa-10 h-100 rounded-2xl feature-card" elevation="16" color="#FAF3E0">
          <div class="icon-circle mb-6">
            <v-icon :icon="f.icon" size="80" color="#8B4513"></v-icon>
          </div>
          <h3 class="text-h5 font-weight-bold mb-4" style="color:#5D2F0A;">{{ f.title }}</h3>
          <p class="text-body-1 opacity-85 leading-relaxed">{{ f.desc }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- PARKS GRID -->
  <div class="destinations-section py-20">
    <v-container>
      <div class="text-center mb-16">
        <h2 class="text-h3 font-weight-black text-white mb-4">Legendary Wildlife Kingdoms</h2>
        <p class="text-h5 text-amber-100 opacity-90">Where Africa still rules</p>
      </div>

      <v-row class="g-10">
        <v-col v-for="(p, i) in parks" :key="i" cols="12" md="4">
          <v-card class="destination-card rounded-2xl overflow-hidden h-100" elevation="20">
            <v-img :src="p.image" height="400" cover class="destination-img">
              <div class="gradient-overlay"></div>
              <div class="pa-8 text-white">
                <h3 class="text-h4 font-weight-black">{{ p.name }}</h3>
                <p class="text-h6 opacity-90 mt-2">{{ p.tagline }}</p>
              </div>
              <v-chip class="absolute top-4 right-4" color="rgba(255,255,255,0.95)" size="large">
                <v-icon left color="#5D2F0A">mdi-star</v-icon>
                {{ p.rating }} ({{ p.reviews }})
              </v-chip>
            </v-img>

            <v-card-text class="pt-8 pb-6 bg-grey-lighten-4">
              <p class="text-body-1 font-italic opacity-80 mb-6">{{ p.highlight }}</p>
              <v-btn block color="#8B4513" size="x-large" class="rounded-xl text-white">
                Explore {{ p.name }}
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <!-- FINAL CTA -->
  <div class="cta-section py-24 text-center">
    <v-container>
      <h2 class="text-h3 font-weight-black text-white mb-8">
        The Wild Doesn’t Wait.<br>
        <span class="text-amber-100" style="font-size:6rem;">Neither Should You.</span>
      </h2>
      <p class="text-h5 text-amber-100 mb-12 max-w-4xl mx-auto opacity-90 leading-loose">
        One sunrise in the Mara rewrites who you are.<br>
        One lion’s roar at 3 a.m. reminds you you’re alive.
      </p>
      
      <div class="d-flex flex-column flex-sm-row gap-8 justify-center">
        <v-btn size="x-large" color="#5D2F0A" class="px-20 py-10 text-h5 font-weight-black rounded-xl"
               href="https://wa.me/254722000000?text=I’m ready for the authentic Kenyan safari. Let’s make it happen."
               target="_blank">
          <v-icon left size="56">mdi-whatsapp</v-icon>
          I’M READY NOW
        </v-btn>
        <v-btn size="x-large" color="transparent" variant="outlined" class="px-16 py-10 text-h5 rounded-xl border-4"
               style="border-color:#D4AF37; color:#D4AF37;" to="/contact">
          Get Custom Quote
        </v-btn>
      </div>

      <p class="mt-20 text-4xl font-light text-amber-200 opacity-80 tracking-widest">
        Karibu Nyumbani • Welcome Home
      </p>
    </v-container>
  </div>
</template>

<style scoped>
/* New luxury color palette */
:root {
  --primary: #8B4513;      /* Rich saddle brown */
  --accent: #D4AF37;       /* Real gold */
  --deep: #5D2F0A;         /* Dark earth */
  --light-bg: #FAF3E0;     /* Warm ivory */
  --text-dark: #3E1F0B;
}

/* HERO */
.hero-overlay {
  background: linear-gradient(135deg, rgba(93,47,10,0.7), rgba(139,69,19,0.5));
}

/* Animated grass – more realistic */
.grass {
  position: absolute;
  bottom: 0;
  width: 200%;
  height: 220px;
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V90C300,130 900,50 1200,90V0Z" fill="%238B735522"/></svg>') repeat-x;
  animation: grass 22s linear infinite;
}

/* Icon circle – luxury */
.icon-circle {
  width: 150px; height: 150px;
  background: linear-gradient(135deg, #D4AF37, #B8860B);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto;
  box-shadow: 0 15px 40px rgba(139,69,19,0.4);
}

.destinations-section {
  background: linear-gradient(135deg, #5D2F0A 0%, #8B4513 50%, #A0522D 100%);
}
.cta-section {
  background: linear-gradient(rgba(0,0,0,0.88), rgba(0,0,0,0.92)),
              url('public/safari/cta-lion-night.jpg') center/cover fixed;
}

.feature-card { background: var(--light-bg) !important; }
.feature-card:hover, .destination-card:hover {
  transform: translateY(-20px);
  box-shadow: 0 40px 80px rgba(139,69,19,0.35) !important;
}
.destination-img { transition: transform 10s ease; }
.destination-card:hover .destination-img { transform: scale(1.18); }
.gradient-overlay {
  background: linear-gradient(transparent 20%, rgba(93,47,10,0.95));
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(80px);
  transition: all 1.2s ease;
}
.animate-on-scroll.animated {
  opacity: 1;
  transform: translateY(0);
}
</style>