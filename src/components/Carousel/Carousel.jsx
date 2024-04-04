import './Carousel.css'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FaChevronLeft , FaChevronRight} from "react-icons/fa";

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function App({ elements}) {
    return (
        <div className="swiper">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 0,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                {elements?.map((ele, key) => {
                    return <SwiperSlide key={key}>
                        {ele}
                    </SwiperSlide>
                })}


                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                    <FaChevronLeft size={20} color='white'/>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                    <FaChevronRight size={20} color='white'/>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
}

export default App;