<template>
	<div class="w-full h-[500px] md:h-[490px] lg:h-[580px] bg-black">
		<div class="flex flex-col justify-end items-center relative h-full">
			<div
				class="z-10 text-[#f5f5f7] text-center pb-[37px] md:pb-[42px] lg:pb-[53px]"
			>
				<h3 class="font-semibold text-[32px] lg:text-[40px]">AirPods Pro 2</h3>
				<p
					class="text-[19px] lg:text-[21px] mt-1 max-w-[290px] lg:max-w-[450px]"
				>
					Hearing Test, Hearing Aid, and Hearing Protection features in a free
					software update.
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
	background: url('@/assets/images/airpods2Pro_mobile.jpg');
	background-size: cover;
	background-position: center;
}
@media (min-width: 768px) {
	.responsive-bg {
		background-image: url('@/assets/images/airpods2Pro_laptop.jpg');
	}
}
@media (min-width: 1024px) {
	.responsive-bg {
		background-image: url('@/assets/images/airpods2Pro_desktop.jpg');
	}
}
</style>
