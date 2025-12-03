<script setup>
import {ref, computed} from 'vue';

const p =ref('12000');
const t = ref('12');
const r = ref('2.5');

function si(){
  return (p.value * r.value * t.value / 100);
}

</script>
<template><div><v-container><v-row><v-col><v-card>

<v-text-field
  label="Principal Amount"
  type="number"
  outlined>{{ p }}</v-text-field>

<v-text-field
  label="Time Period"
  type="number"
  outlined>{{ t }}</v-text-field>
  
  <v-text-field
  label="Rate of Interest"
  type="number"
  outlined>{{ r }}</v-text-field>

<p>the simple interest is {{ si }}</p>
</v-card>
</v-col>
</v-row></v-container></div></template>