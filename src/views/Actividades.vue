<template>
    <div>
        <v-container>
            <v-row no-gutters justify="center" align="center">
                <h1 class="display-3 font-weight-black mt-3">
                    Planes <span class="font-weight-regular"> Ecoturísticos </span>
                </h1>
            </v-row>
        </v-container>
        <div class="d-flex justify-center flex-wrap" tile>
            <v-card v-for="plan in planes" :key="plan.name" class="mx-4 my-2" max-width="300">
                <div class="d-flex justify-center mt-3">
                    <v-avatar size="200">
                        <img :src="plan.img" :alt="plan.name"/>
                    </v-avatar>
                </div>
                
                <v-card-text>
                    <h2 class="texts-h6 red--text">{{plan.name}}</h2>
                    <p class="text-caption">{{plan.text}}</p>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
    name: "Actividades",
    components:{},
    data(){
        return{
            planes:[
                {
                    name: "Guatavita",
                    img: require("../assets/laguna.jpg"),
                    text: "La laguna de guatavita se encuenta a x kilometros de Bogotá...etc"
                }
            ]
        }
    }
};
</script>