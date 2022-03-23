import React from 'react';
import classes from './list.module.css';

const List = (props) => {

  
  return (
    <div className={classes.todo__list}>
        <table className={classes.todo__list_table}>
            <tr>
              <th>#ID</th>
              <th>FirstName</th>
              <th>Surname</th>
              <th>Username</th>
              <th>Email</th>
              <th>Action</th>
            </tr>

           {props.user.map((user) => {
              return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstname}</td>
              <td>{user.surname}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td><button className={classes.todo__list_table__btn} onClick={(() => props.delHandler(user.id))}>Remove</button></td>
             </tr>
              );
           })}
        </table>
    </div>
  )
}

export default List