import React from "react";
import "./contact.css"
import axios from "axios"
import { useState } from "react";




let Contact = function(){

  let [email_content, set_email_content] = useState({
    username : "",
    email : "",
    message : ""
  })

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

 async function handle_submit(event){
  event.preventDefault()
  try{
    let response = await  axios.post("https://api.emailjs.com/api/v1.0/email/send", {
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
   console.log(response.data)
   
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
        <div className="left_contact">
          <span className="left_contact_note"> Get in touch </span>
          <span className="left_contact_detail"> Contact me </span>
        </div>
        <div className="right_contact">
          <form onSubmit={handle_submit}>
            <input className="form_name" placeholder="Name" name="username" onChange={handle_change} value={email_content.username}></input>
            <input className="form_email" placeholder="Email" name="email"  onChange={handle_change} value={email_content.email}></input>
            <textarea  className="form_content" placeholder="message" name="message"  onChange={handle_change} value={email_content.message}></textarea>
            <div className="submit_container">
              <button type="submit" className="submit_button"> send </button>
            </div>
            
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact