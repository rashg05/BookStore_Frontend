import axios from "axios";

const headerConfig = {
    headers: {
        token: localStorage.getItem('token')
    }
}

export const postOrder = () => {
    let response = axios.post(`http://localhost:3005/api/v1/order/add_order`, {}, headerConfig)
    return response
}