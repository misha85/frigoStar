<template>
	<footer>
		<div v-if="!contact" id="sub-footer" class="footer navbar-fixed-bottom">
			<div class="jumbotron jumbotron-fluid"> <!--subfuter-->
				<div class="container">
					<div class="row">
						<div class="col-lg-3 col-md-5 col-sm-6 col-12">
							<h5>Kontakt podaci:</h5>
							<p><i class="fa fa-2x fa-phone"></i> &nbsp;+381 64/9874-580</p>
							<p><i class="fa fa-2x fa-envelope"></i> &nbsp;frigostar01@gmail.com</p>
							<p><i class="fa fa-2x fa-globe"></i> &nbsp;www.frigostar01.com</p>
						</div> <!-- offset-md -->
						<div class="col-lg-3 col-md-5 col-sm-6 col-12">
							<h5>Radno vreme i adresa:</h5>
							<i class="fas fa-2x fa-map-signs"></i><p class="p-home"> &nbsp;Rumska 65, Dobrinci <br> <small>(opština Ruma)</small> Srbija.</p>
							<p class="float-left"><i class="fas fa-2x fa-clock"></i>&nbsp;</p>
							<p> &nbsp;Radnim danima: 9:30-19h<br> &nbsp;Subotom: 9:30-15h</p>
						</div> <!-- offset-md -->
						<div class="col-lg-4 col-md-7 col-sm-8 col-12">
							<h5>Briga o klijentima:</h5>
							<ul class="link-list">
								<li><i class="fa fa-plus"></i> &nbsp;Kratak rok isporuke proizvoda.</li>
								<li><i class="fa fa-plus"></i> &nbsp;Vrhunski kvalitet proizvoda i usluga.</li>
								<li><i class="fa fa-plus"></i> &nbsp;Konkurentna cena proizvoda i usluga.</li>
							</ul>
						</div> <!-- offset-md -->
						<div class="col-lg-2 col-md-5 col-sm-4 col-12">
							<h5>Sertifikati:</h5>
							<ul class="link-list">
								<li><i class="fas fa-shield-alt"></i> &nbsp;ISO 9001:2008</li>
								<li><i class="fas fa-shield-alt"></i> &nbsp;14001:2008</li>
								<li><i class="fas fa-shield-alt"></i> &nbsp;HCCP</li>
							</ul>
						</div> <!-- offset-md -->
					</div> <!-- row -->
				</div> <!-- container -->
			</div> <!--end subfuter-->
		</div>

		<div id="footer">
			Copyright &copy; by <img class="logo" src="../../assets/footer-logo.png" alt="frigostar-logo"> 2018
		</div>
	</footer>
</template>

<script>
export default {
	data(){
		return {
			contact: false
		}
	},
	methods:{
		hideFooter(){
			if(this.$route.path === '/kontakt'){
				this.contact = true;
			} else {
				this.contact = false;
			}
		}
	},
	created(){
		this.hideFooter();
	},
	watch:{
		'$route'(){
			this.hideFooter();
		}
	}
}
</script>

<style scoped>
	#sub-footer{
		min-width: 100%;
		color: #fff;
	}
	.jumbotron{
		margin: 0;
		padding: 0;
		background: inherit;
	}
	.container .row{
		text-align: left;
		margin: 40px 0 40px 0;
	}
	.fa-clock{
		margin-top: 10px;
	}
	#footer{
		background: #008EFF;
		color: #fff;
		padding: 10px;
	}
	.fa-map-signs,
	.fa-globe,
	.fa-clock,
	.fa-phone,
	.fa-envelope,
	.fa-plus,
	.fa-shield-alt{ color: #008EFF !important; }
	.fa-map-signs{ position: absolute; top: 50px; }
	.p-home{ margin-left: 45px; }
	ul{ list-style: none; padding-left: 0; }
	h5{ margin-bottom: 20px; color: #008EFF; font-size: 19px; }
</style>
