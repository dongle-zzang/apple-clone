<template>
	<div>
		<!-- nav bar -->
		<nav
			class="w-full h-[48px] md:h-[44px] bg-[#161617cc] text-[#ffffffcc] text-xs fixed top-0 left-0"
		>
			<div
				class="m-auto w-full max-w-[1024px] scroll-ps-[22px] scroll-pe-[22px]"
			>
				<ul class="flex items-center justify-between">
					<li aria-label="Apple logo" class="cursor-pointer">
						<iconsAppleIcon />
					</li>
					<li v-for="item in navs" :key="item">
						<a href="#" class="hover:text-white transition">{{ item }}</a>
					</li>

					<li aria-label="Search" class="cursor-pointer">
						<iconsSearchIcon />
					</li>

					<li aria-label="Shopping bag" class="cursor-pointer">
						<iconsShoppingBagIcon />
					</li>
				</ul>
			</div>
		</nav>

		<RouterView></RouterView>
	</div>
</template>
<script setup="ts">
const navs = ref([
	'Store',
	'Mac',
	'iPad',
	'iPhone',
	'Watch',
	'Vision',
	'AirPods',
	'TV & Home',
	'Entertainment',
	'Accessories',
	'Support',
]);
</script>
