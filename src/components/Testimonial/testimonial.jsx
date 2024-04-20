import React from "react";
import clients from "./testimonial_array";
import "./testimonial.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import profilePic4 from "../../../public/images/profile4.jpg";

let Testimonial = function(){
  return(
    <>
      <div className="testimonial_wrapper">
        <div className="t_heading">
          <span className="client">Clients always get </span>
          <span className="exceptional_work">Exceptional Work </span>
          <span className="from_me">from me...</span>
         
        </div>
       
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          clickable = {true}
          grabCursor={true}>
          
         
          {clients.map((client, index) => {
            return(
              <SwiperSlide key={index}>
                <div className="swiper_div">
                  <img src={client.img}></img>
                  <span> {client.review}</span>
                </div>
                
              </SwiperSlide>
            )
          })}
          
        </Swiper>
      </div>
    
    
    </>
  )
}


export default Testimonial