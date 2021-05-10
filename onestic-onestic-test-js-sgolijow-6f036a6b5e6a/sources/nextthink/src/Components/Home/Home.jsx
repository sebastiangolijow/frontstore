import React from 'react'
import {Filters} from '../Filters/Filters'
import styles from './home.module.scss'
import {Showproducts} from  '../Showproducts/Showproducts'

export function Home(){
    return (
        <div className={styles.container}>
             <Filters></Filters>
             <Showproducts></Showproducts>

        </div>
    )
}