import React from 'react'
import { useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import styles from './filters.module.scss'
import {allProducts, Search} from '../../Redux/Actions'

export function Filters(){
const dispatch = useDispatch()
const [Price, setPrice] = useState(document.getElementById('price') && document.getElementById('price').value)
const [Date, setDate] = useState(document.getElementById('date') && document.getElementById('date').value)
const Input = useSelector((state) => state.Searchvalue)



const handleclick = (e) => {
e.preventDefault()
setPrice(document.getElementById('price') && document.getElementById('price').value)
setDate(document.getElementById('date') && document.getElementById('date').value)
}

useEffect(() => {
dispatch(Search(Input, Price, Date))
 }, [Input, Price, Date])

    return (
        <div className={styles.container}>
            <h3 className={styles.tag}>Filters</h3>
            <h4 className={styles.tag}>Filter by:</h4>
            <select className={styles.tag2} id='date'>
            <option className={styles.tag2} value="">Date:</option>
                <option className={styles.tag2} value='2000'>2000-2005</option>
                <option className={styles.tag2} value='2005'>2005-2010</option>
                <option className={styles.tag2} value='2010'>2010-2015</option>
                <option className={styles.tag2} value='2015'>2015-2021</option>
            </select>
            <select className={styles.tag2} id='price'>
            <option className={styles.tag2} value="">Price top:</option>
                <option className={styles.tag2} value='15'>15</option>
                <option className={styles.tag2} value='25'>25</option>
                <option className={styles.tag2} value='50'>50</option>
                <option className={styles.tag2} value='100'>100</option>
                <option className={styles.tag2} value=''>more</option>
            </select>
            <button className={styles.tag2} onClick={(e) => handleclick(e)}><strong>Apply filters</strong></button>
        </div>
    )
}