<template>
    <div class="search-container">
        <input type="text" v-model="searchQuery" placeholder="Search todos..." class="search-input" @input="search" />
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useTodoStore } from '~/stores/todo-store'

const store = useTodoStore()
const searchQuery = ref('')

const search = () => {
    store.setSearchQuery(searchQuery.value)
}
</script>

<style scoped>
.search-container {
    margin: 1rem 0;
}

.search-input {
    width: 98%;
    padding: 0.5rem;
    font-size: 1rem;
}
</style>