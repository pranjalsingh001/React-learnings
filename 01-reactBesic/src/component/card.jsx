import React from 'react'
import './card.css'
const Card = (props) => {
  return (
    <div id='div'>
        <h3>{props.name}</h3>
        <img src={props.img} alt="pranjal" />
        <p>{props.desc}</p>
    </div>
  )
}

export default Card