<template>
<div class="container">
	<h1 class="bcground">Dodaj novi artikal</h1>
	<div class="row">
		<div class="col-12 col-sm-12 col-md-6 col-lg-6">
			<div class="form-group">
				<select class="custom-select" v-model="selectedCategory">
					<option class="select" hidden>Izaberite kategoriju</option>
					<option v-for="category in categories" :value="category.ktg_id">{{ category.ktg_ime }}</option>
				</select>
			</div> <!--  .form-group -->
		</div> <!--  .col-12 .col-6 -->
		<div class="col-12 col-sm-12 col-md-6 col-lg-6">
			<div class="form-group">
				<select class="custom-select" v-model="selectedGroup" :disabled="selectedCategory === 'Izaberite kategoriju'">
					<option class="select" hidden>Izaberite grupu</option>
					<option v-for="group in groups" :value="group.grp_id">{{ group.grp_ime }}</option>
				</select>
			</div> <!--  .form-group -->
		</div> <!--  .col-12 .col-6 -->
	</div> <!--  .row -->
	<div class="row">
		<div class="col-12">
			<div class="form-group">
				<input type="text" v-model="item.title" class="title form-control" placeholder="Naziv artikla">
			</div> <!--  .form-group -->
		</div> <!--  .col-12 -->
	</div> <!--  .row -->
	<div class="row">
		<div class="col-12">
			<div class="form-group">
				<vue-editor v-model="item.description" class="form-control editor" placeholder="opis..." :editorToolbar="customToolbar"></vue-editor>
			</div> <!--  .form-group -->
		</div>
	</div> <!--  .row -->
	<div class="row">
		<!--  ==================================  SMALL  IMAGE  ==================================  -->
		<div class="col-12 col-sm-12 col-md-5 col-lg-5">
			<span class="size">* poželjna veličina 400 x 400 px</span><br>
			<picture-input
				class="picture-input small-img bcground"
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
				}"> <!--  .col-5 .col-12  -->
			</picture-input>
		</div>
		<!--  ==================================  LARGE  IMAGE  ==================================  -->
		<div class="col-12 col-sm-12 col-md-7 col-lg-7">
			<span class="size">* ovde ožeži</span><br>
			<picture-input
				class="picture-input large-img bcground"
				ref="largePictureInput"
				:crop="false"
				@change="onChanged('large')"
				@remove="onRemoved('large')"
				:width="800"
				:zIndex="0"
				:removable="true"
				size="1"
				removeButtonClass="btn btn-danger"
				:height="450"
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
		</div> <!--  .col-7 .col-12  -->
	</div> <!--  .row  -->
	<div class="row">
		<div class="buttons bcground">
			<button class="btn btn-primary" @click="add">Dodaj</button>
			<button class="btn btn-warning" @click="redirect">Nemoj sad</button>
		</div>
	</div> <!--  .row  -->
	<div class="row">
		<div class="error col-12" v-if="error">
			<div class="card-header bg-danger">
				Niste popunili sva polja
			</div>
		</div>
	</div> <!--  .row  -->
	<!--  BOOTSTRAP  MODAL -->
	<div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="exampleModalLabel">Frigo Star</h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
	        Proizvod je uspešno sačuvan.
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-success" @click="redirect" data-dismiss="modal">U redu</button>
	      </div>
	    </div>
	  </div>
	</div>
</div> <!--  .container -->
</template>

<script>
import axios from 'axios';
import { URL_PATH } from '../../config.js';
import PictureInput from 'vue-picture-input';
import { VueEditor } from 'vue2-editor';
import { eventBus } from '../../main';

export default {
	components: {
		PictureInput,
		VueEditor,
	},
	data(){
		return {
			categories: [],
			selectedCategory: 'Izaberite kategoriju',
			groups: [],
			selectedGroup: 'Izaberite grupu',
			item: {
				title: '',
				description: ''
			},
			error: false,
			customToolbar: [
			[{ 'header': [false, 2, 3, 4, 5, 6, ] }],
			['bold', 'italic', 'underline', 'strike'],
			[{'align': ''}, {'align': 'center'}, {'align': 'right'}, {'align': 'justify'}],
			[{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
			[{ 'indent': '-1'}, { 'indent': '+1' }],
			[{ 'color': [] }, { 'background': [] }],
			['link']
			]
		}
	},
	created(){
		this.fillTheFields();
		this.item.smallImage = '';
		this.item.largeImage = '';
	},
	methods:{
		fillTheFields(){
			axios.get(URL_PATH.url+'products/add-product', {
				params: {
					field: 'categories'
				}
			}).then( response => {
				this.categories = response.data.categories;
				console.log(response.data);
			})
		},
		onChanged(size){
			if(size === 'small')
				this.item.smallImage = this.$refs.smallPictureInput.file;
			else if(size === 'large')
				this.item.largeImage = this.$refs.largePictureInput.file;
		},
		onRemoved(size){
			size === 'small' ? this.item.smallImage = '' : this.item.largeImage = '';
		},
		redirect(){
			this.$router.push('/katalog');
		},
		add(){
			if(this.checkFields() === false) {
				this.error = true;
			}
			else {
				this.error = false;
				let formData = new FormData();
				formData.append('selectedGroup', this.selectedGroup);
				formData.append('title', this.item.title);
				formData.append('description', this.item.description);
				formData.append('smallImage', this.item.smallImage);
				formData.append('largeImage', this.item.largeImage);
				axios.post(URL_PATH.url+'products/add-product', formData).then( response => {
					console.log(response.data);
					eventBus.$emit('itemAdded');
					$('#addModal').modal('show');
				});
			}
		},
		checkFields(){
			if(this.selectedCategory === 'Izaberite kategoriju' || this.selectedGroup === 'Izaberite grupu' || this.item.title.length === 0 || this.item.description.length === 0 || this.item.smallImage === '' || this.item.largeImage === ''){
				return false;
			} else return true;
		}
	},
	watch:{
		selectedCategory(){
			if (this.selectedCategory !== 'Izaberite kategoriju') {
				axios.get(URL_PATH.url+'products/add-product', {
					params: {
						field: 'groups',
						catId: this.selectedCategory
					}
				}).then( response => {
					this.groups = response.data.groups;
				})
			}
		}
	}
}
</script>

<style scoped>
	h1{
		color: #fff !important;
		margin-bottom: 40px;
		color: #767676;
	}
	textarea{ margin-bottom: 10px; }
	.picture-input{ color: #fff; }
	.small-img{ min-width: 100%; }
	.large-img, .preview-container, .picture-inner{ min-width: 100%; margin: 0 !important; }
	.size{ color: #F2EF08; }
	.select{ color: #000; }
	select{ text-transform: capitalize; }
	.title{ margin-top: 30px; height: 40px; text-align: center; font-size: 22px; }
	textarea{ margin-top: 30px; }
	.buttons{ margin-top: 30px; }
	.btn-warning{ color: #000; }
	button{ margin-left: 20px; }
	.error{ margin-top: 30px; color: #fff; font-size: 25px; }
	.card-header{ border-radius: 20px; padding: 10px; }
</style>
