import { defineStore } from "pinia";
import { ref } from "vue";
import type { Todo, FilterType } from "~/types/index";

export const useTodoStore = defineStore(
  "todos",
  () => {
    const todos = ref<Todo[]>([]);
    const editingId = ref<number | null>(null);
    const filter = ref<FilterType>("all");

    const filteredTodos = computed(() => {
      switch (filter.value) {
        case "active":
          return todos.value.filter((todo) => !todo.completed);
        case "completed":
          return todos.value.filter((todo) => todo.completed);
        default:
          return todos.value;
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
    };
  },
  {
    persist: {
      key: "todo-store",
      storage: process.client ? localStorage : undefined,
    },
  }
);
