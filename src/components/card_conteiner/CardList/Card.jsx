import React from 'react'

const Card = ({card}) => {
  const {background, titulo, texto} = card;

  return (
    <li style={{backgroundColor: background}}>
      <h2>{titulo}</h2>
      <p>{texto}</p>
    </li>
  )
}

export default Card
