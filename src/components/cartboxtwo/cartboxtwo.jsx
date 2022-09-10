import React from 'react'
import { Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import Counter from '../counter/counter';
import { deleteCartBook, updateCart } from '../../services/cartservice';

const UseStyle = makeStyles({
    bookInCart: {
        display: 'flex',
        flexDirection: 'column',
        // border: '1px solid red',
        width: '95%',
        height: '200px',
        marginTop: '5px'
    },
    bookDetail: {
        // border: '1px solid pink',
        width: '100%',
        height: '140px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bookImg: {
        // border: '1px solid yellow',
        width: '25%',
        height: '140px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookContent: {
        // border: '1px solid green',
        width: '75%',
        height: '140px',
        display: 'flex',
        flexDirection: 'column',

    },
    discountPrice: {
        color: '#0A0102',
        font: 'normal normal normal 18px/24px Roboto',
        letterSpacing: '0px'
    },
    mainPrice: {
        color: '#878787',
        font: 'normal normal normal 13px/17px Roboto',
        letterSpacing: '0px',
        marginLeft: '7px',
        textDecoration: 'line-through'
    },
    counterMainBox: {
        display: 'flex',
        // border: '1px solid blue',
        width: '100%',
        height: '60px',
    },
    countbox: {
        height: '40px',
        width: '25%',
        // border:'1px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        position: 'relative',
        top: '10px',
        left: '160px',
    },
    removeButton: {
        width: '15%',
        height: '40px',
        display: 'flex',
        position: 'relative',
        // border:'1px solid black',
        justifyContent: 'center',
        alignItems: 'center',
        top: '10px',
        left: '160px',
    }
})

function Cartboxtwo(props) {
    const classes = UseStyle()

    const [count, setCount] = React.useState(props.cart.quantity)

    const bookRemove = () => {
        console.log("book id", props.cart.bookId);
        deleteCartBook(props.cart.bookId)
            .then((resp) => {
                console.log(resp, "resp.data.data");
            })
            .catch((err) => { console.log(err); })
    }

    const increment = () => {
        let data = {
            increase: true
        }
        updateCart(data, props.cart._id)
            .then((response) => { console.log(response);
                setCount(prevcount => prevcount + 1) })
            .catch((error) => { console.log(error) })
    }

    const decrement = () => {
        let data = {
            increase: false
        }
        updateCart(data, props.cart._id)
            .then((response) => { console.log(response)
                setCount(prevcount => prevcount - 1) })
            .catch((error) => { console.log(error) })
    }

    return (
        <Box className={classes.bookInCart}>
            <Box className={classes.bookDetail}>
                <Box className={classes.bookImg}>
                    <img
                        src='./img/Image 11.png'
                        // src={props.cart.bookImage}
                        alt='bookimage'
                        width='85px'
                        height='100px' />
                </Box>
                <Box className={classes.bookContent}>
                    <Box style={{ display: 'flex', flexDirection: 'column' }}>
                        <h1 style={{
                            font: 'normal normal normal 20px/23px Lato',
                        }}>
                            {props.cart.bookName}
                            {/* Don't Make Me Think */}
                        </h1>
                        <h3 style={{
                            font: 'normal normal normal 15px/19px Lato',
                            color: '#9D9D9D',
                        }}>
                            {props.cart.author}
                            {/* by Steve Krug */}
                        </h3>
                    </Box>
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <Box className={classes.discountPrice}>
                            Rs.{props.cart.discountPrice}
                            {/* Rs. 1500 */}
                        </Box>
                        <Box className={classes.mainPrice}>
                            Rs.{props.cart.price}
                            {/* Rs. 2000 */}
                        </Box>
                    </Box>
                </Box>
            </Box>
            < Box className={classes.counterMainBox}>
                <Box className={classes.countbox}>
                    <RemoveOutlinedIcon fontSize='small' style={{
                        border: '1px solid grey',
                        borderRadius: '100px'
                    }}
                        onClick={decrement} 
                        />
                    <Box className={classes.countvalueBoxshow} > 
                        {count}
                    </Box>
                    <AddOutlinedIcon fontSize='small' style={{
                        border: '1px solid grey',
                        borderRadius: '100px'
                    }}
                        onClick={increment} 
                        />
                </Box>
                <Box className={classes.removeButton}>
                    <Button
                        sx={{
                            width: '45px',
                            height: '15px',
                            color: '#0A0102',
                        }}
                        onClick={bookRemove}
                    >
                        Remove
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Cartboxtwo