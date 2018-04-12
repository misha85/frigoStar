<template>
	<div class="container-fluid bg">
		<div class="container">
			<nav class="navbar navbar-expand-lg navbar-dark">
				<button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<!--  navbar-togler -->
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
						<li class="nav-item">
							<router-link to='/' class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" active-class="active" exact>Početna&nbsp;<i class="fas fa-home"></i></router-link>
						</li>
						<li class="nav-item">
							<router-link to='/o-nama' class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" active-class="active" exact>O nama&nbsp;<i class="fas fa-info-circle"></i></router-link>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" :class="{active: infoActive}" role="button" aria-haspopup="true" aria-expanded="false"><span class="downdrop">Asortiman</span>&nbsp;<i class="far fa-newspaper"></i></a>
							<div class="dropdown-menu"  aria-labelledby="navbarDropdown">
								<router-link v-for="kategorija in kategorije" class="btn btn-default dropdown-item" :to="'/asortiman/'+kategorija.url_ime" data-toggle="collapse" data-target=".navbar-collapse.show" active-class="active" exact>{{ kategorija.ktg_ime }}</router-link>
							</div>
							<!--  dropdown-menu -->
						</li>
						<li class="nav-item">
							<router-link class="nav-link" to="/galerija" data-toggle="collapse" data-target=".navbar-collapse.show" active-class="active" exact>Galerija&nbsp;<i class="fab fa-pagelines"></i></router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" to="/kontakt" data-toggle="collapse" data-target=".navbar-collapse.show" active-class="active" exact>Kontakt&nbsp;<i class="fab fa-pagelines"></i></router-link>
						</li>
					</ul>


				</div>
				<!--  navbar-collapse -->
                <div class="logo col-3 d-none d-md-block d-sm-none">
                    <router-link to='/' class="img-logo nav-link"><img src="../../assets/logo.png" class="nav-item" alt="frigostar-logo">
                    </router-link>
                </div><!--  col-3 -->
			</nav>

		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				infoActive: false,
				kategorije: []
			}
		},
		created(){
			axios.get('http://praksa3.mars-t.mars-hosting.com/misa/frigostar/get-category').then( response => {
				this.kategorije = response.data.kategorije;
				for(let i=0; i<response.data.kategorije.length; i++){
					this.kategorije[i].url_ime = response.data.kategorije[i].ktg_ime.replace(' ', '-');
				}
			});
		}
	}
</script>

<style scoped>
	.navbar{ padding: 20px 0 !important; }
	.navigation{
		padding: 20px;
		border-radius: 5px;
		margin: 0px 10px;
	}
	.bg{
		background: #008EFF;
	}
	.active{
		color: #fff !important;
	}
	.dropdown:hover>.dropdown-menu{
       display: block;
   }
   .nav-link{
   	cursor: pointer;
   	text-align: left;
   	text-transform: capitalize;
   }
   li .dropdown{ position: relative; }
   .dropdown-menu{
		position: absolute;
		top: 30px;
		background: linear-gradient(to bottom, #00EEFF 20%, #0D2FE8 120%);
		border-radius: 10px;
   }
   .dropdown-item{
   		color: #000;
   		text-transform: capitalize;
   }
   .dropdown-item:hover{
   	color: #0700FF;
   }
   .logo{ position: relative; }
   .img-logo{
   	position: absolute;
   	right: 0;
   	top: -30px;
   }
</style>
