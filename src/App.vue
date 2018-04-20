<template>
	<div id="app">
		<app-header></app-header>
		<div id="page">
			<transition name="slide" mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
		<app-footer></app-footer>
	</div>
</template>

<script>
import Header from './components/layouts/Header.vue';
import Footer from './components/layouts/Footer.vue';

export default {
	components: {
		'app-header': Header,
		'app-footer': Footer
	},
	name: 'App'
}
</script>
