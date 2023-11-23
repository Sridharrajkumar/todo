import React, { useState } from "react";
import classes from "./TodoList.module.css";
import { FaRegSquare, FaTrash, FaCheckSquare } from "react-icons/fa";

const TodoList = (props) => {
  const todos = props.todolist;
  //console.log(todos);

  const ToggleStatus = async (list) => {
    const response = await fetch("/api/update-todo", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: list.id,
        title: list.title,
        viewed: true,
      }),
    });
  };

  const ToggleViewed = async (list) => {
    const response = await fetch("/api/update-todo", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: list.id,
        title: list.title,
        viewed: false,
      }),
    });
  }

  const DeleteHandler = async (id) => {
    const response = await fetch("/api/delete-todo", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
  };



  return (
    <ul className={classes.todo}>
      {todos.map((todo) => (
        <li key={todo.id} className={classes.todolist}>
            {todo.viewed && <FaCheckSquare className={classes.ticked} onClick={() => ToggleViewed(todo)} /> }
            {!todo.viewed && <FaRegSquare className={classes.ticked} onClick={() => ToggleStatus(todo)} />}
          <h4 className={classes.title}>{todo.title}</h4>
          <button
            className={classes.trash}
            onClick={() => {
              DeleteHandler(todo.id);
            }}
          >
            <FaTrash />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

