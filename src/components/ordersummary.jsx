import React from 'react'
import { Box, Button } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router';
import { getBookCart } from '../services/cartservice';
import { useEffect } from 'react';

function Ordersummary() {
    const navigate = useNavigate();

    const [listOfOrderSummary, setListOfOrderSummary] = React.useState([])

    const myOrderPlacedPage = () => {
        navigate('/orderplaced')
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
        <Box style={{
            border: '1px solid #DCDCDC',
            width: '60vw',
            height: 'fit',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10px'
        }}>
            <Box style={{
                // border: '1px solid red',
                width: '95%',
                height: '40px',
                display: 'flex',
                alignItems: 'center'
            }}>
                <h3>
                    Order summery
                </h3>
            </Box>
            {
                listOfOrderSummary.map((cart) => (
                    <Box style={{
                        display: 'flex',
                        flexDirection: 'column',
                        // border: '1px solid black',
                        width: '95%',
                        height: '160px',
                        marginTop: '5px'
                    }}>
                        <Box style={{
                            // border: '1px solid pink',
                            width: '100%',
                            height: '160px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Box style={{
                                // border: '1px solid yellow',
                                width: '20%',
                                height: '150px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <img
                                src={cart.bookImage}
                                    // src='./img/Image 11.png'
                                    alt='book image'
                                    width='75px'
                                    height='115px' />
                            </Box>
                            <Box style={{
                                // border: '1px solid green',
                                width: '80%',
                                height: '150px',
                                display: 'flex',
                                flexDirection: 'column',

                            }}>
                                <Box style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
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
                                <Box style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <Box style={{
                                        color: '#0A0102',
                                        font: 'normal normal normal 18px/24px Roboto',
                                        letterSpacing: '0px'
                                    }}>
                                        Rs.{cart.discountPrice}
                                        {/* Rs. 1500 */}
                                    </Box>
                                    <Box style={{
                                        color: '#878787',
                                        font: 'normal normal normal 13px/17px Roboto',
                                        letterSpacing: '0px',
                                        marginLeft: '7px',
                                        textDecoration: 'line-through'
                                    }}>
                                        Rs.{cart.price}
                                        {/* Rs. 2000 */}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))
            }


            <Box style={{
                // border: '1px solid pink',
                width: '95%',
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'

            }}>
                <Button
                    variant="contained"
                    style={{
                        width: '165px',
                        height: '30px',
                        background: '#3371B5 0% 0% no-repeat padding-box',
                        borderRadius: '2px',
                        position: 'relative',
                        left: '300px',
                        color: '#FFFFFF'
                    }}
                    onClick={myOrderPlacedPage}
                >
                    CHECKOUT
                </Button>
            </Box>
        </Box>
    )
}

export default Ordersummary
