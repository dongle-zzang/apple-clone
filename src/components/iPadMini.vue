<template>
	<div class="w-full h-[500px] md:h-[490px] lg:h-[580px] bg-black">
		<div class="flex flex-col items-center relative h-full">
			<div class="flex flex-col z-10 text-center h-full justify-between">
				<div class="pt-[37px] md:pt-[42px] lg:pt-[53px]">
					<h3 class="font-semibold text-[32px] lg:text-[40px]">iPad mini</h3>
					<p
						class="text-[19px] lg:text-[21px] max-w-[290px] lg:max-w-[450px] leading-[1.19048]"
					>
						Single-handedly awesome.
					</p>
					<div class="mt-4">
						<el-button type="primary" size="large" round>Learn more</el-button>
						<el-button size="large" plain round>Buy</el-button>
					</div>
				</div>
				<div class="text-sm leading-[1.28577] pb-[31px] md:pb-[36px]">
					<span class="color-gradient text-transparent bg-clip-text">
						Hello, Apple Intelligence.
					</span>
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
	background: url('@/assets/images/iPadMini_mobile.jpg');
	background-size: cover;
	background-position: center;
}
@media (min-width: 768px) {
	.responsive-bg {
		background-image: url('@/assets/images/iPadMini_laptop.jpg');
	}
}
@media (min-width: 1024px) {
	.responsive-bg {
		background-image: url('@/assets/images/iPadMini_desktop.jpg');
	}
}

.color-gradient {
	background: linear-gradient(94deg, #0090f7, #ba62fc, #f2416b, #f55600);
}
.bg-clip-text {
	background-clip: text;
	font-weight: 500;
}
</style>
