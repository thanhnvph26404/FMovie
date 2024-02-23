import axios from "axios";

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.response.use(
    (response) => {
        return response.data ? response : {statusCode: response.status};
    },
    (error) => {

        let res: any = {};

        if (error.response) {
            res.data = error.response.data;
            res.status = error.response.status;
            res.headers = error.response.headers;
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log("Error", error.message);
        }

        return res;
    }
);

export default instance;