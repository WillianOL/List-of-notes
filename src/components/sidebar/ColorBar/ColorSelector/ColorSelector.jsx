import React from 'react'
import { GlobalContext } from '../../../../GlobalContext'

const ColorSelector = ({color}) => {
  const {estilo, setEstilo} = React.useContext(GlobalContext)
  function selecionarCor(cor) {
    setEstilo({ ...estilo, background: cor });
  }
  return (
    <li>
      <button style={{backgroundColor: color}} onClick={() => selecionarCor(color)}></button>
    </li>
  )
}

export default ColorSelector
