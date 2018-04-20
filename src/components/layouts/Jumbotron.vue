<template>
<div>
	<div class="container">
		<div class="row hero">
			<div class="col-md-4 logo">
				<img src="../../assets/main-logo.png" alt="Frigo star logo" width="100%"/>
			</div>
			<div class="col-md-8 center-block">
				<div class="bcground">
					<h1 class="text-center"><i>Dobrodošli</i></h1>
					<span class="clear spacer_responsive_hide_mobile " style="height:13px;display:block;"></span>
					<p class="text-center">Vaše je da poželite, a mi ćemo ispuniti Vaše želje.</p>
					<p class="text-center">"Frigo Star" se bavi proizvodnjom profesionalne ugostiteljske opreme koja se koristi u pekarskoj i mesarskoj industriji, ugostiteljstvu i trgovinama.</p>
					<p class="text-center">Iskustvo, preciznost i profesionalnost rezultiraju visokim kvalitetom naših proizvoda, a  prilagodljivost Vašim željama i kratki rokovi isporuke su razlog zašto smo na samom vrhu u proizvodnji grejnih i rashladnih elemenata.</p>
				</div>
			</div>
		</div>
	</div>
	<app-carousel></app-carousel>
	<div class="container">
		<div class="row">
			<section id="idea" >
				<img class="negativ d-none d-md-block" src="../../assets/sijalica.png" alt="lightbulb" id="sijalica">
				<p class="negativ" >Rešili ste da otvorite ugostiteljski objekat ili da renovirate već postojeći.
				<br> Na pravom ste mestu.
				<br> Frigo Star će se pobrinuti za sve što Vam treba.
				</p>
			</section>
		</div>
		<div class="row">
			<h3 class="bcground">Naš tim se sastoji od predanih i talentovanih ljudi koji će dati sve od sebe kako bi Vi bili zadovoljni.</h3>
		</div>
		<div class="row">
			<div class="col-12 col-sm-12 col-md-6 col-lg-6">
				<img class="our-team img-fluid" src="../../assets/adult-advertising-brand-162625.png" alt="hitachi">
			</div>
			<div class="col-12 col-sm-12 col-md-6 col-lg-6">
				<img class="our-team img-fluid" src="../../assets/construction-craftsman-hammer-8092.png" alt="hammerman">
			</div>
		</div>
	</div>
</div>
</template>

<script>
import Carousel from './Carousel.vue';

export default {
	components: {
		'app-carousel': Carousel
	},
	data(){
		return {

		}
	}
}
</script>

<style scoped>
	.logo{
		/*padding-top: 50px;*/
	}
	.container{
		color: #fff;
		font-size: 16px;
	}
	.col-md-8{
		padding-top: 50px;
	}
	.negativ{
		color: #FFFFFF !important;
		padding-top: 20px;
	}
	.our-team{ border-radius: 20px; }
	img[alt="hitachi"]{ margin-bottom: 30px; }
	h3{ color: #008EFF; margin: 20px auto; }
	#idea {
		background:#008EFF;
		overflow:hidden;
		color: #fff;
		border-radius: 120px;
		font-size: 18px;
		padding: 10px 40px 30px 40px;
		min-width: 100%;
		margin-bottom: 160px;
	}
	#sijalica {
		float:left;
		margin-right: 0px;
		-webkit-animation: sijalica 2s infinite;
		-moz-animation: sijalica 2s infinite;
		-o-animation: sijalica 2s infinite;
		animation: sijalica 2s infinite;
	}
	/* dodate su prefiks varijante animacije zbog nekih starijih browsera */

	@-webkit-keyframes sijalica {
		0% {    opacity:0; }
		30% {   opacity:0.7; }
		40% {   opacity:0.3; }
		50% {   opacity:1; }
		90% {   opacity:1; }
		100% {  opacity:0; }
	}

	@-moz-keyframes sijalica {
		0% {    opacity:0; }
		30% {   opacity:0.7; }
		40% {   opacity:0.3; }
		50% {   opacity:1; }
		90% {   opacity:1; }
		100% {  opacity:0; }
	}

	@-o-keyframes sijalica {
		0% {    opacity:0; }
		30% {   opacity:0.7; }
		40% {   opacity:0.3; }
		50% {   opacity:1; }
		90% {   opacity:1; }
		100% {  opacity:0; }
	}

	@keyframes sijalica {
		0% {    opacity:0; }
		30% {   opacity:0.7;}
		40% {   opacity:0.3;}
		50% {   opacity:1; }
		90% {   opacity:1; }
		100% {  opacity:0; }
	}
</style>
