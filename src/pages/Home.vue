<template>
    <div class="Home">
        <Header :tokenUser="tokenUser" @updateToken="updateToken"></Header>
        <v-row class="mt">
           <v-col cols="12" sm="12" md="6" class="d-flex justify-center align-center no-padding">
               <div class="Home__title">
                    <h2>Hola!</h2>
                    <h1>Soy Antonio</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque similique fugiat voluptatibus deleniti tenetur voluptate, pariatur soluta, voluptatem vero ad esse quae, autem itaque natus molestias tempora accusantium cumque harum!</p>
               </div>
           </v-col>
           <v-col cols="12" sm="12" md="6" class="no-padding">
               <div class="Home__drink__image"></div>
            </v-col> 
        </v-row>
        <v-row>
            <v-col cols="12" sm="12" md="6" class="no-padding">
               <div class="Home__drink__image"></div>
            </v-col> 
           <v-col cols="12" sm="12" md="6" class="d-flex justify-center align-center no-padding">
               <div class="Home__title">
                    <h2>Nuestra historia</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque similique fugiat voluptatibus deleniti tenetur voluptate, pariatur soluta, voluptatem vero ad esse quae, autem itaque natus molestias tempora accusantium cumque harum!</p>
               </div>
           </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
               <div class="section">
                   <div class="section__title text-center">Fotos Boda</div>
                   <div class="section__tabs">
                       <v-tabs center-active>
                            <v-tab>Boda</v-tab>
                            <v-tab>Recalentado</v-tab>
                            <v-tab>Padrinos</v-tab>
                            <v-tab>Amigos</v-tab>
                        </v-tabs>
                   </div>
               </div>
            </v-col>
            <v-row class="section__images d-flex">
                <v-col class="section__images__item d-flex child-flex" cols="4" sm="12" md="6" lg="4">
                    <img :src="require(`../assets/foto-1.jpg`)" alt="">
                </v-col>
                <v-col class="section__images__item d-flex child-flex" cols="4" sm="12" md="6" lg="4">
                    <img :src="require(`../assets/boda-banner.jpg`)" alt="">
                </v-col>
                <v-col class="section__images__item d-flex child-flex" cols="4" sm="12" md="6" lg="4">
                    <img :src="require(`../assets/foto-1.jpg`)" alt="">
                </v-col>
                <v-col class="section__images__item d-flex child-flex" cols="4" sm="12" md="6" lg="4">
                    <img :src="require(`../assets/boda-banner.jpg`)" alt="">
                </v-col>
                <v-col class="section__images__item d-flex child-flex" cols="4" sm="12" md="6" lg="4">
                    <img :src="require(`../assets/foto-1.jpg`)" alt="">
                </v-col>
                <v-col class="section__images__item d-flex child-flex" cols="4" sm="12" md="6" lg="4">
                    <img :src="require(`../assets/boda-banner.jpg`)" alt="">
                </v-col>
                <v-col class="section__images__item d-flex child-flex" cols="4" sm="12" md="6" lg="4">
                    <img :src="require(`../assets/foto-1.jpg`)" alt="">
                </v-col>
                <v-col class="section__images__item d-flex child-flex" cols="4" sm="12" md="6" lg="4">
                    <img :src="require(`../assets/boda-banner.jpg`)" alt="">
                </v-col>
                <v-col class="section__images__item d-flex child-flex" cols="4" sm="12" md="6" lg="4">
                    <img :src="require(`../assets/foto-1.jpg`)" alt="">
                </v-col>
            </v-row>
        </v-row>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

export default {
    name: 'Home',
    props: ['tokenUser'],
    data () {
        return {

        }
    },
    components: {
		Header,
		Footer
	},
    methods: {
        updateToken: function(){
            this.$emit('updateToken')
        }
    },
    mounted: async function (){
        if(localStorage.getItem('userHotel')){
            console.log('entro')
        }else{
            this.$router.push({name: 'Admin'})
        }
    }
}
</script>
<style>
.Home__title{
    width: 100%;
    padding: 40px;
}
.Home__title h1{
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 70px;
    color: #000957;
}
.Home__title h2{
    font-size: 2.8rem;
    margin-bottom: 20px;
    font-weight: 400;
    margin-bottom: 0px;
}
.Home__title p{
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 40px;
    letter-spacing: 1px;
    line-height: 32px;
}
.Home__banner{
    width: 100%;
    height: 100vh;
    background-image: url(../assets/boda-banner.jpg);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}
.Home__drink__text{
    padding: 50px;
}
.Home__drink__image{
    width: 100%;
    height: 650px;
    background-image: url(../assets/person.jpg);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}
.section{

}
.section__title{
    font-size: 3rem;
    font-weight: 600;
    margin: 40px auto;
}
.section__tabs{
    width: max-content;
    margin: 0 auto;
}
.section__images{
    margin: 20px auto 100px;
}
.section__images__item img{
    cursor: pointer;
    transition: all .2s linear;
}
.section__images__item img:hover{
    box-shadow: 0px 4px 12px rgba(0,0,0,.4);
}
.mt{
    margin-top: 60px;
}
@media(max-width: 960px){
    .Home__banner{
        height: 400px;
    }
}
</style>