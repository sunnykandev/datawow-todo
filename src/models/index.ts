export interface ITodoItem {
  id: string;
  title: string;
  completed?: boolean;
}

export interface ITodoListState {
  todoItems: ITodoItem[];
}
