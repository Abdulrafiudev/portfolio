import React from "react";
import "./Experience.css"



function Experience(props){
  return(
    <>
     
     <div className="exp_div">
      <div className="circle">
         <span> {props.years} </span>
      </div>
      <span> {props.description} </span>
      <span className="detail"> {props.detail} </span>
     </div>
    
    </>
  )
}


export default Experience