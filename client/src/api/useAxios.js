import axios from "axios";
import { jwtDecode } from "jwt-decode";

const baseURL = "http://127.0.0.1:8000"

export const Axi = axios.create({
    baseURL,
})