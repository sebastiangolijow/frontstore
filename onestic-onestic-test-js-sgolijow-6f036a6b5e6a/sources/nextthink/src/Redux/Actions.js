const ALL_PRODUCTS = 'ALL_PRODUCTS';
const SEARCH = 'SEARCH';
const SEARCHVALUE = 'SEARCHVALUE';
const AGREGAR_CARRITO = 'AGREGAR_CARRITO';
const REMOVE = 'REMOVE';
const GET_DETAILS = 'GET_DETAILS';
const LOGOUT = 'LOGOUT';
const CLEAR_ALL = 'CLEAR_ALL';
var bby = require('bestbuy')('zkV0vgA2RGeQDBibuvt1Dp5k');


export function allProducts(page) {
    return function (dispatch) {
      return fetch(` https://api.bestbuy.com/v1/products?pageSize=50&page=${page}&apiKey=zkV0vgA2RGeQDBibuvt1Dp5k&format=json`)
        .then((response) => response.json())
        .then((json) => {
          dispatch({ type: ALL_PRODUCTS, payload: json.products });
        }).catch((err)=>console.log(err))
    };
  }

 export const postUser = (user) => {
  window.localStorage.setItem('key', JSON.stringify(user))
  return {
    type:'USER',
    payload:user
  }
 }

 export const userLogin = (user) => {
  const item = window.localStorage.getItem('key')
  //  item ? JSON.parse(item)
   return {
  type:'USERLOG',
  payload: item && JSON.parse(item)
   } 
 }

  export function Search(name, price, date) {
    console.log(name)
    const nombre = name ? name : null;
      return function (dispatch) {
        return fetch(`https://api.bestbuy.com/v1/products(search=${nombre})?format=json&show=image,releaseDate,sku,name,salePrice&apiKey=zkV0vgA2RGeQDBibuvt1Dp5k&format=json`)
          .then((response) => response.json())
          .then((json) => {
            dispatch({ type: SEARCH, payload: json.products, price, date});
          }).catch((err)=>alert('Ups couldnt find it'))
      };
    }

export const LogOut = () => {
  window.localStorage.removeItem('key');
  return {
    type: LOGOUT,
  }
}


export const ClearAll = () => {
  return {
    type: CLEAR_ALL
  }
}


export const Searchvalue = (payload) => {
return {
  type: SEARCHVALUE,
  payload,
}
}

export function agregarCarrito(payload) {
    return function (dispatch) {
      return fetch(`https://api.bestbuy.com/v1/products/${payload}.json?pageSize=50&page=1&apiKey=zkV0vgA2RGeQDBibuvt1Dp5k&format=json`)
        .then((response) => response.json())
        .then((json) => {
          window.localStorage.setItem('cart', JSON.stringify(json))
          dispatch({ type: AGREGAR_CARRITO, payload: json}); alert('Added to cart');
        }).catch((err)=>alert('Ups couldnt find it'))
    };
  }



  export const addcart = (payload) => {
    return {
      type:'addcart',
      payload
    }
  }
export const Removeitem = (payload) => {
  return {
    type: REMOVE,
    payload,
  }
}

  


export const GetDetails = (id) => {
    return function (dispatch) {
      return fetch(`https://api.bestbuy.com/v1/products/${id}.json?pageSize=50&page=1&apiKey=zkV0vgA2RGeQDBibuvt1Dp5k&format=json`)
        .then((response) => response.json())
        .then((json) => {
          dispatch({ type: GET_DETAILS, payload: json });
        }).catch((err)=>console.log(err))
    };
  }


