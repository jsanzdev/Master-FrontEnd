<template>
    <div class="filter-container">
      <button
        v-for="option in filterOptions"
        :key="option.value"
        @click="store.setFilter(option.value)"
        :class="{ active: store.filter === option.value }"
        class="filter-button"
      >
        {{ option.label }}
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useTodoStore } from '~/stores/todo-store'
  import type { FilterType } from '~/stores/todo-store'
  
  const store = useTodoStore()
  
  const filterOptions = [
    { value: 'all' as FilterType, label: 'All' },
    { value: 'active' as FilterType, label: 'Active' },
    { value: 'completed' as FilterType, label: 'Completed' }
  ]
  </script>
  
  <style scoped>
  .filter-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;
  }
  
  .filter-button {
    padding: 0.5rem 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: white;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .filter-button:hover {
    background: #f5f5f5;
  }
  
  .filter-button.active {
    background: #4CAF50;
    color: white;
    border-color: #4CAF50;
  }
  </style>