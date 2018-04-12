import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import AboutUs from '@/components/AboutUs';
import Products from '@/components/products/Products.vue';
import Product from '@/components/products/Product.vue';

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{ path: '/', component: Home },
		{ path: '/o-nama', component: AboutUs },
		{ path: '/asortiman/:category', component: Products, name: 'category' },
		{ path: '/asortiman/:category/:id', component: Product, name: 'product' },
		{ path: '*', redirect: '/' }
	]
})
