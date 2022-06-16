import axios from "axios";

export const getBooks = (obj) => {
    let response = axios.get('http://localhost:3005/api/v1/books/all', obj)
    return response
}