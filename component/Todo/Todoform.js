import React, { Fragment, useRef, useState } from "react";
import Card from "../Card/Card";
import classes from "./Todoform.module.css";

const Todoform = (props) => {
  const [viewForm, setviewForm] = useState(false);
  const titleRef = useRef();

  const Submithandler = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    props.addTodoHandler ({title});

    setviewForm(false)
  };

  const toggleFormVisibility = () => {
    setviewForm(true);
  }

  return (
    <Fragment>
      {!viewForm && <button className={classes.addbutton} onClick={toggleFormVisibility}>Add Todo</button>}
      {viewForm && (
        <form className={classes.form} onSubmit={Submithandler}>
          <input type="text" name="todo" placeholder="Enter the title" ref={titleRef} />
          <button type="submit">Submit</button>
        </form>
      )}
    </Fragment>
  );
};

export default Todoform;
