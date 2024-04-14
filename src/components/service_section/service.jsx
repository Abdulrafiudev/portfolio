import React from "react";
import "./service.css"
import Card from "../card/card";
import humble from "../../../public/images/humble.png"
import glasses from "../../../public/images/glasses.png"
import heart from "../../../public/images/heartemoji.png"

function Services(){
  return(
    <>

      <div className="services">
        <div className="left_services">
          <span className="awesome"> My Awesome </span>
          <span className="service_note">  services </span>
          <span className="service_ipsum">
            Lorem ispum is simpley dummy text of printing of printing Lorem <br />
            ispum is simpley dummy text of printing
          </span>
          <a className="download"> Download CV </a>
        </div>
        <div className="right_services">
          
          <div  className="card_1">
            <Card emoji={heart} heading="Design" detail="Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"/>
          </div>
          <div  className="card_2">
          <Card emoji={glasses} heading="Developer" detail="Html, Css, JavaScript, React, Nodejs, Express"/>
          </div>
          <div  className="card_3">
           <Card emoji={humble} heading="UI/UX" detail="Lorem ispum dummy text "/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
