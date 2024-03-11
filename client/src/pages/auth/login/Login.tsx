// import React, {useEffect, useState} from 'react';
// import {useLocation, useNavigate} from "react-router-dom";
// import './Login.scss';
// import * as Yup from "yup";
// // import AuthService from "../../../services/AuthService";
// // import {toast} from "react-toastify";
// // import LocalStorageService from "../../../services/LocalStorageService.tsx";

// const schema = Yup.object().shape({
//     email: Yup.string()
//         .email('Email không hợp lệ')
//         .required('Email là bắt buộc'),
//     password: Yup.string()
//         .required('Mật khẩu là bắt buộc'),
// });

// const Login = () => {

//     const [message, setMessage] = useState("");

//     const location = useLocation();

//     const navigate = useNavigate();

//     // Set initial state for form data
//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//     });

//     useEffect(() => {

//         document.title = "Đăng nhập";

//         if (LocalStorageService.get("isLoggedIn") && AuthService.getToken()) {
//             navigate("/");
//             return;
//         }

//         if (location.state) {
//             const {message, email, password} = location.state;

//             if (message) {
//                 setMessage(message);
//             }

//             if (email) {
//                 formData.email = email;
//             }

//             if (password) {
//                 formData.password = password;
//             }

//             setFormData(formData);

//             // Xóa state sau khi sử dụng
//             navigate(location.pathname, {replace: true});
//         }
//     }, [location.state]);

//     // Set initial state for form errors
//     const [errors, setErrors] = useState<Partial<FormData>>({});

//     // Set initial state for show/hide password
//     const [isShowPassword, setIsShowPassword] = useState(false);

//     // Set initial state for button disabled
//     const [isButtonDisabled, setIsButtonDisabled] = useState(false);

//     // Handle form data change
//     const handleChange = (e: any) => {
//         setFormData({...formData, [e.target.name]: e.target.value});
//     };

//     // Handle form submit
//     const handleSubmit = (e: any) => {
//         e.preventDefault();

//         // Set initial state for form errors
//         const errors: Partial<FormData> = {};

//         // Set initial state for toast message
//         let msg: string;

//         // Set initial state for toast duration
//         let duration: number;

//         // Set initial state for toast type
//         let type: "success" | "error" | "warning" | "info" | "default" | undefined = "default";

//         // Set initial state for toast promise
//         const toastPromise = toast.loading("Đang thực hiện yêu cầu...");

//         // Set initial state for button disabled
//         setIsButtonDisabled(true);

//         // Gửi dữ liệu đăng ký lên server hoặc xử lý dữ liệu tại đây
//         schema.validate(formData, {abortEarly: false})
//             .then(async validData => {

//                 // Reset form data
//                 setErrors(errors);

//                 // Call API
//                 let res = await AuthService.loginPost(validData.email, validData.password);

//                 // Handle API response
//                 if (res.status === 200) { // Success
//                     const {
//                         access_token = "",
//                         type_token = "",
//                     } = res.data;

//                     msg = type_token ?? "Thành công!";

//                     duration = 2000;

//                     type = "success";

//                     AuthService.login(access_token); // Set token to local storage

//                     // Redirect to home page
//                     setTimeout(() => {
//                         navigate("/");
//                     }, 2500);

//                 } else { // Error

//                     if (typeof res.data.message !== "string") { // Validation errors

//                         for (let key in res.data.message) { // Loop through errors
//                             errors[key as keyof FormData] = res.data.message[key][0];
//                         }

//                         setErrors(errors); // Set form errors
//                     } else { // Other errors
//                         msg = res.data.message ?? "Thất bại!";
//                         duration = 2000;
//                         type = "error";
//                     }

//                 }

//             })
//             .catch(validationErrors => { // Handle validation errors
//                 if (typeof validationErrors.inner === "object") { // Validation errors

//                     validationErrors.inner.forEach((error: any) => { // Loop through errors
//                         errors[error.path as keyof FormData] = error.message;
//                     });

//                     setErrors(errors); // Set form errors

//                     msg = "Có lỗi xảy ra, vui lòng chờ trong giây lát rồi thử lại!";

//                     duration = 2000;

//                     type = "error";
//                 }

//             })
//             .finally(() => {
//                 setIsButtonDisabled(false); // Set button disabled

//                 if (msg) { // Show toast message
//                     // Update toast message
//                     toast.update(toastPromise, {render: msg, type: type, isLoading: false, autoClose: duration});
//                 }
//             });
//     };

//     return (
//         <div className="tab-content font-family-san fs-4" style={{backgroundColor: "#fff"}}>
//             {/*Login*/}
//             <div className="flex justify-center py-5 my-5">
//                 <div className="md:w-1/2 shadow-lg rounded-lg">
//                     {message && <div className="alert alert-success text-center">{message}</div>}
//                     <ul className="nav nav-tabs text-uppercase tab-information rounded-t-lg overflow-hidden grid grid-cols-2 justify-center border-b-2">
//                         <li
//                             className="text-center py-3 bg-blue-900"
//                             style={{cursor: "pointer"}}
//                         >
//                             <a
//                                 className="fs-4 text-decoration-none font-bold text-white"
//                                 aria-expanded="false"
//                             >
//                                 Đăng nhập
//                             </a>
//                         </li>
//                         <li
//                             style={{cursor: "pointer"}}
//                             className="text-center py-3"
//                             onClick={() => navigate("/register")}
//                         >
//                             <a
//                                 className="fs-4 text-decoration-none font-bold text-dark"
//                                 data-toggle="tab"
//                                 aria-expanded="true"
//                             >
//                                 Đăng ký
//                             </a>
//                         </li>
//                     </ul>
//                     <div className="p-5 rounded-bottom-4 bg-body-tertiary" id="register">
//                         <div className="form-group row">
//                             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3">
//                                 <label className="block mb-2 text-sm font-medium text-gray-900">
//                                     <span style={{color: "red"}}>*</span>
//                                     &nbsp;Email
//                                 </label>
//                                 <div className="input-icon">
//                                     <input
//                                         type="text"
//                                         style={{height: "30px"}}
//                                         id="txtEmail"
//                                         name="email"
//                                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//                                         placeholder="Email"
//                                         onChange={handleChange}
//                                         value={formData.email}
//                                     />
//                                 </div>
//                                 {errors?.email && <span className="text-red-500">{errors?.email}</span>}
//                             </div>
//                             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3">
//                                 <label className="block mb-2 text-sm font-medium text-gray-900">
//                                     <span style={{color: "red"}}>*</span>
//                                     &nbsp;Mật khẩu
//                                 </label>
//                                 <div className="input-icon relative">
//                                     <input
//                                         type={isShowPassword ? "text" : "password"}
//                                         style={{height: "30px"}}
//                                         id="txtMatKhau"
//                                         name="password"
//                                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//                                         placeholder="Mật khẩu"
//                                         onChange={handleChange}
//                                         value={formData.password}
//                                     />
//                                     <i
//                                         className={`password-icon text-blue-500 fa-regular ${isShowPassword ? "fa-eye-slash" : "fa-eye"}`}
//                                         onClick={() => setIsShowPassword(!isShowPassword)}
//                                     ></i>
//                                 </div>
//                                 {errors?.password && <span className="text-red-500">{errors?.password}</span>}
//                             </div>
//                         </div>
//                         <div className="clearfix"></div>
//                         <div className="form-group row mt-3">
//                             <div className="col-md-12 text-center">
//                                 <div className="form-group">
//                                     <button
//                                         type="button"
//                                         className="btn btn-3 btn-mua-ve rounded px-5 py-2 text-white fs-4"
//                                         onClick={handleSubmit}
//                                         disabled={isButtonDisabled}
//                                     >
//                                         Đăng nhập
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="clearfix"></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login