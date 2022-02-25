<template>
    <div class="Home Home--gradient">
        <v-row>
            <v-col cols="12" sm="12" md="6" lg="7">
               <div class="Home__banner Home__banner--login"></div>
            </v-col> 
           <v-col cols="12" sm="12" md="6" lg="5" class="d-flex justify-center align-center">
               <div class="Home__title Home__title--custom">
                    <h1>Bienvenidos</h1>
                    <h2>Conoce todos los detalles de nuestra boda</h2>
                    <div>
                        <v-row>
                            <v-col >
                                <v-text-field class="inputs" :rules="rules.email" v-model="email" label="Correo electrónico" outlined required></v-text-field>
                                <v-text-field :rules="rules.password" v-model="password" label="Contraseña" outlined type="password" required></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" class="d-flex justify-center align-center">
                                <v-btn class="btn-login" @click="login" rounded x-large>Entrar</v-btn>
                            </v-col>
                        </v-row>
                    </div>
               </div>
           </v-col>
        </v-row>
        <v-snackbar v-model="snackbar">
            Datos incorrectos, intente de nuevo
            <template v-slot:action="{ attrs }">
                <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">Cerrar</v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
import {user} from './../plugins/constants.js';

export default {
    name: 'Admin',
    data () {
        return {
            email: '',
            password: '',
            snackbar: false,
            rules: {
                email: [val => (val || '').length > 0 || 'Introduzca un correo electrónico valido'],
                password: [val => (val || '').length > 0 || 'Introduzca la contraseña correcta']
            },
            dataUser: user
        }
    },
    components: {
		
	},
    computed: {
        formIsValid () {
            return (
                this.email &&
                this.password
            )
        },
    },
    methods: {
        login: function(){
            if(this.dataUser.email == this.email && this.dataUser.password == this.password){
                this.$emit('closeModal')
                localStorage.setItem('userHotel', true);
                this.$emit('updateToken')
                this.$router.push({name: 'Home'})
            }else{
                this.snackbar = true
            }
        }
    },
    mounted: async function (){
        if(localStorage.getItem('userHotel')){
            this.$router.push({name: 'Home'})
        }
    }
}
</script>
<style>
.Home--gradient{
    height: 100vh;
    overflow: hidden;
    background-image: radial-gradient(circle at 31.98% 28.52%, #fffcf9 0, #ffefed 16.67%, #fde0de 33.33%, #f2cdcd 50%, #e6babd 66.67%, #dcabb2 83.33%, #d49faa 100%);
}
.Home__title--custom h2{
    font-size: 2rem !important;
    font-weight: 300 !important;
    margin-bottom: 40px !important;
    line-height: 38px;
}
.btn-login, .v-snack__wrapper.theme--dark{
    color: #EEC373 !important;
    background-color: #000957 !important;
    font-size: 6rem !important;
}
input{
    font-size: 1rem;
}
.v-messages__message{
    font-size: .8rem;
    margin-bottom: 10px;
}
</style>