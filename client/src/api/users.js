import { Axi } from "./useAxios";
import { jwtDecode } from "jwt-decode";

export const LoginRequest = async (data) => {
    const responseLogin = await Axi.post('/users/login/', data);
    const { access, refresh } = responseLogin.data;

    localStorage.setItem('access', access);
    localStorage.setItem('refresh', refresh);

    const user = jwtDecode(localStorage.getItem('access'));
    localStorage.setItem('username', user.username);
    localStorage.setItem('user_id', user.user_id);
    localStorage.setItem('avatar', user.avatar)
}