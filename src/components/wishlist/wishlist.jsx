import React from 'react'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import DeleteIcon from '@mui/icons-material/Delete'

const UseStyle = makeStyles({
    mainBox: {
        borderBottom: '1px solid #E4E4E4',
        width: '81vw',
        height: 'fit',
        display: 'flex',
        alignItems: 'center'
    },
    bookContent: {
        display: 'flex',
        // border: '1px solid red',
        width: '100%',
        height: '160px',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageBox: {
        width: '20%',
        height: '160px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentBox: {
        // border: '1px solid green',
        width: '70%',
        height: '160px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    booknameAuthor: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    priceBox: {
        display: 'flex',
        alignItems: 'center'
    },
    bookDiscount: {
        color: '#0A0102',
        font: 'normal normal normal 18px/24px Roboto',
    },
    bookPrice: {
        color: '#878787',
        font: 'normal normal normal 13px/17px Roboto',
        marginLeft: '7px',
        textDecoration: 'line-through'
    },
    binBox: {
        // border: '1px solid orange',
        width: '10%',
        height: '160px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    }
})

function Wishlist(props) {
    const classes = UseStyle()

    return (
        <Box className={classes.mainBox}>
            <Box className={classes.bookContent}>
                <Box className={classes.imageBox}>
                    <img
                        src={props.wishlistBooks.bookImage}
                        // src='./img/Image 11.png'
                        alt='bookimage'
                        width='85px'
                        height='120px' />
                </Box>
                <Box className={classes.contentBox}>
                    <Box className={classes.booknameAuthor}>
                        <h1 style={{ font: 'normal normal normal 18px/21px Lato' }}>
                            {props.wishlistBooks.bookName}
                            {/* Don't Make Me Think */}
                        </h1>
                        <h3 style={{ font: 'normal normal normal 15px/19px Lato', color: '#9D9D9D' }}>
                            {props.wishlistBooks.author}
                            {/* by Steve Krug */}
                        </h3>
                    </Box>
                    <Box className={classes.priceBox}>
                        <Box className={classes.bookDiscount}>
                            Rs.{props.wishlistBooks.discountPrice}
                            {/* Rs. 1500 */}
                        </Box>
                        <Box className={classes.bookPrice}>
                            Rs.{props.wishlistBooks.price}
                            {/* Rs. 2000 */}
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.binBox}>
                    
                    <DeleteIcon
                        style={{
                            marginTop: '30px'
                        }} />
                </Box>
            </Box>
        </Box>
    )
}

export default Wishlist