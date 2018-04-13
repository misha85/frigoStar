<template>
	<div class="container">
		<div class="row">
			<div class="sub-nav">
				<ul class="nav nav-pills nav-fill">
				  <li v-for="category in categories" :key="category.ktg_id" class="nav-item">
				    <router-link :to="{ name: 'category', query: { naziv: category.urlTitle, id: category.ktg_id } }" tag="a" active-class="active" class="nav-link" exact>{{ category.ktg_ime }}</router-link>
				  </li>
				</ul>
				<hr>
			</div>
		</div>
		<div class="">
			<h1 v-if="!query"><i>Naša preporuka</i></h1>
			<div v-if="query">
				<router-view></router-view>
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
	.sub-nav{ margin: 20px auto; }
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
        box-shadow: 7px 7px 30px -2px rgba(0, 0, 0, 0.75);
	}
	a:hover{
		text-decoration: none;
	}
	.card-body{ padding: 0; }
	.card-header{
		height: 70px;
		padding-top: 5px;
		text-transform: capitalize;
		background: #80C9f4;
	}
	.card-footer{  background: #80C9f4; }
	h1{ text-transform: capitalize; color: firebrick }
	.sub-nav{ margin: 20px auto; }

	.brighten {
	-webkit-filter: brightness(85%);
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
</style>