<template>
<div class="container">
	<div class="row">
		<div class="buttons" v-for="group in groups">
			<router-link :to="{ name: 'groups', query: { kategorija: group.ktg_id, naziv: group.urlIme, id: group.grp_id } }" tag="button" class="btn btn-light">{{ group.grp_ime }}</router-link>
		</div>
	</div>
	<div class="row">
		<h5><i>
			<router-link to="/katalog">
				Proizvodi
			</router-link> <span class="arrow">></span>
			<router-link :to="{ name: 'category', query: { naziv: product.catUrl, id: product.ktg_id } }">
				{{ product.ktg_ime | jsUcfirst }}
			</router-link> <span class="arrow">></span>
			<router-link :to="{ name: 'groups', query: { kategorija: product.ktg_id, naziv: product.grpUrl, id: product.grp_id }}">
				{{ product.grp_ime | jsUcfirst }}
			</router-link></i></h5>
	</div>
	<div class=" main">
		<div class="">
			<article class="product">
				<div class="card">
					<div class="card-header">{{ product.pzv_ime }}</div>
					<div class="card-body">
						<img class="img-fluid" :src="product.imgUrl">
					</div>
					<div class="card-footer" v-html="product.pzv_opis"></div>
				</div>
			</article>
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios';
import { URL_PATH } from '../../config.js';

export default {
	data(){
		return {
			product: {},
			categories: [],
			groups: []
		}
	},
	created(){
		this.getProduct();
		this.title = this.$route.query.naziv.replace('_', ' ');
	},
	methods:{
		getProduct(){
			axios.get(URL_PATH.url+'products/get-product', {
				params: {
					id: this.$route.query.id
				}
			}).then( response => {
				console.log(response.data);
				this.product = response.data.product;
				this.product.imgUrl = URL_PATH.url+"images/get-large-images/"+this.product.pzv_id;
				this.product.catUrl = this.product.ktg_ime.replace(' ', '_');
				this.product.grpUrl = this.product.grp_ime.replace(/ /g, '_');
				this.$route.params.category = this.product.ktg_ime;
				this.categories = response.data.categories;
				for(let i=0; i<this.categories.length; i++){
					this.categories[i].catUrl = this.categories[i].ktg_ime.replace(' ', '_');
				}
				this.groups = response.data.groups;
				for(let i=0; i<this.groups.length; i++){
					this.groups[i].urlIme = this.groups[i].grp_ime.replace(/ /g , "_");
				}
			})
		}
	},
	filters: {
		jsUcfirst(string) {
			if (!string) return '';
		    return string.charAt(0).toUpperCase() + string.slice(1);
		}
	},
	watch:{
		'this.$route'(){
			this.$route.params.category = this.product.ktg_ime;
		}
	}
}
</script>

<style scoped>
	.product{ margin-bottom: 20px; }
	h5{
		color: #30288D;
		margin: 30px 0 0px 20px;
	}
	a{ text-decoration: none; }
	.main{ margin-top: 30px; }
	.card-header{
		color: #fff;
		font-size: 24px;
		background: linear-gradient(to right, #4234EB 20%, #008EFF 80%);
		text-transform: capitalize;
	}
	.card-body{ padding: 0; }
	.card-footer{
		color: #fff;
		font-size: 18px;
		background: linear-gradient(to right, #008EFF 20%, #4234EB 80%);
	}
	/*img{ margin-left: 20px; }*/
	ul{ list-style: none; }
	button{ text-transform: capitalize; margin: 10px; }
	.buttons{ margin: 10px auto; }
	li{
		text-align: left;
		text-transform: capitalize;
		color: #008EFF;
	}
	.li-header{
		background: #008EFF;
		color: #fff;
		height: 65px;
		padding-top: 20px;
	}
	.btn-light{ border-color: firebrick; }
	.arrow{ color: #fff; }
</style>
