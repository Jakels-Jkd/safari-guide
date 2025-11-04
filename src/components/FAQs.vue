<template>
  <v-container class="py-10">
    <h2 class="text-h4 font-weight-bold text-center mb-8 text-green-darken-3">
      Frequently Asked Questions
    </h2>

    <v-row justify="center">
      <v-col cols="12" md="8">
        <!-- Single white card container -->
        <v-card class="pa-6 rounded-xl" color="white" elevation="3">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="py-4"
            @click="toggle(index)"
          >
            <div class="d-flex align-center justify-space-between cursor-pointer">
              <h3 class="text-subtitle-1 font-weight-medium text-green-darken-4">
                {{ faq.question }}
              </h3>
              <v-icon color="green-darken-3">
                {{ faq.open ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
              </v-icon>
            </div>

            <v-expand-transition>
              <p
                v-if="faq.open"
                class="mt-2 text-body-2 text-grey-darken-2"
              >
                {{ faq.answer }}
              </p>
            </v-expand-transition>

            <!-- Line separator between items (except last one) -->
            <v-divider v-if="index < faqs.length - 1" class="mt-4"></v-divider>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const faqs = ref([
  {
    question: "What is Safari-Guide?",
    answer:
      "Safari-guide is a web platform that promotes eco-friendly tourism in Kenya by connecting tourists, hotels, and tour companies.Where you get all necessary information for your visit in Kenya.",
    open: false,
  },
  {
    question: "How can I book a hotel or tour?",
    answer:
      "We provide direct link to the best hotels and the best tour companies just go to the Hotels page and book while for the tour company just go to the page and book now.",
    open: false,
  },
  {
    question: "Can I tour Kenya by myself?",
    answer:
      "Yes. We provide the destinations best for visit, with a map if you decide to tour Kenya without need of a tour guide.",
    open: false,
  },
  {
    question: "Is Safari-Guide available for Domestic tourists?",
    answer:
      "Absolutely! SafariWay is designed for both domestic and international tourists interested in sustainable travel across Kenya.",
    open: false,
  },
  {
    question: "How does Safari-guide promote sustainability?",
    answer:
      "We highlight eco-friendly travel habits, conservation projects, and local businesses that practice sustainable tourism.",
    open: false,
  },
]);

function toggle(index) {
  faqs.value[index].open = !faqs.value[index].open;
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
.v-card {
  transition: box-shadow 0.3s ease;
}
.v-card:hover {
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
}
</style>
