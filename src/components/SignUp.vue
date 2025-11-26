<script setup>
import { ref } from "vue";
import { registerUser } from "@/services/userServices"; 

const username = ref("");
const email = ref("");
const password = ref("");
const password_confirmation = ref("");
const loading = ref(false);

const register = async () => {
  loading.value = true(
    
  );


  try {
    const response = await registerUser({
      name: username.value, 
      email: email.value,
      password: password.value,
      password_confirmation: password_confirmation.value,
      role_id: 2, 
    });

    console.log("REGISTER SUCCESS:", response.data);
    // Optionally redirect or show success toast here
  } catch (err) {
    console.log("REGISTER ERROR:", err.response?.data || err.message);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="katheu" style="margin-top: 10vh;">
          <v-card-title
            style="text-align: center; font-size: 1.5em; font-weight: bold;"
          >
            Sign Up
          </v-card-title>

          <v-card-text>
            <v-form @submit.prevent="register">
              <v-text-field
                v-model="username"
                label="Username"
                variant="outlined"
                style="margin-bottom: 2vh;"
              />

              <v-text-field
                v-model="email"
                label="Email"
                variant="outlined"
                style="margin-bottom: 2vh;"
              />

              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                variant="outlined"
                style="margin-bottom: 2vh;"
              />

              <v-text-field
                v-model="password_confirmation"
                label="Confirm Password"
                type="password"
                variant="outlined"
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
              <v-router-link to="/home">
                <v-btn
                  type="submit"
                  :loading="loading"
                  variant="tonal"
                  color="blue"
                  block
                >
                  Confirm
                </v-btn>
                </v-router-link>
            </v-form>
          </v-card-text>

          <v-card-actions style="flex-direction: column; align-items: center;">
            <v-text>
              Already have an account?
              <a href="/login">Log In</a>
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
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.7);
}
</style>