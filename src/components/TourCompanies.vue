<!-- src/views/TourCompanies.vue — BOOKING.COM STYLE (FIXED & PERFECT) -->
<script>
import { TourCompanies } from "../router/TourCompanies.js";

export default {
  data() {
    return {
      companies: TourCompanies,
      searchQuery: "",
      selectedRegion: null,
      selectedPriceRange: null,
      selectedRating: null,
      regions: ["All Regions", "Nairobi", "Mombasa", "Maasai Mara", "Amboseli", "Tsavo", "Samburu", "Laikipia", "Diani", "Lamu"],
      priceRanges: [
        { text: "All Prices", value: null },
        { text: "Under KSh 40,000", value: { min: 0, max: 40000 } },
        { text: "KSh 40,000 – 100,000", value: { min: 40000, max: 100000 } },
        { text: "KSh 100,000 – 200,000", value: { min: 100000, max: 200000 } },
        { text: "KSh 200,000+", value: { min: 200000, max: Infinity } }
      ],
      ratings: [
        { text: "All Ratings", value: null },
        { text: "4.0+ Very Good", value: 4.0 },
        { text: "4.5+ Wonderful", value: 4.5 },
        { text: "4.8+ Exceptional", value: 4.8 }
      ],
      showFilters: true
    };
  },
  computed: {
    filteredCompanies() {
      let results = [...this.companies];

      if (this.searchQuery && this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase().trim();
        results = results.filter(company => 
          company.name.toLowerCase().includes(query) ||
          company.location.toLowerCase().includes(query) ||
          (company.description && company.description.toLowerCase().includes(query))
        );
      }

      if (this.selectedRegion && this.selectedRegion !== "All Regions") {
        results = results.filter(company => 
          company.location.toLowerCase().includes(this.selectedRegion.toLowerCase())
        );
      }

      if (this.selectedPriceRange) {
        results = results.filter(company => {
          const price = this.extractPrice(company.price);
          return price >= this.selectedPriceRange.min && price <= this.selectedPriceRange.max;
        });
      }

      if (this.selectedRating !== null) {
        results = results.filter(company => {
          const rating = parseFloat(company.rating);
          return rating >= this.selectedRating;
        });
      }

      return results;
    },
    resultsCount() {
      return this.filteredCompanies.length;
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
    viewCompany(id) {
      this.$router.push({ name: "TourCompanyDetails", params: { id } });
    },
    extractPrice(priceString) {
      const match = priceString.match(/\d+/);
      return match ? parseInt(match[0]) : 0;
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
  <v-container fluid class="tour-companies-page pa-0 bg-gray-50 min-h-screen">
    <!-- Hero Section -->
    <div class="hero-section d-flex align-center justify-center relative">
      <div class="overlay"></div>
      <div class="text-center hero-content relative z-10">
        <h1 class="text-h3 text-md-h2 font-weight-bold white--text mb-4">
          Kenyan Safari Companies
        </h1>
        <p class="white--text text-h6 mb-6">
          Discover trusted, locally owned tour operators across Kenya
        </p>
        
        <!-- Hero Search Bar -->
        <v-text-field
          v-model="searchQuery"
          placeholder="Search by company name, location..."
          hide-details
          solo
          flat
          rounded
          clearable
          prepend-inner-icon="mdi-magnify"
          class="hero-search elevation-8"
          aria-label="Search safari companies"
        />
      </div>
    </div>

    <!-- Filter Section -->
    <v-container class="filter-section mt-n12 relative z-10">
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-card class="filter-card pa-4 elevation-4 rounded-lg bg-white">
            <div class="d-flex align-center justify-space-between mb-3">
              <div>
                <h3 class="text-h6 font-weight-bold">
                  Filter Companies
                  <v-chip
                    v-if="resultsCount !== companies.length"
                    class="ml-2"
                    color="primary"
                    size="small"
                  >
                    {{ resultsCount }} of {{ companies.length }}
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
                  aria-label="Clear all filters"
                >
                  Clear Filters
                </v-btn>
                <v-btn
                  icon
                  size="small"
                  @click="toggleFilters"
                  class="ml-2"
                  aria-label="Toggle filters"
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
                      aria-label="Filter by region"
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
                      prepend-inner-icon="mdi-currency-kes"
                      return-object
                      aria-label="Filter by price range"
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
                      aria-label="Filter by rating"
                    ></v-select>
                  </v-col>
                </v-row>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Results Section -->
    <v-container class="mt-6 mb-16">
      <!-- Active Filters Chips -->
      <div v-if="hasActiveFilters" class="mb-6">
        <h4 class="text-subtitle-1 mb-2 sr-only">Active Filters:</h4>
        <v-chip
          v-if="searchQuery"
          closable
          @click:close="searchQuery = ''"
          class="ma-1"
          color="primary"
          variant="outlined"
          aria-label="Remove search filter"
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
          aria-label="Remove region filter"
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
          aria-label="Remove price filter"
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
          aria-label="Remove rating filter"
        >
          Rating: {{ selectedRating }}+ Stars
        </v-chip>
      </div>

      <!-- No Results Message -->
      <v-row v-if="filteredCompanies.length === 0" justify="center">
        <v-col cols="12" md="6" class="text-center py-10">
          <v-icon size="80" color="grey" aria-hidden="true">mdi-magnify-close</v-icon>
          <h3 class="text-h5 mt-4 mb-2">No Companies Found</h3>
          <p class="text-body-1 text-grey">
            Try adjusting your filters or search terms
          </p>
          <v-btn
            color="primary"
            variant="outlined"
            class="mt-4"
            @click="clearFilters"
            aria-label="Clear all filters and try again"
          >
            Clear All Filters
          </v-btn>
        </v-col>
      </v-row>

      <!-- Companies Grid -->
      <v-row v-else>
        <v-col
          v-for="company in filteredCompanies"
          :key="company.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card class="tour-company-card h-100" elevation="3" rounded="lg">
            <v-img 
              :src="company.image" 
              height="200px"
              cover
              class="tour-image"
              alt="Company image"
              loading="lazy"
            >
              <div class="image-overlay">
                <v-chip
                  class="ma-2"
                  color="success"
                  size="small"
                  aria-label="100% Kenyan owned"
                >
                  <v-icon start size="small">mdi-check-decagram</v-icon>
                  Kenyan Owned
                </v-chip>
              </div>
            </v-img>
            
            <v-card-title class="font-weight-bold pa-4">
              {{ company.name }}
            </v-card-title>
            
            <v-card-subtitle class="grey--text pa-4 pb-2">
              <v-icon size="small" color="grey">mdi-map-marker</v-icon>
              {{ company.location }}
            </v-card-subtitle>
            
            <v-card-text class="pa-4 pt-0">
              <p class="text-body-2 text-grey-darken-1 mb-4 line-clamp-2">
                {{ company.description }}
              </p>
              <div class="d-flex align-center justify-space-between">
                <div class="price-tag">
                  <v-icon size="small" color="primary">mdi-currency-kes</v-icon>
                  <span class="font-weight-bold text-h6">{{ company.price }}</span>
                </div>
                <div class="rating-tag">
                  <v-rating
                    :model-value="company.rating"
                    color="amber"
                    readonly
                    size="small"
                    aria-label="Company rating"
                  />
                  <span class="ml-1 text-caption">{{ company.rating }}</span>
                </div>
              </div>
            </v-card-text>
            
            <v-card-actions class="pa-4 pt-0">
              <v-btn
                color="primary"
                variant="outlined"
                block
                @click="viewCompany(company.id)"
                prepend-icon="mdi-information-outline"
                aria-label="View details for {{ company.name }}"
              >
                View Details
              </v-btn>
            </v-card-actions>
            
            <v-card-actions class="pa-4 pt-0">
              <v-btn
                color="success"
                variant="elevated"
                block
                :href="`https://wa.me/254722123456?text=Hi ${company.name}, I'd like to book a safari`"
                target="_blank"
                prepend-icon="mdi-whatsapp"
                aria-label="Contact {{ company.name }} via WhatsApp"
              >
                WhatsApp Now
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Simple Footer -->
    <v-footer class="text-center pa-6 bg-primary" color="primary">
      <v-container>
        <p class="white--text text-body-1">&copy; 2025 Safari Guide Kenya. All rights reserved. Proudly supporting local businesses.</p>
      </v-container>
    </v-footer>
  </v-container>
</template>

<style scoped>
.tour-companies-page { background: #f8f9fa; }
.hero-section {
  position: relative;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('public/tourcompanies/hero.jpg') center/cover no-repeat fixed;
  min-height: 60vh;
}
.overlay {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(34,197,94,0.8), rgba(16,185,129,0.6));
}
.hero-content { z-index: 2; max-width: 800px; margin: 0 auto; padding: 0 20px; }
.hero-search { max-width: 600px; margin: 0 auto; }
.hero-search :deep(.v-field) {
  background: white !important;
  border-radius: 50px !important;
  font-size: 1rem;
}
.hero-search :deep(.v-field__input) { min-height: 60px; padding: 20px 24px; }

.filter-section { margin-top: -40px; position: relative; z-index: 10; }
.filter-card { background: white; border-radius: 16px; }

.tour-company-card {
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.tour-company-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15) !important;
}
.tour-image { transition: transform 0.4s ease; }
.tour-company-card:hover .tour-image { transform: scale(1.05); }
.image-overlay {
  position: absolute; top: 0; left: 0; right: 0;
  padding: 8px; background: linear-gradient(to bottom, rgba(0,0,0,0.3), transparent);
}
.price-tag, .rating-tag { display: flex; align-items: center; gap: 4px; }

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Accessibility & Responsive */
@media (max-width: 960px) {
  .hero-section { min-height: 50vh; background-attachment: scroll; }
  .hero-content h1 { font-size: 2.5rem !important; }
  .hero-search { max-width: 90%; }
  .filter-section { margin-top: -30px; }
}

/* Animations */
.tour-company-card { animation: fadeInUp 0.5s ease forwards; }
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>