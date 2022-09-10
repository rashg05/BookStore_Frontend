import React from 'react'
import { Box, Container } from '@mui/material'
import Header from '../../components/header/header'
import { makeStyles } from '@mui/styles'
import { useEffect } from 'react'
import Wishlist from '../../components/wishlist/wishlist'
import { getBookWishlist, removeBookWishlist } from '../../services/wishlistservice'
import Footer from '../../components/footer/footer'
import { useNavigate } from 'react-router';

const UseStyle = makeStyles({
    wishlistBooks: {
        width: '81vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        // border: '1px solid red',
        height: '10vh',
        position: 'relative',
        left: 60,
    },
    wishlistBox: {
        border: '1px solid #E4E4E4',
        width: '81vw',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        left: 165
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

function Wishlistpage(props) {
    const navigate = useNavigate();
    const classes = UseStyle()

    const [listOfWishlist, setListOfWishlist] = React.useState([])

    function refreshPage() {
        window.location.reload(false);
      }

    useEffect(() => {
        getBookWishlist()
            .then((resp) => {
                console.log(resp, "resp.data.data");
                setListOfWishlist(resp.data.data[0].book);
            })
            .catch((err) => { console.log(err); })
    }, [])

    const handleRemove = () => {
        removeBookWishlist(listOfWishlist.bookId)
            .then((res) => {
                console.log(res.data.data);
                refreshPage()
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const onClickingHome = () => {
        navigate('/Home')
    }

    return (
        <Box>
            <Header />
            <Container>
                <Box className={classes.wishlistBooks}>
                    <Box onClick={onClickingHome}>
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
                        My Wishlist({listOfWishlist.length})
                    </h3>
                </Box>
                <Box>
                    {
                        listOfWishlist.map((wishlist) =>
                        (
                            <Wishlist wishlistBooks={wishlist}
                                handleRemove={handleRemove} />
                        )
                        )}
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}

export default Wishlistpage