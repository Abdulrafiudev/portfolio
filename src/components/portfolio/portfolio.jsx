import React from "react";
import {useDetectDevice} from 'react-device-detect'
import { BrowserView, MobileView, isBrowser, isMobile, isTablet } from 'react-device-detect';
import "./portfolio.css"
import pie_chat from "../../../public/images/piechat.png"
import keepers from "../../../public/images/keepers.png"
import tesla from "../../../public/images/tesla.png"
import youtube from "../../../public/images/youtube.png"
import blog_x from "../../../public/images/BlogX.png"
import amazon_checkout from "../../../public/images/checkout.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



let Portfolio = function(){



  let slides_per_view = isMobile ? 1 : isTablet ? 2 : 3
  return(
    <>
    <div className="wrapper">
      
      <Swiper  modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={slides_per_view}
            pagination={{ clickable: true }}
            
            > 
        <SwiperSlide>
          <img src={pie_chat} className="slider_images"/>
        </SwiperSlide>
        <SwiperSlide >
          <img src={keepers} className="slider_images"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={tesla} className="slider_images"/>
        </SwiperSlide>
        <SwiperSlide >
          <img src={youtube} className="slider_images"/>
        </SwiperSlide>
        <SwiperSlide >
          <img src={amazon_checkout} className="slider_images"/>
        </SwiperSlide>
        <SwiperSlide > 
          <img src={blog_x} className="slider_images"/>
        </SwiperSlide>

      </Swiper>

    </div>
     
    
      
    
    
    </>
  )
}


export default Portfolio