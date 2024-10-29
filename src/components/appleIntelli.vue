<template>
	<div class="w-full h-[500px] md:h-[490px] lg:h-[580px] bg-black">
		<div class="flex flex-col items-center relative h-full">
			<div class="z-10 text-center pt-[37px] md:pt-[42px] lg:pt-[53px]">
				<h3 class="font-semibold text-[32px] lg:text-[40px]">
					Apple Intelligence
				</h3>
				<p class="text-[19px] lg:text-[21px] max-w-[290px] lg:max-w-[450px]">
					AI for the rest of us.
				</p>
				<div class="mt-4">
					<el-button type="primary" size="large" round>Learn more</el-button>
					<el-button size="large" plain round>Watch the film</el-button>
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
	background: url('@/assets/images/promoAI_mobile.jpg');
	background-size: cover;
	background-position: center;
}
@media (min-width: 768px) {
	.responsive-bg {
		background-image: url('@/assets/images/promoAI_laptop.jpg');
	}
}
@media (min-width: 1024px) {
	.responsive-bg {
		background-image: url('@/assets/images/promoAI_desktop.jpg');
	}
}
</style>
