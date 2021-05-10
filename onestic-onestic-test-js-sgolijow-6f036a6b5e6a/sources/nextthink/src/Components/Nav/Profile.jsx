import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import style from "./profile.module.scss";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {users} from '../../customers'
import {postUser} from '../../Redux/Actions'
import Avatar from "@material-ui/core/Avatar";
import { useDispatch, useSelector } from "react-redux";
import {LogOut} from '../../Redux/Actions'
import styles from './profile.module.scss'
const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));


export function Profile() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const dispatch = useDispatch();
  const userRegistered = useSelector(state => state.Users)
 
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
      dispatch(postUser(user));}
    else if( userRegistered && userRegistered.find((item)=> item.email === user.email && item.password === user.password)){
      alert('Logged')
      dispatch(postUser(user));
    } else {
      alert('Something went wrong...')
    }
    };

    const item = window.localStorage.getItem('key')
    item && JSON.parse(item)
    console.log(item)
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {
        item ?                
        <div> 
        <Avatar
       className={style.large}
       onClick={handleClick}
     />
     <StyledMenu
       id="customized-menu"
       anchorEl={anchorEl}
       keepMounted
       open={Boolean(anchorEl)}
       onClose={handleClose}
     >
         <h3>My Profile</h3>
         <div>
         <button className={styles.simpleButton} style={{position:'relative', top:'100px'}} onClick={() => user && dispatch(LogOut())}>Log Out</button>
         </div>
         <Link to='/'><img className={style.img3} src='https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg' /></Link>

     </StyledMenu>
     </div> 

        : 
        <div> 
        <Avatar
       className={style.large}
       onClick={handleClick}
     />
     <StyledMenu
       id="customized-menu"
       anchorEl={anchorEl}
       keepMounted
       open={Boolean(anchorEl)}
       onClose={handleClose}
     >
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
         <div>
         <button className={styles.simpleButton} type="button" name="login" onClick={(e) => loginUsers(e)}>LogIn</button>
         <button className={styles.simpleButton} style={{position:'relative', top:'100px'}} onClick={() => user && dispatch(LogOut())}>Log Out</button>
         </div>
         <Link to='/'><img className={style.img3} src='https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg' /></Link>

     </StyledMenu>
     </div> 
     
     }
      
    </div>
  );
}
