import React from 'react'
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { addBookCart, getBookCart, updateCart } from '../../services/cartservice';
import { addBookWishlist } from '../../services/wishlistservice';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import Counter from '../counter/counter';
import { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router';
import { Container } from '@mui/material'


const UseStyle = makeStyles({
    outerBox: {
        // border: '1px solid red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '81vw',
        height: '90vh',
        position: 'relative',
        right: '5px',
        bottom: '8px'
    },
    imgButtonBox: {
        // border: '1px solid green',
        width: '40%',
        height: '490px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    imgBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '410px',
        border: '1px solid #DBDBDB'
    },
    buttonBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '80px',
        // border: '3px solid brown'
    },
    counterButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '200px'
    },
    counterValue: {
        border: '1px solid #DBDBDB',
        width: '41px',
        height: '24px',
        display: 'flex',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        justifyContent: 'center',
    },
    bookDetailsView: {
        // border: '1px solid yellow',
        width: '60%',
        height: '490px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailBoxOne: {
        borderBottom: '1px solid #DBDBDB',
        width: '95%',
        height: '180px',
        display: 'flex',
        flexDirection: 'column'
    },
    booksStar: {
        background: '#388E3C 0% 0% no-repeat padding-box',
        borderRadius: '1px',
        opacity: '1',
        width: '9%',
        height: '25px',
        color: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '19px'
    },
    priceBox: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '60px',
        // border: '1px solid orange'
    },
    discountPriceTag: {
        color: '#0A0102',
        font: 'normal normal normal 28px/32px Roboto',
        letterSpacing: '0px',
    },
    priceTag: {
        color: '#878787',
        font: 'normal normal normal 17px/20px Roboto',
        letterSpacing: '0px',
        marginLeft: '7px',
        textDecoration: 'line-through'
    },
    detailBoxTwo: {
        borderBottom: '1px solid #DBDBDB',
        width: '95%',
        height: '290px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    countvalueBoxshow: {
        height: '22px',
        width: '30px',
        border: '1px solid grey',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },

    countbox: {
        height: '30px',
        width: '100px',
        // border:'1px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },
    descriptionDetail: {
        width: '95%',
        height: '200px',
        fontSize: '20px',
        // border: '1px solid blue',
        display: 'flex',
        position: 'relative',
        left: '10px'
    }
})

function Addcart(props) {
    const navigate = useNavigate();
    const classes = UseStyle()

    console.log("my book data", props.bookSelected);

    const [count, setCount] = React.useState(props.bookSelected.quantity)
    const [cartId, setCartId] = React.useState([])
    const [addCounter, setAddCounter] = React.useState(true)

    useEffect(() => {
        getCartBooks()
    }, [])

    const getCartBooks = () => {
        getBookCart()
            .then((resp) => {
                console.log(resp);
                let filter = resp.data.data[0].book.filter((cartBook) => {
                    if (cartBook.bookId === props.bookSelected._id) {
                        setAddCounter(false)
                        setCount(cartBook.quantity)
                        return cartBook    
                    }
                })
                setCartId(filter)
            })
            .catch((err) => console.log(err))
    } 


    const increment = () => {
        let data = {
            increase: true
        }
        updateCart(data, props.bookSelected._id)
            .then((response) => { console.log(response);
                setCount(prevcount => prevcount + 1);})
            .catch((error) => { console.log(error) })
    }

    const decrement = () => {
        let data = {
            increase: false
        }
        updateCart(data, props.bookSelected._id)
            .then((response) => { console.log(response);
                setCount(prevcount => prevcount - 1);
             })
            .catch((error) => { console.log(error) })
    }

    const displayCounter = () => {
        addBookCart(props.bookSelected._id)
            .then((response) => {
                console.log(response);
                setAddCounter(false);
            })
            .catch((error) => { console.log(error) })
    }

    const sendToWishlist = () => {
        console.log("whishlist id", props.bookSelected._id);
        addBookWishlist(props.bookSelected._id)
            .then((resp) => { console.log(resp); })
            .catch((err) => { console.log(err); })
        navigate('/wishlist')
    }

    return (
        <Box className={classes.outerBox}>
            <Box className={classes.imgButtonBox}>

                <Box className={classes.imgBox}>
                    <img
                        src='./img/Image 11@2x.png'
                        // src={props.bookSelected.bookImage}
                        alt='Book'
                        height='370px'
                        width='350px' />
                </Box>
                <Box className={classes.buttonBox}>
                    {
                        // (cartId.length === 0)
                        addCounter
                            ? <Button variant="contained"
                                sx={{
                                    backgroundColor: '#A03037 !important',
                                    width: '47%',
                                    borderRadius: '2px',
                                    height: '50px',
                                    fontSize: '17px',
                                }}
                                onClick={displayCounter}
                            >
                                Add to Bag
                            </Button>

                            : <Box className={classes.counterButton}>
                                <Box className={classes.countbox}>
                                    <RemoveOutlinedIcon fontSize='small' style={{
                                        border: '1px solid grey',
                                        borderRadius: '100px'
                                    }} onClick={decrement} />
                                    <Box className={classes.countvalueBoxshow} >
                                        {count}
                                        {/* {quantity} */}
                                    </Box>
                                    <AddOutlinedIcon fontSize='small' style={{
                                        border: '1px solid grey',
                                        borderRadius: '100px'
                                    }} onClick={increment} />
                                </Box>
                            </Box>
                    }

                    <Button variant="contained"
                        sx={{
                            backgroundColor: '#333232 !important',
                            width: '47%',
                            borderRadius: '0px',
                            height: '50px',
                            fontSize: '17px'
                        }}
                        onClick={sendToWishlist}>
                        <FavoriteIcon />
                        Whishlist
                    </Button>
                </Box>
            </Box>

            <Box className={classes.bookDetailsView}>
                <Box className={classes.detailBoxOne}>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.bookSelected.bookName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        by {props.bookSelected.author}
                    </Typography>
                    <Typography
                        className={classes.booksStar}
                        variant="body2"
                        color="text.secondary">
                        4.5({props.bookSelected.quantity})
                        <StarBorderIcon fontSize='x-small' />
                    </Typography>
                    <Box className={classes.priceBox}>
                        <Typography
                            className={classes.discountPriceTag}
                            gutterBottom
                            variant="h5"
                            component="div">
                            Rs. {props.bookSelected.discountPrice}
                        </Typography>
                        <Typography
                            className={classes.priceTag}
                            gutterBottom
                            variant="h5"
                            component="div">
                            Rs. {props.bookSelected.price}
                        </Typography>
                    </Box>
                </Box>
                <Box className={classes.detailBoxTwo}>
                    <Typography variant="body1" color="text.secondary">
                        Book Detail:
                    </Typography>
                    <Typography className={classes.descriptionDetail} variant="body2" color="black">
                        {props.bookSelected.description}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Addcart

