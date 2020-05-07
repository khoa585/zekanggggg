import axios from './axios';
export const loginUser= (username,password)=>{
    return axios.post("/user/login",{
        username,password
    })
}