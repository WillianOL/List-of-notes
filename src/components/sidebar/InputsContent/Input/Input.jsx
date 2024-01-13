import React from 'react'
import { GlobalContext } from '../../../../GlobalContext'

const Input = ({inputName, funcaoEscrever}) => {

  return (
    <div>
      <label htmlFor={inputName}>{inputName}</label>
      <input type="text" name={inputName} id={inputName} onChange={funcaoEscrever} />
    </div>
  )
}

export default Input
