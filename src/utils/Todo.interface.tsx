export interface Todo {
  id: string,
  text: string
}

export interface TodosState {
  [key: string]: Todo
}