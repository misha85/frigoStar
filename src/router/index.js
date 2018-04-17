import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import AboutUs from '@/components/AboutUs.vue';
import Contact from '@/components/Contact.vue';
import Login from '@/components/Login.vue';
import Product from '@/components/products/Product.vue';
import Products from '@/components/products/Products.vue';
import Groups from '@/components/products/Groups.vue';
import singleProduct from '@/components/products/singleProduct.vue';
import Edit from '@/components/products/Edit.vue';
import Add from '@/components/products/Add.vue';

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{ path: '/', component: Home },
		{ path: '/o-nama', component: AboutUs },
		{ path: '/katalog', component: Product, children: [
			{ path: 'kategorije', component: Products, name: 'category' },
			{ path: 'grupe', component: Groups, name: 'groups' },
			{ path: 'proizvod', component: singleProduct, name: 'product' },
			{ path: 'proizvod/izmeni', component: Edit, name: 'edit' },
			{ path: 'proizvod/dodaj-novi', component: Add, name: 'add' }
		] },
		{ path: '/kontakt', component: Contact },
		{ path: '/frigo/ubuntu/star/centos/admin/mint/login', component: Login },
		{ path: '*', redirect: '/' }
	]
})
