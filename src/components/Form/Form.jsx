import React, {useState} from 'react';
import classes from './form.module.css';

const Form = (props) => {

   const [enteredFirstname, setFirstname] = useState('');
   const [enteredSurname, setSurname] = useState('');
   const [enteredUsername, setUsername] = useState('');
   const [enteredEmail, setEmail] = useState('');

   const firstnameHandler = (event) => {
      setFirstname(event.target.value);
   }

   const surnameHandler = (event) => {
     setSurname(event.target.value);
   }

   const usernameHandler = (event) => {
     setUsername(event.target.value);
   }

   const emailHandler = (event) => {
      setEmail(event.target.value);
   }


   const submitHandler = (event) => {
     event.preventDefault();


     const inputData = {
       id: Math.random().toString(),
       firstname: enteredFirstname,
       surname: enteredSurname,
       username: enteredUsername,
       email: enteredEmail
     }

     props.onSave(inputData);

     setFirstname('');
     setSurname('');
     setUsername('');
     setEmail('');

   }

  return (
    <div className={classes.todo__form}>
       <form onSubmit={submitHandler}>
           <div className={classes.todo__form_group}>
             <label>FirstName</label>
             <input type="text" onChange={firstnameHandler} value={enteredFirstname} />
           </div>

           <div className={classes.todo__form_group}>
             <label>Surname</label>
             <input type="text" onChange={surnameHandler} value={enteredSurname} />
           </div>


           <div className={classes.todo__form_group}>
             <label>Userame</label>
             <input type="text" onChange={usernameHandler} value={enteredUsername} />
           </div>


           <div className={classes.todo__form_group}>
             <label>Email</label>
             <input type="text" onChange={emailHandler} value={enteredEmail} />
           </div>
          
          <input type="submit" value="Submit" className={classes.todo__form_btn} />
       </form>
    </div>
  )
}

export default Form