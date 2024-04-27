import React from "react";
import "./service.css";
import Card from "../card/card";
import humble from "../../../public/images/humble.png";
import glasses from "../../../public/images/glasses.png";
import heart from "../../../public/images/heartemoji.png";
import { motion, AnimatePresence } from "framer-motion";

function Services() {
  return (
    <>
      <div className="services">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: "-10vw" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="left_services"
          >
            <span className="awesome"> My Awesome </span>
            <span className="service_note"> services </span>
            <span className="service_ipsum">
              Lorem ispum is simpley dummy text of printing of printing Lorem{" "}
              <br />
              ispum is simpley dummy text of printing
            </span>
            <motion.a
              whileHover={{ scale: 0.8 }}
              whileTap={{ rotate: 25, scale: 1 }}
              transition={{ duration: 0.1 }}
              className="download"
            >
              {" "}
              Download CV{" "}
            </motion.a>
          </motion.div>
        </AnimatePresence>
        <motion.div
          initial={{ x: "10vw", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="right_services"
        >
          <div className="card_1">
            <Card
              emoji={heart}
              heading="Design"
              detail="Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"
            />
          </div>
          <div className="card_2">
            <Card
              emoji={glasses}
              heading="Developer"
              detail="Html, Css, JavaScript, React, Nodejs, Express"
            />
          </div>
          <div className="card_3">
            <Card
              emoji={humble}
              heading="UI/UX"
              detail="Lorem ispum dummy text "
            />
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Services;
