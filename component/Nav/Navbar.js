import React from "react";
import Link from 'next/link';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>TodoList</div>
      <nav>
        <ul>
          <li>
            <Link href="/">List</Link>
          </li>
          <li>
            <Link href="/">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
