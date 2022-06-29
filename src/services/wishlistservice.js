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