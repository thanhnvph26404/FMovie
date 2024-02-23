import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

import './Register.scss';
import * as Yup from 'yup';
import AuthService from "../../../services/AuthService";
import {toast} from "react-toastify";

// Set rules for form validation
const schema = Yup.object().shape({
    name: Yup.string()
        .required('Tên là bắt buộc'),
    email: Yup.string()
        .email('Email không hợp lệ')
        .required('Email là bắt buộc'),
    password: Yup.string()
        .required('Mật khẩu là bắt buộc'),
    date: Yup.string()
        .required('Ngày sinh là bắt buộc'),
    phone_number: Yup.string()
        .required('Số điện thoại là bắt buộc'),
});

const Register = () => {

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Đăng ký";

        AuthService.logout();
    });

    // Set initial state for form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        date: "",
        phone_number: "",
    });

    // Set initial state for form errors
    const [errors, setErrors] = useState<Partial<FormData>>({});

    // Set initial state for show/hide password
    const [isShowPassword, setIsShowPassword] = useState(false);

    // Set initial state for button disabled
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    // Handle form data change
    const handleChange = (e: any) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    // Handle form submit
    const handleSubmit = (e: any) => {
        e.preventDefault();

        // Set initial state for form errors
        const errors: Partial<FormData> = {};

        // Set initial state for toast message
        let msg: string;

        // Set initial state for toast duration
        let duration: number;

        // Set initial state for toast type
        let type: "success" | "error" | "warning" | "info" | "default" | undefined = "default";

        // Set initial state for toast promise
        const toastPromise = toast.loading("Đang thực hiện yêu cầu...");

        // Set initial state for button disabled
        setIsButtonDisabled(true);

        // Gửi dữ liệu đăng ký lên server hoặc xử lý dữ liệu tại đây
        schema.validate(formData, {abortEarly: false})
            .then(async validData => {

                // Reset form data
                setErrors(errors);

                // Call API
                let res = await AuthService.register(validData);

                // Handle API response
                if (res.status === 200) { // Success
                    msg = res.data.message ?? "Thành công";

                    duration = 2000;

                    type = "success";

                    setTimeout(() => {
                        navigate(
                            "/login",
                            {
                                state: {
                                    message: "Đăng ký thành công, vui lòng đăng nhập!",
                                    email: formData.email,
                                    password: formData.password,
                                }
                            }
                        ); // Redirect to login page
                    }, 3000);

                } else { // Error
                    if (typeof res.data.message !== "string") { // Validation errors
                        for (let key in res.data.message) { // Loop through errors
                            errors[key as keyof FormData] = res.data.message[key][0];
                        }

                        setErrors(errors); // Set form errors
                    } else { // Other errors
                        msg = res.data.message ?? "Thất bại!";
                        duration = 2000;
                        type = "error";
                    }

                }

            })
            .catch(validationErrors => { // Handle validation errors
                if (typeof validationErrors.inner === "object") { // Validation errors

                    validationErrors.inner.forEach((error: any) => { // Loop through errors
                        errors[error.path as keyof FormData] = error.message;
                    });

                    setErrors(errors); // Set form errors

                    msg = "Có lỗi xảy ra, vui lòng chờ trong giây lát rồi thử lại!";

                    duration = 2000;

                    type = "error";
                }

            })
            .finally(() => {
                setIsButtonDisabled(false); // Set button disabled

                if (msg) { // Show toast message
                    // Update toast message
                    toast.update(toastPromise, {render: msg, type: type, isLoading: false, autoClose: duration});
                }
            });
    };

    return (
        <div className="tab-content font-family-san fs-4" style={{backgroundColor: "#fff"}}>
            {/*Register*/}
            <div className="flex justify-center py-5 my-5">
                <div className="w-1/2 shadow-md rounded-lg">
                    <ul className="nav nav-tabs text-uppercase tab-information rounded-t-lg overflow-hidden grid grid-cols-2 justify-center border-b-2">
                        <li
                            className="text-center py-3"
                            style={{cursor: "pointer"}}
                            onClick={() => navigate("/login")}
                        >
                            <a
                                className="fs-4 text-decoration-none text-dark font-bold"
                                aria-expanded="false"
                            >
                                Đăng nhập
                            </a>
                        </li>
                        <li
                            style={{cursor: "pointer"}}
                            className="text-center py-3 bg-blue-900"
                        >
                            <a
                                className="fs-4 text-decoration-none text-white font-bold"
                                data-toggle="tab"
                                aria-expanded="true"
                            >
                                Đăng ký
                            </a>
                        </li>
                    </ul>
                    <div className="p-5 rounded-b-lg bg-white shadow-md" id="register">
                        <div className="form-group row">
                            <div className="col-md-12 mb-3">
                                <label className="block mb-2 text-sm font-medium text-gray-900">
                                    <span style={{color: "red"}}>*</span>
                                    &nbsp;Họ và tên
                                </label>
                                <div className="input-icon">
                                    <input
                                        type="text"
                                        style={{height: "30px"}}
                                        id="txtHoTen"
                                        name="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Họ và tên"
                                        onChange={handleChange}
                                        value={formData.name}
                                    />
                                </div>
                                {errors?.name && <span className="text-red-500">{errors?.name}</span>}
                            </div>
                        </div>
                        <div className="form-group row grid md:grid-cols-2 md:gap-6">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-3">
                                <label className="block mb-2 text-sm font-medium text-gray-900">
                                    <span style={{color: "red"}}>*</span>
                                    &nbsp;Email
                                </label>
                                <div className="input-icon">
                                    <input
                                        type="text"
                                        style={{height: "30px"}}
                                        id="txtEmail"
                                        name="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Email"
                                        onChange={handleChange}
                                        value={formData.email}
                                    />
                                </div>
                                {errors?.email && <span className="text-red-500">{errors?.email}</span>}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-3">
                                <label className="block mb-2 text-sm font-medium text-gray-900">
                                    <span style={{color: "red"}}>*</span>
                                    &nbsp;Mật khẩu
                                </label>
                                <div className="input-icon relative">
                                    <input
                                        type={isShowPassword ? "text" : "password"}
                                        style={{height: "30px"}}
                                        id="txtMatKhau"
                                        name="password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Mật khẩu"
                                        onChange={handleChange}
                                        value={formData.password}
                                    />
                                    <i
                                        className={`password-icon text-blue-500 fa-regular ${isShowPassword ? "fa-eye-slash" : "fa-eye"}`}
                                        onClick={() => setIsShowPassword(!isShowPassword)}
                                    ></i>
                                </div>
                                {errors?.password && <span className="text-red-500">{errors?.password}</span>}
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="form-group row grid md:grid-cols-2 md:gap-6">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-3">
                                <label className="block mb-2 text-sm font-medium text-gray-900">
                                    <span style={{color: "red"}}>*</span>
                                    &nbsp;Ngày sinh
                                </label>
                                <div className="input-icon">
                                    <input
                                        id="txtNgaySinh"
                                        style={{height: "30px"}}
                                        type="date"
                                        name="date"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Ngày sinh"
                                        onChange={handleChange}
                                        value={formData.date}
                                    />
                                </div>
                                {errors?.date && <span className="text-red-500">{errors?.date}</span>}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-3">
                                <label className="block mb-2 text-sm font-medium text-gray-900">
                                    <span style={{color: "red"}}>*</span>
                                    &nbsp;Số điện thoại
                                </label>
                                <div className="input-icon">
                                    <input
                                        type="text"
                                        style={{height: "30px"}}
                                        id="txtDienThoai"
                                        name="phone_number"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Số điện thoại"
                                        onChange={handleChange}
                                        value={formData.phone_number}
                                    />
                                </div>
                                {errors?.phone_number && <span className="text-red-500">{errors?.phone_number}</span>}
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="form-group row mt-3">
                            <div className="col-md-12 text-center">
                                <div className="form-group">
                                    <button
                                        type="button"
                                        className="btn btn-3 btn-mua-ve rounded px-5 py-2 text-white fs-4"
                                        onClick={handleSubmit}
                                        disabled={isButtonDisabled}
                                    >
                                        Đăng ký
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register