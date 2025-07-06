import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4000/api",
    withCredentials: true, // Permite el uso de cookies
}
)

export default instance;