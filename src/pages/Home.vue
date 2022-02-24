<template>
    <div class="Home">
        <Header :tokenUser="tokenUser" @updateToken="updateToken"></Header>
        <v-row class="mt" id="section-home">
           <v-col cols="12" sm="12" md="6" class="d-flex justify-center align-center no-padding">
               <div class="Home__title">
                    <h2>Hola!</h2>
                    <h1>Somos Antonio y Luis Felipe</h1>
                    <p>Soy Antonio, nací en un pueblo de San Luis Potosí hace 45 años. Soy el mayor de 5 hermanos y estudié ingeniería Química en Ciudad Madero. Radico en el bello Tehuantepec desde hace 20 años.</p>
                    <p>Soy Luis Felipe, soy oriundo de esta bella tierra del Istmo de Tehuantepec, tengo 31 años. Me tocó ser el sándwich de 5 hermanos y mi mejor desempeño es como promotor de ventas. En mi infancia radiqué en el estado de Chiapas, pero retorné hace 8 años al seno familiar.</p>
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
                    <h2>Nuestra Historia</h2>
                    <p>Nos conocimos hace 6 años, un 13 de septiembre de 2015 y formalizamos nuestra relación unos meses después cuando empezamos a vivir junto. Siendo bien aceptados por ustedes: familiares, vecinos y amistades.</p>
                    <p>A los tres años de estar juntos nos queríamos casar, pero por no ser legal en el estado de Oaxaca, se contuvieron nuestras ganas hasta que la ley fue aprobada hasta octubre de 2019; fue cuando decidimos programar la boda para diciembre del 2020.</p>
               </div>
           </v-col>
        </v-row>
        <v-row>
           <v-col cols="12" sm="12" md="6" class="d-flex justify-center align-center no-padding offset-md-3 ">
               <div class="Home__title text-center">
                    <h2>Nuestra Boda</h2>
                    <p>Debido a la pandemia y a las diversas olas que afectaron al país, se pospuso la boda para el 29 de diciembre de 2021, gracias a que la arrendadora, los grupos musicales y el salón aceptaron el cambio de fecha y respetaron el anticipo dado.</p>
                    <p>Y llegó el gran día, la ceremonia y festejo se realizó en el Gran Hotel Don Nacho, en Salina Cruz, Oaxaca. Coordinó y arregló hermosamente el evento la Mtra. Ingrid Leyva Villalobos. Tocó la Orquesta Limón y Sal de Coatzacoalcos, Veracruz. El delicioso banquete y elegante mobiliario fue a cargo de Enriqueta Eventos y tanto el video como fotografías a cargo de FotoClub Salina Cruz.</p>
               </div>
           </v-col>
        </v-row>
        <v-row id="section-photos">
            <v-col cols="12">
               <div class="section">
                   <div class="section__title text-center">Fotos</div>
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
                   <div class="section__title text-center">Videos</div>
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
            <v-col cols="12" sm="12" md="6" offset-md="3" class="d-flex justify-center align-center no-padding mb-8">
               <div class="Home__title text-center">
                   <div class="section__title text-center">Agradecimientos</div>
                    <p>Miles de gracias a los padrinos:</p>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>De Brindis y Medioshiga</v-list-item-title>
                            <v-list-item-subtitle>Lic. Aydee Bautista Medina / Lic. Lusio Antonio Peña Limón</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Padrinos de Anillo</v-list-item-title>
                            <v-list-item-subtitle>Lic. Virginia Arriaga Pozos / Ing. Erick Fidel Deantes Torres</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Padrinos de Pastel</v-list-item-title>
                            <v-list-item-subtitle>Ing. Joanna del Carmen Matus Castillejos / Ing. Miguel Ángel Castillejos Pineda</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Padrinos de Mesa de Dulces</v-list-item-title>
                            <v-list-item-subtitle>Ing. Asunción de María Carlock Acevedo / Ing. José Luis Castillo Díaz</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Pajecitas</v-list-item-title>
                            <v-list-item-subtitle>Niñas Tiandra y Padme Cuervo Bautista</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Madrina de Centros de Mesa con Dulces Regionales</v-list-item-title>
                            <v-list-item-subtitle>Mtra. Rafaela Raviela Soberanis</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Madrina de Botanas</v-list-item-title>
                            <v-list-item-subtitle>Sra. Gladys Chiñas Vázquez</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
               </div>
           </v-col>
        </v-row>
        <v-dialog v-model="dialog" max-width="400">
            <v-card>
                <v-card-title class="text-h5">
                    Hola!
                </v-card-title>
                <v-card-text>Primero que nada, agradecemos el interés por visitar esta página y por participar con nosotros en los festejos de nuestro matrimonio. Por eso es importante que la clave de acceso no sea compartida para que gente maliciosa no haga mal uso de los archivos que te comparto.</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue accent-4" text @click="dialog = false">
                        Aceptar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
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
            dialog: true,
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
    margin-bottom: 20px !important;
    font-weight: 400;
    margin-bottom: 0px;
}
.Home__title p{
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 20px;
    letter-spacing: .8px;
    line-height: 26px;
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
    .section__title{
        font-size: 2.4rem;
        margin: 20px auto;
    }
}
@media(max-width: 500px){
    .v-tab{
        min-width: 60px !important;
        padding: 00 5px !important;
        font-size: 12px !important;
    }
}
</style>