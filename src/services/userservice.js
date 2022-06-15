import axios from 'axios'

export const signIn = (obj) => {
    let response = axios.post('http://localhost:3005/api/v1/users/login', obj)
    return response
} 

export const signUp = (obj) => {
    console.log(obj);
    let response = axios.post('http://localhost:3005/api/v1/users/register', obj)
    return response
}