<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="page">
    <div class="nema">
      <h2 class="title">The Kenyan Cultures.</h2>
    </div>

    <v-container class="py-10 px-6">
      <h1 class="display-2 text-center font-weight-bold" style="text-decoration: underline;">
        Discover the Rich Cultures of Kenya
      </h1>
    </v-container>

    <v-container class="py-10 px-6">
      <v-row class="d-flex align-center">
        <v-col cols="12" md="6">
          <v-carousel
            height="500"
            show-arrows
            class="rounded-lg elevation-2"
            hide-delimiter-background
            cycle interval="3000" pause-on-hover
          >
            <v-carousel-item src='public/destinations/cultures/the maasai 2.png'/>
            <v-carousel-item src='destinations/cultures/degleex-ganzorig-0kIbj3yEvOM-unsplash.jpg'/>
            <v-carousel-item src='public/destinations/cultures/modern maasai.png'/>
          </v-carousel>
        </v-col>

        <v-col cols="12" md="6">
          <h3 class="card-subtitles">1. The Maasai</h3>
          <p class="tribe-description">
            The Maasai are one of Kenya’s most iconic communities, known for their vibrant red shukas, intricate beadwork, and spectacular jumping dances.<br/>
            Traditionally semi-nomadic, they primarily inhabit southern Kenya and northern Tanzania, relying on cattle herding as their main livelihood.<br/>
            Maasai culture places a strong emphasis on community, age-set ceremonies, and oral traditions, which celebrate important life events such as birth, initiation, marriage, and elderhood.
            Despite modernization, the Maasai have preserved much of their traditions, making them a living symbol of Kenya’s rich cultural heritage.<br/>
            Enjoy both old and modernized traditions.
          </p>
        </v-col>

        <v-divider color="black" thickness="2" class="my-8" />

        <v-col cols="12" md="6">
          <h3 class="card-subtitles">2. The Kikuyu (Agĩkũyũ)</h3>
          <p class="tribe-description">
            The Kikuyu, or Agĩkũyũ, are the largest ethnic group in Kenya, traditionally settled around the fertile central highlands near Mount Kenya. <br/>
            Their culture is deeply rooted in farming, family, and respect for the land. <br/>
            The Kikuyu trace their ancestry to Gikuyu and Mumbi, the legendary founders of the nine clans. <br/>
            They are known for their strong work ethic, storytelling traditions, folk songs, and lively dances performed during harvest and community celebrations.<br/>
            Today, the Kikuyu remain influential in Kenya’s cultural and economic life while maintaining many of their traditional values and customs.<br/>
          </p>
        </v-col>

        <v-col cols="12" md="6">
          <v-img src='public/destinations/cultures/the kikuyu.png'/>
        </v-col>

        <v-divider color="black" thickness="2" class="my-8" />

        <v-col cols="12" md="6">
          <v-img src='public/destinations/cultures/the luhya.png'/>
        </v-col>

        <v-col cols="12" md="6">
          <h3 class="card-subtitles">3. The Luhyas</h3>
          <p class="tribe-description">
            The Luhya, also known as Abaluhya or Baluhya, are one of Kenya’s major ethnic groups, mainly found in the fertile western region of the country.<br/>
            The community is made up of several sub-tribes such as the Bukusu, Maragoli, Isukha, and Tachoni, each with its own dialect and customs but united by a shared cultural identity.<br/>
            Luhya traditions are centered around family, respect for elders, and communal living. <br/>
            They are famous for their vibrant dances, especially the Isukuti, which features energetic drumming and movement during ceremonies and celebrations.<br/>
            Agriculture plays a key role in their daily life, with maize, millet, and sugarcane being common crops.<br/>
            The Luhya are also known for their warmth, unity, and love of festivities, making them a true representation of Kenya’s cultural richness and hospitality.<br/>
          </p>
        </v-col>

        <v-divider color="black" thickness="2" class="my-8" />

        <v-col cols="12" md="6">
          <h3 class="card-subtitles">4. The Luo Community.</h3>
          <p class="tribe-description">
            The Luo people, also known as JoLuo, are a Nilotic community primarily found along the shores of Lake Victoria in western Kenya.<br/>
            They are known for their strong traditions, love of music, storytelling, and deep connection to fishing and the lake. <br/>
            Traditionally, the Luo were fishermen, farmers, and cattle keepers, and water holds special spiritual significance in their culture.<br/>
            Luo society places great value on wisdom, respect, and education. Their vibrant music, especially Benga, has influenced Kenya’s contemporary music scene. <br/>
            They are also known for their rich oral literature, lively dances, and colorful ceremonies that celebrate life’s milestones such as birth, marriage, and death.<br/>
            With a proud history and an enduring sense of identity, the Luo continue to play a major role in shaping Kenya’s cultural, political, and social landscape.
          </p>
        </v-col>

        <v-col cols="12" md="6">
          <v-carousel
            height="500"
            show-arrows
            class="rounded-lg elevation-2"
            hide-delimiter-background
            cycle interval="3000" pause-on-hover
          >
            <v-carousel-item src='public/destinations/cultures/the luo 2 (2).png'/>
            <v-carousel-item src='public/destinations/cultures/the luo 3.png'/>
            <v-carousel-item src='public/destinations/cultures/the luo 2 (1).png'/>
          </v-carousel>
        </v-col>

        <v-divider color="black" thickness="2" class="my-8" />

        <v-col cols="12" md="6">
          <v-img src='public/destinations/cultures/the kalenjin.png'/>
        </v-col>

        <v-col cols="12" md="6">
          <h3 class="card-subtitles">5. The Kalenjin Community</h3>
          <p class="tribe-description">
            The Kalenjin are a group of closely related sub-tribes living mainly in Kenya’s Rift Valley region.
            They include the Nandi, Kipsigis, Tugen, Marakwet, and Pokot, among others. <br/>
            The Kalenjin are world-renowned for producing some of the best long-distance runners — a legacy rooted in their highland environment and endurance-based traditions.<br/>
            Traditionally, they were pastoralists and farmers, valuing cattle as a source of wealth and status. <br/>
            Their culture emphasizes discipline, respect for elders, and communal responsibility. <br/>
            Initiation ceremonies mark the transition from childhood to adulthood and are key to preserving their values and identity.<br/>
            Music and dance play a vital role in their celebrations, often featuring rhythmic songs accompanied by drums and horns. <br/>
            The Kalenjin’s pride, resilience, and unity make them a powerful representation of Kenya’s strength and spirit.
          </p>
        </v-col>

        <v-divider color="black" thickness="2" class="my-8" />

        <v-col cols="12" md="6">
          <h3 class="card-subtitles">6. The Kamba Community</h3>
          <p class="tribe-description">
            The Kamba, or Akamba, mainly live in Kenya’s eastern region, particularly in Machakos, Kitui, and Makueni counties. <br/>
            They are traditionally known as skilled traders, craftsmen, and herders. <br/>
            The Kamba are also famous for their wood carvings, beadwork, and basket weaving — artworks that have gained international recognition for their detail and beauty.<br/>
            Kamba culture values community, hospitality, and respect for elders. <br/>
            Storytelling, music, and dance play a central role in passing down wisdom and celebrating important life events. <br/>
            Their energetic traditional dances and songs are often accompanied by drums and handclaps, bringing people together in joy and unity.<br/>
            The Kamba are admired for their resilience, adaptability, and creativity, which reflect the enduring spirit of Kenya’s people.
          </p>
        </v-col>

        <v-col cols="12" md="6">
          <v-img src='public/destinations/cultures/the kamba.png'/>
        </v-col>

        

        <v-col cols="12" md="6">
          <v-img src='public/destinations/cultures/the swahili.png'/>
        </v-col>

        <v-col cols="12" md="6">
          <h3 class="card-subtitles">7. The Swahili Community</h3>
          <p class="tribe-description">
            The Swahili people, or Waswahili, live mainly along Kenya’s coastal region — from Lamu and Mombasa to Kilifi and Kwale. <br/>
            Their culture is a beautiful blend of African, Arab, Persian, and Indian influences shaped by centuries of trade across the Indian Ocean.<br/>
            Swahili culture is known for its elegant architecture, poetry, music, and cuisine. Their language, Kiswahili, has become Kenya’s national language and a symbol of unity across East Africa. <br/>
            Swahili homes are often adorned with intricate wooden doors, and their food — such as biryani, pilau, and coconut-based dishes — reflects the rich coastal heritage.<br/>
            The community values family, faith, and hospitality. Festivals like Maulidi in Lamu celebrate their Islamic traditions with music, dhow races, and cultural performances, showcasing the vibrant soul of the Swahili coast.
          </p>
        </v-col>

      </v-row>
      <br/>
      <h2 class="title"
      style="color: black;text-decoration: underline;text-align: left;">Celebrating Kenya’s Unity in Diversity</h2>
      <p class="text" style=" font-size: 1.2rem;">
        Kenya is a land where diverse communities come together to form a rich cultural mosaic. <br/>
        From the Maasai in the south to the Swahili on the coast, each tribe brings its own stories, traditions, and rhythms, creating a vibrant tapestry of heritage. <br/>
        Despite differences in language, dress, and customs, these communities share values of family, respect, and celebration of life.<br/>
        Together, they reflect the spirit of unity in diversity that defines Kenya, inviting everyone to appreciate, learn, and celebrate the nation’s cultural wealth.<br/>
        Come and enjoy our traditional foods.
      </p>
      <p style="
      font-style: italic;
       font-size: 2em;
      line-height: 3em;
      text-decoration: underline;">
      "In every dance, every song, every story, Kenya’s heart beats in unison."</p>
      <br/>
      <h2 class="title"
      style="color: black;text-decoration: underline;text-align: left;">Experience Kenya’s Cultures</h2>
      <p class="text" style=" font-size: 1.2rem">Dive deeper into Kenya’s vibrant traditions! Explore festivals, try traditional dishes, visit cultural sites, and connect with communities to truly experience the heart of this nation.</p>
      <p style="text-align: center; font-size: 1.2rem;">
        <router-link to="/hotels">Click here!</router-link> to book a room and   create your lifetime experience</p>
        <br/>
        <br/>
        <p style="font-size: 2em;text-align: center;">Karibu Kenya ,Twawapenda(<i>welcome to Kenya, We Love You All</i>)</p>
      </v-container>
  </div>
<div class="footer">
  <p>© 2025 SafariGuide</p>
  <div class="contact">
    <h3>For Assistance Contact Us On :</h3>
    <p> +254 113268956 | +254 723075680</p>
    <p> safariguide@gmail.com</p>
  </div>
  <p>Your next great adventure begins here.</p>
  <p class="highlight">Karibu Kenya.</p>
</div>
</template>

<style scoped>
.text{
  font-size: 1.65em;
}
.page {
  background-color: #f5f5dc;
  min-height: 100vh;
}

.nema {
  position: relative;
  background-image: url("/destinations/cultures/degleex-ganzorig-0kIbj3yEvOM-unsplash.jpg");
  background-size: cover;
  background-position: center;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nema::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.title {
  position: relative;
  z-index: 2;
  color: azure;
  font-weight: bolder;
  text-align: center;
}

.card-subtitles {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}

.tribe-description {
  font-size: 1.2rem;
  line-height: 1.8;
  padding: 1%;
}
.footer {
  background: linear-gradient(135deg, #e6f4ea, #d0f0d9);
  color: #1b5e20;
  width: 100%;
  border-top: 2px solid #1b5e20;
  text-align: center;
  padding: 2rem 1rem;
  font-family: sans-serif;
}

.footer p {
  margin: 0.3rem 0;
}

.footer .highlight {
  font-size: 1.5em;
  font-weight: bold;
}

.footer .contact p {
  margin: 0.2rem 0;
  font-size: 1rem;
  font-weight: 500;
}


</style>
