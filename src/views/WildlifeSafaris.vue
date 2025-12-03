<template>
  <div class="wildlife-page">

    <!-- HERO -->
    <div class="hero">
      <v-parallax src="https://images.unsplash.com/photo-1516026672721-7b2d8f8c7b8e?w=2400" height="100vh">
        <div class="overlay"></div>
        <div class="content text-center text-white">
          <h1 class="title">Kenya Wildlife & Safaris</h1>
          <p class="subtitle">Home of the Big Five & Great Migration</p>
          <v-btn size="x-large" color="amber darken-3" dark class="mt-8 rounded-pill" to="/hotels">
            Book Your Safari
          </v-btn>
        </div>
      </v-parallax>
    </div>

    <!-- 1. WILDLIFE SECTION -->
    <v-container class="py-16">
      <h2 class="text-center text-h3 font-weight-bold mb-12 text-amber-900">
        Meet Kenya’s Legendary Wildlife
      </h2>

      <!-- Big Five -->
      <v-row class="mb-12">
        <v-col v-for="a in bigFive" :key="a.name" cols="6" sm="4" md="3" lg="2">
          <v-card class="text-center pa-4 rounded-xl" elevation="8">
            <v-img :src="a.img" height="180" cover class="rounded-xl mb-3" />
            <h3 class="text-h6 font-weight-bold">{{ a.name }}</h3>
            <p class="text-caption grey--text text--darken-2">{{ a.swahili }}</p>
          </v-card>
        </v-col>
      </v-row>

      <!-- Big Cats -->
      <h3 class="text-center text-h4 mb-6 text-brown-800">Big Cats</h3>
      <v-row class="mb-12">
        <v-col v-for="c in bigCats" :key="c.name" cols="12" md="4">
          <v-card class="rounded-xl overflow-hidden" elevation="12">
            <v-img :src="c.img" height="300" cover />
            <div class="pa-4 text-center">
              <h4 class="text-h5 font-weight-bold">{{ c.name }}</h4>
              <p class="text-body-2">{{ c.tagline }}</p>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Flora & Birds -->
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="pa-8 text-center" color="green lighten-5" rounded="xl">
            <v-icon size="70" color="green darken-4" class="mb-4">mdi-bird</v-icon>
            <h3 class="text-h5 mb-4">Iconic Birds</h3>
            <v-chip v-for="b in birds" :key="b" class="ma-1" color="green darken-3" dark small>
              {{ b }}
            </v-chip>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="pa-8 text-center" color="amber lighten-5" rounded="xl">
            <v-icon size="70" color="amber darken-4" class="mb-4">mdi-tree</v-icon>
            <h3 class="text-h5 mb-4">Ancient Trees</h3>
            <v-chip v-for="t in flora" :key="t" class="ma-1" color="amber darken-3" dark small>
              {{ t }}
            </v-chip>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- 2. SAFARIS SECTION -->
    <div class="safaris-bg py-16">
      <v-container>
        <h2 class="text-center text-h3 font-weight-bold mb-12 text-white">
          Top Safari Destinations
        </h2>

        <!-- Great Migration Highlight -->
        <v-card class="mb-12 rounded-3xl overflow-hidden" elevation="20">
          <v-img src="https://images.unsplash.com/photo-1535930891776-0c2a42a418f9?w=2400" height="500" cover>
            <div class="text-center text-white pa-10">
              <h3 class="text-h2 font-weight-black">The Great Migration</h3>
              <p class="text-h4">2 Million Wildebeest • One Epic Journey</p>
              <v-btn size="x-large" color="white" class="mt-6 text-black rounded-pill">
                Witness It Live
              </v-btn>
            </div>
          </v-img>
        </v-card>

        <!-- Safari Parks Grid -->
        <v-row>
          <v-col v-for="(p, i) in safariParks" :key="i" cols="12" md="6" lg="4">
            <v-card class="h-100 rounded-xl" elevation="12">
              <v-img :src="p.img" height="250" cover />
              <v-card-title class="text-h6 font-weight-bold">{{ p.name }}</v-card-title>
              <v-card-text>{{ p.desc }}</v-card-text>
              <v-card-actions>
                <v-chip small color="amber darken-3" dark>{{ p.bestFor }}</v-chip>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- FINAL CTA -->
    <div class="text-center py-16 bg-amber-50">
      <h2 class="text-h3 font-weight-black text-amber-900 mb-6">
        Ready for Your Safari Adventure?
      </h2>
      <v-btn size="x-large" color="amber darken-4" dark class="rounded-pill px-12" to="hotels">
        Start Planning Now
      </v-btn>
      <p class="mt-8 text-h4 font-italic text-amber-800">Karibu Kenya</p>
    </div>
  </div>
</template>

<script setup>
const bigFive = [
  { name: 'Lion', swahili: 'Simba', img: 'public/wildlife/lion.jpg' },
  { name: 'Leopard', swahili: 'Chui', img: 'public/wildlife/leopard.jpg' },
  { name: 'Elephant', swahili: 'Tembo', img: 'public/wildlife/elephant.jpg' },
  { name: 'Buffalo', swahili: 'Nyati', img: 'public/wildlife/buffalo.jpg' },
  { name: 'Rhino', swahili: 'Kifaru', img: 'public/wildlife/rhino.jpg' },
]

const bigCats = [
  { name: 'Cheetah', tagline: 'Fastest land animal', img: 'public/wildlife/cheetah.jpg' },
  { name: 'Serval', tagline: 'Graceful hunter', img: 'public/wildlife/serval.jpg' },
  { name: 'Caracal', tagline: 'Desert lynx', img: 'public/wildlife/caracal.jpg' },
]

const birds = ['Lilac-breasted Roller', 'Secretary Bird', 'Ostrich', 'Crowned Crane']
const flora = ['Acacia', 'Baobab', 'Sausage Tree', 'Fever Tree']

const safariParks = [
  { name: 'Maasai Mara', desc: 'Great Migration & Big Cats', bestFor: 'Best Overall', img: 'public/parks/mara.jpg' },
  { name: 'Amboseli', desc: 'Elephants & Mt. Kilimanjaro', bestFor: 'Views', img: 'public/parks/amboseli.jpg' },
  { name: 'Tsavo', desc: 'Red elephants & vast wilderness', bestFor: 'Adventure', img: 'public/parks/tsavo.jpg' },
  { name: 'Samburu', desc: 'Rare species & desert beauty', bestFor: 'Unique', img: 'public/parks/samburu.jpg' },
]
</script>

<style scoped>
.wildlife-page {
  background: #fffaf0;
  font-family: 'Georgia', serif;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent 40%, rgba(0,0,0,0.8));
}

.content {
  position: relative;
  z-index: 2;
  padding-top: 20vh;
}

.title {
  font-size: 6rem;
  font-weight: 900;
  text-shadow: 4px 4px 20px black;
}

.subtitle {
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 4px;
}

.safaris-bg {
  background: linear-gradient(135deg, #1b5e20, #2e7d32);
  color: white;
}

h2, h3 { color: #8B4513; }
</style>