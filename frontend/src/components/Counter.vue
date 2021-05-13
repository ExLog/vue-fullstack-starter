<template>
	<h2 class="text-2xl font-semibold my-5">Count: {{ count }}</h2>
	<button
		class="
			bg-gray-200
			rounded-md
			px-3
			py-2
			focus:outline-none
			hover:bg-gray-300
		"
		@click="count++"
	>
		Add count
	</button>
</template>

<script setup lang="ts">
import { ref } from "vue"

const count = ref(0)
</script>
