import React from 'react'
import "./ButtonAdd.scss"
import { GlobalContext } from '../../../GlobalContext'

const ButtonAdd = () => {
  const {adicionarCard, cardList} = React.useContext(GlobalContext)
  // Atualiza o localStorage com os cards caso o estado da lista seja modificada
  React.useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cardList))
  }, [cardList])

  return (
    <div className='button_conteiner'>
      <button className='button_add' onClick={adicionarCard}>Adicionar</button>
    </div>
  )
}

export default ButtonAdd
