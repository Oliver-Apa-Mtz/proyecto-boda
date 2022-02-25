<template>
	<v-app>
		<router-view :tokenUser="tokenUser" @updateToken="checkUser"></router-view>
	</v-app>
</template>

<script>

export default {
	name: 'App',
	data() { 
		return{
			tokenUser: false
		}
	},
	methods: {
		checkUser: function(){
			if(localStorage.getItem('userHotel')){
				this.tokenUser = true
			}else{
				this.tokenUser = false
			}
		}
	},
	mounted: async function (){
        this.checkUser()
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700&display=swap');
*{
	font-size: 10px;
	font-family: 'Poppins', sans-serif;
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	color: #0A1931;
}
a{
	text-decoration: none;
}
.no-padding{
	padding: 0px !important;
}
</style>