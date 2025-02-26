<template>
    <div class="todo-list">
        <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @toggle="$emit('toggle', $event)"
            @delete="$emit('delete', $event)" />
    </div>
</template>

<script setup lang="ts">
import type { Todo } from '~/types/index.ts';

defineProps<{
    todos: Todo[]
}>()

defineEmits<{
    toggle: [id: number]
    delete: [id: number]
}>()
</script>

<style scoped>
.todo-list {
    margin-top: 1rem;
}
</style>