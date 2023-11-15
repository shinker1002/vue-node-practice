// axios 모듈 담기
import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000"
})

export default instance;