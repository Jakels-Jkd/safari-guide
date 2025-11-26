<script setup>
import { useRoute } from "vue-router";
import Hotels from "../router/HotelDetails.js";

const route = useRoute();
const hotelId = Number(route.params.id);
const hotel = Hotels.find(h => h.id === hotelId);
</script>