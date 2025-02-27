<template>
    <div class="container">
        <h1>Todo App</h1>
        <TodoInput @add-todo="addTodo" />
        <SearchBar />
        <TodoFilter />
        <TodoList :todos="store.filteredTodos" @toggle="toggleTodo" @delete="deleteTodo" />
        <TodoActions />
    </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '~/stores/todo-store'

const store = useTodoStore()

const addTodo = (title: string) => {
    store.addTodo(title)
}

const toggleTodo = (id: number) => {
    store.toggleTodo(id)
}

const deleteTodo = (id: number) => {
    store.deleteTodo(id)
}
</script>

<style scoped>
.container {
    max-width: 600px;
    margin: 2rem auto;
    padding: 0 1rem;
}

h1 {
    text-align: center;
    color: #2c3e50;
}
</style>