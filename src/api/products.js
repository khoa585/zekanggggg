import axios from './axios';
const NUMBER_ITEM =6 ;
export const fetchListProduct=(numberitem)=>{
    return axios.post("/product/getlist",{
        page:1,
        numberitem:NUMBER_ITEM
    })
}
export const fetchAddProduct= (data)=>{
    return axios.post("/product/add",{...data})
}