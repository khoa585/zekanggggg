import axios from './axios';
const NUMBER_ITEM =6 ;
const PAGE_DEFAULT= 1 ;
export const fetchAddNews =(data)=>{
    return axios.post("/news/add",{...data})
}
export const fetchListNews = (page=PAGE_DEFAULT,numberitem=NUMBER_ITEM)=>{
    return axios.post("/news/getlist",{
        page:page,
        numberitem:numberitem
    })
}
export const fetchGetDetialNew = (id)=>{
    return axios.get(`/news/detial/${id}`);
}