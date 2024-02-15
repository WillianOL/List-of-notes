import React from 'react'
import { GlobalContext } from '../../../../GlobalContext'

const Input = ({inputName, setEstilo, estilo}) => {
  function escreverTitulo({ target }) {
    setEstilo({ ...estilo, titulo: target.value || 'Titulo aqui' });
  }

  return (
    <div>
      <label htmlFor={inputName}>{inputName}</label>
      <input type="text" name={inputName} id={inputName} onChange={escreverTitulo} />
    </div>
  )
}

export default Input
