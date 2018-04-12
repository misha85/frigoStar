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
	.slide-leave-active{
	  transition: opacity 1s ease;
	  opacity: 0;
	  animation: slide-out 1s ease-out forwards;
	}
	.slide-leave{
	  opacity: 1; transform: translateX(0); }
	.slide-enter-active{ animation: slide-in 1s ease-out forwards; }
	@keyframes slide-out{
	  0%{ transform: translateY(0); }
	  100%{ transform: translateY(-30px); }
	}
	@keyframes slide-in{
	  0%{ transform: translateY(-30px); }
	  100%{ transform: translateY(0); }
	}

	/* ==========  SCROLL  BAR  ========= */
	::-webkit-scrollbar-track{
	  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
	  background-color: #F5F5F5;
	  border-radius: 10px;
	}
	::-webkit-scrollbar{
	  width: 10px;
	  height: 9px;
	  background-color: #F5F5F5;
	}
	::-webkit-scrollbar-thumb:hover{
	  border-radius: 10px;
	  background-color: #FFF;
	  background-image: -webkit-gradient(
	    linear,
	    40% 0%,
	    75% 84%,
	    from(#00BFFF),
	    to(#00BFFF),
	    color-stop(.5,#98F6EE)
	  );
	}
	::-webkit-scrollbar-thumb{
	  border-radius: 10px;
	  background-image: -webkit-gradient(
	    linear,
	    40% 0%,
	    75% 84%,
	    from(#0088FF),
	    to(#0088FF),
	    color-stop(.5,#98F6EE)
	  );
	}
</style>
