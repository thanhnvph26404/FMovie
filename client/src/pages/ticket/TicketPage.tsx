import React, { useState } from 'react';
import './TicketPage.scss';
import { IoIosArrowForward } from "react-icons/io";
import SelectPosition from '../../components/ticket/SelectPosition';
import DetailTicket from '../../components/ticket/DetailTicket';
import InfoPayment from '../../components/ticket/InfoPayment';
import Payment from '../../components/ticket/Payment';

const TicketPage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState('selectPosition');
    const [showBreadcrumb, setShowBreadcrumb] = useState(true);
    const [showDetailTicket, setShowDetailTicket] = useState(true);

    const nextPage = () => {
        if (currentPage === 'selectPosition') {
            setCurrentPage('infoPayment');
        } else if (currentPage === 'infoPayment') {
            setCurrentPage('payment');
            setShowDetailTicket(false); 
            setShowBreadcrumb(false);
        }
    };
    
  return (
    <div className='container'>
        {showBreadcrumb && (
            <div className="d-flex align-items-center py-2 breadcrumb">
                <span>Trang chủ</span><IoIosArrowForward /><span>Đặt vé</span><IoIosArrowForward /><span>Mai</span>
            </div>
        )}

        <div className="row pb-4">
            {currentPage === 'selectPosition' && <SelectPosition />}
            {currentPage === 'infoPayment' && <InfoPayment />}
            {currentPage === 'payment' && <Payment />}
            {showDetailTicket && <DetailTicket handlerNext={nextPage} />}
        </div>
    </div>
  );
};

export default TicketPage;
