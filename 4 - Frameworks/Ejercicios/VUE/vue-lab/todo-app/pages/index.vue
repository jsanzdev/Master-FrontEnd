<template>
    <div class="page-container">
        <div class="sidebar" :class="{ 'show-mobile': showSidebar }">
            <TodoLists />
        </div>
        <div class="main-content">
            <button class="mobile-menu" @click="showSidebar = !showSidebar">
                {{ showSidebar ? '×' : '☰' }}
            </button>
            <h1>{{ store.activeList?.name || 'Todo App' }}</h1>
            <SearchBar />
            <TodoInput @add-todo="addTodo" />
            <TodoFilter />
            <TodoList :todos="store.filteredTodos" @toggle="toggleTodo" @delete="deleteTodo" />
            <TodoActions />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '~/stores/todo-store'

const store = useTodoStore()
const showSidebar = ref(false)

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
.page-container {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    min-height: 100vh;
}

.sidebar {
    width: 250px;
    flex-shrink: 0;
}

.main-content {
    flex: 1;
    padding: 2rem;
    position: relative;
}

.mobile-menu {
    display: none;
}

@media (max-width: 768px) {
    .page-container {
        display: block;
    }

    .sidebar {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        background: white;
        z-index: 100;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
    }

    .sidebar.show-mobile {
        transform: translateX(0);
    }

    .mobile-menu {
        display: block;
        position: absolute;
        top: 1rem;
        left: 1rem;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
    }

    .main-content {
        padding-top: 4rem;
    }
}
</style>