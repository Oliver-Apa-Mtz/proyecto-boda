<template>
    <header class="Header">
        <v-row>
            <v-col sm="2" md="4" class="d-flex align-center">
                <a class="Header__title" @click="$vuetify.goTo('#section-home', options)">
                    <img src="../assets/logo.jpg" alt="">
                </a>
            </v-col>
            <v-col sm="10" md="8" class="d-flex align-center justify-end">
                <nav class="Header__nav d-flex align-center">
                    <a @click="$vuetify.goTo('#section-about', options)">Historia</a>
                    <a @click="$vuetify.goTo('#section-photos', options)">Fotos</a>
                    <a @click="$vuetify.goTo('#section-videos', options)">Videos</a>
                    <a @click="$vuetify.goTo('#section-gracias', options)">Gracias</a>
                    <a href="https://drive.google.com/" target="blank">Drive</a>
                    <v-btn class="btn-exit" v-if="tokenUser" depressed @click="expireSesion">Salir</v-btn>
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-app-bar-nav-icon v-bind="attrs" v-on="on" class="menu-icon"></v-app-bar-nav-icon>
                        </template>
                        <v-list>
                            <v-list-item @click="$vuetify.goTo('#section-about', options)">
                                <v-list-item-title>Historia</v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="$vuetify.goTo('#section-photos', options)">
                                <v-list-item-title>Fotos</v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="$vuetify.goTo('#section-videos', options)">
                                <v-list-item-title>Videos</v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="$vuetify.goTo('#section-gracias', options)">
                                <v-list-item-title>Gracias</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <a href="https://drive.google.com/" target="blank">
                                    <v-list-item-title>Drive</v-list-item-title>
                                </a>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>
                                    <v-btn v-if="tokenUser" depressed @click="expireSesion">Salir</v-btn>
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </nav>
            </v-col>
        </v-row>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: ['tokenUser'],
    data () {
        return {
            statusModal: false,
            selections: ['#first', '#second', '#third'],
        }
    },
    computed: {
        options () {
            return {
                duration: 300,
                offset: 0,
                easing: 'easeInOutCubic',
            }
        }
    },
    methods: {
        expireSesion: function(){
            localStorage.removeItem('userHotel');
            this.$emit('updateToken')
            this.$router.push({name: 'Admin'})
        }
    }
}
</script>
<style>
.Header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 60px;
    background-color: white;
    box-shadow: 0px 4px 6px rgba(0,0,0,.1);
    padding: 0 20px;
    z-index: 99;
}
.Header a{
    display: block;
    text-decoration: none;
    color: black !important;
}
.Header__title img{
    height: 50px;
    padding-top: 10px;
}
.Header__nav a{
    font-size: 1rem;
    margin-right: 20px;
    font-weight: 300;
    padding-top: 4px;
    position: relative;
}
.Header__nav a::before{
    position: absolute;
    content: "";
    width: 100%;
    opacity: 0;
    height: 2px;
    left: 0;
    bottom: -2px;
    background-color: #EEC373;
    transition: all .2s linear;
}
.Header__nav a:hover::before{
    opacity: 1;
}
.btn-exit{
    background-color: #000957 !important;
    color: #EEC373 !important;
    margin-top: 4px;
}
.btn-exit:hover{
    background-color: #EEC373 !important;
    color: #000957 !important;
}
.menu-icon{
    display: none;
    margin-top: 6px;
}
@media(max-width: 960px){
    .menu-icon{
        display: block;
    }
    .Header__nav a, .btn-exit{
        display: none;
    }
}
</style>