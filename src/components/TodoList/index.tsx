import React from 'react';

import { Todo } from '../utils/Todo.interface';

interface TodoListProps {
  todos: Todo[]
};

/* React.FC functional component */
const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {
        todos.map(todo => <li key={todo.id}>{todo.text}</li>)
      }
    </ul>
  );
}

export default TodoList;