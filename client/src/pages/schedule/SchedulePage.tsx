import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
import { FaTag } from 'react-icons/fa';
import { IoTime } from 'react-icons/io5';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const SchedulePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0); // State để lưu trữ tab hiện tại đang được chọn

  // Hàm xử lý sự kiện khi tab được click
  const handleTabClick = (index: number) => {
    setActiveTab(index); // Cập nhật tab hiện tại
  };

  return (
    <div className='container'>
        <ul className="nav nav-tabs dayofweek mb-4">
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
            <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                    <div className='row'>
                        <div className="col-lg-3 col-md-4 col-12">
                            <img className='rounded-4' src="https://files.betacorp.vn/files/media/images/2024/01/29/maiiii-135926-290124-71.jpg" alt="" />
                        </div>
                        <div className="col-lg-9 col-md-9 col-12 content">
                            <h2 className="fw-bold title">Mai</h2>
                            <div className="d-flex align-items-center mb-4">
                                <span className='d-flex align-items-center fw-bold pr-4'><FaTag style={{ color: '#337ab7' }} /> Tâm lý tình cảm</span>
                                <span className='d-flex align-items-center fw-bold'><IoTime style={{ color: '#337ab7' }} /> 131 phút</span>
                            </div>
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
                    </div>
                </div>
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
        <div>
            <h2 className='text-center fw-bold'><span className='title-swiper'>PHIM SẮP CHIẾU</span></h2>
            <Swiper
                className='my-4'
                spaceBetween={20}
                slidesPerView={6}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img src="https://files.betacorp.vn/files/media/images/2024/02/19/gozzila-170719-190224-68.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://files.betacorp.vn/files/media/images/2024/01/26/biet-doi-san-rong-144514-260124-27.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://files.betacorp.vn/files/media/images/2024/01/09/kungfu-panda-161211-090124-15.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://files.betacorp.vn/files/media/images/2024/02/19/dune-160329-190224-11.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://files.betacorp.vn/files/media/images/2024/02/19/ba-thim-bao-thu-162008-190224-98.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://files.betacorp.vn/files/media/images/2024/02/19/sen-boss-sum-vay-155653-190224-82.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://files.betacorp.vn/files/media/images/2024/02/19/gozzila-170719-190224-68.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  );
};

export default SchedulePage;
