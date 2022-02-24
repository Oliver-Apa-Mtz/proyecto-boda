<template>
    <v-footer dark padless class="Footer">
        <v-card class="flex" flat tile>
            <v-card-title class="teal text-center">
                Aliquid qui atque deserunt consequuntur ad, doloribus iusto id enim eos dolorem placeat obcaecati alias quisquam, nulla rerum iste! Provident, quidem fugiat.
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
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
            ],
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
    background-color: #FEDDBE !important;
    color: black !important;
    font-weight: 300;
    font-size: 1rem;
}
.Footer > div{
    width: 100%;
}
</style>