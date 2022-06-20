import axios from "axios";

const headerConfig = {
    header: {
        token: localStorage.getItem('token')
    }
}

export const getBooks = () => {
    let response = axios.get('http://localhost:3005/api/v1/books/all', headerConfig)
    return response
}