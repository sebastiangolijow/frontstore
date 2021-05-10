import { useEffect } from "react";

const InitialState = {
   Products: [],
   Searchvalue: '',
   Details: {},
   Carrito: [],
   User:[],
  };
  


function Reducer(state = InitialState, action) {

    switch (action.type) { 
      case "ALL_PRODUCTS":
        return { ...state,
        Products: action.payload 
        };
        case 'USER':
          return {
            ...state,
            User: state.User.concat(action.payload)
          };
          case 'CLEAR_ALL':
            return {
              Carrito: []
            }
        
        case "SEARCHVALUE":
          return { ...state,
          Searchvalue: action.payload
          };
        case 'GET_DETAILS': 
        return {
          ...state,
          Details: action.payload
        };
        case 'REMOVE': 
        return {
          ...state,
          Carrito: state.Carrito.filter(item => item.sku !== action.payload)
        }        
        case 'addcart': {
          return {
            Carrito: state.Carrito.concat(action.payload)
          }
        }
        case 'AGREGAR_CARRITO': 
        return {
          ...state,
          Carrito: state.Carrito.concat(action.payload)
        } 
      case "SEARCH":
        if(!action.price && !action.date){
          return {
            ...state,
            Products:action.payload
          }
        }
        if(action.price && !action.date){
          return {
            ...state,
            Products: action.payload.filter((item) => item.salePrice < action.price)
          }
        }
        if(action.date && !action.price){
          return {
            ...state,
            Products:  action.payload.filter((item) => parseInt(item.releaseDate.split('-')[0]) > parseInt(action.date) && parseInt(item.releaseDate.split('-')[0]) <  (parseInt(action.date) + 5) )
          }
        }
      default:
        return state;
    }
  }
  
  export default Reducer;


    // }
    
        // if(action.date && !action.price){
        //   return { 
        //     ...state,
        //     Products:
        //   }
        // }
        // if(action.date && action.price){
        //   return { 
        //     ...state,
        //     Temp: action.payload.filter((item) => item.salePrice < action.price),
        //     Products: Temp.filter((item) => parseInt(item.releaseDate.split('-')[0]) > parseInt(action.date))
        //   }
        // }
        //  else {
        // return { ...state,
        //   Products: action.payload
        // }};