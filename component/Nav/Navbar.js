import React from "react";
import Link from 'next/link';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>TodoList</div>
    </header>
  );
};

export default Navbar;
