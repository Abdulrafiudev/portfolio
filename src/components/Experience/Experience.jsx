import React from "react";
import "./Experience.css"
import { useContext } from "react";
import { context_theme } from "../../App";



function Experience(props){

  let [is_dark] = useContext(context_theme)
 
  return(
    <>
     
     <div className="exp_div">
      <div className="circle" style={{backgroundColor: is_dark && "black"}}>
         <span> {props.years} </span>
      </div>
      <span> {props.description} </span>
      <span className="detail"> {props.detail} </span>
     </div>
    
    </>
  )
}


export default Experience