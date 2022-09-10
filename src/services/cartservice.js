import axios from "axios";

const headerConfig = {
    headers: {
        token: localStorage.getItem('token')
    }
}

export const addBookCart = (id) => {
    let response = axios.post(`http://localhost:3005/api/v1/cart/add_cart_item/${id}`, id, headerConfig)
    return response
}

export const getBookCart = () => {
    let response = axios.get('http://localhost:3005/api/v1/cart/get_cart_item', headerConfig)
    return response
}

export const updateCart = (obj, id) => {
    let response = axios.put(`http://localhost:3005/api/v1/cart/cart_item_quantity/${id}`, obj, headerConfig)
    return response
}

export const deleteCartBook = (bookId) => {
    let response = axios.delete(`http://localhost:3005/api/v1/cart/remove_cart_item/${bookId}`, headerConfig)
    return response
}

