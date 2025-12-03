
<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    question: "What is Safari Guide Kenya?",
    answer: "Safari Guide is your all-in-one digital companion for exploring Kenya responsibly. We connect you with eco-friendly hotels, trusted local tour operators, hidden gems, and real-time travel tips — all while celebrating Kenya’s cultures, wildlife, and heritage.",
    open: false
  },
  {
    question: "How do I book hotels or safaris?",
    answer: "Simply visit our Hotels page for handpicked, verified accommodations across Kenya, or explore each destination page (Wildlife, Marine, Culture, etc.) — every section has direct booking links to trusted partners. No middlemen. Just real connections.",
    open: false
  },
  {
    question: "Can I explore Kenya on my own (self-drive)?",
    answer: "Absolutely yes! Every destination page includes maps, road conditions, best routes, fuel stops, and safety tips. We even show you where to find the best nyama choma spots only locals know!",
    open: false
  },
  {
    question: "Is this website for Kenyan citizens too?",
    answer: "100% YES! Many Kenyans rediscover their own country through our platform. Whether you're from Nairobi planning a weekend in Naivasha or from Mombasa exploring the north — this is YOUR Kenya too.",
    open: false
  },
  {
    question: "How does Safari Guide promote sustainability?",
    answer: "We only feature businesses that respect wildlife, pay fair wages, support community projects, and reduce plastic waste. We also educate visitors on responsible wildlife viewing, cultural respect, and leaving no trace.",
    open: false
  },
  {
    question: "What does 'Hakuna Matata' really mean?",
    answer: "It means 'No worries' — but in the deepest Kenyan sense, it means: relax, breathe, be present, trust the journey. In Kenya, we don’t just say it… we live it.",
    open: false
  }
])

const toggle = (index) => {
  faqs.value.forEach((item, i) => {
    item.open = i === index ? !item.open : false
  })
}
</script>


<template>
  <div class="faq-page">

    <div class="faq">
      <div class="overlay"></div>
      <div class="content">
        <h1 class="title">Got Questions?</h1>
        <p class="subtitle">We’ve Got Answers – Straight from the Heart of Kenya</p>
      </div>
    </div>

    <v-container class="py-16 px-6 max-w-5xl">
      
      <h2 class="faq-main-title text-center mb-12">
        Frequently Asked Questions
      </h2>

      <v-card class="faq-card mx-auto rounded-3xl overflow-hidden" elevation="20">
        <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
          
          <button
            @click="toggle(index)"
            class="faq-toggle"
            :aria-expanded="faq.open"
          >
            <div class="flex justify-between items-center py-6 px-8">
              <h3 class="question-text">
                {{ faq.question }}
              </h3>
              <v-icon 
                size="40" 
                :color="faq.open ? 'amber darken-3' : 'brown darken-2'"
                class="transition-transform duration-300"
                :class="{ 'rotate-180': faq.open }"
              >
                mdi-chevron-down
              </v-icon>
            </div>
          </button>

          <v-expand-transition>
            <div v-if="faq.open" :id="`answer-${index}`" class="answer-wrapper">
              <div class="px-8 pb-8">
                <p class="answer-text">
                  {{ faq.answer }}
                </p>
              </div>
            </div>
          </v-expand-transition>

          <v-divider v-if="index < faqs.length - 1" class="custom-divider" />
        </div>
      </v-card>

      <div class="text-center mt-16">
        <p class="still-question text-2xl text-brown-700 mb-8">
          Still have a question?
        </p>
        <v-btn
          size="x-large"
          color="amber darken-4"
          dark
          class="rounded-pill px-12 text-h6 font-weight-bold shadow-lg"
          href="mailto:hello@safariguide.co.ke"
        >
          <v-icon left>mdi-email</v-icon>
          Contact Us Anytime
        </v-btn>
        <p class="karibu-final mt-10">
          Karibu Kenya • We’re Here for You 24/7
        </p>
      </div>
    </v-container>
  </div>
</template>
<style scoped>
.faq-page {
  background: linear-gradient(to bottom, #fffaf0, #fdfd96 8%, #f5f5dc 92%);
  min-height: 100vh;
  font-family: 'Georgia', serif;
}

.faq {
  position: relative;
  height: 65vh;
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)),
              url('public/faq.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent 40%, rgba(0,0,0,0.9));
}
.title {
  font-size: 6rem;
  font-weight: 900;
  letter-spacing: 6px;
  text-shadow: 6px 6px 30px black;
}
.subtitle {
  font-size: 2.8rem;
  font-weight: 300;
  letter-spacing: 4px;
  margin-top: 1rem;
}

.faq-main-title {
  font-size: 4.5rem;
  font-weight: 900;
  color: #8B4513;
  text-shadow: 3px 3px 15px rgba(139,69,19,0.3);
}

.faq-card {
  background: white;
  border: 6px solid #FFD700;
  box-shadow: 0 25px 50px rgba(139,69,19,0.25) !important;
  backdrop-filter: blur(10px);
}

.faq-item {
  transition: background 0.4s ease;
}
.faq-item:hover {
  background: linear-gradient(to right, #fff8e1, #fff3e0);
}

.faq-toggle {
  background: transparent;
  border: none;
  width: 100%;
  cursor: pointer;
}
.question-text {
  font-size: 1.55rem;
  font-weight: 700;
  color: #5D4037;
  line-height: 1.4;
  padding-right: 1rem;
}

.answer-wrapper {
  background: linear-gradient(to bottom, #fffbeb, #fff3e0);
  border-left: 6px solid #FFB300;
  margin: 0 2rem 1rem;
  border-radius: 0 12px 12px 0;
}
.answer-text {
  font-size: 1.35rem;
  line-height: 2;
  color: #6D4C41;
  padding: 1.5rem 2rem;
}

.custom-divider {
  height: 2px;
  background: linear-gradient(90deg, transparent, #DEB887, transparent);
  margin: 0 3rem;
}

.still-question {
  font-style: italic;
  color: #8B4513;
}
.karibu-final {
  font-size: 3.5rem;
  font-weight: bold;
  color: #8B4513;
  font-style: italic;
  margin-top: 2rem;
}
</style>