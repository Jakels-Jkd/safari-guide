<!-- src/views/WaterSportsInSagana.vue — DESIGN 2: PURE ADRENALINE -->
<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="water-page">

    <!-- HERO – ELECTRIC BLUE ENERGY -->
    <div class="hero">
      <div class="hero-video-bg"></div>
      <div class="hero-overlay"></div>
      
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="line">KENYA</span>
          <span class="line">DOESN’T JUST</span>
          <span class="line big">FLOW</span>
        </h1>
        <p class="hero-subtitle">It Rages • It Roars • It Rips</p>
        <v-btn 
          size="x-large" 
          class="mt-8 pulse-btn rounded-xl"
          color="#00e5ff"
          dark
          href="https://wa.me/254722000000?text=I need the wildest water adventure in Kenya NOW"
          target="_blank"
        >
          <v-icon left>mdi-lightning-bolt</v-icon>
          HIT ME WITH THE RAPIDS
        </v-btn>
      </div>
    </div>

    <v-container class="py-16">

      <!-- SECTION TITLE -->
      <h1 class="text-center display-3 font-weight-black mb-16 neon-text">
?true:false>
        <span class="glow">WATER IS OUR PLAYGROUND</span>
      </h1>

      <!-- 1. Tana River Grade 5 Rapids -->
      <v-row align="center" class="my-20 activity">
        <v-col cols="12" lg="6">
          <v-img 
            src="public/watersports/tana-rapids.jpg" 
            height="600" 
            cover 
            class="rounded-3xl shadow-2xl hover:scale-105 transition"
          />
        </v-col>
        <v-col cols="12" lg="6" class="pl-lg-16">
          <h2 class="activity-title">TANA RIVER<br><span class="grade">GRADE 5 INSANITY</span></h2>
          <p class="activity-text">
            The wildest whitewater in East Africa. <br>
            7km of non-stop Grade 4–5 rapids. Names like “Oblivion”, “Meat Grinder”, “Washing Machine”. <br>
            One wrong move and you swim with crocs. <br>
            <strong>Only 300 people raft this beast every year.</strong> Be one of them.
          </p>
          <v-chip class="mt-4" color="#ff1744" size="large" label>
            <v-icon start>mdi-fire</v-icon> EXTREME
          </v-chip>
        </v-col>
      </v-row>

      <!-- 2. Sagana – The Capital of Kenyan Rafting -->
      <v-row align="center" class="my-20 activity reverse">
        <v-col cols="12" lg="6" order-lg="2">
          <v-carousel height="600" hide-delimiters class="rounded-3xl shadow-2xl">
            <v-carousel-item src="public/watersports/sagana1.jpg" cover />
            <v-carousel-item src="public/watersports/sagana2.jpg" cover />
            <v-carousel-item src="public/watersports/sagana3.jpg" cover />
          </v-carousel>
        </v-col>
        <v-col cols="12" lg="6" order-lg="1" class="pr-lg-16">
          <h2 class="activity-title">SAGANA<br><span class="grade">EAST AFRICA'S RAFTING CAPITAL</span></h2>
          <p class="activity-text">
            Grade 3–4 rapids perfect for first-timers and pros. <br>
            Kayak schools, bungee jumping over the river, riverside camping with bass-thumping parties. <br>
            Local raft guides who grew up swimming these waters — they know every rock by name.
          </p>
          <v-chip class="mt-4" color="#00e5ff" size="large" label>
            <v-icon start>mdi-party-popper</v-icon> WEEKEND VIBES
          </v-chip>
        </v-col>
      </v-row>

      <!-- 3. Indian Ocean Water Sports -->
      <v-row align="center" class="my-20 activity">
        <v-col cols="12" lg="6">
          <v-img src="public/watersports/diani-kite.jpg" height="600" cover class="rounded-3xl shadow-2xl" />
        </v-col>
        <v-col cols="12" lg="6" class="pl-lg-16">
          <h2 class="activity-title">INDIAN OCEAN<br><span class="grade">KITE • SURF • JETSKI</span></h2>
          <p class="activity-text">
            Diani Beach = Kenya’s kiteboarding mecca. <br>
            Watamu = deep-sea fishing legends. <br>
            Malindi = wreck diving with whale sharks. <br>
            30°C water, 20-knot winds, coconut in hand. <br>
            This isn’t the ocean. This is freedom on steroids.
          </p>
          <v-chip class="mt-4" color="#ff9100" size="large" label>
            <v-icon start>mdi-waves</v-icon> COASTAL CHAOS
          </v-chip>
        </v-col>
      </v-row>

      <!-- FINAL CALL TO CHAOS -->
      <div class="final-cta text-center py-20">
        <h1 class="mb-8 display-2 font-weight-black neon-text">
          STOP SCROLLING.<br>
          <span class="glow-big">GET WET.</span>
        </h1>
        <v-btn 
          size="x-large" 
          class="mx-auto final-btn rounded-xl px-16 py-8 text-h4"
          color="#00e5ff"
          dark
          elevation="20"
          href="https://wa.me/254722000000?text=I want the CRAZIEST water sports package Kenya has. Let’s go full send."
          target="_blank"
        >
          <v-icon left size="60">mdi-skull-crossbones</v-icon>
          FULL SEND ONLY
        </v-btn>

        <p class="mt-12 text-h5 font-italic opacity-90" style="color:#00bfa5;">
          Karibu Maji — The water is waiting. And it doesn’t wait long.
        </p>
      </div>
    </v-container>

    <!-- FOOTER – NEON NIGHT VIBES -->
    <div class="footer">
      <p class="glow-text">© 2025 Safari Guide Kenya – We Don’t Do Calm Waters</p>
      <p class="mt-4 text-2xl">+254 722 000 000 | watersports@safariguide.co.ke</p>
      <p class="highlight mt-8">Dry people have dry souls.</p>
    </div>
  </div>
</template>

<style scoped>
.water-page { background: #0a1929; color: white; min-height: 100vh; overflow-x: hidden; }

/* HERO */
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.hero-video-bg {
  position: absolute;
  inset: 0;
  background: url('public/watersports/hero-water.mp4') center/cover no-repeat;
  background-size: cover;
  filter: brightness(0.6);
  z-index: 1;
}
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, rgba(0,229,255,0.6), rgba(0,191,165,0.8));
  z-index: 2;
}
.hero-content { position: relative; z-index: 3; }
.hero-title {
  font-size: 6rem;
  font-weight: 900;
  line-height: 1;
  letter-spacing: 8px;
}
.hero-title .big { font-size: 10rem; color: #00e5ff; text-shadow: 0 0 40px #00e5ff; }
.hero-subtitle { font-size: 2.5rem; letter-spacing: 6px; opacity: 0.9; margin-top: 2rem; }

/* ANIMATED BUTTON */
.pulse-btn {
  animation: pulse 2s infinite;
  box-shadow: 0 0 30px #00e5ff !important;
}
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(0,229,255,0.7); }
  70% { box-shadow: 0 0 0 20px rgba(0,229,255,0); }
  100% { box-shadow: 0 0 0 0 rgba(0,229,255,0); }
}

/* SECTIONS */
.activity-title {
  font-size: 4.5rem;
  font-weight: 900;
  line-height: 1.1;
  color: #00e5ff;
  text-shadow: 0 0 20px #00e5ff88;
}
.grade { font-size: 3rem; color: #ff1744; }
.activity-text {
  font-size: 1.5rem;
  line-height: 2;
  background: rgba(10,25,41,0.8);
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(8px);
  border-left: 6px solid #00e5ff;
}
.reverse { flex-direction: row-reverse; }

/* NEON TEXT */
.neon-text { color: #00e5ff; text-shadow: 0 0 30px #00e5ff; }
.glow { 
  background: linear-gradient(90deg, #00e5ff, #00bfa5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 5rem;
}
.glow-big { font-size: 8rem; }

/* FINAL CTA */
.final-btn {
  background: linear-gradient(45deg, #00e5ff, #00bfa5) !important;
  animation: hue 8s infinite;
}
@keyframes hue {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}

/* FOOTER */
.footer {
  background: linear-gradient(135deg, #0a1929, #001a33);
  padding: 6rem 2rem;
  text-align: center;
  border-top: 4px solid #00e5ff;
}
.glow-text { text-shadow: 0 0 20px #00e5ff; }
.highlight { font-size: 3rem; color: #ff1744; font-weight: bold; }

/* Responsive */
@media (max-width: 960px) {
  .hero-title { font-size: 3.5rem; }
  .hero-title .big { font-size: 5.5rem; }
  .activity-title { font-size: 3rem; }
  .glow { font-size: 3.5rem; }
}
</style>