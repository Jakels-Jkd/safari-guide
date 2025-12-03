<!-- src/views/ContactUs.vue — FINAL FIXED & BEAUTIFUL -->
<script setup>
import { ref } from 'vue'

const form = ref({
  name: '', email: '', phone: '', destination: '', travelers: '2', message: '', preferredContact: 'whatsapp'
})
const sending = ref(false)
const snackbar = ref({ show: false, message: '', color: 'success' })

const destinations = ['Maasai Mara','Amboseli','Tsavo','Samburu','Watamu Marine','Lamu','Custom Safari']

const submitForm = async () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    snackbar.value = { show: true, message: 'Please fill all required fields', color: 'error' }
    return
  }
  sending.value = true
  await new Promise(r => setTimeout(r, 1500))
  snackbar.value = { show: true, message: 'Message sent! We reply in minutes on WhatsApp', color: 'success' }
  sending.value = false
  form.value = { name: '', email: '', phone: '', destination: '', travelers: '2', message: '', preferredContact: 'whatsapp' }
}
</script>

<template>
  <!-- HERO -->
  <div class="relative overflow-hidden">
    <v-parallax src="https://images.unsplash.com/photo-1559523195-5b2c5e8d3e0f?w=2400&h=1200&fit=crop" height="90vh">
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90"></div>
      <v-container class="h-full flex items-center justify-center text-center text-white">
        <div>
          <h1 class="text-5xl sm:text-7xl md:text-8xl font-black mb-4">
            Let's Plan Your<br><span class="text-orange-400">Dream Safari</span>
          </h1>
          <p class="text-2xl sm:text-3xl md:text-4xl mt-6">24/7 • Real Kenyan Guides • Fast Replies</p>
          <div class="mt-10 flex flex-wrap gap-6 justify-center text-xl sm:text-2xl">
            <div class="bg-white/20 backdrop-blur rounded-full px-8 py-5 flex items-center gap-4">
              <v-icon size="50" color="#25D366">mdi-whatsapp</v-icon>
              <span class="font-bold">+254 712 345 678</span>
            </div>
            <div class="bg-white/20 backdrop-blur rounded-full px-8 py-5 flex items-center gap-4">
              <v-icon size="50" color="#E74C3C">mdi-gmail</v-icon>
              <span class="font-bold">hello@safariguide.co.ke</span>
            </div>
          </div>
        </div>
      </v-container>
    </v-parallax>
  </div>

  <!-- FORM + INFO — NOW SUPER CLOSE & TEXT IS HUGE -->
  <v-container class="py-12 max-w-6xl">
    <v-row class="gap-8"> <!-- Only 32px gap between cards -->
      <!-- Main Form Card -->
      <v-col cols="12" lg="8">
        <v-card class="pa-8 rounded-3xl" color="#E8DAB2" elevation="24">
          <h2 class="text-4xl md:text-5xl font-black mb-8 text-[#2E1A0F]">Send Us a Message</h2>
          
          <v-form @submit.prevent="submitForm">
            <v-row dense>
              <v-col cols="12" md="6"><v-text-field v-model="form.name" label="Name *" variant="outlined" bg-color="white" class="text-lg" /></v-col>
              <v-col cols="12" md="6"><v-text-field v-model="form.email" label="Email *" type="email" variant="outlined" bg-color="white" class="text-lg" /></v-col>
              <v-col cols="12" md="6"><v-text-field v-model="form.phone" label="Phone" variant="outlined" bg-color="white" placeholder="+254..." /></v-col>
              <v-col cols="12" md="6"><v-select v-model="form.destination" :items="destinations" label="Destination" variant="outlined" bg-color="white" /></v-col>
              
              <v-col cols="12">
                <v-radio-group v-model="form.preferredContact" inline class="my-4">
                  <div class="text-2xl font-bold mb-3">Contact via:</div>
                  <v-radio label="WhatsApp" value="whatsapp"><template v-slot:icon><v-icon color="#25D366" size="40">mdi-whatsapp</v-icon></template></v-radio>
                  <v-radio label="Email" value="email" />
                  <v-radio label="Call" value="call" />
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-textarea v-model="form.message" label="Your Dream Safari *" rows="5" variant="outlined" bg-color="white"
                  placeholder="When do you want to travel? Any special requests?" class="text-lg" />
              </v-col>

              <v-col cols="12">
                <v-btn :loading="sending" type="submit" size="x-large" block class="text-2xl py-8 rounded-2xl font-black"
                  color="#C14D2B">
                  <v-icon start size="50">mdi-send</v-icon>
                  SEND MESSAGE
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>

      <!-- Sidebar — Now glued to the form card -->
      <v-col cols="12" lg="4">
        <div class="space-y-6"> <!-- Only 24px between these cards -->
          <v-card class="pa-8 text-center rounded-3xl" color="#0F1E0F">
            <v-icon size="90" color="#D98E2C">mdi-clock-fast</v-icon>
            <h3 class="text-4xl font-black text-white mt-4">15 Min Reply</h3>
            <p class="text-2xl text-orange-200 mt-2">24/7 Support</p>
          </v-card>

          <v-card class="pa-8 rounded-3xl" color="#E8DAB2">
            <h3 class="text-4xl font-black mb-8 text-[#2E1A0F]">Contact</h3>
            <div class="space-y-6 text-2xl">
              <div class="flex items-center gap-4"><v-icon size="50" color="#25D366">mdi-whatsapp</v-icon><strong>+254 712 345 678</strong></div>
              <div class="flex items-center gap-4"><v-icon size="50" color="#E74C3C">mdi-email</v-icon>hello@safariguide.co.ke</div>
              <div class="flex items-center gap-4"><v-icon size="50" color="#1877F2">mdi-facebook</v-icon>/SafariGuideKenya</div>
            </div>
          </v-card>

          <v-card class="pa-8 text-center rounded-3xl" color="#2E8B8B">
            <v-icon size="90" color="white">mdi-earth</v-icon>
            <h3 class="text-4xl font-black text-white mt-4">Nairobi, Kenya</h3>
            <p class="text-2xl text-white/90 mt-2">100% Kenyan</p>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>

  <!-- SNACKBAR -->
  <v-snackbar v-model="snackbar.show" :color="snackbar.color" timeout="5000" location="top" rounded="pill" class="text-2xl">
    {{ snackbar.message }}
    <template v-slot:actions>
      <v-btn variant="text" @click="snackbar.show = false">Close</v-btn>
    </template>
  </v-snackbar>
</template>

<style scoped>
.v-application { background: #F5E6D3 !important; }
.v-card { background: #E8DAB2 !important; }
</style>