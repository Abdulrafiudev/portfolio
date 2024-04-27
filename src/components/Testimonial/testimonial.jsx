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
import { motion } from "framer-motion";
let Testimonial = function(){
  return(
    <>
      <div className="testimonial_wrapper">
        <motion.div 
            initial={{opacity: 0, x: "-10vw"}}
            whileInView={{opacity: 1, x: "0"}}
            transition={{duration:1, }}
        className="t_heading">
          <span className="client">Clients always get </span>
          <span className="exceptional_work">Exceptional Work </span>
          <span className="from_me">from me...</span>
         
        </motion.div>
       
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          clickable = {true}
          grabCursor={true}
          spaceBetween={50}>
          
         
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