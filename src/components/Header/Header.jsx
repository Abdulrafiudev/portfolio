import React from "react"
import "./Header.css"
import Toggle from "../Toggle/toggle"
import { context_theme } from "../../App"
import { useContext } from "react"
import { UilAlignCenter } from "@iconscout/react-unicons"
import { UilTimesCircle } from "@iconscout/react-unicons"
import { motion } from "framer-motion"
import { Link } from "react-scroll"

function Header(props) {
  let [is_dark] = useContext(context_theme)
  return (
    <>
      <div
        className="header"
        style={{ background: is_dark ? "black" : "white" }}
      >
        <div className="left_section">
          <p className="dev_name"> Abdulrafiu.dev</p>
          <Toggle
            darkmode={props.darkmode}
            handle_darkmode={props.handle_darkmode}
          />
        </div>

        <div className="right_section">
          <ul>
            <Link spy={true} to="home" smooth={true}>
              <motion.li
                whileHover={{
                  backgroundColor: "gray",
                  padding: "6px",
                  borderRadius: "10px",
                }}
                whileTap={{ rotate: -25 }}
                onClick={handle_exit_ul}
              >
                {" "}
                Home{" "}
              </motion.li>
            </Link>
            <Link spy={true} to="services" smooth={true}>
              <motion.li
                whileHover={{
                  backgroundColor: "gray",
                  padding: "6px",
                  borderRadius: "10px",
                }}
                whileTap={{ rotate: 25 }}
                onClick={handle_exit_ul}
              >
                {" "}
                Services{" "}
              </motion.li>
            </Link>
            <Link spy={true} to="experience" smooth={true}>
              <motion.li
                whileHover={{
                  backgroundColor: "gray",
                  padding: "6px",
                  borderRadius: "10px",
                }}
                whileTap={{ rotate: -25 }}
                onClick={handle_exit_ul}
              >
                {" "}
                Experience
              </motion.li>
            </Link>
            <Link spy={true} to="work" smooth={true}>
              <motion.li
                whileHover={{
                  backgroundColor: "gray",
                  padding: "6px",
                  borderRadius: "10px",
                }}
                whileTap={{ rotate: -25 }}
                onClick={handle_exit_ul}
              >
                {" "}
                Work
              </motion.li>
            </Link>
            <Link spy={true} to="portfolio" smooth={true}>
              <motion.li
                whileHover={{
                  backgroundColor: "gray",
                  padding: "6px",
                  borderRadius: "10px",
                }}
                whileTap={{ rotate: -25 }}
                onClick={handle_exit_ul}
              >
                {" "}
                portfolio
              </motion.li>
            </Link>
            <Link spy={true} to="testimonial" smooth={true}>
              <motion.li
                whileHover={{
                  backgroundColor: "gray",
                  padding: "6px",
                  borderRadius: "10px",
                }}
                whileTap={{ rotate: 25 }}
                onClick={handle_exit_ul}
              >
                {" "}
                Testimonial{" "}
              </motion.li>
            </Link>
          </ul>
          <div className="smaller_screen_exit" onClick={handle_exit}>
            <UilTimesCircle />
          </div>
          <Link spy={true} to="contact_us" smooth={true}>
            <motion.div
              whileHover={{ scale: 0.95 }}
              whileTap={{ rotate: 25, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="small_contact"
              onClick={handle_exit_ul}
            >
              <button className="contact_button"> Contact us </button>
            </motion.div>
          </Link>
        </div>

        <div className="smaller_screen_menu" onClick={handle_menu}>
          <UilAlignCenter className="menu_icon" />
        </div>
      </div>
    </>
  )

  function handle_menu() {
    document.querySelector(`.right_section`).classList.add(`smaller_screen`)
    document
      .querySelector(`.smaller_screen_menu`)
      .classList.add(`smaller_screen_disapper`)
  }
  function handle_exit() {
    document.querySelector(`.right_section`).classList.remove(`smaller_screen`)
    document
      .querySelector(`.smaller_screen_menu`)
      .classList.remove(`smaller_screen_disapper`)
  }
  function handle_exit_ul() {
    document.querySelector(`.right_section`).classList.remove(`smaller_screen`)
    document
      .querySelector(`.smaller_screen_menu`)
      .classList.remove(`smaller_screen_disapper`)
  }
}

export default Header
