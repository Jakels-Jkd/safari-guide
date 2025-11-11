<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="page">
    <div class="page2">
      <h2 class="title">Kenya’s Historical Sites</h2>
    </div>

    <v-container class="py-10 px-6 text-center">
      <h1 class="display-2 font-weight-bold" style="text-decoration: underline;">
        Step into the Past and Explore Kenya’s Heritage
      </h1>
      <p class="intro">
        Kenya is home to rich history spanning centuries — from ancient ruins and colonial forts 
        to sacred landmarks and museums. Discover the stories that shaped the nation.
      </p>
    </v-container>
           <!--fort-->
    <v-container class="py-10 px-6">
      <v-row class="d-flex align-center">
        <v-col cols="12" md="6">
          <v-carousel height="400" cycle interval="3000" show-arrows hide-delimiter-background>
            <v-carousel-item src="" />
            <v-carousel-item src="" />
          </v-carousel>
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="site-title">1.The Fort-Jesus.</h3>
          <p class="site-desc">
             Built by the Portuguese in 1593, Fort Jesus stands proudly on Mombasa Island as a symbol of Kenya’s coastal history.<br/>
             It was constructed to protect Portuguese interests along the Indian Ocean trade routes and later fell under Omani Arab and British control.<br/>
             The fort’s coral-stone walls, old cannons, and strategic design reflect centuries of cultural exchange and conflict. <br/>
             Inside, the Fort Jesus Museum displays artifacts from Swahili civilization, trade relics, and maritime history. 
             Recognized as a UNESCO World Heritage Site, it remains one of Kenya’s most visited attractions, offering panoramic views of the ocean and a deep glimpse into the past.<br/>
             Step inside, and let the past sweep you off your feet!
          </p>
        </v-col>
        
                      <!--Gedi Ruins – Kilifi-->
        <div class="divider"></div>
           <v-col cols="12" md="6">
          <h3 class="site-title">2. Gedi Ruins – Kilifi</h3>
          <p class="site-desc">
               Tucked away in a lush forest near Watamu, the Gedi Ruins tell the haunting story of an advanced Swahili city that mysteriously vanished around the 17th century.<br/>
                Built entirely from coral stone, this ancient town once boasted winding streets, elegant mosques, royal palaces, and grand houses equipped with indoor plumbing — a marvel for its time.<br/>
               As you wander through the quiet pathways lined with moss-covered walls, you can almost hear the whispers of merchants, scholars, and sailors who once made Gedi a center of trade and culture.<br/>
                Surrounded by towering baobabs and the songs of birds, Gedi remains one of Kenya’s most captivating windows into a forgotten era.<br/>
               A lost city. A living mystery. A timeless whisper from the past.

          </p>
             </v-col>
        <v-col cols="12" md="6">
          <v-img src="" height="400" cover />
        </v-col>
        <v-col cols="12" md="6">
        </v-col>

        <!--Lamu Old Town – Lamu Island-->
        <div class="divider"></div>
        <v-col cols="12" md="6">
         <v-img src=""/>
        </v-col>
        
        <v-col cols="12" md="6">
          <h3 class="site-title">3. Lamu Old Town – Lamu Island</h3>
          <p class="site-desc">
            Nestled along Kenya’s northern coast, Lamu Old Town is the oldest continuously inhabited Swahili settlement in East Africa and a UNESCO World Heritage Site.<br/>
             Its narrow winding streets, intricately carved wooden doors, and whitewashed coral stone buildings tell stories of centuries of trade and cultural fusion between Africa, Arabia, India, and Europe.<br/>
           Donkeys replace cars, dhows sail silently across turquoise waters, and the air carries a timeless calm — a glimpse into a world where life moves to the rhythm of the ocean and tradition.<br/>
           Lamu isn’t just a town — it’s a living memory of the Swahili soul.
          </p>
        </v-col>
        <div class="divider"></div>

        <!--4. Hell’s Gate National Park – Naivasha-->
        <v-col cols="12" md="6">
          <h3 class="site-title">4. Hell’s Gate National Park – Naivasha</h3>
          <p class="site-desc">
              Hell’s Gate is one of Kenya’s most dramatic landscapes, filled with towering cliffs, deep gorges, and geothermal steam vents.
               It inspired the setting for Disney’s The Lion King and remains a playground for adventure seekers.<br/>
              Visitors can hike, cycle among zebras, or climb the iconic Fischer’s Tower. The park also holds cultural significance, with the Maasai living nearby and sharing their traditions.<br/>
             Hell’s Gate isn’t just a park — it’s nature’s cathedral, carved by fire and wind.
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <v-img src=""/>
        </v-col>

        <!--5. Karen Blixen Museum – Nairobi-->
        <div class="divider"></div>
        <v-col cols="12" md="6">
          <v-carousel height="400" cycle interval="3000" show-arrows hide-delimiter-background>
            <v-carousel-item src="" />
            <v-carousel-item src="" />
          </v-carousel>
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="site-title">5. Karen Blixen Museum – Nairobi</h3>
          <p class="site-desc">
            Once home to the Danish author Karen Blixen, famous for her memoir Out of Africa, this museum offers a nostalgic glimpse into Kenya’s colonial past.<br/>
             Nestled at the foot of the Ngong Hills, the farmhouse still preserves her furniture, books, and vintage photos.
            It’s a serene spot that tells the story of adventure, love, and resilience — a perfect blend of history and beauty.<br/>
             A visit here lets you step into the pages of history and feel the spirit of Kenya’s past come alive.<br/>
             Standing on her veranda, you can almost hear the whisper — “I had a farm in Africa at the foot of the Ngong Hills.”
          </p>
        </v-col>

        <!--6. Nairobi National Museum – Nairobi-->
        <div class="divider"></div>
        <v-col cols="12" md="6">
          <h3 class="site-title">6. Nairobi National Museum – Nairobi</h3>
          <p class="site-desc">
           Nestled near the city’s bustling center, the Nairobi National Museum is a treasure trove of Kenya’s heritage.<br/>
           From prehistoric fossils to vibrant Maasai beadwork, the museum showcases the country’s natural and cultural history under one roof.<br/>
           Wander through its art galleries, botanical gardens, and wildlife exhibits, and you’ll gain a deeper appreciation for Kenya’s journey through time.<br/>
           A visit here is like flipping through the storybook of the nation, where every exhibit whispers tales of resilience, creativity, and life.<br/>
           Step inside and let Kenya’s history inspire your own adventure!
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <v-img src=""/>
        </v-col>

        <!--7. Ngong Hills – Nairobi-->
        <div class="divider"></div>
        <v-col cols="12" md="6">
          <v-carousel height="400" cycle interval="3000" show-arrows hide-delimiter-background>
            <v-carousel-item src="" />
            <v-carousel-item src="" />
          </v-carousel>
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="site-title">7. Ngong Hills – Nairobi</h3>
          <p class="site-desc">
           The Ngong Hills offer sweeping vistas of the Great Rift Valley and Nairobi’s outskirts.
           Once a retreat for the Maasai, the hills are now a favorite hiking and biking destination.
           Fresh air, rolling green slopes, and panoramic views make it perfect for adventure and reflection.<br/>
           The trails are dotted with wind-swept peaks and picnic spots — ideal for both relaxation and exploration.<br/>
           Breathe in Kenya’s beauty and let the hills inspire your spirit!
          </p>
        </v-col>

          <!--8. Shimoni Slave Caves – Kwale-->
        <div class="divider"></div>
        <v-col cols="12" md="6">
          <v-carousel height="400" cycle interval="3000" show-arrows hide-delimiter-background>
            <v-carousel-item src="" />
            <v-carousel-item src="" />
          </v-carousel>
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="site-title">8. Shimoni Slave Caves – Kwale</h3>
          <p class="site-desc">
          Nestled along the Kenyan coast near Shimoni, these caves are a solemn reminder of the dark history of the East African slave trade.
           Carved into the cliffside centuries ago, the caves served as holding cells for enslaved Africans awaiting shipment to Arab and European traders.
         Walking through the narrow, shadowed passageways, it’s impossible not to feel the weight of history — the whispers of countless lives torn from their families echo through the stone walls. <br/>
         Today, the caves stand as a historical site and memorial, preserving the memory of those who suffered while educating visitors about resilience, freedom, and humanity.<br/>
         A visit here is both humbling and eye-opening, connecting the present with a past that must never be forgotten.<br/>
         In the silence of these caves, the echoes of courage speak louder than time.
          </p>
        </v-col>
        <div class="divider"></div>
        <v-col cols="12" md="6">
          <h3 class="site-title">9. Rhino Ark – Aberdare Ranges</h3>
          <p class="site-desc">
           The Rhino Ark is not just a conservation marvel but also a historical landmark reflecting Kenya’s dedication to wildlife preservation.<br/>
            Winding through the Aberdare Ranges, this massive fence was constructed to protect the endangered black rhino from poaching while also safeguarding local communities.<br/>
            Traversing the rolling hills, forests, and ridges along the fence route, visitors experience both breathtaking landscapes and a deep sense of Kenya’s conservation history.<br/>
             Beyond its environmental impact, Rhino Ark tells the story of collaboration, perseverance, and the human commitment to safeguarding nature.<br/>
             Where history meets the wild, the rhino stands as a sentinel of time.
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <v-carousel height="400" cycle interval="3000" show-arrows hide-delimiter-background>
            <v-carousel-item src="" />
            <v-carousel-item src="" />
          </v-carousel>
        </v-col>

        <!--10. Nyeri Baden-Powell Museum – Nyeri-->
        <div class="divider"></div>
        <v-col cols="12" md="6">
        <v-img src=""/>
        </v-col>
        <v-col cols="12" md="6">
               <h3 class="site-title">10. Nyeri Baden-Powell Museum – Nyeri</h3>
          <p class="site-desc">
             Located in the central highlands of Kenya, the Nyeri Museum celebrates the life and legacy of Robert Baden-Powell, the founder of the global Scouting movement.<br/> 
             Housed in a colonial-era building, the museum preserves personal artifacts, photographs, and memorabilia that tell the story of scouting’s origins in Kenya.<br/>
             Visitors can explore exhibits on Baden-Powell’s adventures, his connections to the Kenyan highlands, and the growth of scouting worldwide. 
             The museum also highlights Kenya’s colonial history, providing a window into early 20th-century life.
             Walking through the museum feels like stepping back into an era where adventure, leadership, and community shaped a movement that continues to inspire youth globally.<br/>
          </p>
          </v-col>
      </v-row>
    </v-container>

    <div class="summary">
      <h2>Preserving Kenya’s Heritage</h2>
      <p>
        These historical landmarks remind us of Kenya’s deep roots and diverse past. 
        Protecting them ensures that future generations can continue to learn, connect, 
        and celebrate our shared identity.
      </p>
      <p class="cta">
        Click <router-link to="/hotels" class="link">here</router-link> to book a room and 
        create your lifetime experience.
      </p>
    </div>

    <div class="footer">
      <p> +254 113268956 | +254 723075680</p>
      <p> safariguide@gmail.com</p>
      <p>Your next great adventure begins here.</p>
      <p class="highlight">Karibu Kenya.</p>
    </div>
  </div>
</template>

<style scoped>
.page {
  background-color: #F5F1E6;
  min-height: 100vh;
}

.page2 {
  position: relative;
  background-image: url("/public/destinations/pravin-wakode-bhDb6Gd0BVw-unsplash.jpg");
  background-size: cover;
  background-position: center;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.title {
  position: relative;
  z-index: 2;
  color: azure;
  font-size: 3em;
  font-weight: bold;
  text-decoration: underline;
}

.intro {
  font-size: 1.3rem;
  color: #333;
  margin-top: 1rem;
}

.site-title {
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
}

.site-desc {
  font-size: 1.2rem;
  line-height: 1.8;
  padding: 1rem;
}

.divider {
  width: 100%;
  height: 2px;
  background-color: black;
  margin: 40px 0;
}

.summary {
  text-align: center;
  padding: 2rem;
  background-color: #E8E5D7;
}

.summary h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.summary .cta .link {
  color: #1b5e20;
  text-decoration: underline;
  font-weight: 600;
}

.footer {
  background: linear-gradient(135deg, #e6f4ea, #c8e6c9);
  color: #1b5e20;
  width: 100%;
  border-top: 2px solid #81c784;
  text-align: center;
  padding: 1rem;
}

.footer .highlight {
  font-size: 1.5em;
  font-weight: bold;
}
</style>
