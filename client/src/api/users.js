import { Axi } from "./useAxios";

export const LoginRequest = async (data) => {
    await Axi.post('/users/login/', data)
}