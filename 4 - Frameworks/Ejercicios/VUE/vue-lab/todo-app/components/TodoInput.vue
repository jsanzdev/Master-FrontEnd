<template>
    <div class="todo-input">
        <input v-model="newTodo" @keyup.enter="addTodo" placeholder="What needs to be done?" class="input" />
        <button @click="addTodo" class="add-button">Add Todo</button>
    </div>
</template>

<script setup lang="ts">
const newTodo = ref('')
const emit = defineEmits(['add-todo'])

const addTodo = () => {
    if (newTodo.value.trim()) {
        emit('add-todo', newTodo.value)
        newTodo.value = ''
    }
}
</script>

<style scoped>
.todo-input {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
}

.input {
    flex: 1;
    padding: 0.5rem;
    font-size: 1rem;
}

.add-button {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.2s;
    background-color: #4CAF50;
    color: white;
    border-color: #4CAF50;
}

.add-button:hover {
    background-color: #45a049;
}
</style>