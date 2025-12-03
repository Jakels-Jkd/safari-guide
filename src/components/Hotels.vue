<script>
import { Hotels } from "../router/HotelDetails.js";

export default {
  name: "Hotels",
  data() {
    return {
      hotels: Hotels,
      searchQuery: "",
      selectedRegion: null,
      selectedPriceRange: null,
      selectedRating: null,
      regions: ["All Regions", "Nairobi", "Mombasa", "Maasai Mara", "Diani", "Amboseli", "Samburu", "Tsavo"],
      priceRanges: [
        { text: "All Prices", value: null },
        { text: "Under $100", value: { min: 0, max: 100 } },
        { text: "$100 - $250", value: { min: 100, max: 250 } },
        { text: "$250 - $500", value: { min: 250, max: 500 } },
        { text: "$500+", value: { min: 500, max: Infinity } }
      ],
      ratings: [
        { text: "All Ratings", value: null },
        { text: "4.5+ Stars", value: 4.5 },
        { text: "4.0+ Stars", value: 4.0 },
        { text: "3.5+ Stars", value: 3.5 },
        { text: "3.0+ Stars", value: 3.0 }
      ],
      showFilters: true
    };
  },
  computed: {
    filteredHotels() {
      let results = [...this.hotels];

      if (this.searchQuery && this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase().trim();
        results = results.filter(hotel => {
          return (
            hotel.name.toLowerCase().includes(query) ||
            hotel.location.toLowerCase().includes(query) ||
            (hotel.description && hotel.description.toLowerCase().includes(query))
          );
        });
      }

      if (this.selectedRegion && this.selectedRegion !== "All Regions") {
        results = results.filter(hotel => 
          hotel.location.toLowerCase().includes(this.selectedRegion.toLowerCase())
        );
      }

      if (this.selectedPriceRange) {
        results = results.filter(hotel => {
          const price = this.extractPrice(hotel.price);
          return price >= this.selectedPriceRange.min && price <= this.selectedPriceRange.max;
        });
      }

      if (this.selectedRating !== null) {
        results = results.filter(hotel => {
          const rating = parseFloat(hotel.rating);
          return rating >= this.selectedRating;
        });
      }

      return results;
    },
    resultsCount() {
      return this.filteredHotels.length;
    },
    hasActiveFilters() {
      return (
        (this.searchQuery && this.searchQuery.trim()) ||
        (this.selectedRegion && this.selectedRegion !== "All Regions") ||
        this.selectedPriceRange !== null ||
        this.selectedRating !== null
      );
    }
  },
  methods: {
    viewHotel(id) {
      this.$router.push({ name: "HotelItems", params: { id } });
    },
    extractPrice(priceString) {
      const match = priceString.match(/\d+/);
      return match ? parseInt(match[0]) : 0;
    },
    applyFilters() {
      console.log("Filters applied:", {
        search: this.searchQuery,
        region: this.selectedRegion,
        priceRange: this.selectedPriceRange,
        rating: this.selectedRating
      });
    },
    clearFilters() {
      this.searchQuery = "";
      this.selectedRegion = null;
      this.selectedPriceRange = null;
      this.selectedRating = null;
    },
    toggleFilters() {
      this.showFilters = !this.showFilters;
    }
  }
  
};
</script>

<template>
  <v-container fluid class="hotels-page pa-0">
    <div class="section d-flex align-center justify-center">
      <div class="overlay"></div>
      <div class="text-center content">
        <h1 class="text-h3 text-md-h2 font-weight-bold white--text mb-4">
          Explore Eco-Friendly Hotels in Kenya
        </h1>
        <p class="white--text text-h6 mb-6">
          Discover the best lodges, resorts, and camps that care for nature &#127807;
        </p>
        
        <!-- Search Bar -->
        <v-text-field
          v-model="searchQuery"
          placeholder="Search by name, location (e.g., Hemingways, Nairobi)..."
          hide-details
          solo
          flat
          rounded
          clearable
          prepend-inner-icon="mdi-magnify"
          class="search elevation-8"
        />
      </div>
    </div>

    <v-container class="filter-section mt-6">
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-card class="filter-card pa-4 elevation-4 rounded-lg">
            <div class="d-flex align-center justify-space-between mb-3">
              <div>
                <h3 class="text-h6 font-weight-bold">
                  Filter Hotels
                  <v-chip
                    v-if="resultsCount !== hotels.length"
                    class="ml-2"
                    color="primary"
                    size="small"
                  >
                    {{ resultsCount }} of {{ hotels.length }}
                  </v-chip>
                </h3>
              </div>
              <div>
                <v-btn
                  v-if="hasActiveFilters"
                  color="error"
                  variant="text"
                  size="small"
                  @click="clearFilters"
                  prepend-icon="mdi-filter-remove"
                >
                  Clear Filters
                </v-btn>
                <v-btn
                  icon
                  size="small"
                  @click="toggleFilters"
                  class="ml-2"
                >
                  <v-icon>{{ showFilters ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </div>
            </div>

            <v-expand-transition>
              <div v-show="showFilters">
                <v-row>
                  <v-col cols="12" md="4">
                    <v-select
                      v-model="selectedRegion"
                      label="Region"
                      :items="regions"
                      outlined
                      dense
                      clearable
                      prepend-inner-icon="mdi-map-marker"
                    >
                      <template v-slot:prepend-item>
                        <v-list-item @click="selectedRegion = null">
                          <v-list-item-title>All Regions</v-list-item-title>
                        </v-list-item>
                        <v-divider></v-divider>
                      </template>
                    </v-select>
                  </v-col>
                  
                  <v-col cols="12" md="4">
                    <v-select
                      v-model="selectedPriceRange"
                      label="Price Range"
                      :items="priceRanges"
                      item-title="text"
                      item-value="value"
                      outlined
                      dense
                      clearable
                      prepend-inner-icon="mdi-currency-usd"
                      return-object
                    ></v-select>
                  </v-col>
                  
                  <v-col cols="12" md="4">
                    <v-select
                      v-model="selectedRating"
                      label="Minimum Rating"
                      :items="ratings"
                      item-title="text"
                      item-value="value"
                      outlined
                      dense
                      clearable
                      prepend-inner-icon="mdi-star"
                    ></v-select>
                  </v-col>
                </v-row>

                <v-btn
                  color="primary"
                  class="mt-2"
                  block
                  @click="applyFilters"
                  prepend-icon="mdi-filter-check"
                >
                  Apply Filters ({{ resultsCount }} Results)
                </v-btn>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Results Section -->
    <v-container class="mt-6 mb-10">
      <!-- Active Filters Chips -->
      <div v-if="hasActiveFilters" class="mb-4">
        <h4 class="text-subtitle-1 mb-2">Active Filters:</h4>
        <v-chip
          v-if="searchQuery"
          closable
          @click:close="searchQuery = ''"
          class="ma-1"
          color="primary"
          variant="outlined"
        >
          Search: "{{ searchQuery }}"
        </v-chip>
        <v-chip
          v-if="selectedRegion && selectedRegion !== 'All Regions'"
          closable
          @click:close="selectedRegion = null"
          class="ma-1"
          color="primary"
          variant="outlined"
        >
          Region: {{ selectedRegion }}
        </v-chip>
        <v-chip
          v-if="selectedPriceRange"
          closable
          @click:close="selectedPriceRange = null"
          class="ma-1"
          color="primary"
          variant="outlined"
        >
          Price: {{ priceRanges.find(p => p.value === selectedPriceRange)?.text }}
        </v-chip>
        <v-chip
          v-if="selectedRating !== null"
          closable
          @click:close="selectedRating = null"
          class="ma-1"
          color="primary"
          variant="outlined"
        >
          Rating: {{ selectedRating }}+ Stars
        </v-chip>
      </div>

      <v-row v-if="filteredHotels.length === 0" justify="center">
        <v-col cols="12" md="6" class="text-center py-10">
          <v-icon size="80" color="grey">mdi-home-search-outline</v-icon>
          <h3 class="text-h5 mt-4 mb-2">No Hotels Found</h3>
          <p class="text-body-1 text-grey">
            Try adjusting your filters or search terms
          </p>
          <v-btn
            color="primary"
            variant="outlined"
            class="mt-4"
            @click="clearFilters"
          >
            Clear All Filters
          </v-btn>
        </v-col>
      </v-row>

      <!-- Hotels Grid -->
      <v-row v-else>
        <v-col
          v-for="hotel in filteredHotels"
          :key="hotel.id"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card class="hotel-card h-100" elevation="3">
            <v-img 
              :src="hotel.image" 
              height="220px"
              cover
              class="hotel-image"
            >
              <div class="image-overlay">
                <v-chip
                  class="ma-2"
                  color="success"
                  size="small"
                >
                  <v-icon start size="small">mdi-leaf</v-icon>
                  Eco-Friendly
                </v-chip>
              </div>
            </v-img>
            
            <v-card-title class="font-weight-bold">
              {{ hotel.name }}
            </v-card-title>
            
            <v-card-subtitle class="grey--text">
              <v-icon size="small" color="grey">mdi-map-marker</v-icon>
              {{ hotel.location }}
            </v-card-subtitle>
            
            <v-card-text>
              <div class="d-flex align-center justify-space-between">
                <div class="price-tag">
                  <v-icon size="small" color="primary">mdi-currency-usd</v-icon>
                  <span class="font-weight-bold">{{ hotel.price }}</span>
                </div>
                <div class="rating-tag">
                  <v-icon size="small" color="amber">mdi-star</v-icon>
                  <span class="font-weight-bold">{{ hotel.rating }}</span>
                </div>
              </div>
            </v-card-text>
            
            <v-card-actions class="pa-4 pt-0">
              <v-btn
                color="primary"
                variant="outlined"
                block
                @click="viewHotel(hotel.id)"
                prepend-icon="mdi-information-outline"
              >
                View Details
              </v-btn>
            </v-card-actions>
            
            <v-card-actions class="pa-4 pt-0">
              <v-btn
                color="primary"
                variant="elevated"
                block
                to="/bookings"
                prepend-icon="mdi-calendar-check"
              >
                Book Now
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style scoped>
.section {
  position: relative;
  background-image: url("public/Hotels/hotelspagemain.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 70vh;
  display: flex;
  align-items: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(20, 143, 236, 0.7), rgba(31, 117, 183, 0.8));
}

.content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.search {
  max-width: 600px;
  margin: 0 auto;
}

.search :deep(.v-field) {
  background-color: white !important;
  border-radius: 50px;
  font-size: 1rem;
}

.search :deep(.v-field__input) {
  padding: 20px 24px;
  min-height: 60px;
}

.filter-section {
  margin-top: -40px;
  position: relative;
  z-index: 3;
}

.filter-card {
  border-radius: 16px;
  background: white;
}

.hotel-card {
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.hotel-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15) !important;
}

.hotel-image {
  position: relative;
  transition: transform 0.4s ease;
}

.hotel-card:hover .hotel-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 8px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3), transparent);
}

.price-tag,
.rating-tag {
  display: flex;
  align-items: center;
  gap: 4px;
}

.v-btn.primary {
  background-color: rgb(20, 143, 236);
  color: white;
}

  .hero-content h1 {
    font-size: 1.75rem !important;
  }
  
  .filter-section {
    margin-top: -30px;
  }


.hotel-card {
  animation: fadeInUp 0.5s ease forwards;
}


</style>