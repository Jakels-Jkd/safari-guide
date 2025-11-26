<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const isLoggedIn = ref(false);
const user = ref(null);

// CHECK LOGIN STATUS
onMounted(() => {
  const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");

  if (token && storedUser) {
    isLoggedIn.value = true;
    user.value = JSON.parse(storedUser);
  }
});

// LOGOUT FUNCTION
const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  isLoggedIn.value = false;

  router.push("/login");
};
</script>

<template>
  <v-app-bar elevate-on-scroll style="background-color: rgb(242, 223, 223);">
    
    <div class="logo-title">
      <v-img
        src="/icon/tourism.png"
        width="40"
        height="40"
        class="logo-img"
        cover
      />
      <span class="app-title">| Safari Guide</span>
    </div>

    <v-spacer></v-spacer>

    <v-btn variant="plain" color="black" to="/">Home</v-btn>
    <v-btn variant="plain" color="black" to="/destinations">Destinations</v-btn>
    <v-btn variant="plain" color="black" to="/hotels">Hotels</v-btn>
    <v-btn variant="plain" color="black" to="/tourcompanies">Tour Companies</v-btn>
    <v-btn variant="plain" color="black" to="/travelblog">Travel Blog</v-btn>
    <v-btn variant="plain" color="black" to="/conservation">Conservation</v-btn>
    <v-btn variant="plain" color="black" to="/faqs">FAQs</v-btn>

    <!-- SHOW LOGIN IF NOT LOGGED IN -->
    <v-btn 
      v-if="!isLoggedIn"
      variant="plain"
      color="black"
      to="/login"
    >
      Log In
    </v-btn>

    <!-- SHOW AVATAR + LOGOUT IF LOGGED IN -->
    <div v-else style="display: flex; align-items: center; gap: 10px;">
      <v-avatar to="/userprofile">
        <span style="color: darkmagenta;">
          {{ user?.name?.charAt(0)?.toUpperCase() || "U" }}
        </span>
      </v-avatar>

      <v-btn variant="plain" color="red" @click="logout">Logout</v-btn>
    </div>
  </v-app-bar>
</template>

<style scoped>
.logo-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 16px; 
}

.logo-img {
  min-width: 40px;
  min-height: 40px;
}

.app-title {
  font-size: 20px;
  font-weight: bold;
  color: black;
}
</style>
