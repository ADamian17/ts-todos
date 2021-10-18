import React from 'react';

import { Todo } from '../../utils/Todo.interface';

import './TodoList.css';

interface TodoListProps {
  todos: Todo[];
  removeTodo: (todoId: string) => void;
};

/* React.FC functional component */
const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo }) => {
  return (
    <ul>
      {
        todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button className="btn" onClick={() => removeTodo(todo.id)}>delete</button>
          </li>
        ))
      }
    </ul>
  );
}

export default TodoList;