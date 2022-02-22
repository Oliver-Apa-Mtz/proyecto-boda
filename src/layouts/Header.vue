<template>
    <header class="Header">
        <v-row>
            <v-col sm="2" md="4" class="d-flex align-center">
                <router-link class="Header__title" to="/home">A&A</router-link>
            </v-col>
            <v-col sm="10" md="8" class="d-flex align-center justify-end">
                <nav class="Header__nav d-flex align-center">
                    <router-link to="/home">Home</router-link>
                    <router-link to="/home">Historia</router-link>
                    <router-link to="/home">Fotos</router-link>
                    <router-link to="/home">Videos</router-link>
                    <v-btn class="btn-exit" v-if="tokenUser" depressed @click="expireSesion">Salir</v-btn>
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
            statusModal: false
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
}
.Header a{
    display: block;
    text-decoration: none;
    color: black !important;
}
.Header__title{
    font-size: 2.4rem;
    font-weight: 700;
}
.Header__nav a{
    font-size: 1rem;
    margin-right: 20px;
    font-weight: 300;
}
.btn-exit{
    background-color: #000957 !important;
    color: white !important;
}
@media(max-width: 600px){
    .Header{
        height: 50px;
        padding: 0 10px;
    }
    .Header__title{
        font-size: 2rem;
    }
    .Header__nav a{
        margin-right: 10px;
        font-size: .8rem;
    }
}
</style>