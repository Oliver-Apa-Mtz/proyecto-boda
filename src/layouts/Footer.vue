<template>
    <v-footer dark padless class="Footer">
        <v-card class="flex" flat tile>
            <v-card-title class="teal text-center">
                Recuerda, es importante que la clave de acceso no sea compartida para que gente maliciosa no haga mal uso de los archivos que te comparto.
            </v-card-title>
            <v-card-text class="py-2 white--text text-center">
                {{ new Date().getFullYear() }}
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    name: 'Footer',
    data () {
        return {
            
        }
    }
}
</script>
<style>
.Footer{
    width: 100vw;
    height: 80px;
}
.Footer .teal{
    background-color: #EEC373 !important;
    color: black !important;
    font-weight: 300;
    font-size: 1rem;
    display: block;
    word-break: normal;
}
.Footer > div{
    width: 100%;
}
</style>