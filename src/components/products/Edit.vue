<template>
<div class="container">
	<!--  ==================================  TITLE  ==================================  -->
	<div class="row">
		<h1 v-if="!editTitle" @click="editTitle = !editTitle"><i class="fas fa-pencil-alt"></i>{{ item.pzv_ime }}</h1>
		<div v-if="editTitle" class="form-group col-12 col-sm-12 col-md-12 col-lg-12">
			<input type="text" class="form-control col-12" id="naslov" name="naslov" v-model="item.pzv_ime" placeholder="naslov...">
			<span @click="editTitle = !editTitle"><i class="fas fa-check"></i></span>
			<span @click="revert('title')"><i class="fas fa-ban"></i></span>
		</div>
	</div>

	<!--  ==================================  SMALL  IMAGE  ==================================  -->
	<div class="row">
		<div class="col-12 col-sm-12 col-md-6 col-lg-6">
			<span class="size">* poželjna veličina slike 400 x 400 px</span><br>
			<img class="small-img" v-if="!editSmallImage" @click="editSmallImage = !editSmallImage" :src="item.smallImgUrl" alt="">
			<picture-input
				class="picture-input small-img"
				v-if="editSmallImage"
				ref="smallPictureInput"
				:crop="false"
				@change="onChanged('small')"
				@remove="onRemoved('small')"
				:width="400"
				:zIndex="0"
				:removable="true"
				size="0.5"
				removeButtonClass="btn btn-danger"
				:height="200"
				accept="image/jpeg, image/png, image/gif"
				buttonClass="btn btn-success"
				:customStrings="{
					upload: '<h1>Upload it!</h1>',
					drag: 'Kliknite ili prevucite novu sliku',
					change: 'Promeni sliku',
					remove: 'Ukloni sliku',
					tap: 'Kliknite ili prevucite novu sliku',
					fileSize: 'Odabrana slika je prevelika'
				}">
			</picture-input>
		</div>
	<!--  ==================================  LARGE  IMAGE  ==================================  -->
		<div class="col-12 col-sm-12 col-md-6 col-lg-6">
			<span class="size">* ovde ožeži</span><br>
			<img class="large-img" v-if="!editLargeImage" @click="editLargeImage = !editLargeImage" :src="item.largeImgUrl" alt="">
			<picture-input
				class="picture-input large-img"
				v-if="editLargeImage"
				ref="largePictureInput"
				:crop="false"
				@change="onChanged('large')"
				@remove="onRemoved('large')"
				:width="400"
				:zIndex="0"
				:removable="true"
				size="1"
				removeButtonClass="btn btn-danger"
				:height="200"
				accept="image/jpeg, image/png, image/gif"
				buttonClass="btn btn-success"
				:customStrings="{
					upload: '<h1>Upload it!</h1>',
					drag: 'Kliknite ili prevucite novu sliku',
					change: 'Promeni sliku',
					remove: 'Ukloni sliku',
					tap: 'Kliknite ili prevucite novu sliku',
					fileSize: 'Odabrana slika je prevelika'
				}">
			</picture-input>
		</div>
	</div>

	<!--  ==================================  DESCRIPTION  ==================================  -->
	<div class="row">
		<div id="body">
			<h5 v-if="!editContent" @click="editContent = !editContent" class="content"><i class="fas fa-pencil-alt"></i>{{ item.pzv_opis }}</h5>
			<div v-if="editContent" class="form-group">
			    <textarea v-model="item.pzv_opis" name="body" class="form-control" placeholder="opis..." rows="3"></textarea>
			    <span @click="editContent = !editContent"><i class="fas fa-check"></i></span>
				<span @click="revert('content')"><i class="fas fa-ban"></i></span>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="form-group">
			<button @click="attemptUpload" class="btn btn-primary" name="submit">Izmeni</button>
			<button @click="redirect" class="btn btn-secondary" name="submit">Drugi put</button>
		</div>
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
import { eventBus } from '../../main.js';
import PictureInput from 'vue-picture-input';

export default {
	components: {
		PictureInput
	},
	data(){
		return {
			item: {},
			editTitle: false,
			editContent: false,
			editSmallImage: false,
			editLargeImage: false
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
				this.item.smallImgUrl = URL_PATH.url+'get-small-images/'+this.$route.query.id;
				this.item.largeImgUrl = URL_PATH.url+'get-large-images/'+this.$route.query.id;
	    	this.item.newSmallImage = '';
	    	this.item.newLargeImage = '';
			})
		},
		revert(section){
			this.getItem();
			section === 'title' ? this.editTitle = false : this.editContent = false;
		},
		redirect(){
			this.$router.push('/katalog');
			// console.log('redirect');
		},
		onChanged(size) {
			if(size === 'small')
				this.item.newSmallImage = this.$refs.smallPictureInput.file
			else if(size === 'large')
				this.item.newLargeImage = this.$refs.largePictureInput.file;
		},
		onRemoved(size){
			size === 'small' ? this.item.newSmallImage = '' : this.item.newLargeImage = '';
		},
    attemptUpload(){
    	let formData = new FormData()
    	formData.append('id', this.item.pzv_id);
    	formData.append('title', this.item.pzv_ime);
    	formData.append('content', this.item.pzv_opis);
    	formData.append('smallImage', this.item.newSmallImage);
    	formData.append('largeImage', this.item.newLargeImage);
			axios.post(URL_PATH.url+"products/edit", formData).then( response => {
				this.getItem();
				$('#editModal').modal('show');
				eventBus.$emit('itemChanged');
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
	img{
		margin-bottom: 30px;
		cursor: pointer;
	}
	.small-img{ width: 200px; height: 250px; }
	.large-img{ width: 300px; height: 350px; }
	.fa-pencil-alt{
		font-size: 25px;
		vertical-align: baseline;
		margin-left: 15px;
		color: #32902F;
		cursor: pointer;
	}
	#naslov{
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
	.picture-input{ color: #fff; }
	.size{ color: #F2EF08; }
</style>
