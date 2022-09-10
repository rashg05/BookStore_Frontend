import React from 'react'
import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router';
import { getBookCart } from '../../services/cartservice';
import { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { postOrder } from '../../services/orderservice';

const UseStyle = makeStyles({
    orderMainBox: {
        border: '1px solid #DCDCDC',
        width: '60vw',
        height: 'fit',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px'
    },
    orderText: {
        // border: '1px solid red',
        width: '95%',
        height: '40px',
        display: 'flex',
        alignItems: 'center'
    },
    bookPlaced: {
        display: 'flex',
        flexDirection: 'column',
        // border: '1px solid black',
        width: '95%',
        height: '160px',
        marginTop: '5px'
    },
    imgContentBox: {
        // border: '1px solid pink',
        width: '100%',
        height: '160px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bookImgBox: {
        // border: '1px solid yellow',
        width: '20%',
        height: '150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentBox: {
        // border: '1px solid green',
        width: '80%',
        height: '150px',
        display: 'flex',
        flexDirection: 'column',
    },
    bookNameAuthor: {
        display: 'flex',
        flexDirection: 'column',
    },
    priceBox: {
        display: 'flex',
        alignItems: 'center'
    },
    bookDiscount: {
        color: '#0A0102',
        font: 'normal normal normal 18px/24px Roboto',
        letterSpacing: '0px'
    },
    bookPrice: {
        color: '#878787',
        font: 'normal normal normal 13px/17px Roboto',
        letterSpacing: '0px',
        marginLeft: '7px',
        textDecoration: 'line-through'
    },
    checkoutButtonBox: {
        // border: '1px solid pink',
        width: '95%',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '30px'
    }
})

function Ordersummary() {
    const navigate = useNavigate();
    const classes = UseStyle()

    const [listOfOrderSummary, setListOfOrderSummary] = React.useState([])

    const myOrderPlacedPage = () => {
        postOrder()
            .then((res) => {
                console.log(res);
                navigate('/orderplaced')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getBookCart()
            .then((resp) => {
                console.log(resp, "resp.data.data");
                setListOfOrderSummary(resp.data.data[0].book)
            })
            .catch((err) => { console.log(err); })

    }, [])

    return (
        <Box className={classes.orderMainBox}>
            <Box className={classes.orderText}>
                <h3>Order summery</h3>
            </Box>
            {
                listOfOrderSummary.map((cart) => (
                    <Box className={classes.bookPlaced}>
                        <Box className={classes.imgContentBox}>
                            <Box className={classes.bookImgBox}>
                                <img
                                    // src={cart.bookImage}
                                    src='./img/Image 11.png'
                                    alt='book image'
                                    width='75px'
                                    height='115px' />
                            </Box>
                            <Box className={classes.contentBox}>
                                <Box className={classes.bookNameAuthor}>
                                    <h1 style={{
                                        font: 'normal normal normal 20px/23px Lato',
                                        paddingTop: '7px'
                                    }}>
                                        {cart.bookName}
                                        {/* Don't Make Me Think */}
                                    </h1>
                                    <h3 style={{
                                        font: 'normal normal normal 15px/19px Lato',
                                        color: '#9D9D9D',
                                    }}>
                                        {cart.author}
                                        {/* by Steve Krug */}
                                    </h3>
                                </Box>
                                <Box className={classes.priceBox}>
                                    <Box className={classes.bookDiscount}>
                                        Rs.{cart.discountPrice}
                                        {/* Rs. 1500 */}
                                    </Box>
                                    <Box className={classes.bookPrice}>
                                        Rs.{cart.price}
                                        {/* Rs. 2000 */}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))
            }
            <Box className={classes.checkoutButtonBox}>
                <Button
                    sx={{
                        width: '165px',
                        height: '30px',
                        background: '#3371B5 0% 0% no-repeat padding-box',
                        borderRadius: '2px',
                        position: 'relative',
                        left: '300px',
                        color: '#FFFFFF'
                    }}
                    className={classes.buttonCheckout}
                    variant="contained"
                onClick={myOrderPlacedPage}
                >
                    CHECKOUT
                </Button>
            </Box>
        </Box>
    )
}

export default Ordersummary
