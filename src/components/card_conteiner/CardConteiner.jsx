import React from 'react'
import CardList from './CardList/CardList.jsx'
import "./CardConteiner.scss"

const CardConteiner = () => {
  return (
    <section className='card_conteiner' >
      <h1>Card wall</h1>
      <CardList />
    </section>
  )
}

export default CardConteiner
