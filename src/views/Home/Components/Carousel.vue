<template>
  <v-carousel
    cycle
    height="500"
    hide-delimiter-background
    show-arrows-on-hover
  >    

  <v-carousel-item v-for="image in images" :key="image.url" :src="image.url">
    <v-row align="center" justify="center">
      <!-- <h1
        class="
        d-inline
        green lighten-5
        accent-4
        text-h2
        black--text        
        rounded-xl
        mt-14 
        mb-n12
        px-9 
        pt-3
        pb-9
        font-weight-black 
               
        "
      >
        Ecoturismo
        <span class="font-weight-regural">Cundinamarca</span>
      </h1>
    </v-row>
    <v-row align="center" justify="center">
      <h2
        class="
          textShadow
          grey--text
          text-h5
          font-weight-black
          d-inline
          rounded-xl
          px-9
        "      
      >
      
      </h2>  -->
    </v-row>
  </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        images:[
          {url: require("../../../assets/chingaza_1_4_0.jpg")},
          {url: require("../../../assets/laguna.jpg")},
          {url: require("../../../assets/sendero-penas-del-aserradero.jpg")},
        ],
      }
    },
  }
</script>

<style>
/* .textShadow{
  text-shadow: 4px 3px rgba(red, green, blue, alpha);
} */
</style>