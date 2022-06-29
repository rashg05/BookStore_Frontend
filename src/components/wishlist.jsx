import React from 'react'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import DeleteIcon from '@mui/icons-material/Delete'

const UseStyle = makeStyles({
    mainBox: {
        // border: '1px solid black',
        width: '81vw',
        height: '220px',
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
    binBox: {
        // border: '1px solid orange',
        width: '10%',
        height: '160px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    }
})

function Wishlist() {
    const classes = UseStyle()

    return (
        <Box className={classes.mainBox}>
            <Box className={classes.bookContent}>
                <Box className={classes.imageBox}>
                    <img
                        src='./img/Image 11.png'
                        alt='bookimage'
                        width='85px'
                        height='120px' />
                </Box>
                <Box className={classes.contentBox}>
                    <Box style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        <h1 style={{ font: 'normal normal normal 18px/21px Lato' }}>
                            Don't Make Me Think
                        </h1>

                        <h3 style={{
                            font: 'normal normal normal 15px/19px Lato',
                            color: '#9D9D9D',
                        }}>
                            by Steve Krug
                        </h3>
                    </Box>
                    <Box style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Box style={{
                            color: '#0A0102',
                            font: 'normal normal normal 18px/24px Roboto',
                        }}>
                            Rs. 1500
                        </Box>
                        <Box style={{
                            color: '#878787',
                            font: 'normal normal normal 13px/17px Roboto',
                            marginLeft: '7px',
                            textDecoration: 'line-through'
                        }}>
                            Rs. 2000
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.binBox}>
                    <DeleteIcon style={{
                        marginTop: '30px'
                    }} />
                </Box>
            </Box>
        </Box>
    )
}

export default Wishlist