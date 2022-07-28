import React from 'react'
import { Box, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useNavigate } from 'react-router';

const UseStyle = makeStyles({
    outerBox: {
        width: '100vw',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    imgBox: {
        display: 'flex',
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '240px',
    },
    textBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // border: '1px solid yellow',
        width: '70%',
        height: '90px'
    },
    textContent: {
        textAlign: 'center',
        font: 'normal normal normal 18px/22px Lato',
        color: '#333232',
        width: '260px',
    },
    tableBox: {
        border: '1px solid #DCDCDC',
        width: '70%',
        height: '170px',
        display: 'flex',
        flexDirection: 'column'
    },
    tableHeading: {
        border: '1px solid #DCDCDC',
        width: '100%',
        height: '50px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        background: '#FAFAFA'
    },
    contentBox: {
        width: '100%',
        height: '120px',
        display: 'flex',
        justifyContent: 'center'
    },
    contentOne: {
        border: '1px solid #DCDCDC',
        width: '30%',
        height: '110px',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '10px'
    },
    contentTwo: {
        border: '1px solid #DCDCDC',
        width: '30%',
        height: '110px',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '10px'
    },
    contentThree: {
        border: '1px solid #DCDCDC',
        width: '40%',
        height: '110px',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '10px'
    },
    buttonBox: {
        display: 'flex',
        // border: '1px solid blue',
        width: '70%',
        height: '60px',
        justifyContent: 'center',
        alignItems: 'center'
    },
    shoppingButton: {
        width: '230px',
        height: '45px',
        background: '#3371B5 0% 0% no-repeat padding-box',
        borderRadius: '2px',
        color: '#FFFFFF'
    }
})

function Orderplaced() {
    const navigate = useNavigate();
    const classes = UseStyle()

    const myHomePage = () => {
        navigate('/Home')
    }

    return (
        <Box>
            <Header />
            <Box className={classes.outerBox}>
                <Box className={classes.imgBox}>
                    <img src='./img/orderplaced.jpg' alt='orderplaced'
                        width='350px'
                        height='230px' />
                </Box>
                <Box className={classes.textBox}>
                    <h3 className={classes.textContent}>
                        hurry!!! your order is confirmed
                        the order id is #123456 save the order id for
                        further communications..
                    </h3>
                </Box>
                <Box className={classes.tableBox}>
                    <Box className={classes.tableHeading}>
                        <Box>Email us</Box>
                        <Box>Contact us</Box>
                        <Box>Address</Box>
                    </Box>
                    <Box className={classes.contentBox}>
                        <Box className={classes.contentOne}>
                            admin@bookstore.com
                        </Box>
                        <Box className={classes.contentTwo}>
                            +91 8163475881
                        </Box>
                        <Box className={classes.contentThree}>
                            42, 14th Main, 15th Cross, Sector 4, Opp to BDA
                            complex, near Kumarakom restaurent, HSR Layout,
                            Bangalore 560034
                        </Box>
                    </Box>
                </Box>

                <Box className={classes.buttonBox}>
                    <Button
                        className={classes.shoppingButton}
                        variant="contained"
                        onClick={myHomePage}
                    >
                        CONTINUE SHOPPING
                    </Button>
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}

export default Orderplaced