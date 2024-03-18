import React, { useEffect, useState } from 'react';
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
    // console.log(user);

    const [form,setForm]=useState({
        name:user?.name,
        email:user?.email,
        phone_number:user?.phone_number,
        combo:[],
        total:0,
        discount:0,
        totalPaymemt:0,
    })
    
    const [currentPage, setCurrentPage] = useState('selectPosition');
    const [showBreadcrumb, setShowBreadcrumb] = useState(true);
    const [showDetailTicket, setShowDetailTicket] = useState(true);
    
    const [combo,setCombo]=useState(
        [
            {   id:"1",
                imgCombo:"https://files.betacorp.vn/files/media/images/2023/06/15/sweet-combo-154545-150623-48.png",
                price: 299000,
                quality:0,
                nameCombo:"Sweet Combo 69oz",
                descriptionCombo:"TIẾT KIỆM 46K!!! Gồm: 1 Bắp (69oz) + 2 Nước có gaz (22oz)",
        
            },
            {   id:"2",
                imgCombo:"https://files.betacorp.vn/files/media/images/2023/06/15/family-combo-154315-150623-37.png",
                price: 299000,
                quality:0,
                nameCombo:"Family Combo 69oz",
                descriptionCombo:"TIẾT KIỆM 95K!!! Gồm: 2 Bắp (69oz) + 4 Nước có gaz (22oz) + 2 Snack Oishi (80g)",
        
            },
            {   id:"3",
                imgCombo:"https://files.betacorp.vn/files/media/images/2023/06/15/beta-combo-154428-150623-83.png",
                price: 299000,
                quality:0,
                nameCombo:"Beta Combo 69oz",
                descriptionCombo:"TIẾT KIỆM 28K!!! Gồm: 1 Bắp (69oz) + 1 Nước có gaz (22oz)",
        
            },
            {   id:"4",
                imgCombo:"https://files.betacorp.vn/files/media/images/2023/06/15/combo-see-me-130x130px-12-151911-150623-82.png",
                price: 299000,
                quality:0,
                nameCombo:"Combo See Mê - Phi Hành Gia",
                descriptionCombo:"TIẾT KIỆM 56K!!! Sỡ hữu ngay: 1 Ly Phi Hành Gia kèm nước + 1 Bắp (69oz)",
        
            },
            {   id:"5",
                imgCombo:"https://files.betacorp.vn/files/media/combopackage/2024/02/15/combo-online-17-093717-150224-13.png",
                price: 299000,
                quality:0,
                nameCombo:"Combo See Mê - Pastel",
                descriptionCombo:"TIẾT KIỆM 56K!!! Sỡ hữu ngay: 1 Cup Pastel 700ml kèm nước + 1 Bắp (69oz)",
        
            },
        ]
    )
  
    const handleAddCombo = (id)=>{
        try {
            setCombo((prevCombo) => {
                return prevCombo.map((item) => {
                  if (item.id === id) {
                    return { ...item, quality: item.quality + 1 };
                  } else {
                    return item;
                  }
                });
              });

              funcTotals()
            
        } catch (error) {
            console.log(error);
            
        }

    }

    const handleMinusCombo = (id)=>{
        try {
            setCombo((prevCombo) => {
                return prevCombo.map((item) => {
                    if(item?.quality != 0 ){
                        if (item.id === id) {
                            return { ...item, quality: item.quality - 1 };
                          } else {
                            return item;
                          }
                    }else{
                        return item;
                    }
                });
              });
              funcTotals()
            
        } catch (error) {
            console.log(error);
            
        }

    }
  
      
     
    const nextPage = () => {
        if (currentPage === 'selectPosition') {
            setCurrentPage('infoPayment');
        } else if (currentPage === 'infoPayment') {
            setCurrentPage('payment');
            const chooseCombo = combo.filter((item) => item.quality > 0);
            setForm({
                ...form,
                combo:chooseCombo,
            })
            console.log(form);
            
            setShowDetailTicket(false); 
            setShowBreadcrumb(false);
        }
    };
    
    const funcTotals = ()=>{
        try {
            const tongTien = combo.reduce((total, item) => {
                return total + item.price * item.quality;
              }, 0);
            setForm({
                ...form,total:tongTien,
                totalPaymemt:form?.total- form?.discount
            })   
        } catch (error) {
            console.log(error);   
        }
    }
    useEffect(()=>{
        funcTotals()  
        
    },[form])
  return (
    <div className='container'>
        {showBreadcrumb && (
            <div className="d-flex align-items-center py-2 breadcrumb">
                <span>Trang chủ</span><IoIosArrowForward /><span>Đặt vé</span><IoIosArrowForward /><span>Mai</span>
            </div>
        )}

        <div className="row pb-4">
            {currentPage === 'selectPosition' && <SelectPosition />}
            {currentPage === 'infoPayment' && 
                    <InfoPayment 
                    form={form} 
                    setForm={setForm} 
                    comboArr={combo} 
                    handleAddCombo={handleAddCombo}
                    handleMinusCombo={handleMinusCombo}
                    
                    />}
            {currentPage === 'payment' && <Payment />}
            {showDetailTicket && <DetailTicket handlerNext={nextPage} />}
        </div>
    </div>
  );
};

export default TicketPage;
