<script>
import { filterItems } from 'vuetify/lib/composables/filter';

export default {
  data() {
    return {
      dateMenu: false,
      dates: {
        start: new Date(),
        end: new Date(new Date().setDate(new Date().getDate() + 2))
      },
      guestOptions: [
        '1 adult · 0 children · 1 room',
        '2 adults · 0 children · 1 room',
        '2 adults · 1 child · 1 room',
        '2 adults · 2 children · 2 rooms'
      ]
    };
  },
  computed: {
    formattedDate() {
      const options = { weekday: 'short', day: 'numeric', month: 'short' };
      const start = this.dates.start.toLocaleDateString('en-US', options);
      const end = this.dates.end.toLocaleDateString('en-US', options);
      return `${start} — ${end}`;
    }
  }
};
</script>

<template>
  <div class="page">
    <h1>Safari Guide Hotels</h1>
  </div>
  <div class="page2">
    <v-container>
      <v-row class="align-center" dense>
        <v-col cols="12" md="3">
          <v-text-field
            label="Where are you going?"
            prepend-inner-icon="mdi-map-marker"
            outlined
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-menu
            v-model="dateMenu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-bind="attrs"
                v-on="on"
                label="Dates"
                prepend-inner-icon="mdi-calendar"
                :value="formattedDate"
                outlined
                readonly
              />
            </template>
            <v-date-picker
              v-model="dates"
              range
              @change="dateMenu = false"
            />
          </v-menu>
        </v-col>

        <v-col cols="12" md="3">
          <v-select
            :items="guestOptions"
            label="Guests"
            prepend-inner-icon="mdi-account"
            outlined
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-btn color="primary" class="mt-4" block>Search</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="cards">
            <v-card-title>
              Filter by:
            </v-card-title>
            <v-card-text>
              1.Your budget:
            </v-card-text>
           <v-range-slider
             v-model="priceRange"
             :min="500"
             :max="20000"
             step="100"
             thumb-label
             class="mt-4"
    />

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.page {
  background-color: #003580;
  height: 30%;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 2rem;
}
.page2 {  
  background-color: #FFFFFF;
  height: 100%;
}
.cards{
  height: 100%;
  background-color: #FFB400;
  padding: 0%;
}


</style>