import React, { useEffect, useState } from 'react'
import Header from '../../components/header/header'
import { Box, Grid } from '@mui/material';
import Book from '../../components/bookhome/book'
import { getBooks } from '../../services/bookservice'
import { Container } from '@mui/material'

function Home() {

  const [listOfBooks, setListOfBooks] = useState([])

  useEffect(() => {
    getBooks()
      .then((response) => {
        console.log(response.data.data);
        setListOfBooks(response.data.data)
      }
      )
      .catch((err) => console.log(err))
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
            <h2>Books</h2>
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


      {/* <Container>
        <Box style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          left: 60,
          width: '81vw',
          height: 'auto'

        }}>
          {
          listOfBooks.map((book) =>
            (<Book books={book} />)
          )}
        </Box>
      </Container> */}
      <Grid container

        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          position: 'relative',
          left: 158,
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
                <Book books={book} />
              </Grid>
            
            )
          )}

      </Grid>


      {/* view ? book abccc={abccc} : booktwo */}

    </Box>
  )
}

export default Home