import React from "react";
import "./preloader.css"
import { motion, AnimatePresence } from "framer-motion";



function Prelaoder(){
  return(
    <>
    

    
    <motion.div
    initial= {{opacity: 0, y: "-100vh"}}
    whileInView={{y: 0, opacity: 1}}
    exit={{opacity:0, y: "100vh"}}
    transition={{duration: 1,}}
    className="preloader">
       <motion.span
       
       > Loading... </motion.span>
    </motion.div>

  
    </>
  )
}

export default Prelaoder