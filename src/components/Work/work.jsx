import React from "react";
import "./work.css"
import facebook from "../../../public/images/Facebook.png"
import upwork from "../../../public/images/Upwork.png"
import shopify from "../../../public/images/Shopify.png"
import amazon from "../../../public/images/amazon.png"


function Work(){
   return(
    <>
     <div className="work_container">
      <div className="left_work">
        <span className="work_heading"> Works for All these</span>
        <span className="work_detail"> Brands & Clients </span>
        <span className="work_content">
          
        Lorem ispum is simpley dummy text of printing of printing Lorem <br />
        ispum is simpley dummy text of printingLorem ispum is simpley dummy <br />
        y dummy text of printingLorem <br />
        ispum is simpley dummy text of printing
        </span>
        <button className="work_button"> Hire me </button>

      </div>
      <div className="right_work">
        <div className="main_work_circle">
          <div className="work_contaner">
           <img src={upwork} className="upwork"></img>
          </div>
          <div className="work_contaner">
            <img src={amazon} className="amazon"></img>
          </div>
          <div className="work_contaner">
             <img  src={facebook} className="facebook"></img>
          </div>
          <div className="work_contaner">
             <img src={shopify} className="shopify"></img> 
          </div>
          
        </div>
        <div className="work_blue_circle"></div>
          <div className="work_yellow_circle"></div>
      </div>
     </div>
    
    
    </>
   )
}

export default Work