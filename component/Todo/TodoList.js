import React from "react";
import classes from './TodoList.module.css';

const TodoList = (props) => {
  const todos = props.todolist;
  // console.log(todos);

  const DeleteHandler = async(id) => {
    const response = await fetch('/api/delete-todo', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id})

     })
  }


  return (
    <ul className={classes.todo}>
      {todos.map((todo) => (
        <li key={todo.id} className={classes.todolist}>
          <h4 className={classes.title}>{todo.title}</h4>
          <button className={classes.trash} onClick={() =>{DeleteHandler(todo.id)}}>🗑️</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
