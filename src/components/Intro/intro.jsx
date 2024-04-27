import React, { useContext, useState } from "react"
import "./intro.css"
import github from "../../../public/images/github.png"
import instagram from "../../../public/images/instagram.png"
import linkedin from "../../../public/images/linkedin.png"
import twitter from "../../../public/images/twitter.png"
import boy from "../../../public/images/boy.png"
import vector_1 from "../../../public/images/Vector1.png"
import vector_2 from "../../../public/images/Vector2.png"
import glasses_imoji from "../../../public/images/glassesimoji.png"
import { context_theme } from "../../App"
import { backIn, backOut, motion, AnimatePresence } from "framer-motion"

function Intro() {
  let [is_dark] = useContext(context_theme)

  return (
    <>
      <div className="intro" style={{ backgroundColor: is_dark && "black" }}>
        <motion.div
          initial={{ opacity: 0, rotate: "-180deg" }}
          whileInView={{ opacity: 1, rotate: "0deg" }}
          transition={{ duration: 1 }}
          className="left_intro"
        >
          <div className="info">
            <span className="greetings">Hy! I Am </span>
            <span className="dev_info"> Abdulrafiu Ibrahim </span>
            <span className="little_note">
              {" "}
              Frontend Developer with high level of experience in web designing
              <br></br>
              and development, producting the Quality work{" "}
            </span>
            <motion.div className="hire_me_container">
              <motion.button
                whileHover={{ scale: 0.8 }}
                whileTap={{ rotate: -25, scale: 1 }}
                transition={{ duration: 0.1 }}
                className="hire_me_button"
              >
                {" "}
                Hire me{" "}
              </motion.button>
            </motion.div>

            <div className="icons">
              <div className="contain_icons">
                <a href="https://github.com/Abdulrafiudev" target="blank">
                  {" "}
                  <img src={github}></img>{" "}
                </a>
                <a
                  href="https://www.instagram.com/abdul.rafiu_._/"
                  target="blank"
                >
                  {" "}
                  <img src={instagram}></img>{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/abdulrafiudev/"
                  target="blank"
                >
                  {" "}
                  <img src={linkedin}></img>{" "}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "10vw", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="right_intro"
        >
          <img src={vector_1} className="vector_1"></img>
          <img src={vector_2} className="vector_2"></img>
          <img src={boy} className="boy"></img>
          <AnimatePresence>
            <motion.img
              initial={{ rotate: "0deg", scale: 0 }}
              animate={{ rotate: "360deg", scale: 0.8 }}
              exit={{ rotate: "0deg" }}
              transition={{ duration: 1.5, ease: "backOut" }}
              src={glasses_imoji}
              className="glass_imoji"
            ></motion.img>
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  )
}

export default Intro
