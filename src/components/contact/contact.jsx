import React from "react";
import "./contact.css"
import axios from "axios"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";





let Contact = function(){

  let [email_content, set_email_content] = useState({
    username : "",
    email : "",
    message : ""
  })

  let [is_done, set_is_done] = useState(false)

  console.log(is_done)
 
  useEffect(() => {
    setTimeout(() => {
      if (is_done){
        form_message()
      }
    
    },1000)
    
  }, [is_done])

  function handle_change(event){
    let {name, value} = event.target
    set_email_content((prev_value) => {
      return(
        {
          ...prev_value,
          [name] : value
        }
      )
    })
  }

  function handle_send(){
    set_is_done(true)
    setTimeout(() => {
      set_is_done(false)
    }, 2000)
  
  }

  function form_message(){
    is_done ? alert(`Email sent`) : alert(`Email not sent`)
  }

  let data = {
    service_id: "service_g1nvggm",
    template_id: "template_yvzg5l5",
    user_id: "5tqts9tVEIevlbcZM",
    template_params:{
      to_name : 'Abdulrafiu Ibrahim',
      from_name : email_content.username,
      reply_to :  email_content.email,
      message : email_content.message
    }
    
  }

  function handle_submit(event){
  event.preventDefault()
  try{
    let response =   axios.post("https://api.emailjs.com/api/v1.0/email/send", {
      service_id: "service_1w5byzw",
      template_id: "template_lgab6un",
      user_id: "5tqts9tVEIevlbcZM",
      template_params:{
        to_name : 'Abdulrafiu Ibrahim',
        from_name : email_content.username,
        reply_to :  email_content.email,
        message : email_content.message
      }
      
    })
   
  set_email_content({
    username : "",
    email : "",
    message : ""
  })

  }
  
   
    catch(error){
      console.error("error sending mail", error.message)
    }
  
  
  
 
}
  return(
    <>
      <div className="contact_container">
        <motion.div
            initial={{opacity: 0, x: "-10vw"}}
            whileInView={{opacity: 1, x: "0"}}
            transition={{duration:1, }}
        className="left_contact">
          <span className="left_contact_note"> Get in touch </span>
          <span className="left_contact_detail"> Contact me </span>
        </motion.div>
        <div className="right_contact">
          <form onSubmit={handle_submit}>
            <input className="form_name" placeholder="Name" name="username" onChange={handle_change} value={email_content.username}></input>
            <input className="form_email" placeholder="Email" name="email"  onChange={handle_change} value={email_content.email}></input>
            <textarea  className="form_content" placeholder="message" name="message"  onChange={handle_change} value={email_content.message}></textarea>
            <div className="submit_container">
              <motion.button 
                whileHover={{scale: 0.8}}
                whileTap={{rotate: 25, scale: 1}}
                transition={{duration: 0.1, }}
              type="submit" className="submit_button" onClick={handle_send}> send </motion.button>
            </div>
           
            
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact