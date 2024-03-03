import Axios from "../Axios.tsx";
import LocalStorageService from "../LocalStorageService.tsx";

export default class AuthService {
    static async loginPost(email: string, password: string) {
        return await Axios.post("login", {email, password});
    }

    static async register(data: any) {
        return await Axios.post("register", data);
    }

    static async logout(access_token: null | string = null) {
        access_token = access_token || AuthService.getToken();
        LocalStorageService.remove("token");
        LocalStorageService.set("isLoggedIn", false);
        LocalStorageService.remove("user");
        return await Axios.post("logout", {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
    }

    static setToken(token: string) {
        LocalStorageService.set("token", token);
    }

    static getToken() {
        return LocalStorageService.get("token");
    }

    static login(token: string, user: any) {
        LocalStorageService.set("token", token);
        LocalStorageService.set("isLoggedIn", true);
        LocalStorageService.set("user", user);
    }

    static getUserInfo(access_token: null | string = null) {
        access_token = access_token || AuthService.getToken();
        return Axios.get("user", {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
    }

    static setUserInfo(data: any) {
        LocalStorageService.set("user", data);
    }

    static getUserInfoLocal() {
        return LocalStorageService.get("user");
    }

    static isLoggedIn() {
        return LocalStorageService.get("isLoggedIn");
    }
}