import React, { useState } from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

import { Todo, TodosState } from './utils/Todo.interface';

const App: React.FC = () => {

  const [todos, setTodos] = useState<TodosState>({
    't0': {
      id: 't0',
      text: 'Finish course'
    },
    't1': {
      id: 't1',
      text: 'so cool'
    }
  });

  const [currentId, setCurrentId] = useState<number>(Object.keys(todos).length)
  const [error, setError] = useState<string | null>(null)

  /* add new todo */
  const addTodo = (text: string): void => {
    if (text === '') return setError('can not add a new todo with an empty value');

    const newTodo: Todo = {
      id: `t${currentId}`,
      text
    }

    setTodos((prevState: TodosState) => ({ [newTodo.id]: newTodo, ...prevState }))
    setCurrentId((prevId: number) => ++prevId)
    setError(null)
  };

  /* remove new todo */
  const removeTodo = (todoId: string) => {
    setTodos((prevState: TodosState) => {
      if (prevState[todoId]) {
        delete prevState[todoId];
        return { ...prevState }
      }
      return prevState;
    })
  }

  return (
    <div className="App">
      <NewTodo addTodo={addTodo} />
      {
        error ? <p style={{
          color: 'red'
        }}>{error}</p> : ''
      }
      <TodoList todos={Object.values(todos)} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
