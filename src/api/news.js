import axios from './axios';
const NUMBER_ITEM = 4;
const PAGE_DEFAULT = 1;
export const fetchAddNews = (data) => {
    return axios.post("/api/news/add", { ...data })
}
export const fetchListNews = (page = PAGE_DEFAULT, numberitem = NUMBER_ITEM) => {
    return axios.post("/api/news/getlist", {
        page: page,
        numberitem: numberitem
    })
}
export const fetchGetDetialNew = (id) => {
    return axios.get(`/api/news/detial/${id}`);
}
export const fetchUpdateNews = (data) => {
    return axios.post("/api/news/update", { ...data })
}
export const fetchDeleteNews = (id) => {
    return axios.post("/api/news/delete", { id })
}