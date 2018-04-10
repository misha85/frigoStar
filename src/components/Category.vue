<template>
<div>
	<ul v-for="product in products">
		<li>{{ product.pzv_ime }}</li>
	</ul>
</div>
</template>

<script>
import axios from 'axios';
export default {
	data(){
		return {
			products: [],
			category: ''
		}
	},
	methods: {
		getProducts() {
			this.category = this.$route.params.category.replace('-', ' ');
			axios.get('http://praksa3.mars-t.mars-hosting.com/misa/frigostar/get-products', {
				params: {
					category: this.category
				}
			}).then( response => {
				this.products = response.data.products;
			})
		}
	},
	watch:{
		'$route' () {
			this.getProducts();
		}
	},
	created(){
		this.getProducts();
	}
}
</script>

<style scoped>

</style>
