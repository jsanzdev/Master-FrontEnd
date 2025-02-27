import { defineStore } from "pinia";
import { ref } from "vue";
import type { Todo } from "~/types/index";

export const useTodoStore = defineStore(
  "todos",
  () => {
    const todos = ref<Todo[]>([]);
    const editingId = ref<number | null>(null);

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

    return {
      todos,
      editingId,
      addTodo,
      toggleTodo,
      deleteTodo,
      editTodo,
      startEditing,
      cancelEditing,
    };
  },
  {
    persist: {
      key: "todo-store",
      storage: process.client ? localStorage : undefined,
    },
  }
);
