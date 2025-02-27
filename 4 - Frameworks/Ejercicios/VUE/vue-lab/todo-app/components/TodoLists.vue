<template>
    <div class="lists-container">
        <div class="lists-header">
            <h2>Lists</h2>
            <button @click="showNewListInput = true" class="add-list-button">
                <span class="plus">+</span>
            </button>
        </div>

        <div v-if="showNewListInput" class="new-list-input">
            <input v-model="newListName" @keyup.enter="createList" @keyup.esc="cancelNewList" placeholder="List name..."
                ref="newListInput" autofocus />
            <div class="new-list-actions">
                <button @click="createList" class="save-button">Save</button>
                <button @click="cancelNewList" class="cancel-button">Cancel</button>
            </div>
        </div>

        <ul class="lists">
            <li v-for="list in store.lists" :key="list.id" :class="{ active: list.id === store.activeListId }"
                @click="store.setActiveList(list.id)">
                {{ list.name }}
                <span class="todo-count">({{ list.todos.length }})</span>
                <button v-if="store.lists.length > 1" @click.stop="deleteList(list.id)" class="delete-list">
                    ×
                </button>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '~/stores/todo-store'

const store = useTodoStore()
const showNewListInput = ref(false)
const newListName = ref('')

const createList = () => {
    if (newListName.value.trim()) {
        store.addList(newListName.value.trim())
        newListName.value = ''
        showNewListInput.value = false
    }
}

const cancelNewList = () => {
    showNewListInput.value = false
    newListName.value = ''
}

const deleteList = (id: number) => {
    if (confirm('Are you sure you want to delete this list?')) {
        store.deleteList(id)
    }
}
</script>

<style scoped>
.lists-container {
    padding: 1rem;
    border-right: 1px solid #eee;
    background: white;
}

.lists-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.add-list-button {
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    border: none;
    background: #4CAF50;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
}

.lists {
    list-style: none;
    padding: 0;
    margin: 0;
}

.lists li {
    padding: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    margin-bottom: 0.25rem;
}

.lists li.active {
    background: #e8f5e9;
    color: #2e7d32;
}

.lists li:hover {
    background: #f5f5f5;
}

.todo-count {
    color: #666;
    font-size: 0.9em;
}

.delete-list {
    padding: 0.25rem 0.5rem;
    border: none;
    background: none;
    color: #ff4444;
    cursor: pointer;
    font-size: 1.2rem;
}

.new-list-input {
    margin-bottom: 1rem;
}

.new-list-input input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.new-list-actions {
    display: flex;
    gap: 0.5rem;
}

@media (max-width: 768px) {
    .lists-container {
        border-right: none;
        border-bottom: 1px solid #eee;
    }
}
</style>