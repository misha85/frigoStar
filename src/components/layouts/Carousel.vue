<template>
	<div class="container">
		<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img class="d-block w-100" src="../../assets/1.jpg" alt="First slide">
				</div>
				<div class="carousel-item">
					<img class="d-block w-100" src="../../assets/2.jpg" alt="Second slide">
				</div>
				<div class="carousel-item">
					<img class="d-block w-100" src="../../assets/3.jpg" alt="Third slide">
				</div>
				<div class="carousel-item">
					<img class="d-block w-100" src="../../assets/4.jpg" alt="Fourth slide">
				</div>
			</div>
			<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {

		}
	}
}
</script>

<style scoped>
	#carouselExampleControls{
		margin: 60px 0;
	}
	.carousel-inner{ border-radius: 20px; }
</style>
