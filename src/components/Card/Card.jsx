import React from 'react';
import classes from './card.module.css';

const Card = (props) => {

   const card = classes.todo__card + " " + props.className; 
  return (
    <div className={card}>{props.children}</div>
  )
}

export default Card