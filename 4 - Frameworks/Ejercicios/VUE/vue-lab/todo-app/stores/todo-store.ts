import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { FilterType, TodoList } from "~/types/index";

export const useTodoStore = defineStore(
  "todos",
  () => {
    const lists = ref<TodoList[]>([{ id: 1, name: "Default List", todos: [] }]);
    const editingId = ref<number | null>(null);
    const filter = ref<FilterType>("all");
    const searchQuery = ref("");
    const activeListId = ref<number | null>(1);

    const activeList = computed(() =>
      lists.value.find((list) => list.id === activeListId.value)
    );

    const addList = (name: string) => {
      lists.value.push({
        id: Date.now(),
        name,
        todos: [],
      });
    };

    const deleteList = (id: number) => {
      lists.value = lists.value.filter((list) => list.id !== id);
      if (activeListId.value === id) {
        activeListId.value = lists.value[0]?.id;
      }
    };

    const setActiveList = (id: number) => {
      activeListId.value = id;
    };

    const todos = computed(() => activeList.value?.todos || []);

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
      const list = lists.value.find((l) => l.id === activeListId.value);
      if (list) {
        list.todos.push({
          id: Date.now(),
          title,
          completed: false,
          createdAt: new Date(),
        });
      }
    };

    const toggleTodo = (id: number) => {
      const list = lists.value.find((l) => l.id === activeListId.value);
      if (list) {
        const todo = list.todos.find((t) => t.id === id);
        if (todo) {
          todo.completed = !todo.completed;
        }
      }
    };

    const deleteTodo = (id: number) => {
      const list = lists.value.find((l) => l.id === activeListId.value);
      if (list) {
        list.todos = list.todos.filter((t) => t.id !== id);
      }
    };

    const editTodo = (id: number, newTitle: string) => {
      const list = lists.value.find((l) => l.id === activeListId.value);
      if (list) {
        const todo = list.todos.find((t) => t.id === id);
        if (todo) {
          todo.title = newTitle;
        }
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
      const list = lists.value.find((l) => l.id === activeListId.value);
      if (list) {
        list.todos = [];
      }
    };

    const completeAllTodos = () => {
      const list = lists.value.find((l) => l.id === activeListId.value);
      if (list) {
        list.todos = list.todos.map((todo) => ({
          ...todo,
          completed: true,
        }));
      }
    };

    const uncompleteAllTodos = () => {
      const list = lists.value.find((l) => l.id === activeListId.value);
      if (list) {
        list.todos = list.todos.map((todo) => ({
          ...todo,
          completed: false,
        }));
      }
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
      addList,
      deleteList,
      setActiveList,
      lists,
      activeList,
      activeListId,
    };
  },
  {
    persist: {
      key: "todo-store",
      storage: process.client ? localStorage : undefined,
    },
  }
);
