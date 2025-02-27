<template>
    <div class="search-container">
        <input
            type="text"
            v-model="searchQuery"
            placeholder="Search todos..."
            class="search-input"
            @input="search"
        />
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
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.search-input:focus {
    outline: none;
    border-color: #4CAF50;
    box-shadow: 0 2px 4px rgba(76,175,80,0.2);
}
</style>