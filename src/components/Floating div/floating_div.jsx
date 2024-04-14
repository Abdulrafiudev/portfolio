import React from "react";
import "./floating_div.css"

function Floating_div(props){
  return(
    <>
     <div className="floating_div">
       <img src = {props.img} className="float_img"></img>
       <div>
        <span className="wording"> {props.text_1} <br></br>
        {props.text_2}
       </span>
       </div>
     </div>
    
    </>
  )
}

export default Floating_div