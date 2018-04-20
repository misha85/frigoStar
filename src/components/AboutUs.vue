<template>
	<div>
		<div class="intro">
			<img class="img-fluid img-top" src="../assets/architecture-bay-bridge-356830.jpg" alt="o nama">
			<div class="container">
				<div class="row">
					<h1 class="d-none d-sm-block"><i>O nama</i></h1>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<h3 class="bcground">Tu smo zbog Vas <i class="far fa-smile"></i></h3>
				<div class="content  bcground">
					<p>
						Bavimo se proizvodnjom profesionalne ugostiteljske opreme (rashladnih uređaja, termičkih uređaja i ostale neutralne opreme) koja se koristi u svim granama ugostiteljstva i trgovine, kao što su : pekare, restorani, pečenjare, poslastičarnice, fast-food objekti, barovi, klubovi, trgovinske radnje, mesare, samoposluge, dragstori, mini marketi, diskonti ...
					</p>
	                <p>
		                <span class="sub-title">Proizvodnja:</span> <br> Svi naši proizvodi izrađuju se u standardnim veličinama, a mogu se prilagoditi željama i potrebama kupaca kao i uslovima prostora za koje su uređaji namenjeni.
		            </p>
					<p>
						<span class="sub-title">Iskustvo:</span> <br> Iskustvo, profesionalnost, tačnost, kao i kratak rok isporuke rezultiraju visokim kvalitetom naših proizvoda. Taj kvalitet mogu da potvrde mnogobrojni kupci, koji nam dugi niz godina ukazuju poverenje i koji su postali deo našeg poslovanja na obostrano zadovoljstvo.
					</p>
					<p>
						<span class="sub-title">Kupci:</span> <br> Naša promocija je preporuka dosadašnjih kupaca koja se zasniva na: kvalitetu, poštovanju rokova isporuke, pouzdanosti i pristupačnosti proizvoda.
					</p>
				</div>
			</div>
			<div class="row">
				<h3 class="bcground">Zašto baš mi <i class="fas fa-question"></i></h3>
				<div class="tools">
					<img src="../assets/garage-hanging-mechanic-162553.jpg" class="img-fluid" alt="">
					<div class="content  bcground">
						<p>
							Kvalitet proizvoda kompanije Frigo Star je uvek na prvom mestu. Od projektovanja do proizvodnje Naši proizvodi podležu sertifikovanom sistemu upravljanja kvalitetom. To zahteva stalnu ulaznu kontrolu repromaterijala, kontrolu procesa projektovanja, proizvodnje, montaže, probe i testiranja, te završnu kontrolu gotovog proizvoda i kontrolu u eksploataciji.
						</p>
						<p>
							SRPS ISO 9001:2008. Kvalitet u funkcionisanju usvojenog standarda potvrđen je izdavanjem odgovarajućeg sertifikata od strane Društva za sertifikaciju . HACCP system prema Codex Alimentarius CAC/RCP1-1969.Rev,4 (2003.), koji se pobrinuo o usklađenju naših proizvoda prema standardima svetske trgovinske organizacije i tržišta EU.
						</p>
						<p>
							Kompanija Frigo-Star proizvodi neutralne, hladne i tople horozontalne vitrine za sve namene.Dimenzije i boja su po želji kupca! U proizvodnom programu imamo veliki broj modela, a moguća je i izrada po želji kupca!
						</p>
					</div>
				</div>
			</div>
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
	.intro{ position: relative; }
	h1{
		position: absolute;
		top: 10px;
		margin-left: 23px;
		color: #fff;
	}
	h3{ margin: 60px 20px 10px 20px; color: #008EFF; }
	.sub-title{
		color: firebrick;
		font-size: 22px;
		text-align: left !important;
	}
	.content{
		padding: 20px;
		box-shadow: 3px 3px 5px #008EFF;
		font-size: 19px;
		color: #fff;
	}
	.container:nth-of-type(2){ margin-bottom: 30px; }
	.tools{
		margin-top: 20px;
	}
	.tools img{
		border-radius: 20px;
		width: 300px;
	}
	hr{ margin-top: 40px; }
	.img-top{ min-width: 100%; }
	.fa-smile{ color: firebrick; margin-left: 5px; }
	.fa-question { color: firebrick; vertical-align: baseline; margin-left: -5px; }
</style>
