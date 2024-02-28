import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './DetailMoviePage.scss';
import { FaTag } from 'react-icons/fa';
import { IoTime } from 'react-icons/io5';
import { IoIosArrowForward } from "react-icons/io";

const DetailMoviePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0); // State để lưu trữ tab hiện tại đang được chọn

  // Hàm xử lý sự kiện khi tab được click
  const handleTabClick = (index: number) => {
    setActiveTab(index); // Cập nhật tab hiện tại
  };

  return (
    <div className='container'>
        <div className="d-flex align-items-center py-2 breadcrumb">
            <span>Trang chủ</span><IoIosArrowForward /><span>Gặp lại bà bầu</span>
        </div>
        <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
                <div className='row'>
                    <div className="col-lg-3 col-md-4 col-12">
                        <img className='rounded-4' src="https://files.betacorp.vn/files/media%2fimages%2f2024%2f01%2f29%2fdieu%2Dnhi%2D141116%2D290124%2D81.jpg" alt="" />
                    </div>
                    <div className="col-lg-9 col-md-9 col-12 content">
                        <h2 className="fw-bold title">Gặp lại chị bầu</h2>
                        <div className="des py-2">
                            Một chàng trai với với niềm đam mê diễn xuất nhưng lại có một quá khứ không bình yên, cùng cuộc gặp gỡ định mệnh với một cô giáo hơi " lố tuổi" , với câu chào đầu đầy ấn tượng " Em có ý gì với chị không?"
                        </div>
                        <div className="list-actors">
                            <div className="row">
                                <span className='col-lg-4 fw-bold'>ĐẠO DIỄN:</span>
                                <span className='col-lg-8'>Nhất Trung</span>
                            </div>
                            <div className="row">
                                <span className='col-lg-4 fw-bold'>DIỄN VIÊN:</span>
                                <span className='col-lg-8'>Anh Tú, Diệu Nhi, Kiều Minh Tuấn, Lê Giang,..</span>
                            </div>
                            <div className="row">
                                <span className='col-lg-4 fw-bold'>THỂ LOẠI:</span>
                                <span className='col-lg-8'>Tình cảm, Hài hước</span>
                            </div>
                            <div className="row">
                                <span className='col-lg-4 fw-bold'>THỜI LƯỢNG:</span>
                                <span className='col-lg-8'>114 phút</span>
                            </div>
                            <div className="row">
                                <span className='col-lg-4 fw-bold'>NGÔN NGỮ:</span>
                                <span className='col-lg-8'>Tiếng việt</span>
                            </div>
                            <div className="row">
                                <span className='col-lg-4 fw-bold'>NGÀY KHỞI CHIẾU:</span>
                                <span className='col-lg-8'>10/02/2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ul className="nav nav-tabs dayofweek mb-4 justify-content-start">
            <li className={activeTab === 0 ? 'activeTab' : ''}>
                <NavLink to="" onClick={() => handleTabClick(0)} className='text-black text-decoration-none'><span className='text-black fw-bold' style={{ fontSize: '38px'}}>23</span>/02 - T4</NavLink>
            </li>
            <li className={activeTab === 1 ? 'activeTab' : ''}>
                <NavLink to="" onClick={() => handleTabClick(1)} className='text-black text-decoration-none'><span className='text-black fw-bold' style={{ fontSize: '38px'}}>24</span>/02 - T5</NavLink>
            </li>
            <li className={activeTab === 2 ? 'activeTab' : ''}>
                <NavLink to="" onClick={() => handleTabClick(2)} className='text-black text-decoration-none'><span className='text-black fw-bold' style={{ fontSize: '38px'}}>25</span>/02 - CN</NavLink>
            </li>
            <li className={activeTab === 3 ? 'activeTab' : ''}>
                <NavLink to="" onClick={() => handleTabClick(3)} className='text-black text-decoration-none'><span className='text-black fw-bold' style={{ fontSize: '38px'}}>26</span>/02 - T2</NavLink>
            </li>
            <li className={activeTab === 4 ? 'activeTab' : ''}>
                <NavLink to="" onClick={() => handleTabClick(4)} className='text-black text-decoration-none'><span className='text-black fw-bold' style={{ fontSize: '38px'}}>27</span>/02 - T2</NavLink>
            </li>
            <li className={activeTab === 5 ? 'activeTab' : ''}>
                <NavLink to="" onClick={() => handleTabClick(5)} className='text-black text-decoration-none'><span className='text-black fw-bold' style={{ fontSize: '38px'}}>28</span>/02 - T3</NavLink>
            </li>
        </ul>
        {activeTab === 0 && (
            <div>
                <span className="subtitle">2D phụ đề</span>
                <ul className="list-time mt-2">
                    <li className="item-time">
                        <span>9:30</span>
                        <span>164 ghế trống</span>
                    </li>
                    <li className="item-time">
                        <span>9:30</span>
                        <span>164 ghế trống</span>
                    </li>
                    <li className="item-time">
                        <span>9:30</span>
                        <span>164 ghế trống</span>
                    </li>
                    <li className="item-time">
                        <span>9:30</span>
                        <span>164 ghế trống</span>
                    </li>
                    <li className="item-time">
                        <span>9:30</span>
                        <span>164 ghế trống</span>
                    </li>
                </ul>
            </div>
        )}
        {activeTab === 1 && (
            <h2>tab 1</h2>
        )}
        {activeTab === 2 && (
            <h2>tab 2</h2>
        )}
        {activeTab === 3 && (
            <h2>tab 3</h2>
        )}
        {activeTab === 4 && (
            <h2>tab 4</h2>
        )}
        {activeTab === 5 && (
            <h2>tab 5</h2>
        )}
    </div>
  );
};

export default DetailMoviePage;
