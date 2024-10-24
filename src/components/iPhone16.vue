<template>
	<div class="h-[500px] md:h-[650px] lg:h-[692px] bg-black">
		<div
			class="flex flex-col justify-between items-center h-full pt-[37px] md:pt-[47px] lg:pt-[53px] pb-[28px] md:pb-[32px] lg:pb-[42px] text-[#f5f5f7] text-center relative"
		>
			<div class="z-10">
				<h2
					class="text-[32px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.07143]"
				>
					iPhone 16 Pro
				</h2>
				<p
					class="text-[19px] md:text-[24px] lg:text-[26px] mt-2 leading-[1.14286] tracking-[.007em]"
				>
					Hello, Apple Intelligence.
				</p>
			</div>
			<div class="z-10">
				<el-button size="large" type="primary" round>Learn more</el-button>
				<el-button size="large" round plain>Buy</el-button>
				<p class="text-[#86868b] text-sm mt-[18px] md:mt-[19px] lg:mt-[25px]">
					Apple Intelligence coming this fall
				</p>
			</div>

			<div class="h-full w-full absolute top-0">
				<div class="responsive-bg w-full h-full"></div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.responsive-bg {
	background: url('@/assets/images/iPhone16_mobile.jpg');
	background-size: cover;
	background-position: center;
}
@media (min-width: 768px) {
	.responsive-bg {
		background-image: url('@/assets/images/iPhone16_laptop.jpg');
	}
}
@media (min-width: 1024px) {
	.responsive-bg {
		background-image: url('@/assets/images/iPhone16_desktop.jpg');
	}
}
</style>
