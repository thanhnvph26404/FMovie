import React from 'react'
import { FaTag } from 'react-icons/fa';
import { IoTime } from 'react-icons/io5';
import { MdOutlineHomeWork } from "react-icons/md";
import { GrSchedules } from "react-icons/gr";
import { MdOutlineBedroomParent } from "react-icons/md";
import { GiRockingChair } from "react-icons/gi";
import '../TicketPage.scss';

type Props = {}

const DetailTicket = (props: Props, ) => {
  return (
    <>
     <div className="dat-ve-sidebar col-lg-4 col-md-4 col-12 ">
                <div className="row pb-2">
                    <img className='col-lg-6 p-0 w-80' 
                    src="https://files.betacorp.vn/files/media/images/2024/01/29/maiiii-135926-290124-71.jpg" alt="" />
                    <div className="box-content-top col-lg-6">
                        <h2 className="title t">Mai</h2>
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
                    <button
                    onClick={()=> props?.handlerNext()}
                    className='mb-4'>Tiếp tục</button>
                </div>
            </div>
    </>
  )
}

export default DetailTicket