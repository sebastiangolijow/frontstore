import React, {useEffect} from 'react'
import {Login} from './Login'
import {SignUp} from './SignUp'
import styles from './landing.module.scss'
import { useDispatch } from "react-redux";
import {LogOut} from '../../Redux/Actions'


export function Landing(){
const dispatch = useDispatch()

const user = window.localStorage.getItem('key')
user && JSON.parse(user)
    return (
        <div className={styles.container}>
         <SignUp></SignUp>
        <Login></Login>
        <button className={styles.simpleButton} style={{position:'relative', top:'100px'}} onClick={() => user && dispatch(LogOut())}>Log Out</button>
        </div>
    )
}