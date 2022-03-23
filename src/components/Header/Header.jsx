import React from 'react';
import classes from './header.module.css';

const Header = () => {
  return (
    <div className={classes.todo__header}>
        <h1 className={classes.todo__header_h1}>ToDo List</h1>
    </div>
  )
}

export default Header