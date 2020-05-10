import axios from './axios';
export const fetchAddNews =(data)=>{
    return axios.post("/news/add",{...data})
}