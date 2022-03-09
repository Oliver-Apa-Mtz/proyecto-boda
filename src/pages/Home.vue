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
               <div class="Home__drink__image Home__drink__image--about"></div>
            </v-col> 
           <v-col cols="12" sm="12" md="6" class="d-flex justify-center align-center no-padding ordered-1">
               <div class="Home__title">
                    <h2>Nuestra Historia</h2>
                    <p>Nos conocimos hace 6 años, un 13 de septiembre de 2015 y formalizamos nuestra relación unos meses después cuando empezamos a vivir juntos. Siendo bien aceptados por ustedes: familiares, vecinos y amistades.</p>
                    <p>A los tres años de estar juntos nos queríamos casar, pero por no ser legal en el estado de Oaxaca, se contuvieron nuestras ganas hasta que la ley fue aprobada hasta octubre de 2019; fue cuando decidimos programar la boda para diciembre del 2020.</p>
               </div>
           </v-col>
        </v-row>
        <v-row >
           <v-col cols="12" sm="12" md="6" class="d-flex justify-center align-center no-padding">
               <div class="Home__title text-center">
                    <h2>Nuestra Boda</h2>
                    <p>Debido a la pandemia y a las diversas olas que afectaron al país, se pospuso la boda para el 29 de diciembre de 2021, gracias a que la arrendadora, los grupos musicales y el salón aceptaron el cambio de fecha y respetaron el anticipo dado.</p>
                    <p>Y llegó el gran día, la ceremonia y festejo se realizó en el Gran Hotel Don Nacho, en Salina Cruz, Oaxaca. Coordinó y arregló hermosamente el evento la Mtra. Ingrid Leyva Villalobos. Tocó la Orquesta Limón y Sal de Coatzacoalcos, Veracruz. El delicioso banquete y elegante mobiliario fue a cargo de Enriqueta Eventos y tanto el video como fotografías a cargo de FotoClub Salina Cruz.</p>
               </div>
           </v-col>
           <v-col cols="12" sm="12" md="6" class="no-padding">
               <div class="Home__drink__image Home__drink__image--boda"></div>
            </v-col> 
        </v-row>
        <v-row id="section-photos">
            <v-col cols="12">
               <div class="section">
                   <div class="section__title text-center">Fotos</div>
                   <div class="section__tabs">
                       <v-tabs v-model="tabActivePhotos" center-active>
                            <v-tab href="#tab-1">Boda</v-tab>
                            <v-tab href="#tab-2">Fiesta</v-tab>
                            <v-tab href="#tab-3">Familia</v-tab>
                            <v-tab href="#tab-4">Mesas</v-tab>
                            <v-tab href="#tab-5">Recalentado</v-tab>
                        </v-tabs>
                   </div>
               </div>
            </v-col>
            <v-tabs-items v-model="tabActivePhotos">
                <v-tab-item :value="'tab-1'">
                    <v-row class="section__images d-flex">
                        <v-col v-for="(item, i) in itemsBoda" :key="'boda'+i" class="section__images__item child-flex" cols="6" xs="6" sm="4" md="4" lg="3" :class="{ 'd-none': item.paginate != paginateBoda, 'd-flex': item.paginate == paginateBoda }">
                            <silent-box :image="item" v-if="item.paginate == paginateBoda"></silent-box>
                        </v-col>
                    </v-row>
                    <v-row class="d-flex justify-center" style="width: 100vw" v-if="paginateBodaItems > 1">
                        <div class="text-center mb-4">
                            <v-pagination v-model="paginateBoda" :length="paginateBodaItems" @input="$vuetify.goTo('#section-photos', options)"></v-pagination>
                        </div>
                    </v-row>
                </v-tab-item>
                <v-tab-item :value="'tab-2'">
                    <v-row class="section__images d-flex">
                        <v-col v-for="(item, i) in itemsFiesta" :key="'fiesta'+i" class="section__images__item child-flex" cols="6" xs="6" sm="4" md="4" lg="3" :class="{ 'd-none': item.paginate != paginateFiesta, 'd-flex': item.paginate == paginateFiesta}">
                            <silent-box :image="item" v-if="item.paginate == paginateFiesta"></silent-box>
                        </v-col>
                    </v-row>
                    <v-row class="d-flex justify-center" style="width: 100vw" v-if="paginateFiestaItems > 1">
                        <div class="text-center mb-4">
                            <v-pagination v-model="paginateFiesta" :length="paginateFiestaItems" @input="$vuetify.goTo('#section-photos', options)"></v-pagination>
                        </div>
                    </v-row>
                </v-tab-item>
                <v-tab-item :value="'tab-3'">
                    <v-row class="section__images d-flex">
                        <v-col v-for="(item, i) in itemsFamily" :key="'family'+i" class="section__images__item child-flex" cols="6" xs="6" sm="4" md="4" lg="3" :class="{ 'd-none': item.paginate != paginateFamily, 'd-flex': item.paginate == paginateFamily}">
                            <silent-box :image="item" v-if="item.paginate == paginateFamily"></silent-box>
                        </v-col>
                    </v-row>
                    <v-row class="d-flex justify-center" style="width: 100vw" v-if="paginateFamilyItems > 1">
                        <div class="text-center mb-4">
                            <v-pagination v-model="paginateFamily" :length="paginateFamilyItems" @input="$vuetify.goTo('#section-photos', options)"></v-pagination>
                        </div>
                    </v-row>
                </v-tab-item>
                <v-tab-item :value="'tab-4'">
                    <v-row class="section__images d-flex">
                        <v-col v-for="(item, i) in itemsMesa" :key="'mesa'+i" class="section__images__item child-flex" cols="6" xs="6" sm="4" md="4" lg="3" :class="{ 'd-none': item.paginate != paginateMesa, 'd-flex': item.paginate == paginateMesa}">
                            <silent-box :image="item" v-if="item.paginate == paginateMesa"></silent-box>
                        </v-col>
                    </v-row>
                    <v-row class="d-flex justify-center" style="width: 100vw" v-if="paginateMesaItems > 1">
                        <div class="text-center mb-4">
                            <v-pagination v-model="paginateMesa" :length="paginateMesaItems" @input="$vuetify.goTo('#section-photos', options)"></v-pagination>
                        </div>
                    </v-row>
                </v-tab-item>
                <v-tab-item :value="'tab-5'">
                    <v-row class="section__images d-flex">
                        <v-col v-for="(item, i) in itemsRecalentado" :key="'recalentado'+i" class="section__images__item child-flex" cols="6" xs="6" sm="4" md="4" lg="3" :class="{ 'd-none': item.paginate != paginateRecalentado, 'd-flex': item.paginate == paginateRecalentado}">
                            <silent-box :image="item" v-if="item.paginate == paginateRecalentado"></silent-box>
                        </v-col>
                    </v-row>
                    <v-row class="d-flex justify-center" style="width: 100vw" v-if="paginateRecalentadoItems > 1">
                        <div class="text-center mb-4">
                            <v-pagination v-model="paginateRecalentado" :length="paginateRecalentadoItems" @input="$vuetify.goTo('#section-photos', options)"></v-pagination>
                        </div>
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
                            <v-tab href="#tabVi-1">Nuestra Historia</v-tab>
                            <v-tab href="#tabVi-2">Nuestro Baile</v-tab>
                            <v-tab href="#tabVi-3">Evento Boda</v-tab>
                            <v-tab href="#tabVi-4">Recalentado</v-tab>
                        </v-tabs>
                   </div>
               </div>
            </v-col>
            <v-tabs-items v-model="tabActiveVideos" style="margin: 0 auto;text-align:center;">
                <v-tab-item :value="'tabVi-1'">
                    <v-row class="section__images d-flex">
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <a href="https://drive.google.com/file/d/1ZsIWJzK3kvCtpnt0MePTjPpC6LFr_yfY/view" target="_blank">
                                <img class="section__images__item--small" src="../assets/video-1.png" alt="">
                            </a>
                        </v-col>
                    </v-row>
                </v-tab-item>
                <v-tab-item :value="'tabVi-2'">
                    <v-row class="section__images d-flex">
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <a href="https://drive.google.com/file/d/1-PxeGMCrkfRmIr22I5UODWnRTsfMBDTz/view?usp=sharing" target="_blank">
                                <img class="section__images__item--small" src="../assets/video-2.png" alt="">
                            </a>
                        </v-col>
                    </v-row>
                </v-tab-item>
                <v-tab-item :value="'tabVi-3'">
                    <v-row class="section__images d-flex">
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <a href="https://drive.google.com/file/d/1Oas05fj4nu3xytlv5TOgRaxagZXvW0Qu/view?usp=sharing" target="_blank">
                                <img class="section__images__item--small" src="../assets/video3.jpg" alt="">
                            </a>
                        </v-col>
                    </v-row>
                </v-tab-item>
                <v-tab-item :value="'tabVi-4'">
                    <v-row class="section__images d-flex">
                        <v-col class="section__images__item d-flex child-flex" cols="12" xs="12" sm="6" md="4" lg="3">
                            <a href="https://drive.google.com/file/d/1ew0waGCF70yOKL64_yaPj94Uw73KIDpI/view?usp=sharing" target="_blank">
                                <img class="section__images__item--small" src="../assets/video4.jpg" alt="">
                            </a>
                        </v-col>
                    </v-row>
                </v-tab-item>
            </v-tabs-items>
        </v-row>
        <v-row class="comments__container mb-10">
            <v-col cols="12" sm="12">
               <div class="Home__title Home__title--no-pad text-center">
                   <div class="section__title text-center">Comentarios</div>
                    <p>Si gustas agrega un comentario 😀</p>
               </div>
            </v-col>
            <v-col cols="12" sm="12" md="7" class="comments__table">
                <v-list three-line v-if="comments.length > 0">
                    <template v-for="(item, key) in comments">
                        <v-list-item :key="item.name" class="mb-2">
                            <v-list-item-avatar>
                                <v-img v-if="key % 2 == 0" src="../assets/user-1.png"></v-img>
                                <v-img v-else src="../assets/user-2.png"></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title>{{item.name ? item.name : 'Usuario anonimo'}}</v-list-item-title>
                                <v-list-item-subtitle class="no-truncate">{{item.message}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                </v-list>
                <div v-else class="d-flex align-center justify-center" style="height:50%; width:100%">
                    <h4 class="alert-comments">Aun no hay comentarios, se el primero en comentar!!!</h4>
                </div>
            </v-col>
            <v-col cols="12" sm="12" md="5" class="comments__form">
                <v-text-field v-model="name" label="Nombre (opcional)" outlined clearable class="input-clear"></v-text-field>
                <v-text-field v-model="message" outlined clearable label="Comentario" type="text"></v-text-field>
                <v-row>
                    <v-col cols="12" class="d-flex justify-center align-center">
                        <v-progress-circular v-if="loading" size="24" color="info" indeterminate></v-progress-circular>
                        <v-btn v-else class="btn-login" @click="agregarDato()" rounded x-large :disabled="message.length == 0">Comentar</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row id="section-gracias">
            <v-col cols="12" sm="12" md="8" offset-md="2" class="d-flex justify-center align-center no-padding mb-8">
               <div class="Home__title text-center">
                   <div class="section__title text-center">Agradecimientos</div>
                    <p>Miles de gracias a los padrinos:</p>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="no-truncate">De Brindis y Medioshiga</v-list-item-title>
                            <v-list-item-subtitle class="no-truncate">Lic. Aydee Bautista Medina / Lic. Lusio Antonio Peña Limón</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="no-truncate">Padrinos de Anillo</v-list-item-title>
                            <v-list-item-subtitle class="no-truncate">Lic. Virginia Arriaga Pozos / Ing. Erick Fidel Deantes Torres</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="no-truncate">Padrinos de Pastel</v-list-item-title>
                            <v-list-item-subtitle class="no-truncate">Ing. Joanna del Carmen Matus Castillejos / Ing. Miguel Ángel Castillejos Pineda</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="no-truncate">Padrinos de Mesa de Dulces</v-list-item-title>
                            <v-list-item-subtitle class="no-truncate">Ing. Asunción de María Carlock Acevedo / Ing. José Luis Castillo Díaz</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="no-truncate">Pajecitas</v-list-item-title>
                            <v-list-item-subtitle class="no-truncate">Niñas Tiandra y Padme Cuervo Bautista</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="no-truncate">Madrina de Centros de Mesa con Dulces Regionales</v-list-item-title>
                            <v-list-item-subtitle class="no-truncate">Mtra. Rafaela Raviela Soberanis</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="no-truncate">Madrina de Botanas</v-list-item-title>
                            <v-list-item-subtitle class="no-truncate">Sra. Gladys Chiñas Vázquez</v-list-item-subtitle>
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
        <v-snackbar v-model="snackbar">
            {{responseMessages}}
            <template v-slot:action="{ attrs }">
                <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">Cerrar</v-btn>
            </template>
        </v-snackbar>
        <Footer></Footer>
    </div>
</template>

<script>
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { db } from "../firebase";

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

import photosBoda from "../data/photos-boda.json";
import photosFamily from "../data/photos-family.json";
import photosMesa from "../data/photos-mesa.json";
import photosFiesta from "../data/photos-fiesta.json";
import photosRecalentado from "../data/photos-recalentado.json";

export default {
    name: 'Home',
    props: ['tokenUser'],
    data () {
        return {
            tabActivePhotos: 'tab-1',
            tabActiveVideos: 'tabVi-1',
            paginateBoda: 1,
            paginateFiesta: 1,
            paginateFamily: 1,
            paginateMesa: 1,
            paginateRecalentado: 1,
            dialog: true,
            name: '',
            message: '',
            loading: false,
            comments: [],
            responseMessages: '',
            snackbar: false
        }
    },
    computed: {
        itemsBoda() {
            return photosBoda.data.map((item) => {
                return item;
            })
        },
        paginateBodaItems(){
            return photosBoda.totalPaginate
        },
        itemsFamily() {
            return photosFamily.data.map((item) => {
                return item;
            })
        },
        paginateFamilyItems(){
            return photosFamily.totalPaginate
        },
        itemsMesa() {
            return photosMesa.data.map((item) => {
                return item;
            })
        },
        paginateMesaItems(){
            return photosMesa.totalPaginate
        },
        itemsFiesta() {
            return photosFiesta.data.map((item) => {
                return item;
            })
        },
        paginateFiestaItems(){
            return photosFiesta.totalPaginate
        },
        itemsRecalentado() {
            return photosRecalentado.data.map((item) => {
                return item;
            })
        },
        paginateRecalentadoItems(){
            return photosRecalentado.totalPaginate
        },
        options () {
            return {
                duration: 300,
                offset: 0,
                easing: 'easeInOutCubic',
            }
        },
    },
    components: {
		Header,
		Footer
	},
    methods: {
        updateToken: function(){
            this.$emit('updateToken')
        },
        async getComments () {
            this.comments = []
            const querySnapshot = await getDocs(collection(db, "comments"));
            querySnapshot.forEach((doc) => {
                let data = doc.data()
                data.id = doc.id
                this.comments.push(data)
            });
        },
        async agregarDato(){
            this.loading = true
            await addDoc(collection(db, "comments"), {
                name: this.name,
                message: this.message
            })
            .then(async() => {
                await this.getComments()
            })
            .catch(function(error) {
                console.error(error);
                this.responseMessages = 'Error al añadir el comentario, intente mas tarde'
                this.snackbar = true
            });
            this.resetData()
            this.loading = false
        },
        resetData: function() {
            this.name = ''
            this.message = ''
        }
    },
    mounted: async function (){
        if(localStorage.getItem('userHotel')){
            //console.log('entro')
        }else{
            this.$router.push({name: 'Admin'})
        }
        this.getComments();
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
.Home__title--no-pad{
    padding-bottom: 0px;
}
.Home__banner{
    width: 100%;
    height: 100vh;
    background-image: url(../assets/login.jpg);
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
    background-image: url(../assets/banner-1.jpg);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}
.Home__drink__image--about{
    background-image: url(../assets/banner-2.jpg);
    background-position: center top;
}
.Home__drink__image--boda{
    background-image: url(../assets/banner-3.jpg);
    background-position: center top;
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
    position: relative;
    cursor: pointer;
    transition: all .2s linear;
}
.section__images__item img:hover{
    box-shadow: 0px 4px 12px rgba(0,0,0,.4);
}
.mt{
    margin-top: 60px;
}
.no-truncate{
    white-space: normal !important;
    display: block !important;
    overflow: visible !important;
}
.d-none{
    display: none !important
}
.section__images__item--small{
    height: 400px;
}
.comments__container{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
.comments__table{
    height: auto;
    max-height: 500px;
    overflow: scroll !important;
}
.comments__form{
    padding-top: 80px;
}
.btn-send{
    cursor: pointer;
}
.input-clear .v-input__slot::before{
    display: none;
}
.comments__container .v-list-item__content{
    padding: 10px 0px !important;
}
.alert-comments{
    font-size: 1.6rem;
    text-align: center;
}
@media(max-width: 1200px){
    .Home__drink__image{
        height: 100%;
    }
}
@media(max-width: 960px){
    .Home__banner--login{
        display: none;
    }
    .Home--gradient > .row{
        height: 80%;
    }
    .Home__banner{
        height: 400px;
    }
    .Home__drink__image{
        height: 500px;
        background-position: center 10%;
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
    .Home__title{
        padding: 20px;
    }
    .Home__title h1{
        font-size: 3rem;
        line-height: 55px;
    }
    .Home__title h2{
        line-height: 50px;
    }
    .v-tab{
        min-width: 60px !important;
        padding: 00 5px !important;
        font-size: 12px !important;
    }
    .section__title{
        font-size: 1.8rem;
        margin: 10px auto;
    }
    .Home__title--custom{
        padding: 20px;
    }
    .Home__title--custom h1{
        font-size: 2.6rem;
    }
    .Home__title--custom h2{
        line-height: 35px;
    }
    .section__images__item--small{
        height: 200px;
    }
}
</style>