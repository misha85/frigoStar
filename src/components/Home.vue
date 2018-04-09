<template>
<div>
	<app-jumbotron></app-jumbotron>
	<app-carousel></app-carousel>
</div>
</template>

<script>
import Jumbotron from './layouts/Jumbotron.vue';
import Carousel from './layouts/Carousel.vue';

export default {
	components: {
		'app-jumbotron': Jumbotron,
		'app-carousel': Carousel
	},
	data(){
		return {

		}
	}
}
</script>

<style scoped>

</style>
