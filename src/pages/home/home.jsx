import React, { useEffect, useState } from 'react'
import Header from '../../components/header/header'
import { Box, Grid } from '@mui/material';
import Book from '../../components/bookhome/book'
import { getBooks } from '../../services/bookservice'
import { Container } from '@mui/material'
import Addcart from '../../components/addcart/addcart';
import Footer from '../../components/footer/footer';

function Home() {

  const [listOfBooks, setListOfBooks] = useState([])
  const [dashboardView, setDashboardView] = useState(true)
  const [bookSelected, setBookSelected] = useState({})

  const listenToDashboardView = (books) => {
    console.log("my book", books);
    setBookSelected(books)
    setDashboardView(false)
  }

  const fetchBooks = () => {
    getBooks()
      .then((response) => {
        console.log(response.data.data);
        setListOfBooks(response.data.data)
        console.log("book selected", bookSelected);
      }
      )
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <Box>
      <Header />
      <Grid
        lg={12}
        md={12}
        sm={12}
        xm={12}
        spacing={1}
        container
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          position: 'relative',
          left: 160,
          width: '81vw',
          height: 'auto',
          // border: '1px solid black'
        }}>

        {
          dashboardView ?
          <>
          <Container>
        <Box style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          // position: 'relative',
          // left: 60,
          // width: 1100
        }}>
          <Box>
            <h2>Books({listOfBooks.length} items)</h2>
          </Box>
          <Box>
            <label for='books' >
              <select id="sortBooks">
                <option value="Relevance">sort by Relevance</option>
                <option value="Name">Name</option>
                <option value="Category">Category</option>
                <option value="Author">Author</option>
              </select>
            </label>
          </Box>
        </Box>
      </Container>
            <Grid
              item
              container
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '83vw',
                height: 'auto',
                flexGrow: 1
              }}
              spacing={3.8}
              columns={{ xs: 12, sm: 12, md: 12 }}
              lg={6}
            >
              {
                listOfBooks.map((book) =>
                (
                  <Grid item
                    lg={9}
                    sm={3}
                  >
                    <Book books={book} 
                    listenToDashboardView={listenToDashboardView}
                    />
                  </Grid>

                )
                )}

            </Grid>
            </>

            :
            <Grid
              item
              container
              direction="flex"
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{
                // border: '1px solid blue',
                width: '81vw',
                height: '91vh'
              }}
            >
              <Addcart
                bookSelected={bookSelected}
              />
            </Grid>
        }
      </Grid>
      <Footer />
    </Box>
  )
}

export default Home


//  <Container>
//         <Box style={{
//           display: 'flex',
//           flexDirection: 'row',
//           flexWrap: 'wrap',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           position: 'relative',
//           left: 60,
//           width: '81vw',
//           height: 'auto'

//         }}>
//           {
//           listOfBooks.map((book) =>
//             (<Book books={book} />)
//           )}
//         </Box>
//       </Container> 