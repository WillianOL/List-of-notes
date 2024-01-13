import React from 'react'
import './InputsContent.scss'
import Input from './Input/Input'
import { GlobalContext } from '../../../GlobalContext'

const InputsContent = () => {
  const {escreverTitulo, escreverConteudo} = React.useContext(GlobalContext)

  return (
    <div className='inputConteiner'>
      <Input inputName={"Titulo"} funcaoEscrever={escreverTitulo} />
      <Input inputName={"Conteúdo"} funcaoEscrever={escreverConteudo} />
    </div>
  )
}

export default InputsContent