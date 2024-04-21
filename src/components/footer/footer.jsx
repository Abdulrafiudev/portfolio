import React from "react";
import "./footer.css"
import github from "../../../public/images/github.png"
import instagram from "../../../public/images/instagram.png"
import linkedin from "../../../public/images/linkedin.png"
import twitter from "../../../public/images/twitter.png"

function Footer(){
  return(
    <>
   <div className="main_box">
    <div className="footer_container">
       <div className="footer_icons">
        <img src= {github} />
        <img src= {instagram}/>
        <img src= {linkedin}/>
       </div>
       <div className="footer_name">
        <span> Abdulrafiu.dev </span>
       </div>
      </div>
   </div>
    
    
    
    
    </>
  )
}

export default Footer