<template>
<div class="container">
	<div class="row hero">
		<div class="col-md-4 logo">
			<img src="../../assets/main-logo.png" alt="Frigo star logo" width="100%"/>
		</div>
		<div class="col-md-8 center-block">
			<div>
				<h1 class="text-center"><i>Dobrodošli</i></h1>
				<span class="clear spacer_responsive_hide_mobile " style="height:13px;display:block;"></span>
				<p class="text-center">Vaše je da poželite, a mi ćemo ispuniti Vaše želje.</p>
				<p class="text-center">"Frigo Star" se bavi proizvodnjom profesionalne ugostiteljske opreme koja se koristi u pekarskoj i mesarskoj industriji, ugostiteljstvu i trgovinama.</p>
				<p class="text-center">Iskustvo, preciznost i profesionalnost rezultiraju visokim kvalitetom naših proizvoda, a  prilagodljivost Vašim željama i kratki rokovi isporuke su razlog zašto smo na samom vrhu u proizvodnji grejnih i rashladnih elemenata.</p>
			</div>
		</div>
	</div>
	<div class="row">
		<section id="idea" class="negativ d-none d-md-block">
			<img src="../../assets/sijalica.png" alt="lightbulb" id="sijalica">
			<p class="negativ" >Rešili ste da otvorite ugostiteljski objekat ili da renovirate već postojeći.
			<br> Na pravom ste mestu
			<br> Frigo Star će se pobrinuti za sve Vaše želje i potrebe.
			</p>
		</section>
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
	.hero{
		margin-top: 30px;
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
	#idea {
		background:#008EFF;
		padding:10px;
		overflow:hidden;
		color: #fff;
		border-radius: 120px;
		font-size: 18px;
		padding-left: 30px;
		padding: 20px 40px;
		min-width: 100%;
		margin-top: 60px;
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
