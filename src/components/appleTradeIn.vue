<template>
	<div class="w-full h-[500px] md:h-[490px] lg:h-[580px] bg-black">
		<div class="flex flex-col items-center relative h-full">
			<div class="z-10 text-center pt-[37px] md:pt-[42px] lg:pt-[53px]">
				<h3 class="font-semibold text-[32px] lg:text-[40px]">Apple Trade In</h3>
				<p
					class="mt-1 text-[17px] lg:text-[19px] max-w-[290px] lg:max-w-[315px] leading-[1.19048] tracking-[.011em]"
				>
					Get $180-$650 in credit when you trade in iPhone 12 or higher.
				</p>
				<el-button class="mt-4" type="primary" size="large" round>
					Get your estimate
				</el-button>
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
	background: url('@/assets/images/iPhoneTradein_mobile.jpg');
	background-size: cover;
	background-position: center;
}
@media (min-width: 768px) {
	.responsive-bg {
		background-image: url('@/assets/images/iPhoneTradein_laptop.jpg');
	}
}
@media (min-width: 1024px) {
	.responsive-bg {
		background-image: url('@/assets/images/iPhoneTradein_desktop.jpg');
	}
}
</style>
