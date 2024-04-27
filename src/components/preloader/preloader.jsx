import React, { useEffect, useState } from "react"
import "./preloader.css"
import { motion, AnimatePresence } from "framer-motion"

function Prelaoder() {
  let [visible, set_visible] = useState(true)
  //preloader ease out
  useEffect(() => {
    setTimeout(() => {
      set_visible(false)
    }, 3000)
  })
  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, x: "100vw" }}
            whileInView={{ x: "0", opacity: 1 }}
            exit={{ opacity: 0, x: "-100vw" }}
            transition={{ duration: 1 }}
            className="preloader"
          >
            <motion.div
              initial={{ opacity: 0, x: "100vw", rotate: "0" }}
              animate={{ x: "0", opacity: 1, rotate: "360deg" }}
              transition={{ duration: 1.5 }}
            >
              <span> Loading... </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Prelaoder
