import React from "react";
import classes from './TodoList.module.css';

const TodoList = (props) => {
  const todos = props.todolist;
  // console.log(todos);
  return (
    <ul className={classes.todo}>
      {todos.map((todo) => (
        <li key={todo.id} className={classes.todolist}>
          <h4 className={classes.title}>{todo.title}</h4>
          <button className={classes.trash}>🗑️</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
