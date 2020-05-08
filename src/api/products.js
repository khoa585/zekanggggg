import axios from './axios';
const NUMBER_ITEM =6 ;
const PAGE_DEFAULT= 1 ;
export const fetchListProduct=(page=PAGE_DEFAULT,numberitem=NUMBER_ITEM)=>{
    return axios.post("/product/getlist",{
        page:page,
        numberitem:numberitem
    })
}
export const fetchAddProduct= (data)=>{
    return axios.post("/product/add",{...data})
}
export const fetchGetDetialProduct = (id)=>{
    return axios.get(`/product/detial/${id}`)
}