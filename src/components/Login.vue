<template>
<div class="container">
	<div class="row">
		<h1>Uloguj se</h1>
	</div>
	<div class="row">
		<div class="warning" v-if="warning">Pogrešan email ili šifra</div>
	</div>
	<div class="">
		<div class="form-group">
			<label for="email">Email:</label>
			<input v-model="email" type="email" class="form-control" id="email" name="email" placeholder="upiši email...">
		</div>
		<div class="form-group">
			<label for="password">Password:</label>
			<input v-model="password" type="password" class="form-control" id="password" name="password" placeholder="upiši šifru...">
		</div>
		<div class="form-group">
			<button @click.prevent="signIn" type="submit" class="btn btn-primary" name="submit">Uloguj se</button>
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios';
import sha256 from 'sha256';
import URL_PATH from '../config.js';
import { eventBus } from '../main.js';

export default {
	data(){
		return {
			email: '',
			password: '',
			warning: false
		}
	},
	methods:{
		signIn(){
			let hash = sha256(this.password);
			axios.post('http://663n121.mars1.mars-hosting.com/api/login/login', {
				email: this.email,
				password: hash,
			}).then( response => {
				if(response.data.res === 'pogresno'){
					this.warning = true;
				} else{
					localStorage.setItem('sid', response.data.sid);
					this.warning = false;
					eventBus.$emit('userLogin', response.data.user);
					this.$router.push('/');
				}
				console.log(response.data);
			})
		}
	}
}
</script>

<style scoped>
	h1{ margin: 30px auto; color: firebrick; }
	div{ color: firebrick; }
	input{ text-align: center; color: }
</style>


<!--

frigostar01@gmail.com
fr&g0L1nu#St@rTe$ra

 -->
