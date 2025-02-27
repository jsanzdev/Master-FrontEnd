import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Todo, FilterType } from "~/types/index";

export const useTodoStore = defineStore(
  "todos",
  () => {
    const todos = ref<Todo[]>([]);
    const editingId = ref<number | null>(null);
    const filter = ref<FilterType>("all");
    const searchQuery = ref("");

    const filteredTodos = computed(() => {
      let filtered = todos.value;

      if (searchQuery.value) {
        filtered = filtered.filter((todo) =>
          todo.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      }

      switch (filter.value) {
        case "active":
          return filtered.filter((todo) => !todo.completed);
        case "completed":
          return filtered.filter((todo) => todo.completed);
        default:
          return filtered;
      }
    });

    const addTodo = (title: string) => {
      todos.value.push({
        id: Date.now(),
        title,
        completed: false,
        createdAt: new Date(),
      });
    };

    const toggleTodo = (id: number) => {
      const todo = todos.value.find((t) => t.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    };

    const deleteTodo = (id: number) => {
      todos.value = todos.value.filter((t) => t.id !== id);
    };

    const editTodo = (id: number, newTitle: string) => {
      const todo = todos.value.find((t) => t.id === id);
      if (todo) {
        todo.title = newTitle;
      }
      editingId.value = null;
    };

    const startEditing = (id: number) => {
      editingId.value = id;
    };

    const cancelEditing = () => {
      editingId.value = null;
    };

    const setFilter = (newFilter: FilterType) => {
      filter.value = newFilter;
    };

    const setSearchQuery = (query: string) => {
      searchQuery.value = query;
    };

    const deleteAllTodos = () => {
      todos.value = [];
    };

    const completeAllTodos = () => {
      todos.value = todos.value.map((todo) => ({
        ...todo,
        completed: true,
      }));
    };

    const uncompleteAllTodos = () => {
      todos.value = todos.value.map((todo) => ({
        ...todo,
        completed: false,
      }));
    };

    return {
      todos,
      editingId,
      addTodo,
      toggleTodo,
      deleteTodo,
      editTodo,
      startEditing,
      cancelEditing,
      filter,
      filteredTodos,
      setFilter,
      searchQuery,
      setSearchQuery,
      deleteAllTodos,
      completeAllTodos,
      uncompleteAllTodos,
    };
  },
  {
    persist: {
      key: "todo-store",
      storage: process.client ? localStorage : undefined,
    },
  }
);
