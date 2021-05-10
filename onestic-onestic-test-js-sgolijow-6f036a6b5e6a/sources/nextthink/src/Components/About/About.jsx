import { useEffect } from "react";
import  {useSelector, useDispatch} from "react-redux";
import {agregarCarrito, GetDetails} from '../../Redux/Actions'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import styles from './about.module.scss'
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export function About({id}){

const Details = useSelector(state => state.Details)

const dispatch = useDispatch();

useEffect(() => dispatch(GetDetails(id)), [dispatch])
console.log(id)
console.log(Details)
return (
    <div>
      {
       Details && (
        <Card>
              <Carousel  className={styles.img} >
                {
                    Details.images && Details.images.map((item) => (
                        <div>
                        <img src={item.href}  />
                    </div>
                    ))
                }
            </Carousel>

        <p>
            {
                Details.categoryPath && Details.categoryPath.map((item) => (
                    <div style={{display:'felx', flexDirection:'row'}}>
                        <h5 className={styles.tag}>{item.name} / </h5>
                    </div>
                ))
            }
        </p>
         <CardHeader style={{fontFamily:'roboto'}}
        title={Details.name}
        subheader={Details.salePrice}>
         </CardHeader>
         <p className={styles.tag}>
             {Details.plot}
         </p>
   
        <button onClick={() => dispatch(agregarCarrito(id))} className={styles.button}>Agregar al carrito</button>

        </Card>
       )  
      }
    </div>
)
}