import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, postUser} from "../../Redux/Actions";
import style from "./login.module.scss";
import swal from "sweetalert";
import {users} from '../../customers'


export function Login() {
  const dispatch = useDispatch();
  const userRegistered = useSelector(state => state.User)
  const [user, setUser] = useState({
    email: "",
    password: "",
  });


  const handleState = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const loginUsers = (e) => {
    if(users && users.find((item) => item.email === user.email && item.password === user.password)){
      alert('Logged')
      dispatch(postUser(user))
    }
      if(userRegistered && userRegistered.find(item => item.email === user.email && item.password === user.password)){
        alert('Logged')
        dispatch(postUser(user))
      } else {
      alert('Something went wrong...')
    }
    };
  
  return (
    <form style={{display:'flex', flexDirection:'column', position:'absolute', top:'8rem', left:'50rem'}}>
          <input
            style={{margin:'5px'}}
            type="text"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleState}
          />
          <input  style={{margin:'5px'}}
            className={!user.password ? "danger" : ""}
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleState}
          />
        <button
           style={{margin:'5px'}}
          type="button"
          name="login"
          onClick={(e) => loginUsers(e)}
        >
          LogIn
          </button>
    </form>
  );
}
