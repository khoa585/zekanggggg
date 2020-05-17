import axios from './axios';
const NUMBER_ITEM = 6;
const PAGE_DEFAULT = 1;
export const fetchListProduct = (page = PAGE_DEFAULT, numberitem = NUMBER_ITEM) => {
    return axios.post("/api/product/getlist", {
        page: page,
        numberitem: numberitem
    })
}
export const fetchAddProduct = (data) => {
    return axios.post("/api/product/add", { ...data })
}
export const fetchGetDetialProduct = (id) => {
    return axios.get(`/api/product/detial/${id}`)
}
export const fetchDeleteProduct = (id) => {
    return axios.post("/api/product/delete", { id: id.toString() })
}
export const fetchSearchProduct = (data) => {
    return axios.get("/product/search", { name: data })
} 
export const fetchUpdateProduct = (data) =>{
    return axios.post("/api/product/update", { ...data })
}
