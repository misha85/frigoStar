<template>
<div class="container">
	<div class="row">
		<div class="buttons" v-for="group in groups">
			<router-link :to="{ name: 'groups', query: { kategorija: group.ktg_id, naziv: group.urlIme, id: group.grp_id } }" tag="button" class="btn btn-light" @click="changeMessageStatus">{{ group.grp_ime }}</router-link>
		</div>
	</div>
	<hr>
	<div class="row">
		<div class="sub-nav">
			<h1><i class="bcground">{{ title }}</i></h1>
		</div>
	</div>
	<div v-if="message" class="message">
		<div class="card text-white bg-light mb-3" style="">
		  <div class="card-header">Frigo Star</div>
		  <div class="card-body">
		    <p class="card-text">
		    	Trenutno nemamo sliku za traženi proizvod, ali slobodno nam se javite i u kratkom roku ćemo pronaći zadovoljavajuće rešenje za Vas.
		    </p>
		  </div>
		</div>
	</div>
	<div v-if="!message" class="row">
		<article class="product col-lg-3 col-md-4 col-sm-6 col-6" v-for="product in products">
			<router-link :to="{ name: 'product', query: { grupa: product.grp_id, naziv: product.urlTitle, id: product.pzv_id } }" tag="a">
				<div class="card brighten">
					<div class="product-header text-center">
						{{ product.pzv_ime }}
					</div>
						<img class="img-fluid" :src="product.url_img">
					<div class="card-footer">Vise informacija</div>
					<router-link v-if="admin" tag="button" class="btn btn-warning" :to="{ name: 'edit', query: { id: product.pzv_id } }">Izmeni</router-link>
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
			title: '',
			message: false,
			admin: false
		}
	},
	methods: {
		getProducts() {
			axios.get(URL_PATH.url+"products/get-products", {
				params: {
					catId: this.$route.query.kategorija,
					grpId: this.$route.query.id
				}
			}).then( response => {
				this.products = response.data.products;
				for(let i=0; i<this.products.length; i++){
					this.products[i].url_img = URL_PATH.url+"images/get-small-images/"+this.products[i].pzv_id;
					this.products[i].catUrl = this.products[i].ktg_ime.replace(' ', '_');
					this.products[i].urlTitle = this.products[i].pzv_ime.replace(/ /g, '_');
				}
				this.groups = response.data.groups;
				for(let i=0; i<this.groups.length; i++){
					this.groups[i].urlIme = this.groups[i].grp_ime.replace(/ /g , "_");
				}
			})
		},
		checkSession(){
			axios.get(URL_PATH.url+'login/session', {
				params: { sid: localStorage.getItem('sid') }
			}).then( response => {
				response.data.res === 'admin' ? this.admin = true : this.admin = false;
			});
		}
	},
	created(){
		this.getProducts();
		this.title = this.$route.query.naziv.replace(/_/g, ' ');
		this.changeMessageStatus;
		this.checkSession();
	},
	watch:{
		'$route'(){
			this.getProducts();
			this.title = this.$route.query.naziv.replace(/_/g, ' ');
			this.changeMessageStatus;
			this.checkSession();
		}
	},
	computed:{
		changeMessageStatus(){
			if(this.products.length === 0){
				return this.message = true;
			} else {
				return this.message = false;
			}
		}
	}
}
</script>

<style scoped>
	.product{
		margin: 20px 0;
		border-radius: 20px;
	}
	button{ text-transform: capitalize; margin: 10px; }
	.btn-warning{
		position: absolute;
		top: 70px;
		margin: 0;
		z-index: 1000;
	}
	.buttons{ margin: 10px auto; }
	img{
		width: 300px;
	    position: relative;
	}
	.card{
		color: #fff;
    transition: box-shadow 800ms;
    border-color: firebrick;
    font-size: 21px;
		border-radius: 7px;
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
	.product-header{
		height: 70px;
		padding-top: 5px;
		text-transform: capitalize;
		background: #007bff;
		border-radius: 7px 7px 0 0;
	}
	.card-text, .card-header{ padding: 10px; color: #2c3e50 }
	.card-footer{
		background: #007bff;
		font-size: 14px;
		border-radius:  0 0 7px 7px;
	}
	h1{ text-transform: capitalize; color: #fff; }
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
	.message{
		margin-top: 40px;
		font-size: 20px;
		color: #f8f9fa;
		font-weight: bold;
	}
</style>
