<template>
	<!-- nav bar -->
	<nav class="nav">
		<div class="m-auto w-full max-w-[1024px] md:px-[22px] h-full">
			<ul class="flex items-center justify-between h-full">
				<li aria-label="Apple logo" class="nav-apply-icon">
					<iconsAppleIcon class="nav-icons-component" />
				</li>
				<li v-for="item in navs" :key="item" class="hidden md:block">
					<a href="#" class="hover:text-white transition">{{ item }}</a>
				</li>

				<li aria-label="Search" class="nav-icons">
					<iconsSearchIcon class="nav-icons-component" />
				</li>

				<li aria-label="Shopping bag" class="nav-icons">
					<iconsShoppingBagIcon class="nav-icons-component" />
				</li>

				<li aria-label="Shopping bag" class="nav-icons md:hidden">
					<iconsBreadIcon class="nav-icons-component" />
				</li>
			</ul>
		</div>
	</nav>
	<!-- contents -->
	<RouterView></RouterView>
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
<style>
@tailwind components;
@layer components {
	.nav {
		@apply h-[48px] md:h-[44px] w-full bg-[#161617dd] text-[#ffffffcc] text-xs fixed z-50 backdrop-saturate-[180%] backdrop-blur-lg;
	}
	.nav-icons {
		@apply cursor-pointer w-[48px] md:w-auto flex items-center justify-center;
	}
	.nav-apply-icon {
		@apply cursor-pointer w-[48px] md:w-auto md:flex items-center md:justify-center justify-start flex-1 md:flex-none pl-[15px] md:pl-0;
	}
	.nav-icons-component {
		@apply w-[17px] h-[48px] md:w-[14px] md:h-[44px];
	}
}
</style>
