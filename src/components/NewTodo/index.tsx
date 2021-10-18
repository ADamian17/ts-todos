import React, { useState } from 'react'

import './NewTodo.css';

interface NewTodoProps {
  addTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    addTodo(todo)
    setTodo('')
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setTodo(e.currentTarget!.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add todo</legend>
        <input
          type="text"
          name="todo"
          id="todo"
          value={todo}
          onChange={handleChange}
          placeholder="add todo" />
        <br />
        <input type="submit" value="add todo" />
      </fieldset>
    </form>
  )
};

export default NewTodo;
