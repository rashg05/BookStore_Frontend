import React, { useEffect, useState } from 'react'
import Header from '../../components/header/header'
import { Box } from '@mui/material';
import Book from '../../components/bookhome/book'
import { getBooks } from '../../services/bookservice'
import { Container } from '@mui/material'

function Home() {

  const [listOfBooks, setListOfBooks] = useState([])

  useEffect(() => {
    let filterArray = []
    getBooks(filterArray)
      .then((response) => {
        console.log(response.data.data)
      })
      // setListOfBooks(filterArray)
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
      <Container>
        <Box style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          left: 60,
          width: 1100
        }}>
          <Book />
          {/* {
          listOfBooks.map((book) =>
            (<Book books={book} />)
          )} */}
        </Box>
      </Container>

    </Box>
  )
}

export default Home