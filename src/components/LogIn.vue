<template>
  <v-container fluid class="fill-height pa-0">
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="katheu elevation-12 pa-6" rounded="xl">
          <v-card-title class="text-center text-h5 font-weight-bold mb-4">
            Log In
          </v-card-title>

          <v-form @submit.prevent="login" class="px-4">
            <v-text-field
              v-model="email"
              label="Email"
              variant="outlined"
              color="primary"
              prepend-inner-icon="mdi-email"
              type="email"
              required
              :disabled="loading"
              class="mb-4"
            />

            <v-text-field
              v-model="password"
              label="Password"
              variant="outlined"
              color="primary"
              prepend-inner-icon="mdi-lock"
              type="password"
              required
              :disabled="loading"
              class="mb-6"
            />

            <!-- Error Message -->
            <v-alert
              v-if="errorMessage"
              type="error"
              dense
              class="mb-4"
              transition="fade-transition"
            >
              {{ errorMessage }}
            </v-alert>

            <v-btn
              type="submit"
              :loading="loading"
              :disabled="loading || !email || !password"
              color="blue"
              size="large"
              block
              class="text-white"
            >
              {{ loading ? "Signing in..." : "Log In" }}
            </v-btn>
          </v-form>

          <v-card-actions class="justify-center mt-6">
            <span class="text-body-2">
              Don’t have an account?
              <router-link to="/signup" class="text-blue font-weight-medium text-decoration-none">
                Sign Up
              </router-link>
            </span>
          </v-card-actions>

          <!-- Optional: Admin quick link (remove if not needed) -->
          <!-- <div class="text-center mt-3">
            <router-link to="/admin" class="text-caption text-grey-darken-1">
              Admin Login →
            </router-link>
          </div> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { loginUser } from "@/services/userServices";

const email = ref("");
const password = ref("");
const loading = ref(false);
const errorMessage = ref("");

const router = useRouter();

const login = async () => {
  errorMessage.value = "";
  loading.value = true;

  try {
    const response = await loginUser({
      email: email.value.trim(),
      password: password.value,
    });

    const { token, user } = response.data;

    // Save to localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    console.log("Login successful:", user.name || user.email);

    // Redirect based on role
    if (user.role === "admin" || user.isAdmin || user.email === "admin@example.com") {
      router.push("/admin");
    } else {
      router.push("/"); // Home or user dashboard
    }
  } catch (err) {
    console.error("Login failed:", err);

    const msg = err.response?.data?.message || "Login failed. Please try again.";

    if (err.response?.status === 401) {
      errorMessage.value = "Invalid email or password.";
    } else if (err.response?.status === 403) {
      errorMessage.value = "Account suspended. Contact support.";
    } else if (!navigator.onLine) {
      errorMessage.value = "No internet connection.";
    } else {
      errorMessage.value = msg;
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.katheu {
  max-width: 480px;
  margin: 0 auto;
}

.fill-height {
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>