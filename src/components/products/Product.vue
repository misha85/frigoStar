<template>
<div class="container">
	<div class="row">
		<h5><i>
			<router-link :to="'/asortiman/'+product.catUrl">
				{{ product.ktg_ime | jsUcfirst }}
			</router-link> >
			<router-link :to="{ name: 'category', params: {category: product.catUrl }, query: { g: product.grp_id }}">
				{{ product.grp_ime | jsUcfirst }}
			</router-link></i></h5>
	</div>
	<div class="row main">
		<div class="col-md-8">
			<article class="product">
				<div class="card">
					<div class="card-header">{{ product.pzv_ime }}</div>
					<div class="card-body">
						<img :src="product.imgUrl">
					</div>
					<div class="card-footer" v-html="product.pzv_opis"></div>
				</div>
			</article>
		</div>
		<div class="col-md-4">
			<ul class="list-group">
				<li class="list-group-item li-header text-center">Izaberite kategoriju:</li>
				<router-link tag="a" :to="'/asortiman/'+category.catUrl" v-for="category in categories">
					<li class="list-group-item list-group-item-light">
						{{ category.ktg_ime }}
					</li>
				</router-link>
			</ul>
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
			categories: []
		}
	},
	created(){
		this.getProduct();
		this.title = this.$route.params.category.replace('-', ' ');
	},
	methods:{
		getProduct(){
			axios.get('http://praksa3.mars-t.mars-hosting.com/misa/frigostar/get-product', {
				params: {
					id: this.$route.params.id
				}
			}).then( response => {
				this.product = response.data.product;
				this.product.imgUrl = URL_PATH.url+"get-images/"+this.product.pzv_id;
				this.product.catUrl = this.product.ktg_ime.replace(' ', '-');
				this.$route.params.category = this.product.ktg_ime;
				this.categories = response.data.categories;
				for(let i=0; i<this.categories.length; i++){
					this.categories[i].catUrl = this.categories[i].ktg_ime.replace(' ', '-');
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
	.card-footer{
		color: #fff;
		font-size: 18px;
		background: linear-gradient(to right, #008EFF 20%, #4234EB 80%);
	}
	img{ margin-left: 20px; }
	ul{ list-style: none; }
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
</style>
