import React from 'react'
import ButtonDelete from './ButtonDelete';

const Card = ({card}) => {
  const {background, titulo, texto, id} = card;

  return (
    <li style={{backgroundColor: background}} data-id={id}>
      <ButtonDelete />
      <h2>{titulo}</h2>
      <p>{texto}</p>
    </li>
  )
}

export default Card
