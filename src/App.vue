<template>
	<div id="app">
		<app-header></app-header>
		<div id="page">
			<router-view/>
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

<style>
	#app {
		font-family: 'Raleway', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	#page{
		flex-grow: 1;
	}
</style>
