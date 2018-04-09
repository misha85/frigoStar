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
								<router-link class="btn btn-default dropdown-item" to="/asortiman/rashladni-uredjaji" data-toggle="collapse" data-target=".navbar-collapse.show" active-class="active" exact>Rashladni uređaji</router-link>
								<router-link class="btn btn-default dropdown-item" to="/asortiman/grejni-uredjaji" data-toggle="collapse" data-target=".navbar-collapse.show" active-class="active" exact>Grejni uređaji</router-link>
								<router-link class="btn btn-default dropdown-item" to="/asortiman/termicki-uredjaji" data-toggle="collapse" data-target=".navbar-collapse.show" active-class="active" exact>Termički uređaji</router-link>
								<!-- <div class="dropdown-divider"></div> -->
								<router-link class="btn btn-default dropdown-item" to="/asortiman/neutralna-oprema" data-toggle="collapse" data-target=".navbar-collapse.show" active-class="active" exact>Neutralna oprema</router-link>
							</div>
							<!--  dropdown-menu -->
						</li>
						<li class="nav-item">
							<router-link class="nav-link" to="/kontakt" data-toggle="collapse" data-target=".navbar-collapse.show" active-class="active" exact>Kontakt&nbsp;<i class="fab fa-pagelines"></i></router-link>
						</li>
					</ul>


				</div>
				<!--  navbar-collapse -->
                <div class="col-3 d-none d-md-block d-sm-none">
                    <router-link to='/' class="nav-link"><img src="../../assets/logo.png" class="nav-item" alt="frigostar-logo">
                    </router-link>
                </div><!--  col-3 -->
			</nav>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				infoActive: false
			}
		}
	}
</script>

<style scoped>
	.navigation{
		padding: 20px;
		border-radius: 5px;
		margin: 0px 10px;
	}
	.bg{
		background: #008EFF;
	}
	.active{
		color: #fff;
	}
	.dropdown:hover>.dropdown-menu{
       display: block;
   }
   .nav-link{
   	cursor: pointer;
   	text-align: left;
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
   }
   .dropdown-item:hover{
   	color: #0700FF;
   }
</style>
