import React from 'react'
import styles from './nav.module.scss'
import {Link} from 'react-router-dom'
import {SearchBar} from '../SearchBar/SearchBar'
import {MiniShop} from '../MiniShop/MiniShop'
import { allProducts } from '../../Redux/Actions'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
import {Profile} from './Profile'
import logo from '../../../src/logo.svg';

export function Nav(){
    const dispatch = useDispatch()
const temp = useSelector(state => state.Searchvalue)

useEffect(() => {
    if(temp === ''){
        dispatch(allProducts(1))
    }
})

    return (
        <div className={styles.div}>
        <Link to='/home'><img className={styles.img} src='https://onestic.com/wp-content/uploads/2018/10/onestic_blue.png' alt='Onestic Img'/></Link>  
       <SearchBar></SearchBar>
       <MiniShop></MiniShop>
        <Link to='/carrito'><img className={styles.img2} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAS1BMVEX///8AAAC3t7d1dXW6urr7+/tFRUXX19dra2vf399wcHDc3Nxvb29DQ0Pi4uLa2tpLS0tQUFDT09M4ODg+Pj7x8fEMDAxWVlZYWFhHQy5xAAAB8UlEQVR4nO3ba1LCQBBF4Yw6RFQExdf+V6qIhSLp+RVqitPnW0Fu9Z3ppAqGQZIkSZIkSZIkSZIkSZIkSZIkXYy6ver9COdVF6WgI+4CsiN+ByzlpvdznEtdlYKOWDflgFnUVSnoiHVRjuCK+j8gboqnAWkRJwKiIk5NEHUWX4OAnCk+RgE5EZdxREpRG1NMEDFBUSkRLSpBgqK6NAgSFPU+dURKUROcxdxFpUTMvRcpU0xQ1ARLI8FZTFDUkR9xbVEBEhQ1QUTPIkGCojYiJigqJWLjuklQ1AQRLerFeE4dkVLUBGcxwY3qWSRYv+GnuA0T3vV+tFlEv2H88tD72WZRX+gTjCt63fvZZlFX9IDxGbzt/Wyz4Fc0vmQgATdhQMgtmngPQioaTxASMD6DkDURT5BxyQz4M0hfEwP+DOIriv+aiCvKeJNpnEFIQHpFGxOEBHwKAzLWRGOCkEVP/5poVBQyQfwZxFc08ZqAvMm4Ji5dXFF8QMiawN+i+IDvYUDILRoHxO9BfEUhAT/CgIw1UfHfg/FPnCEVjX85igkY/WmEcQZ/TP2xGTTBndOiwgKeRoS8yfy1pAc8vm5wFd0b6QF/Vz9qTRzbn0XIq9q0kVzRvZE9wZ1l7weQJEmSJEmSJEmSJEmSJEmSJEmSgD4Bh2wSEXbX1yMAAAAASUVORK5CYII=' /></Link>
         <Profile/>
        </div>
    )
}