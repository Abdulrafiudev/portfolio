import React from "react"
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


function App() {


  return (
    <>
      <div className="app_wrapper">
        <Header />
        <Intro />
        <Services />
        <div className="experience_container">
          {experience_array.map((experience) => {
            return  <Experience years = {experience.years} description = {experience.desription} detail = {experience.detail}/>
          })}
         
        </div>
        <Work />
        <Wordings detail = "Recent Projects" content = "Portfolio" />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
       
      </div>
    </>
  )
}

export default App
