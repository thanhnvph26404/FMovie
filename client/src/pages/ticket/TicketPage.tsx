import React, { useState } from 'react';
import './TicketPage.scss';
import { IoIosArrowForward } from "react-icons/io";
import { FaTag } from 'react-icons/fa';
import { IoTime } from 'react-icons/io5';
import { MdOutlineHomeWork } from "react-icons/md";
import { GrSchedules } from "react-icons/gr";
import { MdOutlineBedroomParent } from "react-icons/md";
import { GiRockingChair } from "react-icons/gi";

const TicketPage: React.FC = () => {
  const seats = [];

  // Tạo 100 ghế bán vé
  for (let i = 1; i <= 200; i++) {
    seats.push(
      <div className="seat-cell seat-used seat-for-way seat-normal" key={i}>
        {`J${i}`}
      </div>
    );
  }

  return (
    <div className='container'>
        <div className="d-flex align-items-center py-2 breadcrumb">
            <span>Trang chủ</span><IoIosArrowForward /><span>Đặt vé</span><IoIosArrowForward /><span>Mai</span>
        </div>
        <div className="row pb-4">
            <div className="col-lg-8 col-md-8 col-12">
                <div className="blink py-2" style={{ textAlign: 'center', color: 'red', marginBottom: '10px', backgroundColor: 'rgb(243, 230, 192)' }}>
                    Theo quy định của cục điện ảnh, phim này không dành cho khán giả dưới 18  tuổi.
                </div>
                <div className="row note-seat-status">
                    <div className="col-lg-2 col-md-2 col-12">
                        <img width="35" height="35" src="https://www.betacinemas.vn/Assets/global/img/booking/seat-unselect-normal.png" />
                        <span className="note-seat-status-label">Ghế trống</span>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                        <img width="35" height="35" src="https://www.betacinemas.vn/Assets/global/img/booking/seat-select-normal.png" />
                        <span className="note-seat-status-label">Ghế đang chọn</span>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <img width="35" height="35" src="https://www.betacinemas.vn/Assets/global/img/booking/seat-select-normal.png" />
                        <span className="note-seat-status-label">Ghế đang được giữ</span>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                        <img width="35" height="35" src="https://www.betacinemas.vn/Assets/global/img/booking/seat-buy-normal.png" />
                        <span className="note-seat-status-label">Ghế đã bán</span>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                        <img width="35" height="35" src="https://www.betacinemas.vn/Assets/global/img/booking/seat-set-normal.png" />
                        <span className="note-seat-status-label">Ghế đặt trước</span>
                    </div>
                </div>
                <div className='py-4'>
                    <div className="seat-diagram">
                        <img width="100%" height="100%" src="https://www.betacinemas.vn/Assets/global/img/booking/ic-screen.png" alt="" className="img-responsive" />
                    </div>
                    <div className="check-show">
                        <div className="full-width">
                            {seats}
                        </div>
                    </div>
                </div>
                <div className='row seat-type-panel'>
                    <div className="col-lg-2">
                        <img className="seat-type-image" style={{ width: '100%', maxWidth: '50px' }} src="https://www.betacinemas.vn/Assets/global/img/booking/seat-unselect-normal.png" />
                        <span>Ghế thường</span>
                    </div>
                    <div className="col-lg-2">
                        <img className="seat-type-image" style={{ width: '100%', maxWidth: '50px' }} src="https://www.betacinemas.vn/Assets/global/img/booking/seat-unselect-normal.png" />
                        <span>Ghế vip</span>
                    </div>
                    <div className="col-lg-2">
                        <img className="seat-type-image" style={{ width: '100%', maxWidth: '50px' }} src="https://www.betacinemas.vn/Assets/global/img/booking/seat-unselect-normal.png" />
                        <span>Ghế đôi</span>
                    </div>
                    <div className="col-lg-2">
                        <span>Tổng tiền</span>
                    </div>
                    <div className="col-lg-3">
                        <span>Thời gian còn lại</span>
                    </div>
                </div>
            </div>
            <div className="dat-ve-sidebar col-lg-4 col-md-4 col-12">
                <div className="row pb-2">
                    <img className='col-lg-6 p-0' src="https://files.betacorp.vn/files/media/images/2024/01/29/maiiii-135926-290124-71.jpg" alt="" />
                    <div className="box-content-top col-lg-6">
                        <h2 className="title">Mai</h2>
                        <span>2D Phụ đề</span>
                    </div>
                </div>
                <div className="action-type row border-dashed">
                    <div className="col-lg-12">
                        <div className="row pb-2">
                            <span className='d-flex align-items-center col-lg-6'><FaTag /> Thể loại</span>
                            <span className='col-lg-6'>Tâm lý, tình cảm</span>
                        </div>
                        <div className="row pb-2">
                            <span className='d-flex align-items-center col-lg-6'><IoTime /> Thời gian</span>
                            <span className='col-lg-6'>131 phút</span>
                        </div>
                    </div>
                </div>
                <div className="action-type row">
                    <div className="col-lg-12">
                        <div className="row pb-2">
                            <span className='d-flex align-items-center col-lg-6'><MdOutlineHomeWork /> Rạp chiếu</span>
                            <span className='col-lg-6'>Beta Thái Nguyên</span>
                        </div>
                        <div className="row pb-2">
                            <span className='d-flex align-items-center col-lg-6'><GrSchedules /> Ngày chiếu</span>
                            <span className='col-lg-6'>24/02/2024</span>
                        </div>
                        <div className="row pb-2">
                            <span className='d-flex align-items-center col-lg-6'><IoTime /> Giờ chiếu</span>
                            <span className='col-lg-6'>09:15</span>
                        </div>
                        <div className="row pb-2">
                            <span className='d-flex align-items-center col-lg-6'><MdOutlineBedroomParent /> Phòng chiếu</span>
                            <span className='col-lg-6'>P1</span>
                        </div>
                        <div className="row pb-2">
                            <span className='d-flex align-items-center col-lg-6'><GiRockingChair /> Ghế ngồi</span>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <button className='mb-4'>Tiếp tục</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TicketPage;
