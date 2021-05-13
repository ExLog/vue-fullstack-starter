<template>
	<div
		class="h-screen-sm flex flex-col text-center justify-center items-center"
	>
		<Logo />
		<h1 class="text-5xl font-bold">Vue Fullstack Starter</h1>
		<Counter />
	</div>
</template>

<script setup lang="ts">
import Counter from "./components/Counter.vue"
import Logo from "./components/Logo.vue"
</script>
