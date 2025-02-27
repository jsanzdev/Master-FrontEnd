<template>
    <div class="todo-item" :class="{ completed: todo.completed }">
        <template v-if="isEditing">
            <input v-model="editedTitle" @keyup.enter="saveTodo" @keyup.esc="cancelEdit" class="edit-input"
                ref="editInput" autofocus />
            <div class="edit-buttons">
                <button @click="saveTodo" class="save-button">Save</button>
                <button @click="cancelEdit" class="cancel-button">Cancel</button>
            </div>
        </template>
        <template v-else>
            <input type="checkbox" :checked="todo.completed" @change="$emit('toggle', todo.id)" />
            <span class="title" @dblclick="startEdit">{{ todo.title }}</span>
            <div class="action-buttons">
                <button class="edit-button" @click="startEdit">Edit</button>
                <button class="delete-button" @click="$emit('delete', todo.id)">
                    Delete
                </button>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Todo } from '~/types/index'
import { useTodoStore } from '~/stores/todo-store'

const props = defineProps<{
    todo: Todo
}>()

const store = useTodoStore()
const editedTitle = ref(props.todo.title)
const isEditing = computed(() => store.editingId === props.todo.id)

const startEdit = () => {
    editedTitle.value = props.todo.title
    store.startEditing(props.todo.id)
}

const saveTodo = () => {
    if (editedTitle.value.trim()) {
        store.editTodo(props.todo.id, editedTitle.value.trim())
    }
}

const cancelEdit = () => {
    store.cancelEditing()
}
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

.edit-input {
    flex: 1;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.action-buttons,
.edit-buttons {
    display: flex;
    gap: 0.5rem;
}

.edit-button,
.save-button {
    padding: 0.25rem 0.5rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.delete-button,
.cancel-button {
    padding: 0.25rem 0.5rem;
    background-color: #ff4444;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.title {
    flex: 1;
    cursor: pointer;
}
</style>