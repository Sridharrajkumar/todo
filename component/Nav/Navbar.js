import React from "react";
import Link from 'next/link';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>TodoList</div>
      <ul>
          <li>
            <Link href='/'>Todo</Link>
          </li>
          <li>
            <Link href='/completed-task'>completed</Link>
          </li>
        </ul>
    </header>
  );
};

export default Navbar;
