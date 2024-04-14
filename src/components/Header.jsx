import React from "react";
import "./Header.css"


function Header(){
  return(
    <>
    
     <div className="header">
      <div className="left_section">

        <p className="dev_name"> Abdulrafiu.dev</p>
        <p className="toggle"> toggle </p>
      </div>

      <div className="right_section">
        <ul>
          <li> Home </li>
          <li> Services </li>
          <li> portfolio</li>
          <li> Testimonial </li>
        </ul>
        <button className="contact_button"> Contact us </button>
      </div>
     </div>
    
    
    </>
  )
}




export default Header