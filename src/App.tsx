import React, { useState } from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

import { Todo } from './components/utils/Todo.interface';

const App: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 't0',
      text: 'Finish course'
    },
    {
      id: 't1',
      text: 'so cool'
    }
  ]);

  const [currentId, setCurrentId] = useState<number>(todos.length)
  const [error, setError] = useState<string | null>(null)

  /* add new todo */
  const addTodo = (text: string): void => {
    if (text === '') return setError('can not add a new todo with an empty value');

    const newTodo: Todo = {
      id: `t${currentId}`,
      text
    }

    setTodos((prevState: Todo[]) => [...prevState, newTodo])
    setCurrentId((prevId: number) => ++prevId)
    setError(null)
  };

  return (
    <div className="App">
      <NewTodo addTodo={addTodo} />
      {
        error ? <p style={{
          color: 'red'
        }}>{error}</p> : ''
      }
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
