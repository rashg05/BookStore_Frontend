import React from 'react'
import { Box, fabClasses, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { addBookCart, updateCart } from '../../services/cartservice';
import { addBookWishlist } from '../../services/wishlistservice';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Addcart(props) {

    console.log("my book data", props);
    const [bagButton, setBagButton] = React.useState(true)
    const [countBag, setCountBag] = React.useState(1)

    const sendToCart = () => {
        console.log("cart id", props.bookSelected._id);
        addBookCart(props.bookSelected._id)
            .then((resp) => { console.log(resp); })
            .catch((err) => { console.log(err); })
        setBagButton(false)

    }
    const incrementButton = () => {
        let data = {increase: true}
        updateCart(props.bookSelected._id, data)
        .then((resp) => {console.log(resp);})
        .catch((err) => {console.log(err);})
        // setCountBag(prevcount => prevcount + 1)
    }
    const decrementButton = () => {
        if(countBag <=0){
            return;
        } else {
        setCountBag(prevcount => prevcount - 1)
        }
    }

    const sendToWishlist = (id) => {
        console.log("whishlist id", props.bookSelected._id);
        addBookWishlist(props.bookSelected._id)
            .then((resp) => { console.log(resp); })
            .catch((err) => { console.log(err); })
    }

    return (
        <Box style={{
            // border: '1px solid red',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '81vw',
            height: '90vh',
            position: 'relative',
            right: '5px',
            bottom: '8px'
        }}>
            <Box style={{
                // border: '1px solid green',
                width: '40%',
                height: '490px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Box
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '410px',
                        border: '1px solid #DBDBDB'
                    }}>
                    <img
                        // src='./img/Image 11@2x.png'
                        src={props.bookSelected.bookImage}
                        alt='Book'
                        height='370px'
                        width='350px' />
                </Box>
                <Box style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    height: '80px',
                    // border: '3px solid brown'
                }}>
                    {
                        bagButton
                            ? <Button variant="contained"
                                style={{
                                    width: '47%',
                                    borderRadius: '0px',
                                    height: '50px',
                                    background: '#A03037',
                                    fontSize: '17px'

                                }}
                                onClick={sendToCart}>
                                Add to Bag
                            </Button>

                            : <Box style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '200px'
                            }}>
                                <Button>
                                    <RemoveCircleOutlineIcon style={{
                                        color: '#DBDBDB',
                                    }}
                                        onClick={decrementButton} />
                                </Button>
                                <Box style={{
                                    border: '1px solid #DBDBDB',
                                    width: '41px',
                                    height: '24px',
                                    display: 'flex',
                                    background: '#FFFFFF 0% 0% no-repeat padding-box',
                                    justifyContent: 'center',
                                }}>
                                    {props.bookSelected.quantity}
                                </Box>
                                <Button>
                                    <AddCircleOutlineIcon style={{
                                        color: '#DBDBDB',
                                    }}
                                        onClick={incrementButton} />
                                </Button>
                            </Box>
                    }

                    <Button variant="contained"
                        style={{
                            width: '47%',
                            borderRadius: '0px',
                            height: '50px',
                            background: '#333333',
                            fontSize: '17px'
                        }}
                        onClick={sendToWishlist}>
                        <FavoriteIcon />
                        Whishlist
                    </Button>
                </Box>
            </Box>
            <Box style={{
                // border: '1px solid yellow',
                width: '60%',
                height: '490px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box style={{
                    borderBottom: '1px solid #DBDBDB',
                    width: '95%',
                    height: '250px',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Box
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            // border: '1px solid blue',
                            width: '100%',
                            height: '130px',
                            lineHeight: 0.2
                        }}>
                        {/* {props.books.bookName} */}
                        <h1 style={{
                            color: '#0A0102',
                            font: 'normal normal normal 32px/36px Lato',
                        }}>
                            {props.bookSelected.bookName}
                            {/* Don't Make Me Think */}
                        </h1>
                        <h3 style={{
                            color: ' #9D9D9D',
                            font: 'normal normal normal 20px/23px Lato'
                        }}>
                            {props.bookSelected.author}
                            {/* by Steve Krug */}
                        </h3>
                    </Box>
                    <Box style={{
                        display: 'flex',
                        alignItems: 'center',
                        // border: '1px solid black',
                        width: '100%',
                        height: '60px'
                    }}>
                        <Box style={{
                            background: '#388E3C 0% 0% no-repeat padding-box',
                            borderRadius: '1px',
                            opacity: '1',
                            width: '9%',
                            height: '25px',
                            color: '#FFFFFF',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '15px'

                        }}>
                            4.5
                            <StarBorderIcon fontSize='x-small' />
                        </Box>
                        <Box style={{
                            color: '#878787',
                            paddingLeft: '7px',
                            fontSize: '18px'
                        }}>
                            (20)
                        </Box>
                    </Box>

                    <Box style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        height: '60px',
                        // border: '1px solid orange'
                    }}>
                        <Box style={{
                            color: '#0A0102',
                            font: 'normal normal normal 28px/32px Roboto',
                            letterSpacing: '0px',

                        }}>
                            Rs.{props.bookSelected.discountPrice}
                            {/* Rs. 1500 */}
                        </Box>
                        <Box style={{
                            color: '#878787',
                            font: 'normal normal normal 17px/20px Roboto',
                            letterSpacing: '0px',
                            marginLeft: '7px',
                            textDecoration: 'line-through'
                        }}>
                            Rs.{props.bookSelected.price}
                            {/* Rs. 2000 */}
                        </Box>
                    </Box>
                </Box>
                <Box style={{
                    borderBottom: '1px solid #DBDBDB',
                    width: '95%',
                    height: '240px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box style={{
                        width: '100%',
                        height: '40px'
                    }}>
                        <ul>
                            <li>Book Detail</li>
                        </ul>
                    </Box>
                    <Box style={{
                        width: '95%',
                        height: '200px',
                        fontSize: '20px',
                        // border: '1px solid blue',
                        display: 'flex',
                        // justifyContent: 'center',
                        position: 'relative',
                        left: '10px'

                    }}>
                        {props.bookSelected.description}
                        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia hic sed, veritatis, dolores omnis architecto tenetur cupiditate fuga quisquam qui vitae?
                        Ea ipsa totam ex, suscipit corrupti neque itaque sed? */}
                    </Box>
                </Box>
            </Box>
        </Box>

    )
}

export default Addcart