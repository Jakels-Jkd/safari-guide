<!-- src/components/HotelList.vue -->
<template>
  <div class="container">
    <h1>Best Hotels & Safari Lodges in Kenya</h1>
    <p v-if="hotels.length" class="count">{{ hotels.length }}+ luxury lodges & camps</p>

    <div v-if="loading" class="loading">Loading real Kenyan lodges...</div>
    <div v-else-if="error" class="error">{{ error }}</div>

    <div class="grid">
      <div v-for="hotel in hotels" :key="hotel.id" class="card">
        <img 
          :src="hotel.image || 'https://via.placeholder.com/400x250/ECECEC/999?text=No+Image'" 
          :alt="hotel.name"
          class="hotel-img"
        />
        <div class="info">
          <h3>{{ hotel.name }}</h3>
          <p class="location"> {{ hotel.region }} • {{ hotel.location }}</p>
          
          <div class="details">
            <span class="price">{{ hotel.price_range || 'From $180' }}</span>
            <span class="stars"> {{ hotel.stars || '4.5+' }}</span>
          </div>

          <p class="desc">{{ truncate(hotel.description, 120) }}</p>

          <a :href="'https://www.safaribookings.com/lodges/' + hotel.slug" 
             target="_blank" class="btn">View Lodge →</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const hotels = ref([])
const loading = ref(true)
const error = ref('')

const truncate = (text = '', len = 100) => {
  return text.length > len ? text.substring(0, len) + '...' : text
}

onMounted(async () => {
  try {
    const response = await fetch('/api/kenya-lodges.php')
    const data = await response.json()
    
    // The API returns { lodges: [...] }
    hotels.value = data.lodges || []
  } catch (err) {
    error.value = 'Failed to load hotels. Check your internet or backend.'
    console.error(err)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
/* Same beautiful styles as before – copy from my previous message */
.container { padding: 2rem; max-width: 1300px; margin: 0 auto; text-align: center; }
.count { color: #27ae60; font-weight: bold; margin-bottom: 1.5rem; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 2rem; }
.card { background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 25px rgba(0,0,0,0.12); transition: all 0.3s; }
.card:hover { transform: translateY(-10px); box-shadow: 0 15px 35px rgba(0,0,0,0.2); }
.hotel-img { width: 100%; height: 220px; object-fit: cover; }
.info { padding: 1.3rem; text-align: left; }
.location { color: #16a085; font-weight: 600; }
.details { display: flex; justify-content: space-between; margin: 0.8rem 0; font-weight: bold; }
.price { color: #e74c3c; }
.btn { background: #f39c12; color: white; padding: 0.7rem 1rem; border-radius: 8px; text-decoration: none; display: inline-block; margin-top: 0.5rem; }
.btn:hover { background: #e67e22; }
.loading, .error { font-size: 1.3rem; color: #95a5a6; margin: 3rem 0; }
.error { color: #c0392b; }
</style>