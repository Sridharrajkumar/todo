import React from "react";
import Navbar from './Navbar'
import classes from './home.module.css'

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
