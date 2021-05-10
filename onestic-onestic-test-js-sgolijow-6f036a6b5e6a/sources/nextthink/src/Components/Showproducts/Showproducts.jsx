import React, {useState} from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {Search, allProducts, pagination, agregarCarrito} from '../../Redux/Actions'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import styles from './showproducts.module.scss'
import {Link }from 'react-router-dom'

export function Showproducts(){
const dispatch = useDispatch()
const Products = useSelector(state => state.Products)
let [Page, setPage] = useState(1)



const handleclick = (e) => {
  e.preventDefault()
  setPage(++Page)
}
const handleclick2 = (e) => {
  e.preventDefault()
  setPage(--Page)
}
useEffect(() => {
  if(Page <= 0 ){
  document.getElementById('back').disabled=true;
  } else {
    document.getElementById('back').disabled=false;
  }
    dispatch(allProducts(Page));
}, [Page])

    return (
          <div>
          <div>
          <button id='back' className={styles.button2} onClick={handleclick2}>Back</button>
          <button  className={styles.button2} onClick={handleclick}>Go</button>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)'}}>
          {
              Products && Products.map((item, id) => (
                <Card className={styles.container}>
                   <img className={styles.img} src={item.image}></img>
                   <Link style={{outline:'none'}}to={`/home/${item.sku}`}>
                  <CardHeader className={styles.tag}
                 title={item.albumTitle}
                 subheader={item.salePrice}>
                  </CardHeader>
                  </Link>

                  <CardMedia
                image={item.image}
                title={item.albumTitle}
                />
                <button onClick={() => dispatch(agregarCarrito(item.sku))}
                 className={styles.button}>Agregar al carrito</button>

                  </Card>
              ))
          }
          </div>
        </div>
    )
}