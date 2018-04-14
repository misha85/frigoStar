<template>
	<div class="container">
		<div class="row">
			<div class="sub-nav">
				<ul class="nav nav-pills nav-fill">
				  <li v-for="category in categories" :key="category.ktg_id" class="nav-item">
				    <router-link :to="{ name: 'category', query: { naziv: category.urlTitle, id: category.ktg_id } }" tag="a" class="nav-link" exact v-html="category.ktg_ime"></router-link>
				  </li>
				</ul>
				<hr>
			</div>
		</div>
		<div class="">
			<h1 v-if="!query"><i>Naša preporuka</i></h1>
			<div v-if="query">
				<transition name="slide" mode="out-in">
					<router-view></router-view>
				</transition>
			</div>
			<div v-if="!query" class="row">
				<article class="product col-lg-3 col-md-4 col-sm-6 col-6" v-for="product in rnd_products">
					<router-link :to="{ name: 'product', query: { naziv: product.urlTitle, id: product.pzv_id } }" tag="a">
						<div class="card brighten">
							<div class="card-header text-center">
								{{ product.pzv_ime }}
							</div>
								<img class="img-fluid" :src="product.url_img">
							<div class="card-footer">Vise informacija</div>
						</div>
					</router-link>
				</article>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import { URL_PATH } from '../../config.js';

export default{
	data() {
		return {
			categories: [],
			rnd_products: [],
			query: false
		}
	},
	created(){
		if(this.$route.query.naziv !== undefined){
			this.query = true;
		} else{
			this.query = false;
		}
		axios.get(URL_PATH.url+"get-category").then( response => {
			this.categories = response.data.kategorije;
			for(let i=0; i<this.categories.length; i++){
				this.categories[i].urlTitle = this.categories[i].ktg_ime.replace(' ', '_');
				if(i === 0) this.categories[i].ktg_ime += ' <i class="fas fa-thermometer-three-quarters" style="color:red"></i>';
				if(i === 1) this.categories[i].ktg_ime += ' <i class="fas fa-thermometer-empty"></i>';
				if(i === 2) this.categories[i].ktg_ime += ' <i class="fas fa-sun" style="color:orange"></i>';
				if(i === 3) this.categories[i].ktg_ime += ' <i class="fas fa-link" style="color:grey"></i>';
			}
			this.rnd_products = response.data.rnd_products;
				for(let i=0; i<this.rnd_products.length; i++){
					this.rnd_products[i].url_img = URL_PATH.url+"get-images/"+this.rnd_products[i].pzv_id;
					this.rnd_products[i].catUrl = this.rnd_products[i].ktg_ime.replace(' ', '_');
					this.rnd_products[i].urlTitle = this.rnd_products[i].pzv_ime.replace(/ /g, '_');
					this.title = this.rnd_products[0].ktg_ime.replace('-', ' ');
				}
		})
	},
	watch:{
		'$route'(){
			if(this.$route.query.naziv !== undefined){
				this.query = true;
			} else{
				this.query = false;
			}
		}
	}
}
</script>

<style scoped>
	.product{
		margin: 20px 0;
	}
	button{ text-transform: capitalize; margin: 10px; }
	img{
		width: 300px;
	}
	.card{
		color: #fff;
        transition: box-shadow 800ms;
        border-color: firebrick;
        font-size: 21px;
	}
	.card:hover{
		font-size: 21px;
		transition: 100ms;
        box-shadow: 7px 7px 30px -2px rgba(255, 255, 255, 0.75);
	}
	a:hover{
		text-decoration: none;
	}
	.card-body{ padding: 0; }
	.card-header{
		height: 70px;
		padding-top: 5px;
		text-transform: capitalize;
		background: #007bff;
	}
	.card-footer{ font-size: 14px; background: #007bff; }
	h1{ text-transform: capitalize; color: #007bff }
	.sub-nav{ margin: 20px auto; font-size: 21px; }

	.brighten {
	-webkit-filter: brightness(70%);
	-webkit-transition: all 1s ease;
	-moz-transition: all 1s ease;
	-o-transition: all 1s ease;
	-ms-transition: all 1s ease;
	transition: all 1s ease;
	}

	.brighten:hover {
	-webkit-filter: brightness(100%);
	}
	.btn-light{ border-color: firebrick; }
	li{ text-transform: capitalize; }
	.slide-leave-active{
	  transition: opacity 1s ease;
	  opacity: 0;
	  animation: slide-out 1s ease-out forwards;
	}
	.slide-leave{
	  opacity: 1; transform: translateX(0); }
	.slide-enter-active{ animation: slide-in 1s ease-out forwards; }
	@keyframes slide-out{
	  0%{ transform: translateY(0); }
	  100%{ transform: translateY(-30px); }
	}
	@keyframes slide-in{
	  0%{ transform: translateY(-30px); }
	  100%{ transform: translateY(0); }
	}
</style>
