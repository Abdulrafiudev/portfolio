import React from "react";
import "./Header.css"
import Toggle from "../Toggle/toggle";
import { context_theme } from "../../App";
import { useContext } from "react";


function Header(props){

  let [is_dark] = useContext(context_theme)
  return(
    <>
    
     <div className="header" style={{background : is_dark && "black"}}>
      <div className="left_section">

        <p className="dev_name"> Abdulrafiu.dev</p>
        <Toggle darkmode = {props.darkmode} handle_darkmode = {props.handle_darkmode} />
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