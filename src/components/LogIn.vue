<script setup>
import { ref } from 'vue'
const isLoggedIn = true;
</script>

<template> 
    <v-container>
        <v-row>
            <v-col>
                <v-card class="katheu"><v-card-title align="center">Log In</v-card-title>
                    <v-form justify="center" style="padding: 3vh;">
                        <v-text-field
                        label="email"
                        input="e.g john@example.com"
                        variant="outlined"
                        color="primary"
                        style="margin-bottom: 2vh;"
                        />
                        <v-text-field
                        label="Password"
                        input="e.g john@example.com"
                        variant="outlined"
                        color="primary"
                       style="margin-bottom: 2vh;"
                        />
                    </v-form>
                <v-card-actions style="flex-direction: column; align-items: center;">
                     <v-btn
                    variant="tonal"
                     color="blue" 
                    style="margin-bottom: 3px;"
                    >Confirm</v-btn>
                    <v-text style="text-align: center; margin-bottom: 2vh;">
                    Already have an account?  
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
    align-items: center;
    justify-content: center;
}
</style>