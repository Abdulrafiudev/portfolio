import React from "react"
import "./footer.css"
import github from "../../../public/images/github.png"
import instagram from "../../../public/images/instagram.png"
import linkedin from "../../../public/images/linkedin.png"

function Footer() {
  return (
    <>
      <div className="main_box">
        <div className="footer_container">
          <div className="footer_icons">
            <a href="https://github.com/Abdulrafiudev" target="blank">
              {" "}
              <img src={github} />{" "}
            </a>
            <a href="https://www.instagram.com/abdul.rafiu_._/" target="blank">
              {" "}
              <img src={instagram} />{" "}
            </a>
            <a href="https://www.linkedin.com/in/abdulrafiudev/" target="blank">
              {" "}
              <img src={linkedin} />{" "}
            </a>
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
