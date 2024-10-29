<template>
	<div>
		<div class="h-[48px] md:h-[44px] w-full bg-[#1d1d1fcc]"></div>

		<div class="grid gap-3">
			<iPhone16Pro></iPhone16Pro>

			<iPhone16></iPhone16>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-0 m-3">
				<airPodsPro2></airPodsPro2>
				<appleWatch10></appleWatch10>
				<iPadMini></iPadMini>
				<appleIntelli></appleIntelli>
				<appleTradeIn></appleTradeIn>
				<AppleCard></AppleCard>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import AppleCard from '../components/appleCard.vue';
</script>
<style scoped></style>
