<template>
    <div class="container">
        <h1>Todo App</h1>
        <TodoInput @add-todo="addTodo" />
        <TodoList :todos="todos" @toggle="toggleTodo" @delete="deleteTodo" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Todo } from '~/types/index.ts'

const todos = ref<Todo[]>([])

const addTodo = (title: string) => {
    todos.value.push({
        id: Date.now(),
        title,
        completed: false,
        createdAt: new Date()
    })
}

const toggleTodo = (id: number) => {
    const todo = todos.value.find((t: { id: number }) => t.id === id)
    if (todo) {
        todo.completed = !todo.completed
    }
}

const deleteTodo = (id: number) => {
    todos.value = todos.value.filter((t: { id: number }) => t.id !== id)
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
    margin-bottom: 2rem;
}
</style>