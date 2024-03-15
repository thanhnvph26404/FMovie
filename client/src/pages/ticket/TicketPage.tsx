import React, { useState } from 'react';
import './TicketPage.scss';
import { IoIosArrowForward } from "react-icons/io";
import SelectPosition from '../../components/ticket/SelectPosition';
import DetailTicket from '../../components/ticket/DetailTicket';
import InfoPayment from '../../components/ticket/InfoPayment';
import Payment from '../../components/ticket/Payment';
import { useSelector } from 'react-redux';
import { User } from '@/services/auth/auth.interface';

const TicketPage: React.FC = () => {
    const user = useSelector((state: any) => state.auth.user) as User;
    console.log(user);

    const [form,setForm]=useState({
        name:user?.name,
        email:user?.email,
        phone_number:user?.phone_number
    })
    
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
            {currentPage === 'infoPayment' && <InfoPayment form={form} setForm={setForm} />}
            {currentPage === 'payment' && <Payment />}
            {showDetailTicket && <DetailTicket handlerNext={nextPage} />}
        </div>
    </div>
  );
};

export default TicketPage;
