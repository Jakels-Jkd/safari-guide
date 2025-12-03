<!-- src/views/TravelBlog.vue -->
<script setup>
import { ref, computed } from 'vue'

// Sample blog data – replace with your backend later
const posts = ref([
  {
    id: 1,
    title: "Why July is the BEST Month for the Great Migration",
    excerpt: "2.1 million wildebeest thunder across the Mara River. Here's exactly where to be and when.",
    author: "Amina Okello",
    date: "2025-07-15",
    category: "Great Migration",
    readTime: "6 min",
    featured: true,
    image: "https://images.unsplash.com/photo-1564769625391-9d2e85e9d2ec?w=1200&h=800&fit=crop"
  },
  {
    id: 2,
    title: "I Spent a Night Alone in the Bush with Only Lions for Company",
    excerpt: "No tent. No gun. Just me, a blanket, and the King of the Jungle 20 meters away.",
    author: "Jake Peralta",
    date: "2025-06-28",
    category: "Adventure Stories",
    readTime: "12 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1547471080-7bb4a9f5783e?w=1200&h=800&fit=crop"
  },
  {
    id: 3,
    title: "The Secret Beach in Watamu Where Turtles Come to Lay Eggs at Midnight",
    excerpt: "Local fishermen guard this beach with their lives. I was allowed to witness something magical.",
    author: "Fatima Ali",
    date: "2025-06-10",
    category: "Marine Safari",
    readTime: "8 min",
    featured: true,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop"
  },
  {
    id: 4,
    title: "How to Spot the Elusive Leopard in Tsavo (From Someone Who Saw 7 in One Week)",
    excerpt: "They say leopards own the night. I learned they also own the sausage tree at 3 PM.",
    author: "David Kimani",
    date: "2025-05-22",
    category: "Wildlife Tips",
    readTime: "10 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1597696856084-8ca1af1e2579?w=1200&h=800&fit=crop"
  }
])

const categories = ["All", "Great Migration", "Adventure Stories", "Marine Safari", "Wildlife Tips", "Conservation"]
const selectedCategory = ref("All")
const searchQuery = ref("")

const filteredPosts = computed(() => {
  return posts.value.filter(post => {
    const matchesCategory = selectedCategory.value === "All" || post.category === selectedCategory.value
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesSearch
  })
})
</script>

<template>
  <!-- HERO -->
  <div class="blog-hero relative h-screen">
    <v-parallax
      src="https://images.unsplash.com/photo-1516026672321-7b2d8f8c7b8e?w=2400&h=1600&fit=crop"
      height="100%"
    >
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
      <v-container class="fill-height d-flex align-center">
        <div class="text-center text-white">
          <h1 class="text-h2 md:text-h1 font-black mb-6 tracking-tight">
            Safari Guide Stories
          </h1>
          <p class="text-h5 md:text-h4 max-w-4xl mx-auto opacity-90">
            Real tales from the bush, the reef, and everywhere in between
          </p>
          <div class="mt-12">
            <v-text-field
              v-model="searchQuery"
              prepend-inner-icon="mdi-magnify"
              label="Search stories..."
              variant="solo"
              class="max-w-lg mx-auto"
              bg-color="white"
              rounded
              flat
            />
          </div>
        </div>
      </v-container>
    </v-parallax>
  </div>

  <!-- FEATURED POST -->
  <v-container class="my-16">
    <h2 class="text-h3 font-bold text-center mb-12">Featured Story</h2>
    <v-card
      v-if="posts.find(p => p.featured)"
      class="featured-card rounded-xl overflow-hidden"
      elevation="24"
      @click="$router.push('/blog/' + posts.find(p => p.featured).id)"
    >
      <v-img
        :src="posts.find(p => p.featured).image"
        height="600"
        cover
      >
        <div class="gradient-overlay"></div>
        <div class="absolute bottom-0 left-0 p-8 text-white">
          <v-chip color="orange" class="mb-4">Featured</v-chip>
          <h3 class="text-h2 md:text-h1 font-black mb-4">
            {{ posts.find(p => p.featured).title }}
          </h3>
          <p class="text-h5 opacity-90 max-w-3xl">
            {{ posts.find(p => p.featured).excerpt }}
          </p>
          <div class="mt-6 flex items-center gap-6 text-lg">
            <span>{{ posts.find(p => p.featured).author }}</span>
            <span>•</span>
            <span>{{ posts.find(p => p.featured).readTime }}</span>
          </div>
        </div>
      </v-img>
    </v-card>
  </v-container>

  <!-- CATEGORIES -->
  <v-container class="mb-12">
    <div class="d-flex flex-wrap justify-center gap-3">
      <v-chip
        v-for="cat in categories"
        :key="cat"
        :color="selectedCategory === cat ? 'primary' : 'grey-lighten-2'"
        @click="selectedCategory = cat"
        size="large"
        class="px-6"
      >
        {{ cat }}
      </v-chip>
    </div>
  </v-container>

  <!-- BLOG GRID -->
  <v-container>
    <v-row>
      <v-col
        v-for="post in filteredPosts"
        :key="post.id"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card
          class="blog-card h-100 rounded-xl overflow-hidden transition-all"
          elevation="8"
          hover
          @click="$router.push('/blog/' + post.id)"
        >
          <v-img
            :src="post.image"
            height="280"
            cover
            class="blog-img"
          >
            <div class="gradient-overlay"></div>
            <v-chip class="absolute top-4 left-4" color="orange" small>
              {{ post.category }}
            </v-chip>
          </v-img>

          <v-card-title class="text-h6 font-bold line-clamp-2">
            {{ post.title }}
          </v-card-title>

          <v-card-text class="text-grey-darken-2">
            {{ post.excerpt }}
          </v-card-text>

          <v-card-actions class="pa-4">
            <div class="flex justify-between w-full text-sm">
              <span class="font-medium">{{ post.author }}</span>
              <span>{{ post.date.split('-').slice(1).join('/') }} • {{ post.readTime }}</span>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- NEWSLETTER CTA -->
  <div class="newsletter-section py-20 mt-20">
    <v-container class="text-center">
      <h2 class="text-h3 md:text-h2 font-black text-white mb-6">
        Never Miss a Story
      </h2>
      <p class="text-h5 text-white mb-10 opacity-90">
        Get wild tales delivered straight from the bush to your inbox
      </p>
      <div class="max-w-2xl mx-auto">
        <v-text-field
          label="Your email"
          variant="outlined"
          append-inner-icon="mdi-send"
          bg-color="white"
          class="rounded-full"
          placeholder="name@wildsoul.com"
        />
      </div>
    </v-container>
  </div>
</template>

<style scoped>
.blog-hero { position: relative; }
.gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent 40%, rgba(0,0,0,0.8));
}
.featured-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 30px 60px rgba(0,0,0,0.4) !important;
}
.blog-card {
  transition: all 0.4s ease;
}
.blog-card:hover {
  transform: translateY(-8px);
}
.blog-card:hover .blog-img {
  transform: scale(1.08);
}
.blog-img {
  transition: transform 0.6s ease;
}
.newsletter-section {
  background: linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%);
}
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>