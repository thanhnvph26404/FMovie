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
      <div className="text-center">
        <ul className="nav nav-tabs tab-films">
          <li className={activeTab === 'sapchieu' ? 'active' : ''}>
            <a
              href="#tab-2"
              data-toggle="tab"
              id="sapchieu"
              aria-expanded={activeTab === 'sapchieu' ? 'false' : 'true'}
              onClick={() => handleTabClick('sapchieu')}
            >
              <h1 className="title-tab">PHIM SẮP CHIẾU</h1>
            </a>
          </li>
          <li className={activeTab === 'dangchieu' ? 'active' : ''}>
            <a
              href="#tab-1"
              data-toggle="tab"
              id="dangchieu"
              aria-expanded={activeTab === 'dangchieu' ? 'true' : 'false'}
              onClick={() => handleTabClick('dangchieu')}
            >
              <h1 className="title-tab">PHIM ĐANG CHIẾU</h1>
            </a>
          </li>
          <li className={activeTab === 'dacbiet' ? 'active' : ''}>
            <a
              href="#tab-3"
              data-toggle="tab"
              id="dacbiet"
              onClick={() => handleTabClick('dacbiet')}
            >
              <h1 className="title-tab">SUẤT CHIẾU ĐẶC BIỆT</h1>
            </a>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <div className={`tab-pane ${activeTab === 'dangchieu' ? 'active in' : ''}`} id="tab-1">
          <div className="row">
              <div className="col-lg-3 mb-4">
                  <img src="https://files.betacorp.vn/files/media%2fimages%2f2024%2f01%2f29%2fmaiiii%2D135926%2D290124%2D71.jpg" alt="" />
                  <p className='title-films'>Mai</p>
                  <p className='type-films'><strong>Thể loại:</strong> Tình cảm</p>
                  <p className='time-films'><strong>Thời lượng:</strong> 120 phút</p>
                  <button>Mua vé</button>
              </div>
              <div className="col-lg-3 mb-4">
                  <img src="https://files.betacorp.vn/files/media%2fimages%2f2024%2f01%2f29%2fmaiiii%2D135926%2D290124%2D71.jpg" alt="" />
                  <p className='title-films'>Mai</p>
                  <p className='type-films'><strong>Thể loại:</strong> Tình cảm</p>
                  <p className='time-films'><strong>Thời lượng:</strong> 120 phút</p>
                  <button>Mua vé</button>
              </div>
              <div className="col-lg-3 mb-4">
                  <img src="https://files.betacorp.vn/files/media%2fimages%2f2024%2f01%2f29%2fmaiiii%2D135926%2D290124%2D71.jpg" alt="" />
                  <p className='title-films'>Mai</p>
                  <p className='type-films'><strong>Thể loại:</strong> Tình cảm</p>
                  <p className='time-films'><strong>Thời lượng:</strong> 120 phút</p>
                  <button>Mua vé</button>
              </div>
              <div className="col-lg-3 mb-4">
                  <img src="https://files.betacorp.vn/files/media%2fimages%2f2024%2f01%2f29%2fmaiiii%2D135926%2D290124%2D71.jpg" alt="" />
                  <p className='title-films'>Mai</p>
                  <p className='type-films'><strong>Thể loại:</strong> Tình cảm</p>
                  <p className='time-films'><strong>Thời lượng:</strong> 120 phút</p>
                  <button>Mua vé</button>
              </div>
              <div className="col-lg-3 mb-4">
                  <img src="https://files.betacorp.vn/files/media%2fimages%2f2024%2f01%2f29%2fmaiiii%2D135926%2D290124%2D71.jpg" alt="" />
                  <p className='title-films'>Mai</p>
                  <p className='type-films'><strong>Thể loại:</strong> Tình cảm</p>
                  <p className='time-films'><strong>Thời lượng:</strong> 120 phút</p>
                  <button>Mua vé</button>
              </div>
          </div>
        </div>
        <div className={`tab-pane ${activeTab === 'sapchieu' ? 'active in' : ''}`} id="tab-2">
          2
        </div>
        <div className={`tab-pane ${activeTab === 'dacbiet' ? 'active in' : ''}`} id="tab-3">
          3
        </div>
      </div>
    </div>
  );
};

export default HomePage;
