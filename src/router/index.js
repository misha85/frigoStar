import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AboutUs from '@/components/AboutUs'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{ path: '/', component: Home },
		{ path: '/o-nama', component: AboutUs }
	]
})
