import React from 'react'
import "./ButtonAdd.scss"
import { GlobalContext } from '../../../GlobalContext'

const ButtonAdd = () => {
  const {adicionarCard} = React.useContext(GlobalContext)

  return (
    <div className='button_conteiner'>
      <button className='button_add' onClick={adicionarCard}>Adicionar</button>
    </div>
  )
}

export default ButtonAdd
