<template>
	<div class="w-full h-[500px] md:h-[490px] lg:h-[580px] bg-black">
		<div class="flex flex-col items-center relative h-full">
			<div class="z-10 text-center w-full pt-[37px] md:pt-[42px] lg:pt-[53px]">
				<h3
					class="responsive-text w-[117px] lg:w-[149px] h-[45px] lg:h-[57px] mx-auto"
				></h3>
				<p
					class="text-[19px] lg:text-[21px] mt-2 max-w-[290px] lg:max-w-[450px] mx-auto"
				>
					Thinstant classic.
				</p>
				<div class="mt-4">
					<el-button type="primary" size="large" round>Learn more</el-button>
					<el-button size="large" plain round>Buy</el-button>
				</div>
			</div>

			<div class="h-full w-full absolute top-0">
				<div class="responsive-bg w-full h-full"></div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts"></script>
<style scoped>
.responsive-bg {
	background: url('@/assets/images/watch10_mobile.jpg');
	background-size: cover;
	background-position: center;
}
@media (min-width: 768px) {
	.responsive-bg {
		background-image: url('@/assets/images/watch10_laptop.jpg');
	}
}
@media (min-width: 1024px) {
	.responsive-bg {
		background-image: url('@/assets/images/watch10_desktop.jpg');
	}
}

.responsive-text {
	background-image: url('@/assets/images/watchLogo_laptop.png');
	background-repeat: no-repeat;
	background-size: 117px 45px;
	background-position: center;
}
@media (min-width: 1024px) {
	.responsive-text {
		background-image: url('@/assets/images/watchLogo_desktop.png');
		background-size: 149px 57px;
	}
}
</style>
