import React from "react";
import "./intro.css"
import github from "../../../public/images/github.png"
import instagram from "../../../public/images/instagram.png"
import linkedin from "../../../public/images/linkedin.png"
import twitter from "../../../public/images/twitter.png"
import boy from "../../../public/images/boy.png"
import vector_1 from "../../../public/images/Vector1.png"
import vector_2 from "../../../public/images/Vector2.png"





function Intro(){

  return(
    <>
      <div className="intro">
        <div className="left_intro">
          <div className="info">
            <span className="greetings">Hy! I Am </span>
            <span className="dev_info"> Abdulrafiu Ibrahim </span>
            <span className="little_note"> Frontend Developer with high level of experience in web designing<br></br>
            and development, producting the Quality work </span>

            <button className="hire_me_button"> Hire me </button>
            <div className="icons"> 
              <div className="contain_icons">
                <img src={github}></img>
                <img src={instagram}></img>
                <img src={linkedin}></img>
                <img src={twitter} className="twitter"></img>
              </div>
             
           </div>
          </div>
         
        </div>
        <div className="right_intro">
          
            <img src={vector_1} className="vector_1"></img>
            <img src={vector_2} className="vector_2"></img>
            <img src={boy} className="boy"></img>
          
          

        </div>
      </div>
    
    
    </>
  )

}

export default Intro