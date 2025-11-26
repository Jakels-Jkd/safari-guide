import { createRouter, createWebHistory } from "vue-router";

import Home from "@/components/Home.vue";
import Destinations from "@/components/Destinations.vue";
import Hotels from "@/components/Hotels.vue";          
import HotelItems from "@/views/HotelItems.vue";  
import TourCompanies from "@/components/TourCompanies.vue";
import SignUp from "@/components/SignUp.vue";
import LogIn from "@/components/LogIn.vue";
import UserProfile from "@/components/UserProfile.vue";
import Cultures from "@/views/Cultures.vue";
import HistoricalSites from "@/views/HistoricalSites.vue";
import WildlifeSafaris from "@/views/WildlifeSafaris.vue";
import NatureScenicTourism from "@/views/NatureScenicTourism.vue";
import FAQs from "@/components/FAQs.vue";
import TravelBlog from "@/components/TravelBlog.vue";
import lakesWestlands from "@/views/LakesWestlands.vue";
import Conservation from "@/components/Conservation.vue";
import Bookings from "@/components/booking.vue";
import MarineBeachTourism from "@/views/MarineBeachTourism.vue";
import Admin from "@/views/Admin.vue";

const routes = [
  {
    name     : "Home",
    path     : "/",
    component: Home
  },
  {
    name     : "Destinations",
    path     : "/destinations",
    component: Destinations
  },
  {
    name     : "Hotels",
    path     : "/hotels",
    component: Hotels
  },
  {
    name     : "HotelItems",
    path     : "/hotels/:id",
    component: HotelItems,
    props    : true
  },
  {
    name     : "SignUp",
    path     : "/signup",
    component: SignUp
  },
  {
    name     : "LogIn",
    path     : "/login",
    component: LogIn
  },
  {
    name     : "UserProfile",
    path     : "/userprofile",
    component: UserProfile
  },
  {
    name     : "MarineBeachTourism",
    path     : "/marinebeachtourism",
    component: MarineBeachTourism
  },
  {
    name     : "Cultures",
    path     : "/cultures",
    component: Cultures
  },
  {
    name     : "HistoricalSites",
    path     : "/historicalsites",
    component: HistoricalSites
  },
  {
    name     : "TourCompanies",
    path     : "/tourcompanies",
    component: TourCompanies
  },
  {
    name     : "WildlifeSafaris",
    path     : "/wildlifesafaris",
    component: WildlifeSafaris
  },
  {
    name     : "NatureScenicTourism",
    path     : "/naturescenictourism",
    component: NatureScenicTourism
  },
  {
    name     : "FAQs",
    path     : "/faqs",
    component: FAQs
  },
  {
    name     : "TravelBlog",
    path     : "/travelblog",
    component: TravelBlog
  },
  {
    name     : "LakesWestlands",
    path     : "/lakeswestlands",
    component: lakesWestlands
  },
  {
    name     : "Conservation",
    path     : "/conservation",
    component: Conservation
  },
  {
    name     : "Bookings",
    path     : "/bookings",
    component: Bookings
  },
  {
    name     : "Admin",
    path     : "/admin",
    component: Admin
  }

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;