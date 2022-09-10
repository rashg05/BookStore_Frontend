import axios from "axios";

const headerConfig = {
    headers: {
        token: localStorage.getItem('token')
    }
}

export const addBookWishlist = (id) => {
    let response = axios.post(`http://localhost:3005/api/v1/wishlist/add_wishlist/${id}`, id, headerConfig)
    return response
}

export const getBookWishlist = () => {
    let response = axios.get('http://localhost:3005/api/v1/wishlist/get_wishlist', headerConfig)
    return response
}

export const removeBookWishlist = (bookId) => {
    let response = axios.put(`http://localhost:3005/api/v1/wishlist/remove_wishlist/${bookId}`,
        bookId,
        headerConfig)
    return response
}

