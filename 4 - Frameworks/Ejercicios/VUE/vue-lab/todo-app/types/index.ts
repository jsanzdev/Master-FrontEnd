export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
}

export interface TodoList {
  id: number;
  name: string;
  todos: Todo[];
}

export type FilterType = "all" | "active" | "completed";
