import React from 'react'
import { Box, Button } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import Addressdetails from '../../components/addressdetails/addressdetails';
import Ordersummary from '../../components/ordersummary/ordersummary'
import { useEffect } from 'react';
import { deleteCartBook, getBookCart } from '../../services/cartservice';
import Header from '../../components/header/header'
import { Container } from '@mui/material'
import Footer from '../../components/footer/footer'
import { useNavigate } from 'react-router';
import { Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Cartboxtwo from '../../components/cartboxtwo/cartboxtwo';

const UseStyle = makeStyles({
    containerCart: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        left: 60,
        width: 1100,
        height: 'auto',
        marginTop: '20px',
    },
    cartParentBox: {
        display: 'flex',
        flexDirection: 'column',
        width: '60vw',
        height: 'auto',
        // border: '1px solid black',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '170px',
        marginTop: '20px',
    },
    cartInsideBox: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        // height: '410px',
        height: 'fit',
        border: '1px solid #DCDCDC',
        // border: '1px solid red',
        alignItems: 'center',
    },
    itemInCart: {
        // border: '1px solid purple',
        display: 'flex',
        alignItems: 'center',
        width: '90%',
        height: '50px',
        marginTop: '20px',
    },
    locationBox: {
        display: 'flex',
        width: '275px',
        height: '40px',
        border: '1px solid #DCDCDC',
        position: 'relative',
        left: '348px',
        alignItems: 'center'
    },
    addressBoxOpen: {
        display: 'flex',
        alignItems: 'center',
        // border: '1px solid black',
        width: '90%',
        height: '100px',
        marginTop: '5px'
    },

    addressBox: {
        display: 'flex',
        width: '98%',
        height: '60px',
        marginTop: '10px',
        border: '1px solid #DCDCDC',
        borderRadius: '1px'
    },
    addressViewBox: {
        display: 'flex',
        width: '90%',
        height: '40px',
        // border: '1px solid black',
        alignItems: 'center',
        textAlign: 'start',
        position: 'relative',
        top: '9px',
        left: '35px',
        color: '#333232'
    },
    orderSummeryBox: {
        diplay: 'flex',
        width: '98%',
        height: '60px',
        marginTop: '10px',
        border: '1px solid #DCDCDC',
        borderRadius: '1px'
    },
    orderViewBox: {
        display: 'flex',
        width: '90%',
        height: '40px',
        // border: '1px solid black',
        alignItems: 'center',
        textAlign: 'start',
        position: 'relative',
        top: '9px',
        left: '35px',
        color: '#333232'
    },
    bookInCart: {
        display: 'flex',
        flexDirection: 'column',
        // border: '1px solid red',
        width: '90%',
        height: '180px',
        marginTop: '5px'
    },
    bookDetail: {
        // border: '1px solid pink',
        width: '100%',
        height: '130px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bookImg: {
        // border: '1px solid yellow',
        width: '20%',
        height: '110px',
        display: 'flex',
        justifyContent: 'center',
    },
    bookContent: {
        // border: '1px solid green',
        width: '80%',
        height: '130px',
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
        alignItems: 'center',
    },
    counterBox: {
        width: '15%',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // border: '1px solid orange',
        position: 'relative',
        top: '2px',
        left: '140px',
    },
    removeButton: {
        display: 'flex',
        position: 'relative',
        top: '2px',
        left: '140px',
    }
})

function Mycart() {
    const classes = UseStyle()
    const navigate = useNavigate();

    const [addressView, setAddressView] = useState(true)
    const [orderSummery, setOrderSummery] = useState(true)
    const [listOfCart, setListOfCart] = useState([])

    useEffect(() => {
        getBookCart()
            .then((resp) => {
                console.log(resp, "resp.data.data");
                setListOfCart(resp.data.data[0].book)
            })
            .catch((err) => { console.log(err); })
    }, [])

    console.log("my cart list", listOfCart);

    const onClickingHome = () => {
        navigate('/Home')
    }

    const addAddress = () => {
        setAddressView(false)
    }

    const listenToAddressDetails = () => {
        setOrderSummery(false)
    }

    return (
        <Box>
            <Header />
            <Container>
                <Box className={classes.containerCart}>
                    <Typography component="span" color="text.secondary" style={{
                        font: 'normal normal 14px Roboto',
                        cursor: 'pointer'
                    }}
                        onClick={onClickingHome}>
                        Home /
                    </Typography>
                    <Typography component="span" style={{ font: 'normal normal bold 14px Roboto' }}>
                        { } My Cart
                    </Typography>
                </Box>
            </Container>

            <Box className={classes.cartParentBox}>
                <Box className={classes.cartInsideBox}>
                    <Box className={classes.itemInCart}>
                        <h3 style={{ color: '#0A0102', fontSize: '18px' }}>
                            My Cart ({listOfCart.length})
                        </h3>
                        <Box className={classes.locationBox}>
                            <LocationOnIcon style={{ color: '#A03037' }} />
                            <h3 style={{
                                font: 'normal normal normal 14px/17px Lato',
                                color: '#0A0102'
                            }}>
                                Use Current Location
                            </h3>
                            <ArrowDropDownIcon style={{ color: '#DCDCDC', marginLeft: '100px' }} />
                        </Box>
                    </Box>

                    {
                        listOfCart.map((cart) =>
                        (
                            <Cartboxtwo cart={cart} />
                        ))
                    }

                    {
                        addressView
                            ? <Box className={classes.addressBoxOpen}>
                                <Button
                                    sx={{
                                        width: '151px',
                                        height: '35px',
                                        background: '#3371B5 0% 0% no-repeat padding-box',
                                        borderRadius: '2px',
                                        position: 'relative',
                                        left: '570px',
                                        color: '#FFFFFF'
                                    }}
                                    variant="contained"
                                    onClick={addAddress}
                                >
                                    PLACE ORDER
                                </Button>
                            </Box>
                            : null
                    }

                </Box>

                {
                    addressView
                        ? <Box className={classes.addressBox}>
                            <Box className={classes.addressViewBox}>
                                Address Details
                            </Box>
                        </Box>
                        : <Box>
                            <Addressdetails
                                listenToAddressDetails={listenToAddressDetails} />
                        </Box>
                }

                {
                    orderSummery
                        ? <Box className={classes.orderSummeryBox}>
                            <Box className={classes.orderViewBox}>
                                Order Summery
                            </Box>
                        </Box>
                        : <Ordersummary />
                }
            </Box>
            <Footer />
        </Box>
    )
}

export default Mycart
