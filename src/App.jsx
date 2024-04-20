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


function App() {


  return (
    <>
      <div>
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
       
      </div>
    </>
  )
}

export default App
