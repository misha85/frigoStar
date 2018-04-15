<template>
<div class="container">
	<div class="row">
		<div class="sub-nav">
			<h1><i>{{ title }}</i></h1>
		</div>
	</div>
	<div class="row">
		<div class="buttons" v-for="group in groups">
			<router-link :to="{ name: 'groups', query: { kategorija: group.ktg_id, naziv: group.urlIme, id: group.grp_id } }" tag="button" class="btn btn-light">{{ group.grp_ime }}</router-link>
		</div>
	</div>
	<hr>
	<div class="row">
		<article class="product col-lg-3 col-md-4 col-sm-6 col-6" v-for="product in products">
			<router-link :to="{ name: 'product', query: { grupa: product.grp_id, naziv: product.urlTitle, id: product.pzv_id } }" tag="a">
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
</template>

<script>
import axios from 'axios';
import { URL_PATH } from '../../config.js';

export default {
	data(){
		return {
			products: [],
			groups: [],
			category: '',
			catUrl: '',
			title: ''
		}
	},
	methods: {
		getProducts() {
			axios.get(URL_PATH.url+"get-products", {
				params: {
					catId: this.$route.query.id
				}
			}).then( response => {
				this.products = response.data.products;
				for(let i=0; i<this.products.length; i++){
					this.products[i].url_img = URL_PATH.url+"get-small-images/"+this.products[i].pzv_id;
					console.log(this.products[i].url_img);
					this.products[i].catUrl = this.products[i].ktg_ime.replace(' ', '_');
					this.products[i].urlTitle = this.products[i].pzv_ime.replace(/ /g, '_');
				}
				this.groups = response.data.groups;
				for(let i=0; i<this.groups.length; i++){
					this.groups[i].urlIme = this.groups[i].grp_ime.replace(/ /g , "_");
				}
			})
		},
	},
	created(){
		this.getProducts();
		this.title = this.$route.query.naziv.replace(/_/g, ' ');
	},
	watch:{
		'$route'(){
			this.getProducts();
			this.title = this.$route.query.naziv.replace(/_/g, ' ');
		}
	}
}
</script>

<style scoped>
	.product{
		margin: 20px 0;
	}
	button{ text-transform: capitalize; margin: 10px; }
	.buttons{ margin: 10px auto; }
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
	.card-footer{ background: #007bff; font-size: 14px; }
	h1{ text-transform: capitalize; color: firebrick }
	.sub-nav{ margin: 20px auto; }

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
</style>
