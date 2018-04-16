<template>
<div>
	<h1 v-if="!editTitle" @click="editTitle = !editTitle"><i class="fas fa-pencil-alt"></i>{{ item.pzv_ime }}</h1>
	<div v-if="editTitle" class="form-group">
		<input type="text" class="form-control" id="naslov" name="naslov" v-model="item.pzv_ime" placeholder="naslov...">
		<span @click="editTitle = !editTitle"><i class="fas fa-check"></i></span>
		<span @click="revert('title')"><i class="fas fa-ban"></i></span>
	</div>
	<img :src="item.imgUrl" alt="">

	<div id="body">

		<h5 v-if="!editContent" @click="editContent = !editContent" class="content"><i class="fas fa-pencil-alt"></i>{{ item.pzv_opis }}</h5>
		<div v-if="editContent" class="form-group">
		    <textarea v-model="item.pzv_opis" name="body" class="form-control" placeholder="opis..." rows="3"></textarea>
		    <span @click="editContent = !editContent"><i class="fas fa-check"></i></span>
			<span @click="revert('content')"><i class="fas fa-ban"></i></span>
		</div>
	</div>
	<div class="form-group">
		<button @click="edit" class="btn btn-primary" name="submit">Izmeni</button>
		<button @click="redirect" class="btn btn-secondary" name="submit">Drugi put</button>
	</div>
	<!--  BOOTSTRAP  MODAL -->
	<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="exampleModalLabel">Frigo Star</h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
	        Proizvod je uspešno izmenjen.
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-success" @click="redirect" data-dismiss="modal">U redu</button>
	      </div>
	    </div>
	  </div>
	</div>
</div>
</template>

<script>
import axios from 'axios';
import { URL_PATH } from '../../config.js';

export default {
	data(){
		return {
			item: {},
			editTitle: false,
			editContent: false
		}
	},
	created(){
		this.getItem();
	},
	methods:{
		getItem(){
			axios.get(URL_PATH.url+"products/edit", {
				params: { id: this.$route.query.id }
			}).then( response => {
				this.item = response.data.item;
				this.item.imgUrl = URL_PATH.url+'get-small-images/'+this.$route.query.id;
			})
		},
		revert(section){
			this.getItem();
			section === 'title' ? this.editTitle = false : this.editContent = false;
		},
		redirect(){
			this.$router.push('/katalog');
		},
		edit(){
			axios.post(URL_PATH.url+"products/edit", {
				item: this.item
			}).then( response => {
				this.getItem();
				$('#editModal').modal('show');
			});
		}
	}
}
</script>

<style scoped>
	h1, .content{
		color: #fff;
		margin-bottom: 40px;
		cursor: pointer;
	}
	img{ margin-bottom: 30px; }
	.fa-pencil-alt{
		font-size: 25px;
		vertical-align: baseline;
		margin-left: 15px;
		color: #32902F;
		cursor: pointer;
	}
	#naslov{
		width: 50%;
		margin: 10px auto;
		text-align: center;
		font-size: 25px;
		color: #32902F;
	}
	.fa-check, .fa-ban{
		color: #32902F;
		font-size: 30px;
		background: #fff;
		border-radius: 20px;
		padding: 5px;
		cursor: pointer;
	}
	.fa-ban{ color: #881D1D; background: #fff; }
	#body{
		width: 80%;
		margin: 30px auto;
	}
	textarea{ margin-bottom: 10px; }
	.fa-pencil-alt{ margin: 0 10px 5px 10px; }
</style>
