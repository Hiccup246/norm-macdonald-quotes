<script lang="ts">
	import normImage from "$lib/assets/norm-face.webp";
	import normImageFlipped from "$lib/assets/norm-face-flipped.webp";
	export let flipHorizontal = false;
	let normFace: HTMLElement;
	let layerOne: HTMLElement;
	let layerTwo: HTMLElement;

	function parallax(event: MouseEvent) {
		[normFace, layerOne, layerTwo].forEach((element: HTMLElement) => {
			const speed = 1;
			const x = (window.innerWidth - event.pageX * speed) / 90;
			const y = (window.innerHeight - event.pageY * speed) / 90;

			element.style.transform = `translateX(${x}px) translateY(${y}px)`;
		});
	}

	$: normFaceSrc = flipHorizontal ? normImageFlipped : normImage;
</script>

<svelte:window on:mousemove={parallax} />

<div class="norm-face">
	<div class="norm-face-wrapper">
		<img bind:this={normFace} src={normFaceSrc} alt="Norm Face" class="norm-face-image" />
		<div bind:this={layerOne} class="layer1" />
		<div bind:this={layerTwo} class="layer2" />
	</div>
</div>

<style>
	.norm-face {
		width: 268px;
		height: 264px;
		position: relative;
	}

	.norm-face-wrapper {
		width: 250px;
		height: 250px;
		position: relative;
	}

	.norm-face-image {
		z-index: 5;
		width: inherit;
		height: inherit;
		position: absolute;
	}

	.layer1 {
		background-color: #df80ff;
		position: absolute;
		top: 7px;
		left: 9px;
		height: inherit;
		width: inherit;
		z-index: 4;
		transition: all 0.1s;
	}

	.layer2 {
		background-color: #00cdcd;
		position: absolute;
		top: 14px;
		left: 18px;
		height: inherit;
		width: inherit;
		z-index: 3;
		transition: all 0.3s;
	}
</style>
