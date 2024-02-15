import React from 'react'
import Input from './Input/Input'
import Textarea from './Input/Textarea'
import { GlobalContext } from '../../../GlobalContext'
import './InputsContent.scss'

const InputsContent = () => {
  const {setEstilo, estilo} = React.useContext(GlobalContext)

  return (
    <div className='inputConteiner'>
      <Input inputName={"Titulo"} setEstilo={setEstilo} estilo={estilo}/>
      <Textarea inputName={"Conteúdo"} setEstilo={setEstilo} estilo={estilo}/>
    </div>
  )
}

export default InputsContent