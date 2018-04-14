<template>
	<div class="container">
		<div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="5000">
			<div class="carousel-inner">
				<div class="carousel-item">
				  <img class="img-fluid" src="../../assets/1.jpg" alt="...">
				  <div class="carousel-caption d-none d-sm-block">
				    <h5>Topla vitrina</h5>
				    <p>Idealna za sve ugostiteljske objekte.</p>
				  </div>
				</div>
				<div class="carousel-item active">
				  <img class="img-fluid" src="../../assets/2.jpg" alt="...">
				  <div class="carousel-caption d-none d-sm-block">
				    <h5>Rashladna Vitrina</h5>
				    <p>Model rashladne vitrine namenjen za pekare,restorane,poslastičarnice.</p>
				  </div>
				</div>
				<div class="carousel-item">
				  <img class="img-fluid" src="../../assets/3.jpg" alt="...">
				  <div class="carousel-caption d-none d-sm-block">
				    <h5>Topla Vitrina</h5>
				    <p>Namenjena restoranima,poslastičarnicama,picerijama,pekarama...</p>
				  </div>
				</div>
				<div class="carousel-item">
				  <img class="img-fluid" src="../../assets/4.jpg" alt="...">
				  <div class="carousel-caption d-none d-sm-block">
				    <h5>Topla vitrina</h5>
				    <p>Luksuzni model tople vitrine.</p>
				  </div>
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
	#carouselExampleControls{ margin: 60px 0;	}
	.carousel-inner{ border-radius: 20px; }
	.carousel-caption{ background: rgba(0, 0, 0, 0.7); border-radius: 20px; }
	h5{ color: #fff; font-weight: bold; font-size: 25px; }
	.carousel-caption p{ font-size: 18px; }
</style>
