import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import styles from './carrito.module.scss'
import {Removeitem, ClearAll, addcart} from '../../Redux/Actions'
export function Carrito(){

const Cart = useSelector(state => state.Carrito)
let [Count, setCount] = useState(1)
const dispatch = useDispatch()
useEffect(() => {
setTimeout(() => {
  document.getElementById('menos') &&  Count <= 0 ? document.getElementById('menos').disabled=true :  document.getElementById('menos').disabled=false;
}, 1000)
}, [Count])
useEffect(() =>  
dispatch(addcart(JSON.parse(window.localStorage.getItem('cart')))), [])

    return (
        <div >
          <h2 style={{fontFamily:'roboto'}}>Your cart:</h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)'}}>
          {
              Cart && Cart.map((item) => (
                 <Card className={styles.container}>
                   <img className={styles.img} src={item.image}></img>
                  <CardHeader className={styles.tag}
                 title={item.albumTitle}
                 subheader={item.salePrice}>
                  </CardHeader>
                  <CardMedia
                image={item.image}
                title={item.albumTitle}
                />
             
                <button id='menos' onClick={()=>setCount(--Count)} className={styles.button}>-</button ><button onClick={()=>setCount(++Count)} className={styles.button}>+</button>
                <h3>Quantity: {Count} </h3>
                {console.log(item.sku)}
                <button onClick={() => dispatch(Removeitem(item.sku))}>Remove</button>
                </Card>
              ))
          }
          </div>
          <button className={styles.button} onClick={() => dispatch(ClearAll())}>Clear All</button>
        </div>
    )
}