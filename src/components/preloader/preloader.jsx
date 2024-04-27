import React from "react";
import "./preloader.css";
import { motion, AnimatePresence } from "framer-motion";

function Prelaoder(props) {
  return (
    <>
      <AnimatePresence>
        {props.loading && (
          <motion.div
            initial={{ opacity: 0, x: "100vw" }}
            whileInView={{ x: "0", opacity: 1 }}
            exit={{ opacity: 0, x: "100vw" }}
            transition={{ duration: 1 }}
            className="preloader"
          >
            <motion.div
              initial={{ opacity: 0, x: "100vw" }}
              animate={{ x: "0", opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <span> Loading... </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Prelaoder;
