export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
}

export type FilterType = "all" | "active" | "completed";
