import React from "react"
import "./Experience.css"
import { useContext } from "react"
import { context_theme } from "../../App"
import { motion } from "framer-motion"

function Experience(props) {
  let [is_dark] = useContext(context_theme)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, rotate: 360 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1 }}
        className="exp_div"
      >
        <div className="circle" style={{ backgroundColor: is_dark && "black" }}>
          <span> {props.years} </span>
        </div>
        <span> {props.description} </span>
        <span className="detail"> {props.detail} </span>
      </motion.div>
    </>
  )
}

export default Experience
