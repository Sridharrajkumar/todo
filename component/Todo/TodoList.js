import React, { useRef, useState } from "react";
import classes from "./TodoList.module.css";
import { FaRegSquare, FaTrash, FaCheckSquare } from "react-icons/fa";

const TodoList = (props) => {
  const [editForm, setEditForm] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editingId, setEditingId] = useState(null);

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
  };

  const editHandler = async (id,title) => {
    setEditForm(true);
    setEditingId(id);
    setEditedTitle(title);
  };

  const saveEditedValue = async() => {
    setEditForm(false);
    const response = await fetch("/api/update-todo", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: editingId,
        title: editedTitle,
        viewed: false,
      }),
    });
  };

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
          {todo.viewed && (
            <FaCheckSquare
              className={classes.ticked}
              onClick={() => ToggleViewed(todo)}
            />
          )}
          {!todo.viewed && (
            <FaRegSquare
              className={classes.ticked}
              onClick={() => ToggleStatus(todo)}
            />
          )}
          <h4 className={classes.title}>{todo.title}</h4>
          <div className={classes.todobuttons}>
            <button
              className={classes.todoedit}
              onClick={() => editHandler(todo.id,todo.title)}
            >
              Edit
            </button>
            <button
              className={classes.trash}
              onClick={() => {
                DeleteHandler(todo.id);
              }}
            >
              <FaTrash />
            </button>
          </div>
        </li>
      ))}
      {editForm && (
        <li>
          <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)}/>
          <button onClick={saveEditedValue}>Update</button>
        </li>
      )}
    </ul>
  );
};

export default TodoList;
