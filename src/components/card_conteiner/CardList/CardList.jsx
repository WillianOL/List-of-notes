import React from 'react'
import { GlobalContext } from '../../../GlobalContext'
import Card from './Card'

const CardList = () => {
  const {cardList} = React.useContext(GlobalContext)

  return (
    <ul>
      {cardList.map(card =>  <Card key={card.titulo} card={card}/>)}
    </ul>
  )
}

export default CardList
