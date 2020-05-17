import axios from './axios';
export const fetchSendQuestion = (data) => {
    return axios.post("/question/send", { ...data })
}