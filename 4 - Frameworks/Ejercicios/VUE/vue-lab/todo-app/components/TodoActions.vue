<template>
  <ClientOnly>
    <div class="actions-container">
      <button @click="confirmDelete" class="action-button delete-all" :disabled="!hasTodos">
        Delete All Tasks
      </button>
      <button @click="toggleAllCompletion" class="action-button toggle-all" :disabled="!hasTodos">
        {{ allCompleted ? 'Uncomplete All' : 'Complete All' }}
      </button>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodoStore } from '~/stores/todo-store'

const store = useTodoStore()
const { todos } = storeToRefs(store)

const hasTodos = computed(() => todos.value.length > 0)
const allCompleted = computed(() =>
  todos.value.length > 0 && todos.value.every((todo: { completed: any }) => todo.completed)
)

const confirmDelete = () => {
  if (confirm('Are you sure you want to delete all tasks?')) {
    store.deleteAllTodos()
  }
}

const toggleAllCompletion = () => {
  if (allCompleted.value) {
    store.uncompleteAllTodos()
  } else {
    store.completeAllTodos()
  }
}
</script>

<style scoped>
.actions-container {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  justify-content: center;
}

.action-button {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;
}

.action-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.action-button:not(:disabled) {
  opacity: 1;
}

.delete-all {
  background-color: #ff4444;
  color: white;
}

.delete-all:hover:not(:disabled) {
  background-color: #ff6666;
}

.toggle-all {
  background-color: #4CAF50;
  color: white;
}

.toggle-all:hover:not(:disabled) {
  background-color: #45a049;
}
</style>