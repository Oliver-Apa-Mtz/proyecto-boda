<template>
    <div class="Home">
        <Header :tokenUser="tokenUser" @updateToken="updateToken"></Header>
        <v-row class="mt" id="section-home">
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
        <v-row id="section-about">
            <v-col cols="12" sm="12" md="6" class="no-padding ordered-2">
               <div class="Home__drink__image"></div>
            </v-col> 
           <v-col cols="12" sm="12" md="6" class="d-flex justify-center align-center no-padding ordered-1">
               <div class="Home__title">
                    <h2>Nuestra historia</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque similique fugiat voluptatibus deleniti tenetur voluptate, pariatur soluta, voluptatem vero ad esse quae, autem itaque natus molestias tempora accusantium cumque harum!</p>
               </div>
           </v-col>
        </v-row>
        <v-row id="section-photos">
            <v-col cols="12">
               <div class="section">
                   <div class="section__title text-center">Fotos Boda</div>
                   <div class="section__tabs">
                       <v-tabs v-model="tabActivePhotos" center-active>
                            <v-tab href="#tab-1">Boda</v-tab>
                            <v-tab href="#tab-2">Recalentado</v-tab>
                            <v-tab href="#tab-3">Padrinos</v-tab>
                            <v-tab href="#tab-4">Amigos</v-tab>
                        </v-tabs>
                   </div>
               </div>
            </v-col>
            <v-tabs-items v-model="tabActivePhotos">
                <v-tab-item :value="'tab-1'">
                    <v-row class="section__images d-flex">
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="gallery[0]"></silent-box>
                        </v-col>
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="gallery[1]"></silent-box>
                        </v-col>
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="gallery[0]"></silent-box>
                        </v-col>
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="gallery[1]"></silent-box>
                        </v-col>
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="gallery[0]"></silent-box>
                        </v-col>
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="gallery[1]"></silent-box>
                        </v-col>
                    </v-row>
                </v-tab-item>
                <v-tab-item :value="'tab-2'">
                    <v-row class="section__images d-flex">
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="gallery[0]"></silent-box>
                        </v-col>
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="gallery[1]"></silent-box>
                        </v-col>
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="gallery[0]"></silent-box>
                        </v-col>
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="gallery[1]"></silent-box>
                        </v-col>
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="gallery[0]"></silent-box>
                        </v-col>
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="gallery[1]"></silent-box>
                        </v-col>
                    </v-row>
                </v-tab-item>
                <v-tab-item :value="'tab-3'">
                    <v-row class="section__images d-flex">
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="gallery[0]"></silent-box>
                        </v-col>
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="gallery[1]"></silent-box>
                        </v-col>
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="gallery[0]"></silent-box>
                        </v-col>
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="gallery[1]"></silent-box>
                        </v-col>
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="gallery[0]"></silent-box>
                        </v-col>
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="gallery[1]"></silent-box>
                        </v-col>
                    </v-row>
                </v-tab-item>
                <v-tab-item :value="'tab-4'">
                    <v-row class="section__images d-flex">
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="gallery[0]"></silent-box>
                        </v-col>
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="gallery[1]"></silent-box>
                        </v-col>
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="gallery[0]"></silent-box>
                        </v-col>
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="gallery[1]"></silent-box>
                        </v-col>
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="gallery[0]"></silent-box>
                        </v-col>
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="gallery[1]"></silent-box>
                        </v-col>
                    </v-row>
                </v-tab-item>
            </v-tabs-items>
        </v-row>
        <v-row id="section-videos">
            <v-col cols="12">
               <div class="section">
                   <div class="section__title text-center">Videos Boda</div>
                   <div class="section__tabs">
                       <v-tabs v-model="tabActiveVideos" center-active>
                            <v-tab href="#tabVi-1">Boda</v-tab>
                            <v-tab href="#tabVi-2">Amigos</v-tab>
                        </v-tabs>
                   </div>
               </div>
            </v-col>
            <v-tabs-items v-model="tabActiveVideos" style="margin: 0 auto;text-align:center;">
                <v-tab-item :value="'tabVi-1'">
                    <v-row class="section__images d-flex">
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="galleryVideos[0]"></silent-box>
                        </v-col>
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="galleryVideos[0]"></silent-box>
                        </v-col>
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="galleryVideos[0]"></silent-box>
                        </v-col>
                    </v-row>
                </v-tab-item>
                <v-tab-item :value="'tabVi-2'">
                    <v-row class="section__images d-flex">
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="galleryVideos[0]"></silent-box>
                        </v-col>
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="galleryVideos[0]"></silent-box>
                        </v-col>
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <silent-box :image="galleryVideos[0]"></silent-box>
                        </v-col>
                    </v-row>
                </v-tab-item>
            </v-tabs-items>
        </v-row>
        <v-row id="section-gracias">
            <v-col cols="12" sm="12" md="6" offset-md="3" class="d-flex justify-center align-center no-padding">
               <div class="Home__title text-center">
                   <div class="section__title text-center">Gracias</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque similique fugiat voluptatibus deleniti tenetur voluptate, pariatur soluta, voluptatem vero ad esse quae, autem itaque natus molestias tempora accusantium cumque harum!</p>
               </div>
           </v-col>
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
            tabActivePhotos: 'tab-1',
            tabActiveVideos: 'tabVi-1',
            gallery: [
                {
                    src: 'https://images.unsplash.com/photo-1605563432942-0f863d9df42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                    description: 'Fotografia tomada de prueba',
                    alt: 'Foto Boda 1',
                    thumbnailWidth: '100%'
                },
                {
                    src: 'https://images.unsplash.com/photo-1621708596322-bfe4bcbd7b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80',
                    description: 'Fotografia tomada de prueba',
                    alt: 'Foto Boda 2',
                    thumbnailWidth: '100%'
                }
            ],
            galleryVideos: [
                {
                    src: 'https://www.youtube.com/watch?v=fBmiHW_igqc',
                    description: 'Video tomado de prueba',
                    alt: 'Video Boda 1',
                    thumbnailWidth: '100%'
                }
            ]
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
    margin: 20px auto 40px;
}
.section__images__item{
    position: relative;
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
@media(max-width: 1200px){
    .Home__drink__image{
        height: 500px;
    }
}
@media(max-width: 960px){
    .Home__banner{
        height: 400px;
    }
    .Home__title{
        text-align: center;
    }
    .ordered-1{
        order: 1;
    }
    .ordered-2{
        order: 2;
    }
}
@media(max-width: 500px){
    .v-tabs-slider-wrapper{
    }
    .v-tab{
        min-width: 60px !important;
        padding: 00 5px !important;
        font-size: 12px !important;
    }
}
</style>