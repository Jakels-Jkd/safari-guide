<script setup>
import { ref } from "vue";
import { loginUser } from "@/services/userServices"; // ✅ correct import

// Reactive state
const email = ref("");
const password = ref("");
const loading = ref(false);

// Login function
const login = async () => {
  loading.value = true;
  try {
    const response = await loginUser({
      email: email.value,
      password: password.value,
    });

    console.log("LOGIN SUCCESS:", response.data);

    // ⚡ Save token
    localStorage.setItem("token", response.data.token);

    // Optionally redirect or show success toast here
  } catch (err) {
    console.log("LOGIN ERROR:", err.response?.data || err.message);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="katheu">
          <v-card-title align="center">Log In</v-card-title>

          <v-form style="padding: 3vh;" @submit.prevent="login">
            <v-text-field
              v-model="email"
              label="Email"
              variant="outlined"
              color="primary"
              style="margin-bottom: 2vh;"
            />

            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              variant="outlined"
              color="primary"
              style="margin-bottom: 2vh;"
            />

            <v-btn
              type="submit"
              :loading="loading"
              variant="tonal"
              color="blue"
              block
            >
              Confirm
            </v-btn>
          </v-form>

          <v-card-actions style="flex-direction: column; align-items: center;">
            <v-text>
              Don’t have an account?
              <a href="/signup">Sign Up</a>
            </v-text>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.katheu {
  width: 50%;
  margin: 0 auto;
}
</style>