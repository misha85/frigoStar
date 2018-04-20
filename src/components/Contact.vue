<template>
<div>
	<div class="hero">
		<img src="../assets/background-3228704_1280.png" class="img-fluid" alt="">
	</div>
	<div class="container">
		<div class="row">
			<div class="map col-md-6 col-12">
				<h2 class="bcground">Kako do nas <i class="fas fa-map-signs"></i></h2>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2821.7877564526134!2d19.92655530919634!3d44.95192898385917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a530dd168f303%3A0x79165094a22a4159!2z0KDRg9C80YHQutCwIDY1LCDQlNC-0LHRgNC40L3RhtC4!5e0!3m2!1ssr!2srs!4v1523741196751" height="350" frameborder="0" style="border:0" allowfullscreen></iframe>
			</div>
			<div class="form col-md-6 col-12">
				<h2 class="bcground">Tu smo za svako vaše pitanje</h2>
				<form>
					<div class="email form-group">
						<input v-model="from" type="email" class="form-control" id="email" name="email" placeholder="vaša email adresa..." required>
					</div>
					<div class=" form-group">
						<input v-model="subject" type="text" class="form-control" id="subject" name="subject" placeholder="tema.." required>
					</div>
					<div class="form-group">
					    <textarea v-model="content" name="body" id="body" class="form-control" placeholder="vaša poruka..." rows="5"></textarea>
					</div>
					<div class="form-group">
						<button @click.prevent="sendMail" type="submit" class="btn btn-primary" name="submit">Pošalji</button>
					</div>
				</form>
			</div>
		</div>
		<div class="row">
			<div class="info col-md-6 col-12 bcground">
				<div class="row">
					<h4>Kontakt podaci:</h4>
					<p class="col-12 address"><strong>Adresa:</strong> Rumska 65, Dobrinci <small>(opština Ruma)</small> Srbija</p>
					<p class="col-12 address"><strong>Telefon:</strong> +381 64/9874-580</p>
					<p class="col-12 address"><strong>Email:</strong> frigostar01@gmail.com</p>
					<p class="col-12 address"><strong>Web adresa:</strong> www.frigostar01.com</p>
				</div>
			</div>
			<div class="handshake col-md-6 col-12">
				<h4 class="bcground">Radujemo se budućoj saradnji <i class="far fa-smile"></i></h4>
				<img src="../assets/achievement-agreement-business-886465.png" class="img-fluid" alt="">
			</div>
		</div>
	</div>
	<!--  BOOTSTRAP  MODAL -->
	<div class="modal fade" id="mailModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="exampleModalLabel">Frigo Star</h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
	        Vaša poruka je poslata. Odgovorićemo Vam u što kraćem roku.
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-secondary" data-dismiss="modal">U redu</button>
	      </div>
	    </div>
	  </div>
	</div>
</div>
</template>

<script>
import axios from 'axios';

export default {
	data(){
		return {
			from: '',
			subject: '',
			content: ''
		}
	},
	methods:{
		sendMail(){
			let data = new FormData();
			data.append('from', this.from);
			data.append('subject', this.subject);
			data.append('message', this.content);
			// axios.post("https://milosh.000webhostapp.com/sendMail.php", data).then( response => {
			axios.post("http://663n121.mars1.mars-hosting.com/api/send-mail", data).then( response => {
				$('#mailModal').modal('show');
				this.from = '';
				this.subject = '';
				this.content = '';
				console.log(response.data);
			})
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
	.form-group{ padding: 0 15px; }
	label{ color: #fff; }
	.btn{ margin-top: 20px; }
	.hero img{
		min-width: 100%;
		max-height: 650px;
	}
	.col-6:nth-of-type(2){ margin-top: 10px; }
	.handshake{ margin: 20px  0 40px 0; padding: 0; }
	.handshake img{ border-radius: 20px; }
	h4{ color: #008EFF; margin: 20px auto; font-size: 25px; }
	.info{ margin: 20px  0 40px 0; }
	.address{ color: #fff; text-align: left; }
	p{ font-size: 18px; }
	strong{ color: #008EFF; }
</style>
