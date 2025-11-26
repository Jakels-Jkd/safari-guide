<template>
  <v-app>
    <v-main>
      <v-container fluid class="pa-4">
        <!-- Header -->
        <v-row align="center" justify="space-between" class="mb-4">
          <v-col cols="12" md="6">
            <div class="d-flex align-center">
              <v-avatar size="48" class="mr-3">
                <v-img src="/logo.png" alt="Safari Guide" />
              </v-avatar>
              <div>
                <h2 class="mb-0">Safari Guide — Admin</h2>
                <div class="caption">Manage destinations, hotels, tours, jobs & users</div>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6" class="text-right">
            <v-text-field
              v-model="globalSearch"
              placeholder="Search anything..."
              append-inner-icon="mdi-magnify"
              dense
              hide-details
              class="mr-3"
              style="max-width: 360px;"
            />

            <v-btn icon @click="toggleTheme" :title="darkTheme ? 'Switch to light' : 'Switch to dark'">
              <v-icon>{{ darkTheme ? 'mdi-weather-night' : 'mdi-white-balance-sunny' }}</v-icon>
            </v-btn>

            <v-menu>
              <template #activator="{props}">
                <v-btn v-bind="props" icon>
                  <v-avatar size="36"><v-img :src="admin.avatar" /></v-avatar>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="gotoProfile">
                  <v-list-item-title>Profile</v-list-item-title>
                </v-list-item>
                <v-list-item @click="logout">
                  <v-list-item-title>Log out</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>

        <!-- Quick Stats -->
        <v-row class="mb-6" dense>
          <v-col cols="12" sm="6" md="3" v-for="card in stats" :key="card.title">
            <v-card class="pa-4" elevation="2">
              <div class="d-flex justify-space-between align-center">
                <div>
                  <div class="subtitle-2 text--secondary">{{ card.title }}</div>
                  <div class="headline font-weight-bold">{{ card.value }}</div>
                  <div class="caption">{{ card.caption }}</div>
                </div>
                <v-icon x-large>{{ card.icon }}</v-icon>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <!-- Router-like tabs for Admin sections -->
        <v-row>
          <v-col cols="12" md="3">
            <v-navigation-drawer permanent elevation="1" class="pa-2">
              <v-list nav dense>
                <v-list-item v-for="item in menu" :key="item.key" :class="{ 'v-list-item--active': activeTab === item.key }" @click="activeTab = item.key">
                  <v-list-item-icon><v-icon>{{ item.icon }}</v-icon></v-list-item-icon>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>

              <v-divider class="my-3" />

              <div class="caption">Activity Feed</div>
              <v-list dense>
                <v-list-item v-for="(a, i) in recentActivity.slice(0,5)" :key="i">
                  <v-list-item-content>
                    <v-list-item-title class="subtitle-2">{{ a.message }}</v-list-item-title>
                    <v-list-item-subtitle class="caption">{{ a.time }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
          </v-col>

          <v-col cols="12" md="9">
            <div v-if="activeTab === 'dashboard'">
              <!-- Dashboard main area: charts + recent items -->
              <v-row>
                <v-col cols="12" md="8">
                  <v-card class="pa-4 mb-4">
                    <div class="d-flex justify-space-between align-center mb-2">
                      <div>
                        <div class="subtitle-1">Traffic Overview</div>
                        <div class="caption">Last 30 days</div>
                      </div>
                      <v-btn small text @click="refreshTraffic">Refresh</v-btn>
                    </div>

                    <!-- Placeholder chart - replace with chartjs/vue-chartjs implementation -->
                    <div style="height: 260px; display:flex; align-items:center; justify-content:center;" class="grey lighten-4">
                      <div class="caption">Traffic chart goes here (use Chart.js or ECharts)</div>
                    </div>
                  </v-card>

                  <v-card class="pa-4">
                    <div class="subtitle-1 mb-3">Recent Bookings</div>
                    <v-simple-table>
                      <thead>
                        <tr>
                          <th>Booking ID</th>
                          <th>User</th>
                          <th>Destination</th>
                          <th>Date</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="b in recentBookings" :key="b.id">
                          <td>{{ b.id }}</td>
                          <td>{{ b.user }}</td>
                          <td>{{ b.destination }}</td>
                          <td>{{ b.date }}</td>
                          <td><v-chip :color="b.statusColor" small>{{ b.status }}</v-chip></td>
                        </tr>
                      </tbody>
                    </v-simple-table>
                  </v-card>
                </v-col>

                <v-col cols="12" md="4">
                  <v-card class="pa-4 mb-4">
                    <div class="subtitle-1">Moderation Queue</div>
                    <div class="caption mb-3">New listings awaiting approval</div>
                    <v-list dense>
                      <v-list-item v-for="(m, i) in moderation.slice(0,5)" :key="i">
                        <v-list-item-avatar>
                          <v-img :src="m.img" />
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title>{{ m.title }}</v-list-item-title>
                          <v-list-item-subtitle class="caption">{{ m.type }}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-btn icon @click="approve(m)"><v-icon>mdi-check</v-icon></v-btn>
                          <v-btn icon @click="reject(m)"><v-icon>mdi-close</v-icon></v-btn>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list>
                  </v-card>

                  <v-card class="pa-4">
                    <div class="subtitle-1">Quick Actions</div>
                    <v-btn block class="mb-2" color="primary" @click="openCreate('destination')">New Destination</v-btn>
                    <v-btn block class="mb-2" color="secondary" @click="openCreate('hotel')">New Hotel</v-btn>
                    <v-btn block class="mb-2" color="success" @click="openCreate('job')">Post Job</v-btn>
                  </v-card>
                </v-col>
              </v-row>
            </div>

            <!-- Destinations Management -->
            <div v-if="activeTab === 'destinations'">
              <v-card class="pa-4">
                <div class="d-flex justify-space-between align-center mb-4">
                  <div>
                    <div class="subtitle-1">Destinations</div>
                    <div class="caption">Manage destination listings, images, and conservation tags</div>
                  </div>

                  <div class="d-flex align-center">
                    <v-text-field v-model="filters.destSearch" dense hide-details placeholder="Search destinations" append-inner-icon="mdi-magnify" class="mr-3" />
                    <v-btn color="primary" @click="openCreate('destination')">Add destination</v-btn>
                  </div>
                </div>

                <v-data-table
                  :items="filteredDestinations"
                  :headers="destinationHeaders"
                  :items-per-page="perPage"
                  class="elevation-1"
                >
                  <template #item.actions="{ item }">
                    <v-btn icon @click="editItem('destination', item)"><v-icon>mdi-pencil</v-icon></v-btn>
                    <v-btn icon @click="confirmDelete('destination', item)"><v-icon>mdi-delete</v-icon></v-btn>
                  </template>
                </v-data-table>

                <v-pagination v-model="page" :length="pages" class="mt-4" />
              </v-card>
            </div>

            <!-- Hotels Management -->
            <div v-if="activeTab === 'hotels'">
              <v-card class="pa-4">
                <div class="d-flex justify-space-between align-center mb-4">
                  <div>
                    <div class="subtitle-1">Hotels</div>
                    <div class="caption">Manage hotels and availability</div>
                  </div>

                  <div>
                    <v-btn color="primary" @click="openCreate('hotel')">Add hotel</v-btn>
                  </div>
                </div>

                <v-data-table :items="hotels" :headers="hotelHeaders">
                  <template #item.actions="{ item }">
                    <v-btn icon @click="editItem('hotel', item)"><v-icon>mdi-pencil</v-icon></v-btn>
                    <v-btn icon @click="confirmDelete('hotel', item)"><v-icon>mdi-delete</v-icon></v-btn>
                  </template>
                </v-data-table>
              </v-card>
            </div>

            <!-- Tours / Companies / Jobs / Users tabs follow similar structure -->
            <div v-if="activeTab === 'tour-companies'">
              <v-card class="pa-4">
                <div class="d-flex justify-space-between align-center mb-4">
                  <div>
                    <div class="subtitle-1">Tour Companies</div>
                    <div class="caption">Approve and manage tour operator profiles</div>
                  </div>
                  <v-btn color="primary" @click="openCreate('company')">New company</v-btn>
                </div>

                <v-data-table :items="companies" :headers="companyHeaders">
                  <template #item.actions="{ item }">
                    <v-btn icon @click="editItem('company', item)"><v-icon>mdi-pencil</v-icon></v-btn>
                    <v-btn icon @click="confirmDelete('company', item)"><v-icon>mdi-delete</v-icon></v-btn>
                  </template>
                </v-data-table>
              </v-card>
            </div>

            <div v-if="activeTab === 'jobs'">
              <v-card class="pa-4">
                <div class="d-flex justify-space-between align-center mb-4">
                  <div>
                    <div class="subtitle-1">Jobs & Internships</div>
                    <div class="caption">Create, edit, or feature opportunities for students</div>
                  </div>
                  <v-btn color="primary" @click="openCreate('job')">Post job</v-btn>
                </div>

                <v-data-table :items="jobs" :headers="jobHeaders">
                  <template #item.actions="{ item }">
                    <v-btn icon @click="editItem('job', item)"><v-icon>mdi-pencil</v-icon></v-btn>
                    <v-btn icon @click="confirmDelete('job', item)"><v-icon>mdi-delete</v-icon></v-btn>
                  </template>
                </v-data-table>
              </v-card>
            </div>

            <div v-if="activeTab === 'users'">
              <v-card class="pa-4">
                <div class="d-flex justify-space-between align-center mb-4">
                  <div>
                    <div class="subtitle-1">Users</div>
                    <div class="caption">Manage user roles, bans, and messages</div>
                  </div>
                  <v-btn color="error" @click="bulkBan">Bulk-ban selected</v-btn>
                </div>

                <v-data-table :items="users" :headers="userHeaders" item-key="id" show-select>
                  <template #item.actions="{ item }">
                    <v-btn icon @click="editUser(item)"><v-icon>mdi-account-edit</v-icon></v-btn>
                    <v-btn icon @click="confirmDelete('user', item)"><v-icon>mdi-account-remove</v-icon></v-btn>
                  </template>
                </v-data-table>
              </v-card>
            </div>

            <!-- Audit & Settings -->
            <div v-if="activeTab === 'settings'">
              <v-card class="pa-4">
                <div class="subtitle-1">Settings</div>

                <v-form class="mt-4">
                  <v-switch v-model="siteSettings.maintenance" label="Maintenance mode" />
                  <v-text-field v-model="siteSettings.siteName" label="Site name" class="mt-3" />
                  <v-textarea v-model="siteSettings.footer" label="Footer text" class="mt-3" />

                  <v-btn color="primary" class="mt-4" @click="saveSettings">Save settings</v-btn>
                </v-form>
              </v-card>

              <v-card class="pa-4 mt-4">
                <div class="subtitle-1">Audit log</div>
                <v-simple-table>
                  <thead>
                    <tr><th>User</th><th>Action</th><th>When</th></tr>
                  </thead>
                  <tbody>
                    <tr v-for="log in auditLog.slice(0,10)" :key="log.id">
                      <td>{{ log.user }}</td>
                      <td>{{ log.action }}</td>
                      <td>{{ log.when }}</td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-card>
            </div>

          </v-col>
        </v-row>

        <!-- Dialogs: Create/Edit & Confirm Delete -->
        <v-dialog v-model="dialogs.edit" max-width="900px">
          <v-card>
            <v-card-title>
              <span class="headline">{{ editMode.title }}</span>
              <v-spacer />
              <v-btn icon @click="closeEdit"><v-icon>mdi-close</v-icon></v-btn>
            </v-card-title>

            <v-card-text>
              <v-form ref="editForm" v-model="editMode.valid">
                <v-row>
                  <v-col cols="12" md="8">
                    <v-text-field v-model="editMode.data.title" label="Title" required />
                    <v-textarea v-model="editMode.data.description" label="Description" rows="6" />

                    <v-row>
                      <v-col cols="12" md="6">
                        <v-text-field v-model="editMode.data.location" label="Location" />
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-select v-model="editMode.data.tags" :items="allTags" label="Tags" multiple />
                      </v-col>
                    </v-row>

                    <!-- Image upload placeholder -->
                    <v-file-input v-model="editMode.data.images" multiple label="Upload images" show-size truncate-length="15" />
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-card class="pa-3">
                      <div class="subtitle-2">Meta</div>
                      <v-text-field v-model="editMode.data.price" label="Typical price" />
                      <v-select v-model="editMode.data.status" :items="['draft','published','archived']" label="Status" />
                      <v-text-field v-model="editMode.data.contact_email" label="Contact email" />
                      <v-switch v-model="editMode.data.featured" label="Featured" />

                      <v-divider class="my-2" />
                      <v-btn color="primary" block @click="saveEdit">Save</v-btn>
                    </v-card>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogs.confirm" max-width="420px">
          <v-card>
            <v-card-title class="headline">Confirm action</v-card-title>
            <v-card-text>{{ confirmMessage }}</v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn text @click="dialogs.confirm = false">Cancel</v-btn>
              <v-btn color="error" @click="performDelete">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- Toasts -->
        <v-snackbar v-model="toast.show" :timeout="toast.timeout">{{ toast.message }}<template #actions><v-btn text @click="toast.show = false">Close</v-btn></template></v-snackbar>

      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import axios from 'axios'

// --- UI state ---
const darkTheme = ref(false)
const globalSearch = ref('')
const activeTab = ref('dashboard')

const admin = reactive({ name: 'Admin', avatar: '/admin-avatar.png' })

// --- Sample stats ---
const stats = ref([
  { title: 'Destinations', value: 128, caption: 'Total destinations', icon: 'mdi-map-marker' },
  { title: 'Hotels', value: 432, caption: 'Total hotels', icon: 'mdi-hotel' },
  { title: 'Bookings', value: 3_214, caption: 'Last 30 days', icon: 'mdi-calendar-check' },
  { title: 'Active Users', value: 24_120, caption: 'Last 7 days', icon: 'mdi-account-group' }
])

// --- Menu ---
const menu = ref([
  { key: 'dashboard', title: 'Dashboard', icon: 'mdi-view-dashboard' },
  { key: 'destinations', title: 'Destinations', icon: 'mdi-map' },
  { key: 'hotels', title: 'Hotels', icon: 'mdi-hotel' },
  { key: 'tour-companies', title: 'Tour Companies', icon: 'mdi-briefcase' },
  { key: 'jobs', title: 'Jobs', icon: 'mdi-briefcase-clock' },
  { key: 'users', title: 'Users', icon: 'mdi-account' },
  { key: 'settings', title: 'Settings', icon: 'mdi-cog' }
])

// --- Mock datasets (replace with API endpoints) ---
const destinations = ref([])
const hotels = ref([])
const companies = ref([])
const jobs = ref([])
const users = ref([])

// Pagination / table control
const perPage = ref(10)
const page = ref(1)
const pages = computed(() => Math.ceil(filteredDestinations.value.length / perPage.value))

// Filters
const filters = reactive({ destSearch: '' })

// Headers
const destinationHeaders = [
  { title: 'Title', key: 'title' },
  { title: 'Location', key: 'location' },
  { title: 'Tags', key: 'tags' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions' }
]
const hotelHeaders = [ { title: 'Name', key: 'name' }, { title: 'Location', key: 'location' }, { title: 'Rating', key: 'rating' }, { title: 'Actions', key: 'actions' } ]
const companyHeaders = [ { title: 'Company', key: 'name' }, { title: 'Contact', key: 'contact' }, { title: 'Status', key: 'status' }, { title: 'Actions', key: 'actions' } ]
const jobHeaders = [ { title: 'Title', key: 'title' }, { title: 'Company', key: 'company' }, { title: 'Type', key: 'type' }, { title: 'Actions', key: 'actions' } ]
const userHeaders = [ { title: 'Name', key: 'name' }, { title: 'Email', key: 'email' }, { title: 'Role', key: 'role' }, { title: 'Actions', key: 'actions' } ]

// Recent / moderation / bookings
const recentBookings = ref([])
const moderation = ref([])
const recentActivity = ref([])

// Dialogs & edit state
const dialogs = reactive({ edit: false, confirm: false })
const editMode = reactive({ title: '', data: {}, valid: false, kind: '' })
let deleteTarget = null
const confirmMessage = ref('')

// Toast
const toast = reactive({ show: false, message: '', timeout: 4000 })

// Settings & audit
const siteSettings = reactive({ maintenance: false, siteName: 'Safari Guide', footer: '© Safari Guide' })
const auditLog = ref([])

// Tags
const allTags = ref(['safari', 'conservation', 'beach', 'heritage', 'mountain'])

// --- Computed filters ---
const filteredDestinations = computed(() => {
  let arr = destinations.value
  if (filters.destSearch) {
    const q = filters.destSearch.toLowerCase()
    arr = arr.filter(d => (d.title + ' ' + (d.location || '') + ' ' + (d.tags || []).join(' ')).toLowerCase().includes(q))
  }
  // pagination
  const start = (page.value - 1) * perPage.value
  return arr.slice(start, start + perPage.value)
})

// --- Methods ---
function toggleTheme() { darkTheme.value = !darkTheme.value }
function gotoProfile() { /* navigate to admin profile */ }
function logout() { /* call logout endpoint and redirect */ }
function refreshTraffic() { toast.message = 'Traffic refreshed'; toast.show = true }

function openCreate(kind) {
  editMode.kind = kind
  editMode.title = `Create new ${kind}`
  editMode.data = { title: '', description: '', location: '', tags: [], images: [], price: '', status: 'draft', contact_email: '', featured: false }
  dialogs.edit = true
}

function editItem(kind, item) {
  editMode.kind = kind
  editMode.title = `Edit ${kind}`
  editMode.data = JSON.parse(JSON.stringify(item))
  dialogs.edit = true
}

function closeEdit() { dialogs.edit = false }

async function saveEdit() {
  // basic validation
  if (!editMode.data.title) { toast.message = 'Title required'; toast.show = true; return }

  // If you have an API endpoint, call it here. Example: axios.post(`/api/${editMode.kind}`, editMode.data)
  // For now we just patch the local arrays
  if (editMode.kind === 'destination') {
    if (editMode.data.id) {
      const idx = destinations.value.findIndex(d => d.id === editMode.data.id)
      if (idx >= 0) destinations.value[idx] = JSON.parse(JSON.stringify(editMode.data))
      toast.message = 'Destination updated'
    } else {
      editMode.data.id = Date.now()
      destinations.value.unshift(JSON.parse(JSON.stringify(editMode.data)))
      toast.message = 'Destination created'
    }
  }

  if (editMode.kind === 'hotel') {
    if (editMode.data.id) {
      const idx = hotels.value.findIndex(h => h.id === editMode.data.id)
      if (idx >= 0) hotels.value[idx] = JSON.parse(JSON.stringify(editMode.data))
      toast.message = 'Hotel updated'
    } else {
      editMode.data.id = Date.now()
      hotels.value.unshift(JSON.parse(JSON.stringify(editMode.data)))
      toast.message = 'Hotel created'
    }
  }

  // ... handle other kinds (company, job, user)

  toast.show = true
  dialogs.edit = false
}

function confirmDelete(kind, item) {
  deleteTarget = { kind, item }
  confirmMessage.value = `Are you sure you want to delete ${item.title || item.name || item.email || 'this item'}? This action cannot be undone.`
  dialogs.confirm = true
}

function performDelete() {
  if (!deleteTarget) return
  const { kind, item } = deleteTarget
  if (kind === 'destination') destinations.value = destinations.value.filter(d => d.id !== item.id)
  if (kind === 'hotel') hotels.value = hotels.value.filter(h => h.id !== item.id)
  if (kind === 'company') companies.value = companies.value.filter(c => c.id !== item.id)
  if (kind === 'job') jobs.value = jobs.value.filter(j => j.id !== item.id)
  if (kind === 'user') users.value = users.value.filter(u => u.id !== item.id)

  toast.message = 'Deleted successfully'
  toast.show = true
  dialogs.confirm = false
  deleteTarget = null
}

function approve(item) {
  // moderate item
  item.status = 'published'
  toast.message = 'Approved'
  toast.show = true
}
function reject(item) {
  item.status = 'rejected'
  toast.message = 'Rejected'
  toast.show = true
}

function editUser(user) {
  editMode.kind = 'user'
  editMode.title = 'Edit user'
  editMode.data = JSON.parse(JSON.stringify(user))
  dialogs.edit = true
}

function bulkBan() {
  toast.message = 'Bulk ban executed (demo)'
  toast.show = true
}

async function saveSettings() {
  // persist settings via API
  toast.message = 'Settings saved'
  toast.show = true
}

// --- Mock loader ---
onMounted(() => {
  // load sample content — in real app, fetch from API
  destinations.value = [
    { id: 1, title: 'Maasai Mara', location: 'Narok, Kenya', tags: ['safari','conservation'], status: 'published' },
    { id: 2, title: 'Diani Beach', location: 'Ukunda, Kenya', tags: ['beach'], status: 'published' },
    { id: 3, title: 'Mount Kenya', location: 'Central Kenya', tags: ['mountain'], status: 'draft' }
  ]

  hotels.value = [ { id: 11, name: 'Savannah Lodge', location: 'Maasai Mara', rating: 4.8 }, { id: 12, name: 'Coastline Resort', location: 'Diani', rating: 4.3 } ]

  companies.value = [ { id: 21, name: 'Wild Trails', contact: 'contact@wildtrails.co', status: 'verified' } ]

  jobs.value = [ { id: 31, title: 'Tour Guide (seasonal)', company: 'Wild Trails', type: 'Internship' } ]

  users.value = [ { id: 100, name: 'Aimee', email: 'aimee@example.com', role: 'admin' }, { id: 101, name: 'Jake', email: 'jake@example.com', role: 'user' } ]

  recentBookings.value = [ { id: 'BKG-001', user: 'Jake', destination: 'Maasai Mara', date: '2025-10-01', status: 'confirmed', statusColor: 'green' } ]

  moderation.value = [ { title: 'New camp listing', type: 'hotel', img: '/placeholder.jpg' } ]

  recentActivity.value = [ { message: 'New user signed up: Jake', time: '2h ago' }, { message: 'Destination updated: Maasai Mara', time: '1d ago' } ]

  auditLog.value = [ { id: 1, user: 'Aimee', action: 'Approved hotel', when: '2025-11-01 09:12' } ]
})
</script>

<style scoped>
.v-list-item--active { background-color: rgba(0,0,0,0.04) }
.caption { color: rgba(0,0,0,0.6) }
</style>
