<template>
	<footer>
		<div id="sub-footer" class="footer navbar-fixed-bottom">
			<div class="jumbotron jumbotron-fluid"> <!--subfuter-->
				<div class="container">
					<div class="row">
						<div class="offset-2 col-md-5">
							<p><i class="fas fa-2x fa-home"></i> &nbsp;Rumska 65, Dobrinci <small>(opština Ruma)</small> Srbija.</p>
							<p><i class="fa fa-2x fa-phone"></i> &nbsp;+381 64/9874-580</p>
							<p><i class="fa fa-2x fa-envelope"></i> &nbsp;frigostar01@gmail.com</p>
						</div> <!-- offset-md -->
						<div class="offset-2 offset-md-0 col-md-5">
							<p><i class="fa fa-2x fa-globe"></i> &nbsp;www.frigostar01.com</p>
							<p class="float-left"><i class="fas fa-2x fa-clock"></i>&nbsp;</p>
							<p> &nbsp;Radnim danima: 9:30-19h<br> &nbsp;Subotom: 9:30-15h</p>
						</div> <!-- offset-md -->
					</div> <!-- row -->
				</div> <!-- container -->
			</div> <!--end subfuter-->
		</div>

		<div id="footer">
			Copyright &copy; by <img class="logo" src="../../assets/footer-logo.png" alt="frigostar-logo"> 2018
		</div>

	</footer>
</template>

<style scoped>
#sub-footer{
	min-width: 100%;
}
.jumbotron{
	margin: 0;
	padding: 0;
}
.container .row{
	padding: 40px;
	text-align: left;
	margin: 20px 0 0 0;
}
.fa-clock{
	margin-top: 10px;
}
#footer{
	background: #008EFF;
	color: #fff;
	padding: 10px;
}
.fa-home,
.fa-globe,
.fa-clock,
.fa-phone,
.fa-envelope{
	color: #008EFF !important;
}
</style>
