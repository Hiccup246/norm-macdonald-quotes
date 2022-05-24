<script lang="ts">
  import logo from './norm-face.webp';
</script>

<div class="norm-face">
	<div class="norm-face-wrapper">
		<img src={logo} alt="Norm Face" class="norm-face-image" />
		<div class="layer1"/>
		<div class="layer2"/>
	</div>
</div>

<style>
  .norm-face {
		width: 218px;
		height: 214px;
		position: relative;
	}

	.norm-face-wrapper {
		width: 200px;
		height: 200px;
		position: relative;
	}

	.norm-face-image {
		z-index: 5;
		width: inherit;
		height: inherit;
		position: absolute;
	}

	.layer1 {
		background-color: #DF80FF;
		position: absolute;
		top: 7px;
		left: 9px;
		height: inherit;
		width: inherit;
		z-index: 4;
	}

	.layer2 {
		background-color: #00CDCD;
		position: absolute;
		top: 14px;
		left: 18px;
		height: inherit;
		width: inherit;
		z-index: 3;
	}
</style>