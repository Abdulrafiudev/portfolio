import React, { useContext, useEffect, useState } from "react"
import "./App.css"
import Header from "./components/Header/Header"
import Intro from "./components/Intro/intro"
import Services from "./components/service_section/service"
import Experience from "./components/Experience/Experience"
import experience_array from "./components/Experience/array"
import Work from "./components/Work/work"
import Portfolio from "./components/portfolio/portfolio"
import Wordings from "./components/wordings/wordings"
import Testimonial from "./components/Testimonial/testimonial"
import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer"
import { createContext } from "react"
import { motion } from "framer-motion"

//This creates a context
export let context_theme = createContext()

function App() {

 
  
  let [is_dark, set_is_dark] = useState(retrieve_theme)

  useEffect(() => {
    save_theme()
  }, [is_dark])
  


  function handle_toggle(){
    set_is_dark(!is_dark)
  }

  function save_theme(){
    localStorage.setItem(`theme_mode`, JSON.stringify(is_dark))
  }

  function retrieve_theme(){
    let stored_theme = JSON.parse(localStorage.getItem(`theme_mode`))
    return stored_theme ? stored_theme : false
  }
  
  document.body.style.backgroundColor = is_dark ? "black" : "white"

  return (

    // This enables us to pass values to the context which can be called anywhere in our program
    <>
    
    <context_theme.Provider value = {[is_dark, handle_toggle]}>
      <div className="app_wrapper" data-theme = {is_dark && "dark"}>
        <Header />
        <Intro />
        <Services />
        <div className="experience_container">
          {experience_array.map((experience) => {
            return  <Experience years = {experience.years} description = {experience.desription} detail = {experience.detail} darkmode ={is_dark} handle_darkmode = {handle_toggle}/>
          })}
         
        </div>
        <Work />
        <Wordings />
        <motion.div 
        initial={{opacity: 0, x: "-10vw"}}
        whileInView={{opacity: 1, x: "0"}}
        transition={{duration:1, }}
        className="portfolio_wrapper">
          <span className="portfolio_note"> Recent Projects</span>
          <span className="portfolio_detail"> Portfolio </span>
        </motion.div>
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
       
      </div>
      </context_theme.Provider>
    </>
  )
}



export default App

