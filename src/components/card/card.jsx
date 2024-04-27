import React from "react"
import "./card.css"

function Card(props) {
  return (
    <>
      <div className="card_container">
        <img src={props.emoji}></img>
        <span className="span_heading"> {props.heading}</span>
        <span className="span_detail"> {props.detail}</span>
        <a className="learn_more"> Learn More </a>
      </div>
    </>
  )
}

export default Card
