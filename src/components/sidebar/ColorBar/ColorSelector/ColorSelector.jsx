import React from 'react'
import { GlobalContext } from '../../../../GlobalContext'

const ColorSelector = ({color}) => {
  const {selecionarCor} = React.useContext(GlobalContext)

  return (
    <li>
      <button style={{backgroundColor: color}} onClick={() => selecionarCor(color)}></button>
    </li>
  )
}

export default ColorSelector
