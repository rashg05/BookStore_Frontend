import React from 'react'
import { Box, Container } from '@mui/material'
import Header from '../../components/header/header'
import { makeStyles } from '@mui/styles'
import { useEffect } from 'react'
import Wishlist from '../../components/wishlist/wishlist'
import { getBookWishlist } from '../../services/wishlistservice'
import Footer from '../../components/footer/footer'

const UseStyle = makeStyles({
    wishlistBox: {
        border: '1px solid #E4E4E4',
        width: '81vw',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '170px'
    },
    myList: {
        border: '1px solid #E4E4E4',
        width: '100%',
        height: '55px',
        display: 'flex',
        alignItems: 'center',
        background: '#F5F5F5 0% 0% no-repeat padding-box'
    }
})

function Wishlistpage() {
    const classes = UseStyle()

    const [listOfWishlist, setListOfWishlist] = React.useState([])

    useEffect(() => {
        getBookWishlist()
            .then((resp) => {
                console.log(resp, "resp.data.data");
                setListOfWishlist(resp.data.data[0].book)
            })
            .catch((err) => { console.log(err); })

    }, [])

    return (
        <Box>
            <Header />
            <Container>
                <Box style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',
                    left: 60,
                    width: 1100
                }}>
                    <Box>
                        <h5>Home/my wishlist</h5>
                    </Box>
                </Box>
            </Container>
            <Box className={classes.wishlistBox}>
                <Box className={classes.myList}>
                    <h3 style={{
                        fontSize: '18px',
                        marginLeft: '35px'
                    }}>
                        My Wishlist(02)
                    </h3>
                </Box>
                <Box>
                    {/* <Wishlist /> */}
                {
                listOfWishlist.map((wishlist) =>
                (
                    <Wishlist wishlistBooks={wishlist} />
                )
                )}
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}

export default Wishlistpage