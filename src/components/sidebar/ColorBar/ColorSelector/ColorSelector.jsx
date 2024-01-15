import React from 'react'
import { GlobalContext } from '../../../../GlobalContext'

const ColorSelector = ({color}) => {
  const {selecionarCor} = React.useContext(GlobalContext)

  function selecionarBotao() {
    selecionarCor(color)
  }

  return (
    <li>
      <button style={{backgroundColor: color}} onClick={selecionarBotao}></button>
    </li>
  )
}

export default ColorSelector
