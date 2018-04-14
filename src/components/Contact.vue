<template>
<div>
	<div class="hero">
		<img src="../assets/background-3228704_1280.jpg" class="img-fluid" alt="">
	</div>
	<div class="container">
		<div class="row">
			<div class="map col-md-6 col-12">
				<h2>Kako do nas <i class="fas fa-map-signs"></i></h2>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2821.7877564526134!2d19.92655530919634!3d44.95192898385917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a530dd168f303%3A0x79165094a22a4159!2z0KDRg9C80YHQutCwIDY1LCDQlNC-0LHRgNC40L3RhtC4!5e0!3m2!1ssr!2srs!4v1523741196751" height="350" frameborder="0" style="border:0" allowfullscreen></iframe>
			</div>
			<div class="form col-md-6 col-12">
				<h2>Tu smo za svako vaše pitanje</h2>
				<form>
					<div class="email form-group">
						<label for="email">Email:</label>
						<input type="email" class="form-control" id="email" name="email" placeholder="vaša email adresa..." required>
					</div>
					<div class="form-group">
						<label for="body">Poruka:</label>
					    <textarea name="body" id="body" class="form-control" placeholder="vaša poruka..." rows="5"></textarea>
					</div>
					<div class="form-group">
						<button type="submit" class="btn btn-primary" name="submit">Pošalji</button>
					</div>
				</form>
			</div>
		</div>
		<div class="row">
			<div class="info col-md-6 col-12">
				<div class="row">
					<h4>Kontakt podaci:</h4>
					<p class="col-12 address"><strong>Adresa:</strong> Rumska 65, Dobrinci <small>(opština Ruma)</small> Srbija</p>
					<p class="col-12 address"><strong>Telefon:</strong> +381 64/9874-580</p>
					<p class="col-12 address"><strong>Email:</strong> frigostar01@gmail.com</p>
					<p class="col-12 address"><strong>Web adresa:</strong> www.frigostar01.com</p>
				</div>
			</div>
			<div class="handshake col-md-6 col-12">
				<h4>Radujemo se budućoj saradnji <i class="far fa-smile"></i></h4>
				<img src="../assets/achievement-agreement-business-886465.jpg" class="img-fluid" alt="">
			</div>
		</div>
	</div>
</div>
</template>

<script>
import GoogleMap from "./GoogleMap.vue";

export default {
	data(){
		return {

		}
	}
}
</script>

<style scoped>
	iframe{
		min-width: 100%;
		border-radius: 20px;
		margin-top: 30px;
	}
	h2{
		margin: 20px auto 0 auto;
		color: #008EFF;;
	}
	.map, .form{ margin-bottom: 30px; }
	.fa-map-signs{ font-size: 30px; }
	form{ margin-top: 30px; }
	label{ color: #fff; }
	.btn{ margin-top: 20px; }
	.hero img{
		min-width: 100%;
		max-height: 650px;
	}
	.col-6:nth-of-type(2){ margin-top: 10px; }
	.handshake{ margin: 20px  0 40px 0; }
	.handshake img{ border-radius: 20px; }
	h4{ color: #008EFF; margin: 20px auto; font-size: 25px; }
	.info{ margin: 20px  0 40px 0; }
	.address{ color: #fff; text-align: left; }
	p{ font-size: 18px; }
	strong{ color: #008EFF; }
</style>
