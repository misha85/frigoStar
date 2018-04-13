import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import AboutUs from '@/components/AboutUs.vue';
import Product from '@/components/products/Product.vue';
import Products from '@/components/products/Products.vue';
import Groups from '@/components/products/Groups.vue';
import singleProduct from '@/components/products/singleProduct.vue';

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{ path: '/', component: Home },
		{ path: '/o-nama', component: AboutUs },
		{ path: '/katalog', component: Product, children: [
			{ path: 'kategorije', component: Products, name: 'category' },
			{ path: 'grupe', component: Groups, name: 'groups' },
			{ path: 'proizvodi', component: singleProduct, name: 'product' }
		] },
		{ path: '*', redirect: '/' }
	]
})
