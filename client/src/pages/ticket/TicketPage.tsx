import React, { useState } from 'react';
import './TicketPage.scss';
import { IoIosArrowForward } from "react-icons/io";

import SelectPosition from './components/SelectPosition';
import DetailTicket from './components/DetailTicket';
import InfoPayment from './components/InfoPayment';

const TicketPage: React.FC = () => {
    const [isCheck ,setIsCheck]=useState(Boolean(false))

    const handlerNext = ()=>{
        try {
            setIsCheck(!isCheck)
        } catch (error) {
            
        }
    }
    
  return (
    <div className='container'>
        <div className="d-flex align-items-center py-2 breadcrumb">
            <span>Trang chủ</span><IoIosArrowForward /><span>Đặt vé</span><IoIosArrowForward /><span>Mai</span>
        </div>
        
        <div className="row pb-4">
           
            {isCheck ?  <InfoPayment /> : 
            <SelectPosition />
            }
           
           <DetailTicket
                handlerNext={ handlerNext}
            />
           
        </div>
    </div>
  );
};

export default TicketPage;
