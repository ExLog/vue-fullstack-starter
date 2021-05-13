<template>
	<h2>Count: {{ count }}</h2>
	<button @click="count++">Add count</button>
</template>

<script setup lang="ts">
import { ref } from "vue"

const count = ref(0)
</script>
