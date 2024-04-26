import React from "react";
import "./Header.css"
import Toggle from "../Toggle/toggle";
import { context_theme } from "../../App";
import { useContext } from "react";
import { UilAlignCenter } from '@iconscout/react-unicons'
import { UilTimesCircle } from '@iconscout/react-unicons'


function Header(props){

  let [is_dark] = useContext(context_theme)
  return(
    <>
    
     <div className="header" style={{background : is_dark ? "black" : "white" }}>
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
        <div className="smaller_screen_exit" onClick={handle_exit}>
        <UilTimesCircle />
      </div>
        <div className="small_contact">
           
          <button className="contact_button"> Contact us </button>
        </div>
      </div>
      <div className="smaller_screen_menu" onClick={handle_menu}>
        <UilAlignCenter className = "menu_icon"/>
      </div>
    
     </div>
    
    
    </>
  )

  function handle_menu(){
    document.querySelector(`.right_section`).classList.add(`smaller_screen`)
    document.querySelector(`.smaller_screen_menu`).classList.add(`smaller_screen_disapper`)
  }
  function handle_exit(){
    document.querySelector(`.right_section`).classList.remove(`smaller_screen`)
    document.querySelector(`.smaller_screen_menu`).classList.remove(`smaller_screen_disapper`)
  }
}




export default Header