import React from "react";
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
  return(
    <>
    <div className="wrapper">
      
      <Swiper  modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            pagination
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}  > 
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