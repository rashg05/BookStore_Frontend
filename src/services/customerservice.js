import axios from "axios";

const headerConfig = {
    headers: {
        token: localStorage.getItem('token')
    }
}

export const addCustomer = (obj) => {
    let response = axios.put(`http://localhost:3005/api/v1/customer/edit_user`, obj, headerConfig)
    return response
}