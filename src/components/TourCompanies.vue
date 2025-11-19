<!-- src/components/TourCompanies.vue -->
<template>
  <div class="container">
    <h1>Top Kenyan Safari Tour Companies</h1>
    <p v-if="companies.length" class="count">{{ companies.length }}+ trusted operators</p>

    <div v-if="loading" class="loading">Loading tour companies...</div>

    <div class="grid">
      <div v-for="c in companies" :key="c.id" class="card">
        <div class="logo-wrapper">
          <img :src="c.logo || c.image || 'https://via.placeholder.com/300x200/2c3e50/fff?text=Logo'" 
               :alt="c.name" class="logo" />
        </div>
        <div class="info">
          <h3>{{ c.name }}</h3>
          <p class="based">Based in {{ c.based_in || 'Kenya' }}</p>
          
          <div class="rating">
            ⭐ {{ c.rating || '4.8' }}/5 • {{ c.reviews_count || '150+' }} reviews
          </div>

          <p class="desc">{{ truncate(c.description, 130) }}</p>

          <a :href="'https://www.safaribookings.com/tours/' + c.slug" 
             target="_blank" class="btn">View All Tours →</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const companies = ref([])
const loading = ref(true)

const truncate = (text = '', len = 100) => 
  text.length > len ? text.substring(0, len) + '...' : text

onMounted(async () => {
  try {
    const res = await fetch('/api/kenya-tour-companies.php')
    const data = await res.json()
    companies.value = data.tour_operators || data.data || []
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
/* Same premium style */
.logo-wrapper { height: 180px; background: #f8f9fa; padding: 1rem; display: flex; align-items: center; justify-content: center; }
.logo { max-width: 100%; max-height: 100%; object-fit: contain; }
.rating { color: #3498db; font-weight: bold; margin: 0.5rem 0; }
.based { color: #27ae60; font-size: 0.95rem; }
.btn { background: #e67e22; color: white; padding: 0.7rem 1rem; border-radius: 8px; text-decoration: none; display: inline-block; margin-top: 0.8rem; }
.btn:hover { background: #d35400; }
</style>