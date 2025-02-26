<template>
    <div class="todo-item" :class="{ completed: todo.completed }">
        <input type="checkbox" :checked="todo.completed" @change="$emit('toggle', todo.id)" />
        <span class="title">{{ todo.title }}</span>
        <button class="delete-button" @click="$emit('delete', todo.id)">
            Delete
        </button>
    </div>
</template>

<script setup lang="ts">
import type { Todo } from '~/types/index.ts'

defineProps<{
    todo: Todo
}>()

defineEmits<{
    toggle: [id: number]
    delete: [id: number]
}>()
</script>

<style scoped>
.todo-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    border-bottom: 1px solid #eee;
}

.completed .title {
    text-decoration: line-through;
    color: #888;
}

.delete-button {
    margin-left: auto;
    padding: 0.25rem 0.5rem;
    background-color: #ff4444;
    color: white;
    border: none;
    cursor: pointer;
}
</style>