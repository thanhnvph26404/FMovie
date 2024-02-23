import React, { useState } from 'react';
import './HomePage.scss';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './HomePage.scss'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dangchieu' | 'sapchieu' | 'dacbiet'>('dangchieu');

  const handleTabClick = (tabId: 'dangchieu' | 'sapchieu' | 'dacbiet') => {
    setActiveTab(tabId);
  };

  return (
    <div className="container homepage">
      <Swiper
          className='my-4'
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
      >
          <SwiperSlide>
              <img src="https://files.betacorp.vn/files/ecm/2024/02/21/1702x621-2-163855-210224-73.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
              <img src="https://files.betacorp.vn/files/ecm/2024/01/23/0124-movie-galaxy-merchant-tet-1702x621-113434-230124-48.jpg" alt="" />
          </SwiperSlide>
      </Swiper>
      
    </div>
  );
};

export default HomePage;
