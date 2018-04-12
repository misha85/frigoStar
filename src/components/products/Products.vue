<template>
<div class="container">
	<div class="row">
		<div class="sub-nav">
			<h1><i>{{ title }}</i></h1>
		</div>
	</div>
	<div class="row">
		<div class="buttons" v-for="group in groups">
			<button class="btn btn-light" @click="filterProducts(group.grp_id)">{{ group.grp_ime }}</button>
		</div>
	</div>
	<div class="row">
		<article class="product col-md-3 col-md-offset-1 col-sm-6 col-xs-4" v-for="product in filteredProducts">
			<router-link :to="'/asortiman/'+product.catUrl+'/'+product.urlId" tag="a">
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
			filteredProducts: [],
			groups: [],
			category: '',
			catUrl: '',
			title: ''
		}
	},
	methods: {
		getProducts() {
			this.category = this.$route.params.category.replace('-', ' ');
			axios.get(URL_PATH.url+"get-products", {
				params: {
					category: this.category
				}
			}).then( response => {
				this.products = response.data.products;
				for(let i=0; i<this.products.length; i++){
					this.products[i].url_img = URL_PATH.url+"get-images/"+this.products[i].pzv_id;
					this.products[i].urlId = this.products[i].pzv_id;
					this.products[i].catUrl = this.products[i].ktg_ime.replace(' ', '-');
					this.title = this.products[0].ktg_ime.replace('-', ' ');
				}
				this.filteredProducts = this.products;
				this.groups = response.data.groups;
				if(this.$route.query.g){
					this.filterProducts(this.$route.query.g);
					if(this.filteredProducts.length < 1){
						this.filteredProducts = this.products;
					}
				}
			})
		},
		filterProducts(id){
			this.filteredProducts = [];
			for(let i=0; i<this.products.length; i++){
				if (this.products[i].grp_id === id) {
					this.filteredProducts.push(this.products[i]);
					if(this.filteredProducts.length < 1){
						this.filteredProducts = this.products;
					}
				}
			}
		}
	},
	created(){
		this.getProducts();
	}
}
</script>

<style scoped>
	.product{
		margin: 20px 0;
	}
	.buttons{ margin: 70px auto; }
	button{ text-transform: capitalize; }
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
	.card-footer{ height: 60px; background: #80C9f4; }
	h1{ text-transform: capitalize; color: #6A6A6A; }
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
