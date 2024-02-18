import Axios from "./Axios.tsx";
import LocalStorageService from "./LocalStorageService";

export default class AuthService {
    static async loginPost(email: string, password: string) {
        return await Axios.post("login", {email, password});
    }

    static async register(data: any) {
        return await Axios.post("register", data);
    }

    static logout() {
        LocalStorageService.remove("token");
        LocalStorageService.set("isLoggedIn", false);
    }

    static setToken(token: string) {
        LocalStorageService.set("token", token);
    }

    static getToken() {
        return LocalStorageService.get("token");
    }

    static login(token: string) {
        LocalStorageService.set("token", token);
        LocalStorageService.set("isLoggedIn", true);
    }
}