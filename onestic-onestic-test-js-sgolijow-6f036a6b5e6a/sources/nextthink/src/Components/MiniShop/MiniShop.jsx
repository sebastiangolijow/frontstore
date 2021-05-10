import React, {useState, useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import styles from './MiniShop.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { Removeitem, addcart } from '../../Redux/Actions';

const StyledButton = withStyles({
    root: {
        background: 'white',
        border: 0,
        color: 'black',
        height: 30,
        width: 20,
        padding: 10,
        '&:hover': {
            backgroundColor: 'white',
            boxShadow: 'none',
        }
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);
const StyledMenu = withStyles({
    paper: {
      border: "1px solid #d3d4d5",
      backgroundColor: "white",
      borderRadius: "10px",
      width: "30vw",
      height: "50vh",
      overflowY: "scroll",
    },
    list: {
      height: "160%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
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

export function MiniShop() {
    const dispatch = useDispatch();
    const [Input, setInput] = useState({ input: "" });
    const [anchorEl, setAnchorEl] = React.useState(null);
    let Products = useSelector((state) => state.Carrito);
  

    const handleClick = (e) => {
      e.preventDefault()
      setAnchorEl(e.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <div>
            <StyledButton
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                <ShoppingCartIcon />
            </StyledButton>
            <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div>
          {Products &&
            Products.map((item) => {
              console.log("Item: ", item);
              return (
                <div>
                  {console.log(Products)}
                  {Products &&
                    Products.map((item) => (
                        <Card className={styles.container}>
                        <img style={{width:'40%', height:'40%'}} src={item.image}></img>
                       <CardHeader className={styles.tag}
                      title={item.albumTitle}
                      subheader={item.salePrice}>
                       </CardHeader>
                       <CardMedia
                     image={item.image}
                     title={item.albumTitle}
                     />     
                     <button className={styles.Button} onClick={() => dispatch(Removeitem(item.sku))}>Discard</button>
                       </Card>
                    ))}
                </div>
              );
            })}
        </div>
        
      </StyledMenu>
        </div>
    );
}