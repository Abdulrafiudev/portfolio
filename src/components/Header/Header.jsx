import React from "react";
import "./Header.css"
import Toggle from "../Toggle/toggle";
import { context_theme } from "../../App";
import { useContext } from "react";
import { UilAlignCenter } from '@iconscout/react-unicons'
import { UilTimesCircle } from '@iconscout/react-unicons'
import {motion} from "framer-motion"


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
          <motion.li whileHover={{backgroundColor:"gray", padding: "6px", borderRadius: "10px"}} whileTap={{rotate: -25}}> Home </motion.li>
          <motion.li whileHover={{backgroundColor:"gray", padding: "6px", borderRadius: "10px"}} whileTap={{rotate: 25}}> Services </motion.li>
          <motion.li whileHover={{backgroundColor:"gray", padding: "6px", borderRadius: "10px"}} whileTap={{rotate: -25}}> Experience</motion.li>
          <motion.li whileHover={{backgroundColor:"gray", padding: "6px", borderRadius: "10px"}} whileTap={{rotate: -25}}> Work</motion.li>
          <motion.li whileHover={{backgroundColor:"gray", padding: "6px", borderRadius: "10px"}} whileTap={{rotate: -25}}> portfolio</motion.li>
          <motion.li whileHover={{backgroundColor:"gray", padding: "6px", borderRadius: "10px"}} whileTap={{rotate: 25}}> Testimonial </motion.li>
        </ul>
        <div className="smaller_screen_exit" onClick={handle_exit}>
        <UilTimesCircle />
      </div>
        <motion.div
        whileHover={{scale: 0.95}}
        whileTap={{rotate: 25, scale: 1}}
        transition={{duration: 0.3, }}
        className="small_contact">
           
          <button className="contact_button"> Contact us </button>
        </motion.div>
      </div>
      <div className="smaller_screen_menu" onClick={handle_menu}>
        <UilAlignCenter
       
        className = "menu_icon"/>
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